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
    if (button_text && button_url) {
      reply_markup = JSON.stringify({
        inline_keyboard: [
          [{ text: button_text, url: button_url }]
        ]
      });
    }

    let successCount = 0;
    let failedCount = 0;
    const errors = [];

    // Send broadcast to all target Telegram IDs
    for (const chatId of target_telegram_ids) {
      try {
        let apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
        let payload = {
          chat_id: chatId,
          text: formattedMessage,
          parse_mode: 'HTML',
          reply_markup
        };

        if (image_url && image_url.startsWith('http')) {
          apiUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;
          payload = {
            chat_id: chatId,
            photo: image_url,
            caption: formattedMessage,
            parse_mode: 'HTML',
            reply_markup
          };
        }

        const telegramRes = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const data = await telegramRes.json();
        if (data.ok) {
          successCount++;
        } else {
          failedCount++;
          errors.push({ chat_id: chatId, error: data.description });
        }
      } catch (err) {
        failedCount++;
        errors.push({ chat_id: chatId, error: err.message });
      }
    }

    return res.status(200).json({
      success: true,
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
