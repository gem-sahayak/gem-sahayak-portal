"use client";
import React from "react";
import { SITE_CONFIG } from "../lib/siteConfig";

const CATEGORIES = [
  { icon: "📖", title: "Latest Guides", count: "74 guides", href: "/knowledge", color: "#10B981" },
  { icon: "🔥", title: "Trending Topics", count: "12 trending", href: "/knowledge", color: "#EF4444" },
  { icon: "⭐", title: "Most Popular", count: "38 articles", href: "/knowledge", color: "#F59E0B" },
  { icon: "✅", title: "Compliance Hub", count: "22 guides", href: "/knowledge/compliance-policy", color: "#3B82F6" },
  { icon: "📋", title: "Tender Guides", count: "31 guides", href: "/knowledge/gem-bidding", color: "#8B5CF6" },
  { icon: "🏭", title: "OEM Resources", count: "9 guides", href: "/knowledge", color: "#EC4899" },
  { icon: "🛡️", title: "EMD & Exemptions", count: "16 guides", href: "/knowledge/compliance-policy", color: "#10B981" },
  { icon: "🏢", title: "MSME Corner", count: "18 guides", href: "/knowledge", color: "#F97316" },
  { icon: "📦", title: "Catalogue Help", count: "14 guides", href: "/knowledge/catalog-management", color: "#3B82F6" },
  { icon: "📝", title: "Registration", count: "11 guides", href: "/knowledge/gem-registration", color: "#8B5CF6" },
];

export default function KnowledgeOS() {
  return (
    <section style={{
      padding: "80px 0",
      background: "linear-gradient(135deg, #0C2E4A 0%, #0F172A 100%)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Background orbs */}
      {["#10B981","#3B82F6"].map((c, i) => (
        <div key={c} style={{
          position: "absolute",
          top: i === 0 ? "-80px" : "auto",
          bottom: i === 1 ? "-80px" : "auto",
          left: i === 0 ? "-60px" : "auto",
          right: i === 1 ? "-60px" : "auto",
          width: 280, height: 280, borderRadius: "50%",
          background: `radial-gradient(circle, ${c}18 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
      ))}

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 56px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(16,185,129,0.15)", color: "#34D399",
            padding: "6px 16px", borderRadius: 9999,
            fontSize: "0.82rem", fontWeight: 700,
            border: "1px solid rgba(16,185,129,0.25)",
            marginBottom: 20,
          }}>📚 Knowledge Hub</div>
          <h2 style={{
            fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800,
            color: "#F8FAFC", letterSpacing: "-0.02em", marginBottom: 16,
          }}>
            Explore India&apos;s Comprehensive AI Procurement{" "}
            <span style={{
              background: "linear-gradient(135deg,#10B981,#3B82F6)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Knowledge Hub</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#94A3B8", lineHeight: 1.7 }}>
            {SITE_CONFIG.stats.knowledgeGuides} procurement guides, compliance articles aur tender resources — sab ek jagah. Hinglish aur English mein.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 40 }}>
          {CATEGORIES.map(cat => (
            <a
              key={cat.title}
              href={cat.href}
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16, padding: "20px 18px",
                textDecoration: "none",
                display: "flex", flexDirection: "column", gap: 10,
                transition: "transform 0.2s, background 0.2s, border-color 0.2s",
                position: "relative", overflow: "hidden",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(-4px)";
                el.style.background = "rgba(255,255,255,0.10)";
                el.style.borderColor = `${cat.color}50`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "translateY(0)";
                el.style.background = "rgba(255,255,255,0.05)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: `${cat.color}20`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.2rem",
                }}>{cat.icon}</div>
                <span style={{ color: "#475569", fontSize: "1rem" }}>→</span>
              </div>
              <div>
                <h3 style={{ fontSize: "0.9rem", fontWeight: 700, color: "#F1F5F9", marginBottom: 4 }}>{cat.title}</h3>
                <p style={{ fontSize: "0.75rem", color: "#64748B" }}>{cat.count}</p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a href="/knowledge" style={{
            background: "rgba(255,255,255,0.10)",
            color: "#F8FAFC", border: "1px solid rgba(255,255,255,0.20)",
            padding: "13px 32px", borderRadius: 9999,
            fontSize: "0.95rem", fontWeight: 700, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8,
            transition: "background 0.2s",
            backdropFilter: "blur(8px)",
          }}
          onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.18)"}
          onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.10)"}
          >
            📚 Browse Full Knowledge Hub →
          </a>
        </div>
      </div>
    </section>
  );
}
