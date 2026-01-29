-- Create storage bucket for shipment files
INSERT INTO storage.buckets (id, name, public)
VALUES ('shipment-files', 'shipment-files', true);

-- Create policy for public read access
CREATE POLICY "Public can view shipment files"
ON storage.objects
FOR SELECT
USING (bucket_id = 'shipment-files');

-- Create policy for anyone to upload files (since we don't have auth)
CREATE POLICY "Anyone can upload shipment files"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'shipment-files');

-- Create policy for anyone to delete their uploaded files
CREATE POLICY "Anyone can delete shipment files"
ON storage.objects
FOR DELETE
USING (bucket_id = 'shipment-files');

-- Add columns to shipping_requests for file URLs
ALTER TABLE public.shipping_requests
ADD COLUMN customer_photos TEXT[] DEFAULT '{}',
ADD COLUMN admin_documents TEXT[] DEFAULT '{}';