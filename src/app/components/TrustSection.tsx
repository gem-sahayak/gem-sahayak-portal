"use client";

import React from "react";

export default function TrustSection() {
  const cards = [
    {
      icon: "🔒",
      title: "Zero Credentials",
      description:
        "We never ask for your GeM portal passwords, OTPs, or login credentials. Your account security stays 100% under your control.",
      badge: "Security First",
    },
    {
      icon: "🛡️",
      title: "Privacy First",
      description:
        "Zero browser tracking, zero history collection, and no background activity scanning. Your data remains strictly private.",
      badge: "Data Protection",
    },
    {
      icon: "📜",
      title: "Compliance First",
      description:
        "All recommendations are grounded in GFR 2017, Department of Expenditure (DoE) manuals, and official GeM policy circulars.",
      badge: "Official Rules",
    },
    {
      icon: "🇮🇳",
      title: "Built for Indian Businesses",
      description:
        "Designed specifically for Indian MSMEs, manufacturers, traders, and contractors bidding on government platforms.",
      badge: "India Focused",
    },
  ];

  return (
    <section
      id="trust"
      style={{
        background: "#F8FAFC",
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
              background: "rgba(16, 185, 129, 0.08)",
              color: "#059669",
              padding: "6px 14px",
              borderRadius: "9999px",
              fontSize: "0.8rem",
              fontWeight: 800,
              marginBottom: "16px",
              border: "1px solid rgba(16, 185, 129, 0.2)",
            }}
          >
            🛡️ ENTERPRISE TRUST ARCHITECTURE
          </span>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#0C2E4A", marginBottom: "16px", letterSpacing: "-0.02em" }}>
            Why Businesses Trust Our Approach
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: "1.6" }}>
            SahayakAI operates on a strict zero-credential and compliance-first architecture, ensuring maximum privacy and peace of mind for every seller.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="hover-card"
              style={{
                background: "#ffffff",
                border: "1px solid #E2E8F0",
                borderRadius: "16px",
                padding: "28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.02)",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                  <span style={{ fontSize: "2rem" }}>{card.icon}</span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      color: "#059669",
                      background: "rgba(16, 185, 129, 0.08)",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    {card.badge}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#0C2E4A", marginBottom: "10px" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: "1.6" }}>
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
