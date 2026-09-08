import Link from "next/link";
import { BOOKING_URL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <div className="footer-brand">CARLISPECIAL</div>
        <p>Hair Color • Confidence • You</p>
      </div>
      <div className="footer-links">
        <Link href="/services">Services</Link>
        <a href={BOOKING_URL}>Book</a>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Carli Special. All rights reserved.</p>
    </footer>
  );
}
