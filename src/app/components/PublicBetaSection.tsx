"use client";

import React from "react";

export default function PublicBetaSection() {
  const cards = [
    {
      icon: "⚡",
      title: "Use Free During Beta",
      description:
        "Access all AI procurement tools, bid analysis, and compliance guides at zero cost while we refine the platform.",
      badge: "Zero Cost",
    },
    {
      icon: "💬",
      title: "Share Direct Feedback",
      description:
        "Tell us what features you need most. Your real-world bidding challenges directly guide our development priorities.",
      badge: "Direct Channel",
    },
    {
      icon: "🚀",
      title: "Help Shape the Future",
      description:
        "Influence the roadmap for SahayakAI Workspace, Business Memory, and Multi-Platform Procurement support.",
      badge: "Ecosystem Vision",
    },
  ];

  return (
    <section
      id="why-beta"
      style={{
        background: "#ffffff",
        padding: "70px 0",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 48px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(14, 138, 138, 0.08)",
              color: "#0E8A8A",
              padding: "6px 14px",
              borderRadius: "9999px",
              fontSize: "0.8rem",
              fontWeight: 800,
              marginBottom: "16px",
              border: "1px solid rgba(14, 138, 138, 0.2)",
            }}
          >
            🧪 PUBLIC BETA MISSION
          </span>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0C2E4A", marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Why Public Beta?
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: "1.65" }}>
            We believe great procurement software should be built with real businesses—not behind closed doors. During Public Beta, you can use SahayakAI free, explore AI tools, share feedback, and help us refine the future Procurement Operating System.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="hover-card"
              style={{
                background: "#F8FAFC",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span style={{ fontSize: "2rem" }}>{card.icon}</span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      color: "#0E8A8A",
                      background: "rgba(14, 138, 138, 0.08)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    {card.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0C2E4A", marginBottom: "10px" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#64748B", lineHeight: "1.6" }}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
