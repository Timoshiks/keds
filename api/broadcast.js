export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      bot_token, 
      title, 
      message, 
      image_url, 
      button_text, 
      button_url, 
      target_telegram_ids = [] 
    } = req.body || {};

    const botToken = bot_token || process.env.TELEGRAM_BOT_TOKEN;

    if (!botToken) {
      return res.status(400).json({ 
        error: 'TELEGRAM_BOT_TOKEN is missing. Please set TELEGRAM_BOT_TOKEN environment variable or pass bot_token.' 
      });
    }

    if (!target_telegram_ids || target_telegram_ids.length === 0) {
      return res.status(400).json({ error: 'No target Telegram IDs provided for broadcast.' });
    }

    const formattedMessage = `<b>${escapeHtml(title || 'TREAD Sneaker Shop')}</b>\n\n${escapeHtml(message || '')}`;
    
    // Construct inline keyboard button if specified
    let reply_markup = undefined;
    if (button_text && button_url && button_url.startsWith('http')) {
      reply_markup = {
        inline_keyboard: [
          [{ text: button_text, url: button_url }]
        ]
      };
    }

    let successCount = 0;
    let failedCount = 0;
    const errors = [];

    // Send broadcast to all target Telegram IDs with automatic photo-to-text fallback
    for (const chatId of target_telegram_ids) {
      try {
        let sentSuccessfully = false;

        // 1. Try sending as Photo if image_url is provided
        if (image_url && image_url.trim().startsWith('http')) {
          const photoPayload = {
            chat_id: chatId,
            photo: image_url.trim(),
            caption: formattedMessage,
            parse_mode: 'HTML'
          };
          if (reply_markup) photoPayload.reply_markup = reply_markup;

          const photoRes = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(photoPayload)
          });
          const photoData = await photoRes.json();
          if (photoData.ok) {
            successCount++;
            sentSuccessfully = true;
          } else {
            console.warn('[Broadcast Warning] sendPhoto failed, falling back to text:', photoData.description);
          }
        }

        // 2. Fallback to standard text sendMessage if photo was not sent or failed
        if (!sentSuccessfully) {
          const textPayload = {
            chat_id: chatId,
            text: formattedMessage,
            parse_mode: 'HTML'
          };
          if (reply_markup) textPayload.reply_markup = reply_markup;

          const textRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(textPayload)
          });
          const textData = await textRes.json();

          if (textData.ok) {
            successCount++;
          } else {
            failedCount++;
            errors.push({ chat_id: chatId, error: textData.description || 'Telegram send error' });
          }
        }
      } catch (err) {
        failedCount++;
        errors.push({ chat_id: chatId, error: err.message });
      }
    }

    return res.status(200).json({
      success: successCount > 0,
      total_targeted: target_telegram_ids.length,
      delivered_count: successCount,
      failed_count: failedCount,
      errors
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Broadcast internal error' });
  }
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
