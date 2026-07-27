"use client";
import React from "react";
import LiveAIDashboard from "./LiveAIDashboard";

export default function InteractiveDemo() {
  return (
    <section style={{ padding: "80px 0", background: "linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 40px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(59,130,246,0.10)", color: "#2563EB",
            padding: "6px 16px", borderRadius: 9999,
            fontSize: "0.82rem", fontWeight: 700,
            border: "1px solid rgba(59,130,246,0.20)",
            marginBottom: 20,
          }}>🖥️ Live Interactive Extension Preview</div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "#0C2E4A", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Experience SahayakAI Extension in Action
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7 }}>
            Extension ke sidepanel ka real interactive working structure neeche live try karein.
          </p>
        </div>

        {/* Real Sidepanel Container */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <LiveAIDashboard />
        </div>
      </div>
    </section>
  );
}
