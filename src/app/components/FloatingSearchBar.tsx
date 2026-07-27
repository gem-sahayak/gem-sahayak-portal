"use client";

import React, { useState } from "react";

export default function FloatingSearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/tools/bid-search?q=${encodeURIComponent(query.trim())}`;
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      style={{
        display: "flex",
        alignItems: "center",
        background: "#ffffff",
        border: "2px solid #e2e8f0",
        borderRadius: "9999px",
        padding: "6px 8px 6px 20px",
        boxShadow: "0 4px 24px rgba(12,46,74,0.10)",
        maxWidth: "520px",
        width: "100%",
        gap: "8px",
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
      onFocus={(e) => {
        (e.currentTarget as HTMLFormElement).style.borderColor = "#10B981";
        (e.currentTarget as HTMLFormElement).style.boxShadow =
          "0 4px 24px rgba(16,185,129,0.18)";
      }}
      onBlur={(e) => {
        (e.currentTarget as HTMLFormElement).style.borderColor = "#e2e8f0";
        (e.currentTarget as HTMLFormElement).style.boxShadow =
          "0 4px 24px rgba(12,46,74,0.10)";
      }}
    >
      <span style={{ fontSize: "1.1rem", color: "#64748b", flexShrink: 0 }}>
        🔍
      </span>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search tenders, categories, ministries..."
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          fontSize: "0.95rem",
          color: "#0F172A",
          background: "transparent",
          fontFamily: "inherit",
        }}
      />
      <button
        type="submit"
        style={{
          background: "linear-gradient(135deg, #0C2E4A 0%, #10B981 100%)",
          color: "#ffffff",
          border: "none",
          borderRadius: "9999px",
          padding: "10px 22px",
          fontSize: "0.9rem",
          fontWeight: "700",
          cursor: "pointer",
          whiteSpace: "nowrap",
          fontFamily: "inherit",
          transition: "transform 0.15s",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1.04)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLButtonElement).style.transform = "scale(1)")
        }
      >
        Search
      </button>
    </form>
  );
}
