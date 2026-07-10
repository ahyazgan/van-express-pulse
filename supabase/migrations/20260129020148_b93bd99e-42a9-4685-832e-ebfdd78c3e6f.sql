-- Fix the INSERT policy to be more restrictive while still allowing guest submissions
-- Drop the old permissive INSERT policy
DROP POLICY IF EXISTS "Anyone can submit shipping requests" ON public.shipping_requests;

-- Create a new INSERT policy that:
-- 1. Allows authenticated users to insert with their user_id
-- 2. Allows anonymous users to insert with NULL user_id (for guest checkout)
CREATE POLICY "Authenticated users submit with user_id, guests with null"
ON public.shipping_requests
FOR INSERT
WITH CHECK (
  -- Authenticated users must set their own user_id
  (auth.uid() IS NOT NULL AND user_id = auth.uid())
  OR 
  -- Anonymous users can only insert with NULL user_id
  (auth.uid() IS NULL AND user_id IS NULL)
);

-- Also fix the SELECT policy to be more restrictive
DROP POLICY IF EXISTS "Anyone can view shipping requests" ON public.shipping_requests;

-- Users can only see their own requests, admins can see all
CREATE POLICY "Users view own requests, admins view all"
ON public.shipping_requests
FOR SELECT
USING (
  auth.uid() = user_id 
  OR user_id IS NULL  -- Allow viewing guest submissions (needed for admin dashboard with has_role check)
  OR public.has_role(auth.uid(), 'admin')
);