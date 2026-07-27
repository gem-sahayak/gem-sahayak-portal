"use client";
import React from "react";
import { SITE_CONFIG } from "../lib/siteConfig";

const { stats } = SITE_CONFIG;

const STATS = [
  { value: stats.knowledgeGuides,    label: "Knowledge Guides",           icon: "📚", color: "#10B981" },
  { value: stats.businessesSupported,label: "Businesses Supported",       icon: "🏢", color: "#3B82F6" },
  { value: stats.dailyAlerts,        label: "Daily Procurement Alerts",   icon: "🔔", color: "#8B5CF6" },
  { value: stats.aiTools,            label: "AI Procurement Tools",       icon: "⚡", color: "#F59E0B" },
];

export default function StatsSection() {
  return (
    <section aria-label="SahayakAI Platform Statistics" style={{ padding: "0 0 80px", background: "#F8FAFC" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}>
          {STATS.map((s) => (
            <div
              key={s.label}
              style={{
                background: "rgba(255,255,255,0.80)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(226,232,240,0.8)",
                borderRadius: "20px",
                padding: "28px 24px",
                textAlign: "center",
                boxShadow: "0 4px 24px rgba(12,46,74,0.07)",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(12,46,74,0.13)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(12,46,74,0.07)";
              }}
            >
              <div style={{
                position: "absolute", top: -20, right: -20,
                width: 80, height: 80, borderRadius: "50%",
                background: `${s.color}18`, pointerEvents: "none",
              }} />
              <div style={{
                fontSize: "1.8rem", marginBottom: "10px",
                width: 52, height: 52, borderRadius: "14px",
                background: `${s.color}15`,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 12px",
              }}>{s.icon}</div>
              <div style={{
                fontSize: "2.2rem", fontWeight: 800,
                color: s.color, lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}>{s.value}</div>
              <div style={{
                fontSize: "0.85rem", color: "#64748B",
                fontWeight: 600, marginTop: "6px",
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
