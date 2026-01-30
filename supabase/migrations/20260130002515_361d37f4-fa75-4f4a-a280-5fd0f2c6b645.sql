-- Remove the broken trigger that uses pg_net (not available)
DROP TRIGGER IF EXISTS trigger_notify_new_order ON public.shipping_requests;

-- We'll call the edge function from the application code instead