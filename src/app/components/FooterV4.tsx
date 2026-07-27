"use client";
import React from "react";

const CHROME_URL = "https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf";

const FOOTER_LINKS = {
  "Platform": [
    { label: "Home", href: "/" },
    { label: "AI Tools Hub", href: "/tools" },
    { label: "Pricing", href: "/pricing" },
    { label: "Chrome Extension", href: CHROME_URL },
  ],
  "Knowledge": [
    { label: "Knowledge Hub", href: "/knowledge" },
    { label: "GeM Registration", href: "/knowledge/gem-registration" },
    { label: "GeM Bidding", href: "/knowledge/gem-bidding" },
    { label: "Catalogue Mgmt", href: "/knowledge/catalog-management" },
    { label: "Guides", href: "/guides/gem-portal-direct-purchase-limit-rules-2026" },
  ],
  "Company": [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "ASTRA Hub", href: "/astra-hub/cppp" },
    { label: "FAQ", href: "/faq/gem-registration-fees" },
  ],
  "Legal": [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

export default function FooterV4() {
  return (
    <footer style={{ background: "#0F172A", color: "#94A3B8", padding: "64px 0 0" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr repeat(4, 1fr)", gap: 40, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          {/* Brand */}
          <div>
            <a href="/" style={{ display: "inline-flex", alignItems: "center", marginBottom: 16, textDecoration: "none" }}>
              <img src="/logo_flat.png" alt="SahayakAI" style={{ height: 32, width: "auto" }} />
            </a>
            <p style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: 1.7, maxWidth: 260, marginBottom: 20 }}>
              India&apos;s AI-powered procurement platform. Smarter bidding decisions for Indian MSMEs.
            </p>
            <a href={CHROME_URL} target="_blank" rel="noopener noreferrer" style={{
              background: "#10B981", color: "#fff",
              padding: "9px 18px", borderRadius: 9999,
              fontSize: "0.82rem", fontWeight: 700, textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: 6,
            }}>📥 Add to Chrome</a>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize: "0.78rem", fontWeight: 800, color: "#F1F5F9", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>{title}</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} style={{
                      fontSize: "0.85rem", color: "#64748B", textDecoration: "none",
                      transition: "color 0.15s",
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#F1F5F9"}
                    onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#64748B"}
                    >{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "24px 0", flexWrap: "wrap", gap: 12,
        }}>
          <p style={{ fontSize: "0.8rem", color: "#475569" }}>
            © {new Date().getFullYear()} SahayakAI. All rights reserved. An independent AI platform — not affiliated with GeM or Government of India.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Disclaimer", href: "/disclaimer" },
            ].map(l => (
              <a key={l.label} href={l.href} style={{ fontSize: "0.8rem", color: "#475569", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "#475569"}
              >{l.label}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
          footer .container > div:first-child > div:first-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </footer>
  );
}
