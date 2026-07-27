"use client";

import React from "react";

interface QuickActionsProps {
  recommendedToolLink: string;
}

export default function QuickActions({ recommendedToolLink }: QuickActionsProps) {
  const handleDownload = () => {
    alert("Checklist Download initiated!");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Guide link copied to clipboard!");
  };

  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "10px 18px",
        display: "flex",
        flexWrap: "wrap",
        gap: "14px",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0 4px 10px rgba(0,0,0,0.03)",
        position: "sticky",
        top: "80px",
        zIndex: 9,
        marginBottom: "32px",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <button onClick={handleDownload} style={{ background: "none", border: "none", fontSize: "0.8rem", fontWeight: "700", color: "#475569", cursor: "pointer" }}>
          📥 Download Checklist
        </button>
        <span style={{ color: "#cbd5e1" }}>|</span>
        <button onClick={handleCopyLink} style={{ background: "none", border: "none", fontSize: "0.8rem", fontWeight: "700", color: "#475569", cursor: "pointer" }}>
          📋 Copy Link
        </button>
        <span style={{ color: "#cbd5e1" }}>|</span>
        <a href={recommendedToolLink} style={{ fontSize: "0.8rem", fontWeight: "700", color: "#0E8A8A", textDecoration: "none" }}>
          🤖 Open AI Tool
        </a>
      </div>
      <a
        href="https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf"
        target="_blank"
        rel="noopener noreferrer"
        style={{ background: "#0C2E4A", color: "white", padding: "6px 12px", borderRadius: "4px", fontSize: "0.75rem", fontWeight: "700", textDecoration: "none" }}
      >
        🧩 Install Extension
      </a>
    </div>
  );
}
