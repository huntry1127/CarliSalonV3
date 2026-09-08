-- Carli Special v0.9 production RLS
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  active boolean not null default true,
  created_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.admin_users
    where user_id = auth.uid() and active = true
  );
$$;
revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to anon, authenticated;

alter table public.customers enable row level security;
alter table public.appointments enable row level security;
alter table public.appointment_services enable row level security;
alter table public.services enable row level security;
alter table public.staff enable row level security;
alter table public.staff_services enable row level security;
alter table public.staff_schedules enable row level security;
alter table public.staff_time_off enable row level security;
alter table public.payments enable row level security;
alter table public.customer_notes enable row level security;

-- Remove prototype policies that expose private CRM data.
drop policy if exists "public can read customers" on public.customers;
drop policy if exists "public can read appointments" on public.appointments;
drop policy if exists "public can read appointment services" on public.appointment_services;

-- Public booking catalog.
drop policy if exists "public read active services" on public.services;
create policy "public read active services" on public.services
for select to anon, authenticated using (is_active = true);

drop policy if exists "public read active staff" on public.staff;
create policy "public read active staff" on public.staff
for select to anon, authenticated using (is_active = true);

drop policy if exists "public read staff services" on public.staff_services;
create policy "public read staff services" on public.staff_services
for select to anon, authenticated using (true);

drop policy if exists "public read staff schedules" on public.staff_schedules;
create policy "public read staff schedules" on public.staff_schedules
for select to anon, authenticated using (true);

drop policy if exists "public read staff time off" on public.staff_time_off;
create policy "public read staff time off" on public.staff_time_off
for select to anon, authenticated using (end_date >= current_date);

-- Public booking writes.
drop policy if exists "public create customers" on public.customers;
create policy "public create customers" on public.customers
for insert to anon, authenticated with check (true);

drop policy if exists "public create appointments" on public.appointments;
create policy "public create appointments" on public.appointments
for insert to anon, authenticated with check (true);

drop policy if exists "public create appointment services" on public.appointment_services;
create policy "public create appointment services" on public.appointment_services
for insert to anon, authenticated with check (true);

-- Owner-only private CRM access.
drop policy if exists "admins read customers" on public.customers;
create policy "admins read customers" on public.customers
for select to authenticated using (public.is_admin());

drop policy if exists "admins update customers" on public.customers;
create policy "admins update customers" on public.customers
for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admins read appointments" on public.appointments;
create policy "admins read appointments" on public.appointments
for select to authenticated using (public.is_admin());

drop policy if exists "admins update appointments" on public.appointments;
create policy "admins update appointments" on public.appointments
for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admins delete appointments" on public.appointments;
create policy "admins delete appointments" on public.appointments
for delete to authenticated using (public.is_admin());

drop policy if exists "admins read appointment services" on public.appointment_services;
create policy "admins read appointment services" on public.appointment_services
for select to authenticated using (public.is_admin());

drop policy if exists "admins read payments" on public.payments;
create policy "admins read payments" on public.payments
for select to authenticated using (public.is_admin());

drop policy if exists "admins read customer notes" on public.customer_notes;
create policy "admins read customer notes" on public.customer_notes
for select to authenticated using (public.is_admin());

drop policy if exists "admins write customer notes" on public.customer_notes;
create policy "admins write customer notes" on public.customer_notes
for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admins manage services" on public.services;
create policy "admins manage services" on public.services
for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admins manage staff" on public.staff;
create policy "admins manage staff" on public.staff
for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admins manage schedules" on public.staff_schedules;
create policy "admins manage schedules" on public.staff_schedules
for all to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admins manage time off" on public.staff_time_off;
create policy "admins manage time off" on public.staff_time_off
for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- After creating Carli's Auth user, run:
-- insert into public.admin_users(user_id)
-- values ('YOUR_AUTH_USER_UUID')
-- on conflict (user_id) do update set active = true;
