-- Fix: Remove public access to guest shipping requests to protect customer PII
-- The current policy allows anyone to see guest requests (user_id IS NULL), exposing emails and phone numbers

-- Drop the existing permissive SELECT policy
DROP POLICY IF EXISTS "Users view own requests, admins view all" ON public.shipping_requests;

-- Create a secure SELECT policy:
-- 1. Authenticated users can see their own requests (user_id matches)
-- 2. Admins can see all requests (including guest requests)
-- 3. Guest requests (user_id IS NULL) are NOT publicly visible anymore
CREATE POLICY "Users view own requests, admins view all"
ON public.shipping_requests
FOR SELECT
USING (
  (auth.uid() = user_id) OR 
  has_role(auth.uid(), 'admin'::app_role)
);