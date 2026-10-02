"use client";

import { useState } from "react";
import Link from "next/link";

function ArchivityMark() {
  return (
    <svg
      aria-hidden="true"
      className="brand-mark"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M16 27V13m0 7c-5.5 0-9-3.5-9-9 5.5 0 9 3.5 9 9Zm0-4c0-5.5 3.5-9 9-9 0 5.5-3.5 9-9 9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M11 27h10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ProfileMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5.5 20c.45-3.4 2.8-5.25 6.5-5.25s6.05 1.85 6.5 5.25" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState("all-activities");

  function selectPage(page: string) {
    setActivePage(page);
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Archivity home">
          <ArchivityMark />
          <span>Archivity</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`navigation${menuOpen ? " navigation-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            aria-current={activePage === "all-activities" ? "page" : undefined}
            onClick={() => selectPage("all-activities")}
          >
            All Activities
          </Link>
          <a
            href="#wishlist"
            aria-current={activePage === "wishlist" ? "page" : undefined}
            onClick={() => selectPage("wishlist")}
          >
            Wishlist
          </a>
          <a
            href="#completed"
            aria-current={activePage === "completed" ? "page" : undefined}
            onClick={() => selectPage("completed")}
          >
            Completed
          </a>
          <a
            className="profile-link"
            href="#profile"
            aria-current={activePage === "profile" ? "page" : undefined}
            onClick={() => selectPage("profile")}
          >
            <ProfileMark />
            <span>Profile</span>
          </a>
        </nav>
      </header>
      <main className="page-content" />
    </>
  );
}
