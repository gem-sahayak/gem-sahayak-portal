"use client";

import React from "react";
import LiveAIDashboard from "./LiveAIDashboard";
import { SITE_CONFIG } from "../lib/siteConfig";

const TRUST_BADGES = [
  "🧪 Free During Beta",
  "🔒 Zero Credentials",
  "🛡️ Compliance First",
  "🇮🇳 Built for Indian Businesses",
];

const STATS = [
  { value: SITE_CONFIG.stats.knowledgeGuides, label: "Procurement Guides" },
  { value: "10K+", label: "Bids Tracked" },
  { value: "500+", label: "PDF Analyses" },
];

export default function HeroSectionV35() {
  return (
    <section
      id="hero"
      style={{
        background: "linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 50%, #F0FDF4 100%)",
        padding: "80px 0 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "start",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* ── Left Column ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(16,185,129,0.12)",
              color: "#059669",
              padding: "6px 16px",
              borderRadius: "9999px",
              fontSize: "0.82rem",
              fontWeight: 700,
              border: "1px solid rgba(16,185,129,0.25)",
              width: "fit-content",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#10B981",
                display: "inline-block",
                animation: "pulse 2s infinite",
              }}
            />
            🧪 Public Beta Now Active — Free Access
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "#0C2E4A",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Sahayak AI Procurement Assistant for Gem Portal Sellers —{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #10B981, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Now in Public Beta
            </span>
          </h1>

          {/* Sub-heading */}
          <p
            style={{
              fontSize: "1.05rem",
              color: "#475569",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "560px",
            }}
          >
            SahayakAI is currently in Public Beta. Join early businesses across India, explore AI-powered procurement tools, and help build India&apos;s AI Procurement Platform.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href="#founding-member"
              style={{
                background: "linear-gradient(135deg, #0C2E4A 0%, #1e4d6e 100%)",
                color: "#ffffff",
                padding: "14px 30px",
                borderRadius: "9999px",
                fontWeight: 800,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(12,46,74,0.25)",
                transition: "transform 0.15s, box-shadow 0.15s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 8px 24px rgba(12,46,74,0.32)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 4px 16px rgba(12,46,74,0.25)";
              }}
            >
              🧪 Join Public Beta →
            </a>
            <a
              href="https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#ffffff",
                color: "#0C2E4A",
                padding: "14px 28px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.95rem",
                textDecoration: "none",
                border: "2px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                transition: "transform 0.15s, border-color 0.15s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#10B981";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e2e8f0";
              }}
            >
              🧩 Install Chrome Extension
            </a>
          </div>

          {/* Trust Strip */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {TRUST_BADGES.map((badge) => (
              <span
                key={badge}
                style={{
                  background: "rgba(12,46,74,0.06)",
                  color: "#0C2E4A",
                  padding: "5px 12px",
                  borderRadius: "9999px",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  border: "1px solid rgba(12,46,74,0.10)",
                }}
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Stats Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
              paddingTop: "8px",
              borderTop: "1px solid #e2e8f0",
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 800,
                    color: "#10B981",
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.72rem", color: "#64748b", marginTop: "4px" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right Column: Live AI Dashboard ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            paddingLeft: "24px",
          }}
        >
          <LiveAIDashboard />
        </div>
      </div>

      {/* Mobile responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          #hero .container {
            grid-template-columns: 1fr !important;
          }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
