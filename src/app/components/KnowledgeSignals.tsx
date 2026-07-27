// Server Component — no "use client" needed (no interactivity)
import React from "react";
import { SITE_CONFIG } from "../lib/siteConfig";

const { stats } = SITE_CONFIG;

const SIGNALS = [
  { value: stats.knowledgeGuides, label: "Procurement Guides", icon: "📖", href: "/knowledge" },
  { value: stats.faqs,            label: "FAQs Answered",       icon: "❓", href: "/faq/gem-registration-fees" },
  { value: stats.aiTools,         label: "AI Procurement Tools",icon: "🤖", href: "/tools" },
  { value: stats.procurementEntities, label: "Procurement Entities", icon: "🏛️", href: "/knowledge" },
  { value: stats.procurementCategories, label: "Procurement Categories", icon: "📂", href: "/categories/gem-registration" },
];

const GEO_ENTITIES = [
  "MSME", "Manufacturer", "Contractor", "Trader",
  "Startup", "Exporter", "Service Provider", "OEM",
  "Distributor", "Supplier",
];

export default function KnowledgeSignals() {
  return (
    <section
      aria-label="SahayakAI Knowledge Authority Signals"
      style={{ padding: "48px 0", background: "#ffffff", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}
    >
      <div className="container">
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <p style={{
            fontSize: "0.75rem", fontWeight: 800, color: "#94A3B8",
            textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8,
          }}>
            Trusted Knowledge Platform for Indian Procurement
          </p>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0C2E4A", margin: 0 }}>
            India&apos;s Most Comprehensive Upcoming AI Procurement Knowledge OS
          </h2>
        </div>

        {/* Stats row */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center",
          gap: "16px", marginBottom: 28,
        }}>
          {SIGNALS.map(s => (
            <a
              key={s.label}
              href={s.href}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "#F8FAFC", border: "1.5px solid #E2E8F0",
                borderRadius: 12, padding: "10px 18px",
                textDecoration: "none", transition: "border-color 0.2s, transform 0.15s",
              }}
            >
              <span style={{ fontSize: "1.2rem" }}>{s.icon}</span>
              <div>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "#10B981", lineHeight: 1.1 }}>{s.value}</div>
                <div style={{ fontSize: "0.72rem", color: "#64748B", fontWeight: 600 }}>{s.label}</div>
              </div>
            </a>
          ))}
        </div>

        {/* GEO Entity Chips */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
          <span style={{ fontSize: "0.72rem", color: "#94A3B8", fontWeight: 700, alignSelf: "center", marginRight: 4 }}>
            Built for:
          </span>
          {GEO_ENTITIES.map(e => (
            <span
              key={e}
              style={{
                padding: "4px 12px", borderRadius: 9999,
                background: "rgba(12,46,74,0.06)",
                color: "#0C2E4A", fontSize: "0.78rem", fontWeight: 600,
                border: "1px solid rgba(12,46,74,0.10)",
              }}
            >{e}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
