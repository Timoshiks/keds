// Supabase Database Integration Helper for TREAD Sneaker Shop & CRM

const SUPABASE_URL = import.meta.env?.VITE_SUPABASE_URL || window?.TREAD_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY || window?.TREAD_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = () => {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
};

// Generic Supabase REST Fetcher
async function supabaseFetch(table, options = {}) {
  if (!isSupabaseConfigured()) return null;

  const url = `${SUPABASE_URL.replace(/\/$/, '')}/rest/v1/${table}${options.query ? '?' + options.query : ''}`;
  const headers = {
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': options.prefer || 'return=representation',
    ...(options.headers || {})
  };

  try {
    const res = await fetch(url, {
      method: options.method || 'GET',
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined
    });

    if (!res.ok) {
      const errText = await res.text();
      console.warn(`[Supabase Error on ${table}]:`, errText);
      return null;
    }

    return await res.json();
  } catch (err) {
    console.warn(`[Supabase Fetch Exception on ${table}]:`, err);
    return null;
  }
}

// ---------------- PRODUCTS API ----------------
export async function dbFetchProducts(fallbackProducts = []) {
  if (!isSupabaseConfigured()) return fallbackProducts;
  const data = await supabaseFetch('products', { query: 'select=*&order=created_at.desc' });
  return (data && data.length > 0) ? data : fallbackProducts;
}

export async function dbUpsertProduct(product) {
  if (!isSupabaseConfigured()) return product;
  const res = await supabaseFetch('products', {
    method: 'POST',
    prefer: 'resolution=merge-duplicates,return=representation',
    body: product
  });
  return res ? res[0] : product;
}

export async function dbDeleteProduct(productId) {
  if (!isSupabaseConfigured() || !productId) return false;
  await supabaseFetch(`products?id=eq.${productId}`, {
    method: 'DELETE'
  });
  return true;
}

// ---------------- ORDERS API ----------------
export async function dbFetchOrders() {
  if (!isSupabaseConfigured()) return [];
  const data = await supabaseFetch('orders', { query: 'select=*&order=created_at.desc' });
  return data || [];
}

export async function dbSaveOrder(order) {
  if (!isSupabaseConfigured()) return order;
  const payload = {
    id: order.id,
    telegram_id: order.telegramUser?.id || null,
    customer_name: order.customerName,
    customer_phone: order.customerPhone,
    items: order.cartItems,
    total_amount: order.totalPrice,
    total_amount_formatted: order.totalPriceFormatted,
    delivery_type: order.deliveryType,
    payment_method: order.paymentMethod,
    status: 'new'
  };

  const res = await supabaseFetch('orders', {
    method: 'POST',
    prefer: 'resolution=merge-duplicates,return=representation',
    body: payload
  });
  return res ? res[0] : order;
}

export async function dbUpdateOrderStatus(orderId, newStatus) {
  if (!isSupabaseConfigured()) return true;
  const res = await supabaseFetch('orders', {
    method: 'PATCH',
    query: `id=eq.${orderId}`,
    body: { status: newStatus, updated_at: new Date().toISOString() }
  });
  return Boolean(res);
}

// ---------------- CUSTOMERS & ABANDONED CARTS API ----------------
export async function dbFetchCustomers() {
  if (!isSupabaseConfigured()) return [];
  const data = await supabaseFetch('customers', { query: 'select=*&order=last_active_at.desc' });
  return data || [];
}

export async function dbSaveCustomerSession(user, cartItems = [], customerName = '', customerPhone = '') {
  if (!user || !user.id || !isSupabaseConfigured()) return null;

  const payload = {
    telegram_id: user.id,
    username: user.username || null,
    first_name: user.first_name || null,
    last_name: user.last_name || null,
    customer_name: customerName || `${user.first_name || ''} ${user.last_name || ''}`.trim(),
    phone: customerPhone || user.phone_number || null,
    cart_items: cartItems,
    has_abandoned_cart: cartItems.length > 0,
    last_active_at: new Date().toISOString()
  };

  const res = await supabaseFetch('customers', {
    method: 'POST',
    prefer: 'resolution=merge-duplicates,return=representation',
    body: payload
  });
  return res ? res[0] : null;
}

// ---------------- BROADCASTS API ----------------
export async function dbFetchBroadcasts() {
  if (!isSupabaseConfigured()) return [];
  const data = await supabaseFetch('broadcasts', { query: 'select=*&order=created_at.desc' });
  return data || [];
}

export async function dbSaveBroadcast(campaign) {
  if (!isSupabaseConfigured()) return campaign;
  const res = await supabaseFetch('broadcasts', {
    method: 'POST',
    prefer: 'return=representation',
    body: campaign
  });
  return res ? res[0] : campaign;
}
