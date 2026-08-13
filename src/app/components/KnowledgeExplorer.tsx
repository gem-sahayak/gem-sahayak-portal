"use client";

import React, { useState, useMemo } from "react";
import { RegistryArticle } from "@/content/registry";

interface KnowledgeExplorerProps {
  articles: RegistryArticle[];
}

const CATEGORIES_FILTER = [
  { id: "all", name: "All Topics", icon: "🌐" },
  { id: "gem-registration", name: "Registration", icon: "👤" },
  { id: "gem-bidding", name: "Bidding", icon: "📈" },
  { id: "catalog-management", name: "Catalog", icon: "📂" },
  { id: "compliance-policy", name: "Compliance", icon: "🛡️" },
  { id: "government-procurement", name: "Govt Procurement", icon: "🏛️" },
];

const ITEMS_PER_PAGE = 12;

export default function KnowledgeExplorer({ articles }: KnowledgeExplorerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredArticles = useMemo(() => {
    return articles.filter((post) => {
      const catSlug = post.category.toLowerCase().replace(/\s+/g, "-");
      const matchesCategory =
        activeCategory === "all" ||
        catSlug === activeCategory ||
        post.category.toLowerCase() === activeCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.summary.toLowerCase().includes(q) ||
        post.slug.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [articles, searchQuery, activeCategory]);

  const displayedArticles = useMemo(() => {
    return filteredArticles.slice(0, visibleCount);
  }, [filteredArticles, visibleCount]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <div style={{ marginBottom: "48px" }}>
      {/* Search & Filter Header */}
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e2e8f0",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 4px 20px rgba(12, 46, 74, 0.05)",
          marginBottom: "28px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Search Bar Input */}
          <div style={{ position: "relative", width: "100%" }}>
            <span
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "1.1rem",
                color: "#64748b",
              }}
            >
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search 150+ GeM portal bidding guides, error fixes, Udyam rules & policy articles..."
              style={{
                width: "100%",
                padding: "14px 16px 14px 48px",
                borderRadius: "12px",
                border: "2px solid #cbd5e1",
                fontSize: "0.95rem",
                color: "#0f172a",
                outline: "none",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxSizing: "border-box",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#0E8A8A";
                e.target.style.boxShadow = "0 0 0 3px rgba(14, 138, 138, 0.15)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#cbd5e1";
                e.target.style.boxShadow = "none";
              }}
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setVisibleCount(ITEMS_PER_PAGE);
                }}
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "#94a3b8",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              alignItems: "center",
            }}
          >
            {CATEGORIES_FILTER.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, #0C2E4A 0%, #0E8A8A 100%)"
                      : "#f1f5f9",
                    color: isActive ? "#ffffff" : "#475569",
                    border: isActive
                      ? "1px solid #0E8A8A"
                      : "1px solid #e2e8f0",
                    padding: "8px 16px",
                    borderRadius: "9999px",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter Sub-bar */}
        <div
          style={{
            marginTop: "16px",
            paddingTop: "12px",
            borderTop: "1px solid #f1f5f9",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.82rem",
            color: "#64748b",
          }}
        >
          <div>
            Showing <strong style={{ color: "#0C2E4A" }}>{displayedArticles.length}</strong> of{" "}
            <strong style={{ color: "#0C2E4A" }}>{filteredArticles.length}</strong> guides
            {searchQuery && (
              <span>
                {" "}
                matching &quot;<strong style={{ color: "#0E8A8A" }}>{searchQuery}</strong>&quot;
              </span>
            )}
          </div>
          <div style={{ fontWeight: 600, color: "#10B981" }}>
            📚 150+ Total Knowledge Base Index
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      {displayedArticles.length === 0 ? (
        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "48px 24px",
            textAlign: "center",
            border: "1px dashed #cbd5e1",
          }}
        >
          <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "12px" }}>🔍</span>
          <h3 style={{ fontSize: "1.2rem", color: "#0C2E4A", marginBottom: "8px" }}>
            Koi guide nahi mili
          </h3>
          <p style={{ fontSize: "0.9rem", color: "#64748b", maxWidth: "450px", margin: "0 auto 16px auto" }}>
            Aapki query &quot;{searchQuery}&quot; ke liye koi article nahi mila. Alag search term try karein ya category change karein.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("all");
            }}
            style={{
              background: "#0E8A8A",
              color: "white",
              border: "none",
              padding: "8px 20px",
              borderRadius: "9999px",
              fontWeight: 700,
              fontSize: "0.85rem",
              cursor: "pointer",
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          {displayedArticles.map((post) => {
            const categorySlug = post.category.toLowerCase().replace(/\s+/g, "-");
            return (
              <a
                key={post.slug}
                href={`/knowledge/${categorySlug}/${post.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "14px",
                    padding: "20px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                  }}
                  className="hover-card"
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <span
                        style={{
                          background: "rgba(14, 138, 138, 0.1)",
                          color: "#0E8A8A",
                          fontSize: "0.74rem",
                          padding: "3px 10px",
                          borderRadius: "100px",
                          fontWeight: 700,
                          border: "1px solid rgba(14, 138, 138, 0.2)",
                        }}
                      >
                        {post.category}
                      </span>
                      {post.date && (
                        <span style={{ fontSize: "0.72rem", color: "#94a3b8" }}>
                          {post.date}
                        </span>
                      )}
                    </div>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "#0C2E4A",
                        lineHeight: 1.4,
                        marginBottom: "8px",
                      }}
                    >
                      {post.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "#64748b",
                        lineHeight: 1.55,
                        margin: 0,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.summary}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "16px",
                      paddingTop: "12px",
                      borderTop: "1px solid #f1f5f9",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      color: "#0E8A8A",
                    }}
                  >
                    <span>Read Full Guide</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}

      {/* Load More Button */}
      {displayedArticles.length < filteredArticles.length && (
        <div style={{ textAlign: "center", marginTop: "24px" }}>
          <button
            onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
            style={{
              background: "#ffffff",
              color: "#0C2E4A",
              border: "2px solid #0C2E4A",
              padding: "12px 32px",
              borderRadius: "9999px",
              fontWeight: 800,
              fontSize: "0.9rem",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              transition: "transform 0.15s, background 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#0C2E4A";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#ffffff";
              e.currentTarget.style.color = "#0C2E4A";
            }}
          >
            Show More Guides ({filteredArticles.length - displayedArticles.length} remaining) ↓
          </button>
        </div>
      )}
    </div>
  );
}
