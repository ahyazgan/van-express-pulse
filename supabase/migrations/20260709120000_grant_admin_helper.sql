-- Admin bootstrap helper.
--
-- The app protects /admin-yazgan with a real Supabase session + the 'admin' role
-- (public.user_roles). Because the user_roles table is only writable by an existing
-- admin, the very first admin must be granted here.
--
-- USAGE (after the target user has signed up in the app):
--   select public.grant_admin('you@example.com');
--
-- Run it once from the Supabase SQL editor. It is idempotent.

create or replace function public.grant_admin(_email text)
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  _uid uuid;
begin
  select id into _uid from auth.users where email = _email;

  if _uid is null then
    raise exception 'No auth user found with email %', _email;
  end if;

  insert into public.user_roles (user_id, role)
  values (_uid, 'admin')
  on conflict (user_id, role) do nothing;
end;
$$;

-- Only allow privileged roles to call this (never anon/authenticated from the client).
revoke all on function public.grant_admin(text) from public;
revoke all on function public.grant_admin(text) from anon, authenticated;
