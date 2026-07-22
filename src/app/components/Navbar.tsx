"use client";

import React, { useState, useEffect } from "react";

const CHROME_STORE_URL =
  "https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/tools", label: "AI Tools" },
  { href: "/pricing", label: "Pricing" },
  { href: "/knowledge", label: "Knowledge Hub" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: scrolled
            ? "rgba(255,255,255,0.90)"
            : "rgba(255,255,255,0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(226,232,240,0.8)"
            : "1px solid rgba(226,232,240,0.4)",
          boxShadow: scrolled ? "0 4px 24px rgba(12,46,74,0.08)" : "none",
          transition: "all 0.25s ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 0",
          }}
        >
          {/* Logo */}
          <a href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
            <img
              src="/logo_flat.png"
              alt="SahayakAI Logo"
              style={{ height: "36px", width: "auto" }}
            />
          </a>

          {/* Desktop nav */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: "7px 14px",
                  borderRadius: "8px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: "#374151",
                  textDecoration: "none",
                  transition: "background 0.15s, color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(12,46,74,0.07)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#0C2E4A";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
                }}
              >
                {link.label}
              </a>
            ))}

            {/* CTA */}
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginLeft: "10px",
                background: "linear-gradient(135deg, #0C2E4A 0%, #10B981 100%)",
                color: "#ffffff",
                padding: "9px 20px",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 2px 10px rgba(16,185,129,0.30)",
                transition: "transform 0.15s, box-shadow 0.15s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 6px 18px rgba(16,185,129,0.40)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 2px 10px rgba(16,185,129,0.30)";
              }}
            >
              📥 Add to Chrome
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            style={{
              background: "none",
              border: "none",
              fontSize: "1.4rem",
              cursor: "pointer",
              color: "#0C2E4A",
            }}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            style={{
              background: "rgba(255,255,255,0.97)",
              backdropFilter: "blur(12px)",
              borderTop: "1px solid #e2e8f0",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "10px 14px",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  color: "#374151",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              style={{
                marginTop: "8px",
                background: "linear-gradient(135deg, #0C2E4A 0%, #10B981 100%)",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "9999px",
                fontWeight: 700,
                textAlign: "center",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              📥 Add to Chrome — Free
            </a>
          </nav>
        )}
      </header>

      <style>{`
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}
