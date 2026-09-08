import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { BOOKING_URL } from "@/lib/site";

function AdminLoginCard() {
  return (
    <main className="admin-shell">
      <section className="admin-auth__card">
        <p className="admin-kicker">CARLISPECIAL</p>
        <h1>Owner Dashboard</h1>
        <p>Please sign in to access your salon dashboard.</p>
        <Link className="admin-button" href="/admin/login">
          Owner Login
        </Link>
      </section>
    </main>
  );
}

export default async function AdminPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return <AdminLoginCard />;

  const { data: owner, error: ownerError } = await supabase.rpc("is_admin");

  if (ownerError || !owner) {
    return (
      <main className="admin-shell">
        <section className="admin-auth__card">
          <p className="admin-kicker">CARLISPECIAL</p>
          <h1>Access denied</h1>
          <p>This account is not registered as a Carli Special owner.</p>
        </section>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <header className="admin-topbar">
        <div>
          <p className="admin-kicker">CARLISPECIAL</p>
          <h1>Owner Dashboard</h1>
          <p className="admin-subtitle">Website management and booking access</p>
        </div>
        <nav aria-label="Owner navigation">
          <Link href="/">Public Site</Link>
          <Link href="/services">Services</Link>
          <a href={BOOKING_URL} target="_blank" rel="noreferrer">GlossGenius</a>
        </nav>
      </header>

      <section className="admin-source-banner">
        <div className="admin-source-banner__icon" aria-hidden="true">✓</div>
        <div>
          <p className="admin-kicker">BOOKING SOURCE OF TRUTH</p>
          <h2>GlossGenius manages the calendar</h2>
          <p>
            Appointments, availability, client booking details, confirmations,
            reminders, cancellations, and scheduling changes are managed in GlossGenius.
            This dashboard intentionally does not maintain a second appointment calendar.
          </p>
        </div>
        <a className="admin-button" href={BOOKING_URL} target="_blank" rel="noreferrer">
          Open GlossGenius <span>↗</span>
        </a>
      </section>

      <section className="admin-panel">
        <div className="admin-panel__head">
          <div>
            <p className="admin-kicker">BOOKING MANAGEMENT</p>
            <h2>Manage appointments</h2>
          </div>
        </div>

        <div className="admin-action-grid">
          <a className="admin-action-card" href={BOOKING_URL} target="_blank" rel="noreferrer">
            <span className="admin-action-card__eyebrow">CALENDAR</span>
            <strong>Open GlossGenius Calendar</strong>
            <span>View today, upcoming appointments, availability, and schedule changes.</span>
            <b>Open calendar →</b>
          </a>

          <a className="admin-action-card" href={BOOKING_URL} target="_blank" rel="noreferrer">
            <span className="admin-action-card__eyebrow">CLIENTS &amp; BOOKINGS</span>
            <strong>Manage booking activity</strong>
            <span>Use GlossGenius for the authoritative appointment and client booking record.</span>
            <b>Open booking system →</b>
          </a>
        </div>
      </section>

      <section className="admin-panel">
        <div className="admin-panel__head">
          <div>
            <p className="admin-kicker">WEBSITE</p>
            <h2>Manage the public experience</h2>
          </div>
        </div>

        <div className="admin-action-grid">
          <Link className="admin-action-card" href="/services">
            <span className="admin-action-card__eyebrow">SERVICES</span>
            <strong>View Services</strong>
            <span>Review the service presentation customers see before they book.</span>
            <b>View services →</b>
          </Link>

          <Link className="admin-action-card" href="/">
            <span className="admin-action-card__eyebrow">PUBLIC SITE</span>
            <strong>Preview Website</strong>
            <span>Open the customer-facing Carli Special website.</span>
            <b>Open website →</b>
          </Link>
        </div>
      </section>

      <section className="admin-panel admin-panel--last">
        <div className="admin-panel__head">
          <div>
            <p className="admin-kicker">SYSTEM DESIGN</p>
            <h2>Why there is no appointment list here</h2>
          </div>
        </div>
        <div className="admin-system-note">
          <p>
            The previous dashboard stored appointments in Supabase. That created a second
            calendar that could become different from GlossGenius. The appointment list,
            appointment detail pages, and status actions have been removed from the owner
            workflow so there is one authoritative scheduling system.
          </p>
          <p>
            The Supabase database can still support website features in the future, but it
            should not be used to create, cancel, complete, or display appointments unless
            an official GlossGenius integration is added.
          </p>
        </div>
      </section>
    </main>
  );
}
