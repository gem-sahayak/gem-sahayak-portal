"use client";

import React from "react";

export default function FoundingMemberSection() {
  const benefits = [
    "Free access during Public Beta",
    "Early access to SahayakAI Workspace",
    "Community feedback & feature request access",
    "Early adopter updates & roadmap previews",
    "Feature preview access before general launch",
  ];

  return (
    <section
      id="founding-member"
      style={{
        background: "linear-gradient(135deg, #0C3E5E 0%, #135C82 100%)",
        color: "#ffffff",
        padding: "70px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            background: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            borderRadius: "24px",
            padding: "48px 36px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: "rgba(110, 231, 183, 0.15)",
                color: "#6EE7B7",
                padding: "6px 16px",
                borderRadius: "9999px",
                fontSize: "0.8rem",
                fontWeight: 800,
                marginBottom: "16px",
                border: "1px solid rgba(110, 231, 183, 0.3)",
              }}
            >
              🚀 EARLY ACCESS PROGRAM
            </span>
            <h2 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#ffffff", marginBottom: "12px", letterSpacing: "-0.02em" }}>
              Become a Founding Beta Member
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#CBD5E1", maxWidth: "640px", margin: "0 auto", lineHeight: "1.6" }}>
              Early users help improve SahayakAI and receive early access to future capabilities as we build India&apos;s AI Procurement Operating System.
            </p>
          </div>

          {/* Benefits Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              marginBottom: "36px",
            }}
          >
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "0.92rem",
                  fontWeight: 600,
                  color: "#F1F5F9",
                }}
              >
                <span style={{ color: "#6EE7B7", fontSize: "1.1rem", fontWeight: 800 }}>✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
            <a
              href="https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#6EE7B7",
                color: "#0C3E5E",
                padding: "14px 36px",
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(110, 231, 183, 0.3)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Join Public Beta — Free →
            </a>
            <span style={{ fontSize: "0.82rem", color: "#94A3B8" }}>
              🔒 Zero credentials required • No credit card needed • Free during Beta
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
