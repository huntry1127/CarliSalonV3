insert into service_categories (name, description, sort_order)
values ('Hair', 'Core salon services', 1)
on conflict (name) do nothing;

insert into services (category_id, name, description, duration_minutes, price, deposit_amount)
select id, 'Cut', 'Professional haircut and finish.', 60, 65.00, 0
from service_categories where name = 'Hair'
and not exists (select 1 from services where name = 'Cut');

insert into services (category_id, name, description, duration_minutes, price, deposit_amount)
select id, 'Color', 'Professional color service.', 120, 120.00, 25.00
from service_categories where name = 'Hair'
and not exists (select 1 from services where name = 'Color');

insert into staff (display_name, title, bio)
select 'Carli', 'Stylist', 'Owner and stylist at Carli Special.'
where not exists (select 1 from staff where display_name = 'Carli');

insert into staff_schedules (staff_id, day_of_week, start_time, end_time)
select id, d.day_of_week, '09:00', '17:00'
from staff
cross join (values (1),(2),(3),(4),(5)) as d(day_of_week)
where display_name = 'Carli'
and not exists (
  select 1 from staff_schedules ss
  where ss.staff_id = staff.id and ss.day_of_week = d.day_of_week
);

insert into staff_services (staff_id, service_id)
select s.id, sv.id
from staff s cross join services sv
where s.display_name = 'Carli'
and not exists (
  select 1 from staff_services x
  where x.staff_id=s.id and x.service_id=sv.id
);
