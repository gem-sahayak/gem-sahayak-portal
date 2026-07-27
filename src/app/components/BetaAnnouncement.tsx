"use client";

import React, { useState, useEffect } from "react";

export default function BetaAnnouncement() {
  const [dismissed, setDismissed] = useState(true); // Default hidden until hydrated

  useEffect(() => {
    const isDismissed = localStorage.getItem("sahayakai_beta_dismissed");
    if (!isDismissed) {
      setDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem("sahayakai_beta_dismissed", "true");
  };

  if (dismissed) return null;

  return (
    <div
      style={{
        background: "linear-gradient(90deg, #0C3E5E 0%, #135C82 50%, #0E8A8A 100%)",
        color: "#ffffff",
        padding: "8px 16px",
        fontSize: "0.85rem",
        fontWeight: "600",
        textAlign: "center",
        position: "relative",
        zIndex: 1001,
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <span>🧪</span>
          <strong style={{ color: "#6EE7B7" }}>Public Beta Now Live:</strong> Free During Beta — Join Today to help build India&apos;s AI Procurement Platform.
        </span>

        <div style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
          <a
            href="/#founding-member"
            style={{
              background: "#ffffff",
              color: "#0C3E5E",
              padding: "3px 10px",
              borderRadius: "9999px",
              fontSize: "0.78rem",
              fontWeight: "800",
              textDecoration: "none",
              transition: "transform 0.15s ease",
            }}
          >
            Join Beta →
          </a>
          <a
            href="/#why-beta"
            style={{
              color: "#E2E8F0",
              fontSize: "0.78rem",
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            Learn More
          </a>
        </div>

        {/* Mobile & Desktop Dismiss Button */}
        <button
          onClick={handleDismiss}
          style={{
            background: "none",
            border: "none",
            color: "#94A3B8",
            cursor: "pointer",
            fontSize: "1rem",
            padding: "0 4px",
            lineHeight: 1,
            marginLeft: "8px",
          }}
          aria-label="Dismiss announcement"
        >
          ×
        </button>
      </div>
    </div>
  );
}
