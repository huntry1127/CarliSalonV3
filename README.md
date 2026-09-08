# Carli Special v0.7 — Polished

Visual redesign based on the provided Carli Special reference:
- warm cream / beige palette
- copper accents
- editorial serif wordmark
- responsive header
- large split hero
- service cards
- booking CTA
- services page
- booking availability shell connected to the existing Supabase API

## Run locally

1. Create `.env.local` from `.env.local.example`.
2. Put your Supabase publishable/anon key in `.env.local`.
3. `npm install`
4. `npm run dev`
5. Open http://localhost:3000

The hero hair image is a temporary crop from the supplied design reference and should be replaced with licensed salon photography before launch.

## Responsive build

The header uses an accessible mobile drawer with backdrop, animated menu button, responsive hero, cards, booking banner, pages and footer.

## v0.7 polish

Refined navigation spacing, clean hero photography, copper SVG service icons, hover states, typography, spacing, CTA treatment, responsive breakpoints, and accessibility focus states.

## v0.8 booking flow

The booking experience is now a real three-step flow:
1. Select Cut or Color.
2. Select a date and live availability for Carli.
3. Enter customer details and confirm the appointment.

Confirmed bookings are saved to `customers`, `appointments`, and `appointment_services` in Supabase. Availability also respects Carli's weekly schedule, existing appointments, and time-off records.

### Supabase setup
Run `database/schema.sql` once, then `database/seed.sql` to create the Hair category, Cut and Color services, Carli, and a Monday-Friday 9am-5pm schedule. Keep your local `.env.local` with the Supabase URL and publishable key.

## v0.8.1 booking connection fix

If the booking page says it cannot load services, check `.env.local` and make sure the key is named `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`. The app also accepts the older `NEXT_PUBLIC_SUPABASE_ANON_KEY` name. Restart `npm run dev` after changing environment variables.

If Row Level Security is enabled in Supabase, run `database/rls.sql` after `schema.sql` and `seed.sql`.
