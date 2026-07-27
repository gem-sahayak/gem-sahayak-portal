"use client";

import React, { useState } from "react";

export default function CollapsibleDisclaimer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      style={{
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        overflow: "hidden",
        marginTop: "40px",
        fontSize: "0.8rem",
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 18px",
          cursor: "pointer",
          color: "#64748b",
          fontWeight: "700",
          outline: "none",
        }}
      >
        <span>⚖️ Legal Disclaimer & Terms</span>
        <span style={{ fontSize: "0.65rem", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
      </button>
      {isOpen && (
        <div
          style={{
            padding: "0 18px 16px 18px",
            color: "#64748b",
            lineHeight: "1.6",
            borderTop: "1px solid #e2e8f0",
            paddingTop: "12px",
          }}
        >
          SahayakAI is an independent, private technology platform. We are not officially affiliated with, authorized, or officially connected with the Government e-Marketplace (GeM Portal) of India or the Ministry of Commerce and Industry. Official GeM purchases and bids must be submitted directly through the official government URL: <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#0E8A8A", textDecoration: "underline" }}>gem.gov.in</a>. All tools, margin simulators, and templates provided on this portal are educational utilities to aid procurement productivity.
        </div>
      )}
    </div>
  );
}
