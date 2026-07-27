"use client";
import React from "react";

const FEATURES = [
  { icon: "🔍", title: "AI Bid Search", desc: "Natural language se instant GeM bids filter karein. Location, category, ministry — sab ek jagah.", color: "#10B981", wide: true },
  { icon: "📄", title: "Tender Analyzer", desc: "Complex PDF tenders ko seconds mein analyze karein — criteria, compliance, deadlines.", color: "#3B82F6", wide: false },
  { icon: "💬", title: "WhatsApp Alerts", desc: "Naye bids ke liye instant WhatsApp notifications apne Regiestered number par.", color: "#F59E0B", wide: false },
  { icon: "📦", title: "Catalogue Helper", desc: "GeM compliance paths, golden codes aur technical specs pehle se jaano.", color: "#EC4899", wide: false },
  { icon: "📝", title: "Clarification AI", desc: "Catalog rejection ya buyer clarification ke replies standard templates se turant tayaar karein.", color: "#3B82F6", wide: false },
  { icon: "💰", title: "Bid Doc. Analyzer", desc: "Analyze EMD, ePBG, Payment Terms, Commercial Clauses and Procurement Conditions in easy Hinglish.", color: "#10B981", wide: true },
  { icon: "🎙️", title: "Voice Guide", desc: "Hindi voice mein procurement guidance — bilkul aasaan, bilkul local.", color: "#F97316", wide: false },
];

export default function FeaturesBento() {
  return (
    <section id="features" style={{ padding: "80px 0", background: "#ffffff" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(16,185,129,0.10)", color: "#059669",
            padding: "6px 16px", borderRadius: 9999,
            fontSize: "0.82rem", fontWeight: 700,
            border: "1px solid rgba(16,185,129,0.20)",
            marginBottom: 20,
          }}>⚡ Platform Features</div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "#0C2E4A", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Features Jo Aapki Bidding Ko Karein <span style={{ background: "linear-gradient(135deg,#10B981,#3B82F6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Asar-Dar</span>
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7 }}>
            SahayakAI background mein kaam karke aapko har tender update ke saath sync rakhta hai — koi bhi Government Business miss na karein.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                gridColumn: f.wide ? "span 2" : "span 1",
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: 20,
                padding: "28px 28px",
                transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 16px 48px rgba(12,46,74,0.12)";
                el.style.borderColor = `${f.color}50`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                el.style.borderColor = "#E2E8F0";
              }}
            >
              {/* Background gradient orb */}
              <div style={{
                position: "absolute", bottom: -30, right: -30,
                width: 120, height: 120, borderRadius: "50%",
                background: `${f.color}10`, pointerEvents: "none",
              }} />
              {/* Icon */}
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: `${f.color}18`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem", marginBottom: 16,
              }}>{f.icon}</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0C2E4A", marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: "0.88rem", color: "#64748B", lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .bento-grid > div { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
}
