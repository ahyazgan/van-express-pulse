-- Distinguish domestic (Türkiye içi) orders from Europe orders.
-- Default 'europe' keeps existing rows and the Europe flow (which does not send
-- this column) working; the app sends 'domestic' only for domestic orders.
alter table public.shipping_requests
  add column if not exists shipping_type text not null default 'europe';
