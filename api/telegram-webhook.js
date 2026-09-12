export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method !== 'POST') {
    return res.status(200).send('Telegram Webhook Handler Active');
  }

  try {
    const update = req.body || {};
    const botToken = process.env.TELEGRAM_BOT_TOKEN;

    // Automatically register/update user in Supabase customers table
    const fromUser = update.message?.from || update.pre_checkout_query?.from || update.callback_query?.from;
    if (fromUser) {
      await saveCustomerToSupabase(fromUser);
    }

    // 1. Answer pre_checkout_query (REQUIRED by Telegram Payments for Smart Glocal / Yookassa / Stripe)
    if (update.pre_checkout_query) {
      const preCheckoutId = update.pre_checkout_query.id;
      console.log('[Telegram Webhook] Received pre_checkout_query:', preCheckoutId);

      if (botToken) {
        await fetch(`https://api.telegram.org/bot${botToken}/answerPreCheckoutQuery`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            pre_checkout_query_id: preCheckoutId,
            ok: true
          })
        });
      }
      return res.status(200).json({ ok: true });
    }

    // 2. Handle successful_payment notification
    if (update.message?.successful_payment) {
      const paymentInfo = update.message.successful_payment;
      console.log('[Telegram Webhook] Payment Successful! Details:', paymentInfo);
      return res.status(200).json({ ok: true });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('[Telegram Webhook Error]:', error);
    return res.status(200).json({ ok: true }); // Always return 200 OK to Telegram
  }
}

async function saveCustomerToSupabase(fromUser) {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey || !fromUser || !fromUser.id) return;

  try {
    const payload = {
      telegram_id: fromUser.id,
      username: fromUser.username || null,
      first_name: fromUser.first_name || null,
      last_name: fromUser.last_name || null,
      customer_name: `${fromUser.first_name || ''} ${fromUser.last_name || ''}`.trim() || fromUser.username || 'Покупатель Telegram',
      last_active_at: new Date().toISOString()
    };

    await fetch(`${supabaseUrl}/rest/v1/customers`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates,return=minimal'
      },
      body: JSON.stringify(payload)
    });
  } catch (e) {
    console.warn('[Webhook] Customer save warning:', e);
  }
}
