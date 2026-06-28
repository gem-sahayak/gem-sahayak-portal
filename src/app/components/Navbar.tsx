"use client";

import React, { useState } from "react";

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <a
          href="/"
          className="logo"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="/logo_symbol.png"
            alt="GeM Sahayak Logo"
            style={{ width: "32px", height: "32px" }}
          />
          GeM Sahayak
        </a>

        {/* Desktop nav links */}
        <nav className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/#features" className="nav-link">Features</a>
          <a href="/blog" className="nav-link">Latest News</a>
          <a href="/about" className="nav-link">About Us</a>
          <a href="/contact" className="nav-link">Contact Us</a>
          <a
            href={CHROME_STORE_URL}
            target="_blank"
            className="btn btn-primary"
            style={{ padding: "8px 16px", fontSize: "0.85rem" }}
          >
            📥 Add to Chrome
          </a>
        </nav>

        {/* Hamburger button (mobile only) */}
        <button
          className="hamburger-btn"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      <nav className={`mobile-nav${mobileOpen ? " open" : ""}`}>
        <a href="/" className="nav-link" onClick={() => setMobileOpen(false)}>
          Home
        </a>
        <a href="/#features" className="nav-link" onClick={() => setMobileOpen(false)}>
          Features
        </a>
        <a href="/blog" className="nav-link" onClick={() => setMobileOpen(false)}>
          Latest News
        </a>
        <a href="/about" className="nav-link" onClick={() => setMobileOpen(false)}>
          About Us
        </a>
        <a href="/contact" className="nav-link" onClick={() => setMobileOpen(false)}>
          Contact Us
        </a>
        <a
          href={CHROME_STORE_URL}
          target="_blank"
          className="btn btn-primary"
          onClick={() => setMobileOpen(false)}
        >
          📥 Add to Chrome — It&apos;s Free
        </a>
      </nav>
    </header>
  );
}
