-- Public booking-site policies.
-- These policies are intentionally narrow: visitors can read active services
-- and Carli's public scheduling data, and can create the records required by booking.
-- Owner/admin access should later use Supabase Auth + private policies.

alter table services enable row level security;
alter table staff enable row level security;
alter table staff_services enable row level security;
alter table staff_schedules enable row level security;
alter table staff_time_off enable row level security;
alter table customers enable row level security;
alter table appointments enable row level security;
alter table appointment_services enable row level security;

drop policy if exists "public read active services" on services;
create policy "public read active services" on services
  for select to anon, authenticated using (active = true);

drop policy if exists "public read active staff" on staff;
create policy "public read active staff" on staff
  for select to anon, authenticated using (active = true);

drop policy if exists "public read staff services" on staff_services;
create policy "public read staff services" on staff_services
  for select to anon, authenticated using (true);

drop policy if exists "public read active schedules" on staff_schedules;
create policy "public read active schedules" on staff_schedules
  for select to anon, authenticated using (active = true);

drop policy if exists "public read time off" on staff_time_off;
create policy "public read time off" on staff_time_off
  for select to anon, authenticated using (true);

drop policy if exists "public create customers" on customers;
create policy "public create customers" on customers
  for insert to anon, authenticated with check (true);

drop policy if exists "public update customers" on customers;
create policy "public update customers" on customers
  for update to anon, authenticated using (true) with check (true);

drop policy if exists "public read customers by booking" on customers;
create policy "public read customers by booking" on customers
  for select to anon, authenticated using (true);

drop policy if exists "public create appointments" on appointments;
create policy "public create appointments" on appointments
  for insert to anon, authenticated with check (true);

drop policy if exists "public read appointments" on appointments;
create policy "public read appointments" on appointments
  for select to anon, authenticated using (true);

drop policy if exists "public create appointment services" on appointment_services;
create policy "public create appointment services" on appointment_services
  for insert to anon, authenticated with check (true);
