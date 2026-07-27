"use client";
// Server Component — pure static links, no client JS needed
import React from "react";

const TOPICS = [
  { icon: "🏛️", label: "GeM Registration",     href: "/knowledge/gem-registration" },
  { icon: "🔍", label: "Bid Search",             href: "/knowledge/gem-bidding" },
  { icon: "📦", label: "Catalogue Management",   href: "/knowledge/catalog-management" },
  { icon: "🔄", label: "Reverse Auction",        href: "/knowledge/gem-bidding" },
  { icon: "🏭", label: "OEM",                    href: "/knowledge/gem-bidding" },
  { icon: "📋", label: "PAC",                    href: "/knowledge/compliance-policy" },
  { icon: "🛡️", label: "EMD",                    href: "/knowledge/compliance-policy" },
  { icon: "🤝", label: "MSME",                   href: "/knowledge/gem-registration" },
  { icon: "🚀", label: "Startup India",          href: "/knowledge/gem-registration" },
  { icon: "📊", label: "BOQ",                    href: "/knowledge/gem-bidding" },
  { icon: "💰", label: "L1 Price",               href: "/knowledge/gem-bidding" },
  { icon: "📦", label: "Order Management",       href: "/knowledge/order-management" },
  { icon: "💳", label: "Payments",               href: "/knowledge/order-management" },
  { icon: "🧾", label: "Invoice",                href: "/knowledge/order-management" },
  { icon: "📄", label: "Tender Participation",   href: "/knowledge/gem-bidding" },
  { icon: "❌", label: "Bid Rejection",           href: "/knowledge/compliance-policy" },
  { icon: "✅", label: "Product Approval",       href: "/knowledge/catalog-management" },
  { icon: "🤝", label: "Contract Management",    href: "/knowledge/order-management" },
];

export default function InternalLinkingHub() {
  return (
    <section
      aria-label="Popular Procurement Topics"
      style={{ padding: "64px 0", background: "#F8FAFC" }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 40px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(59,130,246,0.10)", color: "#2563EB",
            padding: "6px 16px", borderRadius: 9999,
            fontSize: "0.78rem", fontWeight: 700,
            border: "1px solid rgba(59,130,246,0.18)",
            marginBottom: 16,
          }}>🔗 Knowledge Hub</div>
          <h2 style={{
            fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800,
            color: "#0C2E4A", letterSpacing: "-0.02em", marginBottom: 12,
          }}>
            Popular Procurement Topics
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#64748B", lineHeight: 1.7 }}>
            GeM procurement ke sabse zaroori topics — guides, compliance, aur AI tools — sab ek jagah.
          </p>
        </div>

        {/* Topic grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: 12,
        }}>
          {TOPICS.map(t => (
            <a
              key={t.label}
              href={t.href}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "#FFFFFF",
                border: "1.5px solid #E2E8F0",
                borderRadius: 14, padding: "12px 14px",
                textDecoration: "none",
                color: "#374151",
                fontSize: "0.85rem", fontWeight: 600,
                boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                transition: "border-color 0.2s, color 0.2s, transform 0.15s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#10B981";
                el.style.color = "#059669";
                el.style.transform = "translateY(-2px)";
                el.style.background = "rgba(16,185,129,0.04)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "#E2E8F0";
                el.style.color = "#374151";
                el.style.transform = "translateY(0)";
                el.style.background = "#FFFFFF";
              }}
            >
              <span style={{ fontSize: "1.1rem", flexShrink: 0 }}>{t.icon}</span>
              <span>{t.label}</span>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 32 }}>
          <a href="/knowledge" style={{
            color: "#10B981", fontWeight: 700, fontSize: "0.9rem",
            textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6,
          }}>
            View All Topics →
          </a>
        </div>
      </div>
    </section>
  );
}
