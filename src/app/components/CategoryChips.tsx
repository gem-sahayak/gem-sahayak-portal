"use client";
import React from "react";

const CHIPS = [
  "GeM Portal","Tender","Catalogue","BOQ","OEM","PAC","EMD","L1 Price",
  "Reverse Auction","MSME","Startup India","Bid Document","Contract","GFR 2017",
];

export default function CategoryChips() {
  return (
    <section style={{ padding: "40px 0", background: "#F8FAFC", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
      <div className="container">
        <p style={{ fontSize: "0.78rem", fontWeight: 700, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16, textAlign: "center" }}>
          Browse by Category
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
          {CHIPS.map(chip => (
            <a
              key={chip}
              href={`/knowledge`}
              style={{
                padding: "7px 18px", borderRadius: 9999,
                background: "#FFFFFF", border: "1.5px solid #E2E8F0",
                fontSize: "0.82rem", fontWeight: 600, color: "#374151",
                textDecoration: "none",
                transition: "transform 0.15s, border-color 0.15s, color 0.15s, background 0.15s",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "scale(1.04)";
                el.style.borderColor = "#10B981";
                el.style.color = "#059669";
                el.style.background = "rgba(16,185,129,0.06)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.transform = "scale(1)";
                el.style.borderColor = "#E2E8F0";
                el.style.color = "#374151";
                el.style.background = "#FFFFFF";
              }}
            >{chip}</a>
          ))}
        </div>
      </div>
    </section>
  );
}
