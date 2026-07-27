"use client";

import React, { useState } from "react";

export default function InteractiveAiRecommendation() {
  const [activeTab, setActiveTab] = useState<string>("search");

  const recommendations: Record<string, { title: string; desc: string; tool: string; link: string }> = {
    search: {
      title: "AI Bid Search",
      desc: "Hinglish queries (jaise 'Bhopal ki bids do', 'computer ki bids do ') enter karke apne city aur niche ke live bids aur tenders directly filter and track karein.",
      tool: "AI Bid Search Tool",
      link: "/tools/bid-search",
    },
    pdf: {
      title: "AI Tender Document Analyzer",
      desc: "100-page ke complex tender documents PDF upload karein aur L1 requirements, EMD waiver clauses, aur experiences criteria details summary 10 seconds me extract karein.",
      tool: "AI Tender Document Analyzer",
      link: "/tools/bid-analyzer",
    },
    catalog: {
      title: "AI Catalog Dashboard",
      desc: "Apne product ya service details enter karein aur direct upload approval ke liye sahi GeM portal listing path and specifications auto-generate karein.",
      tool: "AI Catalog Dashboard",
      link: "/tools/ai-catalog-dashboard",
    },
  };

  const current = recommendations[activeTab];

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
        border: "1px solid #e2e8f0",
        borderRadius: "16px",
        padding: "28px",
        margin: "36px 0",
        boxShadow: "inset 0 1px 2px rgba(255,255,255,0.8)",
      }}
    >
      <h3 style={{ fontSize: "1.15rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "8px" }}>
        🤖 Solve Your GeM Portal Problems Using Sahayak AI
      </h3>
      <p style={{ fontSize: "0.88rem", color: "#64748b", marginBottom: "20px" }}>
        Apne problem ke anusaar tool chune or apni working Aasaan banaye !
      </p>

      {/* Tabs list */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
        {[
          { key: "search", label: "🔍 Search Bid / Tender" },
          { key: "pdf", label: "📄 Analyze PDF Document" },
          { key: "catalog", label: "📂 Find Catalog Path" },
        ].map((tab) => {
          const isSelected = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                padding: "10px 16px",
                borderRadius: "8px",
                border: isSelected ? "1px solid #0E8A8A" : "1px solid #e2e8f0",
                background: isSelected ? "#0E8A8A" : "#ffffff",
                color: isSelected ? "#ffffff" : "#475569",
                fontSize: "0.85rem",
                fontWeight: "700",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: isSelected ? "0 4px 6px rgba(14, 138, 138, 0.15)" : "none",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Recommended tool display panel */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "12px",
          padding: "20px 24px",
        }}
      >
        <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#0E8A8A", fontWeight: "800" }}>
          Recommended Free AI Assistant
        </span>
        <h4 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#0C2E4A", margin: "6px 0 8px 0" }}>
          {current.title}
        </h4>
        <p style={{ fontSize: "0.9rem", color: "#475569", lineHeight: "1.6", marginBottom: "18px" }}>
          {current.desc}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
          <a
            href={current.link}
            style={{
              display: "inline-block",
              background: "#0C2E4A",
              color: "#ffffff",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: "700",
              textDecoration: "none",
              boxShadow: "0 2px 4px rgba(12, 46, 74, 0.1)",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#135C82")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0C2E4A")}
          >
            Open Free Demo →
          </a>
          <a
            href="https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(14, 138, 138, 0.08)",
              border: "1px solid #0E8A8A",
              color: "#0E8A8A",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "0.85rem",
              fontWeight: "700",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
          >
            🧩 Install Extension
          </a>
        </div>
      </div>
    </div>
  );
}
