"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { BOOKING_URL } from "@/lib/site";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Book", BOOKING_URL],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Carli Special home" onClick={() => setOpen(false)}>
        <Image
          src="/logo/carli-special.svg"
          alt="Carli Special"
          width={360}
          height={90}
          priority
          className="brand__logo"
        />
      </Link>

      <button
        type="button"
        className={`mobile-menu ${open ? "is-open" : ""}`}
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span /><span />
      </button>

      <nav id="site-navigation" className={`nav ${open ? "nav--open" : ""}`} aria-label="Main navigation">
        <div className="nav__links">
          {links.map(([label, href]) =>
            href === BOOKING_URL ? (
              <a
                key={href}
                href={href}
                className="nav__link"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ) : (
              <Link
                key={href}
                href={href}
                className={`nav__link ${href === "/" ? "nav__link--active" : ""}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            )
          )}
        </div>
       <a
  className="nav__cta"
  href={BOOKING_URL}
  onClick={() => setOpen(false)}
>
  BOOK NOW
</a>
      </nav>

      {open && <button className="nav-backdrop" aria-label="Close navigation" onClick={() => setOpen(false)} />}
    </header>
  );
}
