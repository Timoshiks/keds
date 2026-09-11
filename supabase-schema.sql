-- ========================================================
-- TREAD SNEAKER SHOP & CRM — SUPABASE DATABASE SCHEMA
-- Execute this script in Supabase SQL Editor (https://app.supabase.com)
-- ========================================================

-- 1. PRODUCTS TABLE
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  sku TEXT,
  release_year TEXT,
  size TEXT,
  condition TEXT DEFAULT 'New',
  date_category TEXT,
  price NUMERIC NOT NULL,
  price_formatted TEXT,
  image TEXT NOT NULL,
  images JSONB DEFAULT '[]'::jsonb,
  category TEXT DEFAULT 'Jordan',
  specs JSONB DEFAULT '{}'::jsonb,
  sizes JSONB DEFAULT '[]'::jsonb,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. ORDERS TABLE
CREATE TABLE IF NOT EXISTS public.orders (
  id TEXT PRIMARY KEY,
  telegram_id BIGINT,
  customer_name TEXT,
  customer_phone TEXT,
  items JSONB DEFAULT '[]'::jsonb,
  total_amount NUMERIC NOT NULL,
  total_amount_formatted TEXT,
  delivery_type TEXT DEFAULT 'post',
  delivery_details JSONB DEFAULT '{}'::jsonb,
  payment_method TEXT DEFAULT 'tg_pay',
  status TEXT DEFAULT 'new', -- 'new', 'paid', 'shipped', 'delivered', 'cancelled'
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. CUSTOMERS TABLE (TELEGRAM USERS & ABANDONED CARTS)
CREATE TABLE IF NOT EXISTS public.customers (
  telegram_id BIGINT PRIMARY KEY,
  username TEXT,
  first_name TEXT,
  last_name TEXT,
  customer_name TEXT,
  phone TEXT,
  cart_items JSONB DEFAULT '[]'::jsonb,
  has_abandoned_cart BOOLEAN DEFAULT false,
  total_orders INTEGER DEFAULT 0,
  total_spent NUMERIC DEFAULT 0,
  last_active_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. BROADCASTS TABLE (CAMPAIGN HISTORY & QUEUE)
CREATE TABLE IF NOT EXISTS public.broadcasts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_name TEXT NOT NULL,
  title TEXT,
  message TEXT NOT NULL,
  image_url TEXT,
  button_text TEXT,
  button_url TEXT,
  target_segment TEXT DEFAULT 'all', -- 'all', 'abandoned_cart', 'buyers'
  status TEXT DEFAULT 'sent', -- 'draft', 'sending', 'sent', 'failed'
  sent_count INTEGER DEFAULT 0,
  delivered_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ENABLE ROW LEVEL SECURITY (RLS) & ALLOW PUBLIC ACCESS FOR DEMO/MINI APP
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.broadcasts ENABLE ROW LEVEL SECURITY;

-- CREATE PUBLIC READ/WRITE POLICIES
CREATE POLICY "Public read products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Public write products" ON public.products FOR ALL USING (true);

CREATE POLICY "Public read orders" ON public.orders FOR SELECT USING (true);
CREATE POLICY "Public write orders" ON public.orders FOR ALL USING (true);

CREATE POLICY "Public read customers" ON public.customers FOR SELECT USING (true);
CREATE POLICY "Public write customers" ON public.customers FOR ALL USING (true);

CREATE POLICY "Public read broadcasts" ON public.broadcasts FOR SELECT USING (true);
CREATE POLICY "Public write broadcasts" ON public.broadcasts FOR ALL USING (true);

-- INDEXES FOR FAST PERFORMANCE
CREATE INDEX IF NOT EXISTS idx_orders_status ON public.orders(status);
CREATE INDEX IF NOT EXISTS idx_customers_abandoned ON public.customers(has_abandoned_cart);
CREATE INDEX IF NOT EXISTS idx_products_brand ON public.products(brand);
