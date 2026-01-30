-- Create function to call the edge function on new order
CREATE OR REPLACE FUNCTION public.notify_new_order()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  payload jsonb;
  request_id bigint;
BEGIN
  -- Build the payload
  payload := jsonb_build_object(
    'type', 'INSERT',
    'table', 'shipping_requests',
    'schema', 'public',
    'record', row_to_json(NEW)
  );
  
  -- Call the edge function using net.http_post
  SELECT net.http_post(
    url := current_setting('app.settings.supabase_url', true) || '/functions/v1/notify-new-order',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
    ),
    body := payload
  ) INTO request_id;
  
  RETURN NEW;
END;
$$;

-- Create trigger to fire on new shipping request
DROP TRIGGER IF EXISTS trigger_notify_new_order ON public.shipping_requests;
CREATE TRIGGER trigger_notify_new_order
  AFTER INSERT ON public.shipping_requests
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_new_order();