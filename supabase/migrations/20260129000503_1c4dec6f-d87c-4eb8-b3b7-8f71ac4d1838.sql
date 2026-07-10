-- Create enum for order status
CREATE TYPE public.order_status AS ENUM ('new', 'negotiating', 'in_transit', 'delivered');

-- Create shipping_requests table
CREATE TABLE public.shipping_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Destination
  destination TEXT NOT NULL,
  
  -- Product info
  product_category TEXT NOT NULL,
  packaging_type TEXT NOT NULL,
  quantity INTEGER NOT NULL,
  total_weight NUMERIC NOT NULL,
  total_volume NUMERIC NOT NULL,
  is_stackable BOOLEAN NOT NULL DEFAULT false,
  
  -- Contact info
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  
  -- Pricing
  estimated_min_price NUMERIC NOT NULL,
  estimated_max_price NUMERIC NOT NULL,
  
  -- Status tracking
  status order_status NOT NULL DEFAULT 'new',
  notes TEXT
);

-- Enable RLS (but allow public inserts for lead capture)
ALTER TABLE public.shipping_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (lead capture from public form)
CREATE POLICY "Anyone can submit shipping requests"
ON public.shipping_requests
FOR INSERT
WITH CHECK (true);

-- Policy: Anyone can read (for admin dashboard - no auth system)
CREATE POLICY "Anyone can view shipping requests"
ON public.shipping_requests
FOR SELECT
USING (true);

-- Policy: Anyone can update (for status changes - no auth system)
CREATE POLICY "Anyone can update shipping requests"
ON public.shipping_requests
FOR UPDATE
USING (true);