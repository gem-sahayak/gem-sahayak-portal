"use client";
import React from "react";

const TOOLS = [
  { icon: "🔍", title: "AI Bid Search", desc: "Active GeM bids filter karein — location, category, ministry — natural language mein.", href: "/tools/bid-search", color: "#10B981" },
  { icon: "📂", title: "AI Catalog Dashboard", desc: "GeM compliance category paths, golden codes aur tech specs pehle se jaano.", href: "/tools/ai-catalog-dashboard", color: "#3B82F6" },
  { icon: "📄", title: "AI Tender Analyzer", desc: "Complex PDF tenders analyze karein — criteria, compliance, deadlines — seconds mein.", href: "/tools/tender-summarizer", color: "#8B5CF6" },
  { icon: "💬", title: "Clarification AI", desc: "Buyer clarification ko standard templates se turant reply karein.", href: "/tools", color: "#F59E0B" },
  { icon: "💰", title: "Bid Doc. Analyzer", desc: "Tender EMD, ePBG, payment terms aur commercial clauses verify karein.", href: "/tools", color: "#EC4899" },
  { icon: "📊", title: "Bid Analyzer", desc: "Apni bid ki strength score karo aur competition analysis dekho.", href: "/tools/bid-analyzer", color: "#F97316" },
];

export default function AIToolsGrid() {
  return (
    <section style={{ padding: "80px 0", background: "#ffffff" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 52px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(139,92,246,0.10)", color: "#7C3AED",
            padding: "6px 16px", borderRadius: 9999,
            fontSize: "0.82rem", fontWeight: 700,
            border: "1px solid rgba(139,92,246,0.20)",
            marginBottom: 20,
          }}>🤖 AI Tool Suite</div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "#0C2E4A", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Try AI Procurement Tools
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7 }}>
            SahayakAI ke AASTRA engine ka power experience karein. Free public sandbox queries directly below.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {TOOLS.map(t => (
            <div
              key={t.title}
              style={{
                background: "#F8FAFC", border: "1px solid #E2E8F0",
                borderRadius: 20, padding: "28px",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                gap: 16, transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 16px 48px rgba(12,46,74,0.12)";
                el.style.borderColor = `${t.color}50`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "#E2E8F0";
              }}
            >
              <div>
                <div style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: `${t.color}18`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem", marginBottom: 14,
                }}>{t.icon}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#0C2E4A", marginBottom: 8 }}>{t.title}</h3>
                <p style={{ fontSize: "0.86rem", color: "#64748B", lineHeight: 1.6 }}>{t.desc}</p>
              </div>
              <a href={t.href} style={{
                background: `linear-gradient(135deg, ${t.color}18, ${t.color}10)`,
                color: t.color, border: `1.5px solid ${t.color}40`,
                padding: "10px 20px", borderRadius: 10,
                fontSize: "0.85rem", fontWeight: 700, textDecoration: "none",
                display: "inline-flex", alignItems: "center", gap: 6,
                textAlign: "center", justifyContent: "center",
                transition: "background 0.15s",
              }}>Try Demo →</a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <a href="/tools" style={{
            background: "#0C2E4A", color: "#fff",
            padding: "13px 32px", borderRadius: 9999,
            fontWeight: 700, fontSize: "0.95rem", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8,
            boxShadow: "0 4px 16px rgba(12,46,74,0.25)",
            transition: "transform 0.15s",
          }}
          onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"}
          onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"}
          >⚡ Explore All Tools</a>
        </div>
      </div>
    </section>
  );
}
