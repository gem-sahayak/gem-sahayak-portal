"use client";

import React, { useState } from "react";
import { REGISTRY_ARTICLES } from "@/content/registry";

export default function QuickSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof REGISTRY_ARTICLES>([]);

  const handleSearch = (val: string) => {
    setQuery(val);
    if (val.trim().length === 0) {
      setResults([]);
      return;
    }

    const filtered = REGISTRY_ARTICLES.filter(
      (art) =>
        art.title.toLowerCase().includes(val.toLowerCase()) ||
        art.summary.toLowerCase().includes(val.toLowerCase()) ||
        art.category.toLowerCase().includes(val.toLowerCase())
    ).slice(0, 5); // limit to top 5 hits

    setResults(filtered);
  };

  return (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="🔍 Search Knowledge OS..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px 14px",
          fontSize: "0.85rem",
          border: "1px solid #e2e8f0",
          borderRadius: "8px",
          outline: "none",
          background: "#f8fafc",
          color: "#0F172A",
          transition: "all 0.2s ease",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#0E8A8A")}
        onBlur={(e) => {
          // Delay blur to allow clicks on search results
          setTimeout(() => {
            e.target.style.borderColor = "#e2e8f0";
          }, 200);
        }}
      />
      {results.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "44px",
            left: 0,
            right: 0,
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
            zIndex: 10,
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {results.map((art) => {
            const catSlug = art.category.toLowerCase().replace(/\s+/g, '-');
            return (
              <a
                key={art.slug}
                href={`/knowledge/${catSlug}/${art.slug}`}
                style={{
                  display: "block",
                  padding: "8px 10px",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                  color: "#0C2E4A",
                  fontWeight: "700",
                  textDecoration: "none",
                  transition: "background 0.15s ease",
                }}
                className="hover-card"
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f8fafc")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                <div style={{ fontSize: "0.7rem", color: "#0E8A8A", textTransform: "uppercase", fontWeight: "800", marginBottom: "2px" }}>
                  {art.category}
                </div>
                {art.title}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
