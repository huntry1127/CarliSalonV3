create extension if not exists "uuid-ossp";

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  first_name text not null,
  last_name text not null,
  phone text,
  role text not null check (role in ('owner','manager','stylist','customer')),
  created_at timestamptz not null default now()
);

create table if not exists service_categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  description text,
  sort_order int not null default 0,
  active boolean not null default true
);

create table if not exists services (
  id uuid primary key default uuid_generate_v4(),
  category_id uuid references service_categories(id) on delete set null,
  name text not null,
  description text,
  duration_minutes int not null check (duration_minutes > 0),
  price numeric(10,2) not null check (price >= 0),
  deposit_amount numeric(10,2) not null default 0 check (deposit_amount >= 0),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists customers (
  id uuid primary key default uuid_generate_v4(),
  profile_id uuid unique references profiles(id) on delete set null,
  first_name text not null,
  last_name text not null,
  email text,
  phone text not null,
  birthday date,
  marketing_consent boolean not null default false,
  sms_consent boolean not null default true,
  preferred_stylist_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists staff (
  id uuid primary key default uuid_generate_v4(),
  profile_id uuid unique references profiles(id) on delete set null,
  display_name text not null,
  title text,
  bio text,
  photo_url text,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

alter table customers
  add constraint customers_preferred_stylist_fk
  foreign key (preferred_stylist_id) references staff(id) on delete set null;

create table if not exists staff_services (
  staff_id uuid not null references staff(id) on delete cascade,
  service_id uuid not null references services(id) on delete cascade,
  primary key (staff_id, service_id)
);

create table if not exists staff_schedules (
  id uuid primary key default uuid_generate_v4(),
  staff_id uuid not null references staff(id) on delete cascade,
  day_of_week int not null check (day_of_week between 0 and 6),
  start_time time not null,
  end_time time not null,
  active boolean not null default true,
  check (end_time > start_time),
  unique (staff_id, day_of_week)
);

create table if not exists staff_time_off (
  id uuid primary key default uuid_generate_v4(),
  staff_id uuid not null references staff(id) on delete cascade,
  start_datetime timestamptz not null,
  end_datetime timestamptz not null,
  reason text,
  check (end_datetime > start_datetime)
);

create table if not exists appointments (
  id uuid primary key default uuid_generate_v4(),
  confirmation_code text not null unique,
  customer_id uuid not null references customers(id) on delete restrict,
  staff_id uuid not null references staff(id) on delete restrict,
  start_datetime timestamptz not null,
  end_datetime timestamptz not null,
  status text not null default 'confirmed'
    check (status in ('pending','confirmed','checked_in','in_progress','completed','cancelled','no_show')),
  subtotal numeric(10,2) not null default 0,
  discount numeric(10,2) not null default 0,
  tax numeric(10,2) not null default 0,
  total numeric(10,2) not null default 0,
  deposit_amount numeric(10,2) not null default 0,
  deposit_paid boolean not null default false,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (end_datetime > start_datetime)
);

create table if not exists appointment_services (
  id uuid primary key default uuid_generate_v4(),
  appointment_id uuid not null references appointments(id) on delete cascade,
  service_id uuid not null references services(id) on delete restrict,
  price numeric(10,2) not null,
  duration_minutes int not null,
  unique (appointment_id, service_id)
);

create table if not exists payments (
  id uuid primary key default uuid_generate_v4(),
  appointment_id uuid not null references appointments(id) on delete restrict,
  customer_id uuid not null references customers(id) on delete restrict,
  amount numeric(10,2) not null check (amount >= 0),
  payment_method text not null check (payment_method in ('cash','card','stripe','other')),
  payment_type text not null check (payment_type in ('deposit','appointment','tip','refund')),
  status text not null default 'completed'
    check (status in ('pending','completed','failed','refunded')),
  stripe_payment_id text,
  created_at timestamptz not null default now()
);

create table if not exists customer_notes (
  id uuid primary key default uuid_generate_v4(),
  customer_id uuid not null references customers(id) on delete cascade,
  staff_id uuid references staff(id) on delete set null,
  note text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_appointments_start on appointments(start_datetime);
create index if not exists idx_appointments_staff_start on appointments(staff_id, start_datetime);
create index if not exists idx_appointments_customer on appointments(customer_id);
create index if not exists idx_customers_phone on customers(phone);
create index if not exists idx_customers_email on customers(email);
