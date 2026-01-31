-- Fix storage bucket security: Make private and add proper RLS policies

-- 1. Make the bucket private (no public access)
UPDATE storage.buckets 
SET public = false 
WHERE id = 'shipment-files';

-- 2. Drop existing permissive policies
DROP POLICY IF EXISTS "Public can view shipment files" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload shipment files" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can delete shipment files" ON storage.objects;
DROP POLICY IF EXISTS "Public Access" ON storage.objects;
DROP POLICY IF EXISTS "Individual User Access" ON storage.objects;
DROP POLICY IF EXISTS "Admin Full Access" ON storage.objects;

-- 3. Allow anyone to upload to shipment-files bucket (needed for guest order form)
-- Files are stored with unique IDs so enumeration is difficult
CREATE POLICY "Allow uploads to shipment-files"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'shipment-files');

-- 4. Only admins can view files (using existing has_role function)
CREATE POLICY "Admins can view all shipment files"
ON storage.objects
FOR SELECT
USING (
  bucket_id = 'shipment-files' AND 
  public.has_role(auth.uid(), 'admin'::public.app_role)
);

-- 5. Only admins can update files
CREATE POLICY "Admins can update shipment files"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'shipment-files' AND 
  public.has_role(auth.uid(), 'admin'::public.app_role)
);

-- 6. Only admins can delete files
CREATE POLICY "Admins can delete shipment files"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'shipment-files' AND 
  public.has_role(auth.uid(), 'admin'::public.app_role)
);