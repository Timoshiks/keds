export default async function handler(req, res) {
  // CORS Headers for Telegram WebApp
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
    const { amount, title, description, payload, bot_token } = req.body || {};
    
    // Telegram Payment Provider Test Token supplied by user
    const providerToken = process.env.PAYMENT_PROVIDER_TOKEN || '1877036958:TEST:0d03bb0ad056c6462b6ce2e054f77f669adf1392';
    const botToken = bot_token || process.env.TELEGRAM_BOT_TOKEN;

    if (!botToken) {
      return res.status(400).json({ 
        error: 'TELEGRAM_BOT_TOKEN is missing. Please provide bot_token or set TELEGRAM_BOT_TOKEN environment variable.' 
      });
    }

    const orderAmount = Math.round((amount || 1000) * 100); // Amount in kopecks (cents)

    const response = await fetch(`https://api.telegram.org/bot${botToken}/createInvoiceLink`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title || 'Заказ в TREAD Sneaker Shop',
        description: description || 'Оплата заказа кроссовок TREAD',
        payload: payload || `order_${Date.now()}`,
        provider_token: providerToken,
        currency: 'RUB',
        prices: [
          { label: 'Кроссовки TREAD', amount: orderAmount }
        ]
      })
    });

    const data = await response.json();
    if (!data.ok) {
      return res.status(400).json({ error: data.description || 'Failed to generate Telegram Invoice link' });
    }

    return res.status(200).json({ invoice_url: data.result });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
