"use client";
import React from "react";

const CHROME_URL = "https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf";

export default function CTASection() {
  return (
    <section style={{
      padding: "100px 24px",
      background: "linear-gradient(135deg, #0C2E4A 0%, #064E3B 100%)",
      position: "relative", overflow: "hidden",
      textAlign: "center",
    }}>
      {/* Orbs */}
      {[
        { top: "-60px", left: "-60px", size: 240, color: "#10B981" },
        { bottom: "-60px", right: "-60px", size: 200, color: "#3B82F6" },
        { top: "40%", left: "50%", size: 160, color: "#8B5CF6" },
      ].map((o, i) => (
        <div key={i} style={{
          position: "absolute",
          top: o.top, bottom: (o as {bottom?:string}).bottom,
          left: o.left, right: (o as {right?:string}).right,
          width: o.size, height: o.size, borderRadius: "50%",
          background: `radial-gradient(circle, ${o.color}20 0%, transparent 70%)`,
          pointerEvents: "none",
          transform: i === 2 ? "translate(-50%,-50%)" : undefined,
        }} />
      ))}

      <div style={{ position: "relative", zIndex: 1, maxWidth: 700, margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(16,185,129,0.15)", color: "#34D399",
          padding: "6px 16px", borderRadius: 9999,
          fontSize: "0.82rem", fontWeight: 700,
          border: "1px solid rgba(16,185,129,0.25)",
          marginBottom: 28,
        }}>🧪 Public Beta Now Active</div>

        <h2 style={{
          fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 800,
          color: "#F8FAFC", letterSpacing: "-0.02em",
          lineHeight: 1.15, marginBottom: 20,
        }}>
          Join India&apos;s{" "}
          <span style={{
            background: "linear-gradient(135deg,#10B981,#34D399)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>Public Beta</span>
        </h2>
        <p style={{ fontSize: "1.1rem", color: "#94A3B8", lineHeight: 1.7, marginBottom: 40 }}>
          Help shape the future Procurement Workspace. Install free. Use AI tools. Share feedback. Grow together.
        </p>

        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/#founding-member" style={{
            background: "linear-gradient(135deg,#10B981,#059669)",
            color: "#fff", padding: "15px 32px", borderRadius: 9999,
            fontWeight: 800, fontSize: "1rem", textDecoration: "none",
            boxShadow: "0 6px 24px rgba(16,185,129,0.40)",
            display: "inline-flex", alignItems: "center", gap: 8,
            transition: "transform 0.15s, boxShadow 0.15s",
          }}
          >🧪 Join Public Beta →</a>

          <a href={CHROME_URL} target="_blank" rel="noopener noreferrer" style={{
            background: "rgba(255,255,255,0.10)",
            color: "#F8FAFC", border: "1.5px solid rgba(255,255,255,0.25)",
            padding: "15px 32px", borderRadius: 9999,
            fontWeight: 700, fontSize: "1rem", textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: 8,
            backdropFilter: "blur(8px)",
            transition: "background 0.15s",
          }}
          >🧩 Install Extension — Free</a>
        </div>
      </div>
    </section>
  );
}
