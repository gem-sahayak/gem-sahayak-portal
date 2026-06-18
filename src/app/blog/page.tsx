import React from "react";
import { getSortedPostsData } from "@/lib/blog";

export const metadata = {
  title: "Knowledge Hub & Blog — GeM Sahayak",
  description: "Read the latest guides, compliance alerts, and bidding strategy articles to succeed on Government e-Marketplace (GeM India).",
};

export default function BlogHome() {
  const posts = getSortedPostsData();

  return (
    <div style={{ background: "var(--bg-light)", padding: "60px 0 80px 0" }}>
      <div className="container">
        {/* Blog Header */}
        <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(22, 163, 74, 0.1)", color: "#15803d", padding: "6px 14px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: "700", marginBottom: "16px" }}>
            📚 Knowledge Hub
          </div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "16px", color: "var(--primary-dark)" }}>
            GeM Portals Guides & Insights
          </h1>
          <p>
            Learn how to optimize your bidding rates, prevent technical rejections, and successfully scale your sales with India's government marketplace.
          </p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px", background: "white", borderRadius: "12px", border: "1px solid var(--border-light)" }}>
            <p>No posts published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-3">
            {posts.map((post) => (
              <article 
                key={post.slug} 
                style={{ 
                  background: "var(--bg-card)", 
                  border: "1px solid var(--border-light)", 
                  borderRadius: "16px", 
                  overflow: "hidden", 
                  boxShadow: "var(--shadow-md)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  cursor: "pointer"
                }}
              >
                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <span style={{ background: "rgba(22, 163, 74, 0.1)", color: "var(--primary-green)", fontSize: "0.75rem", padding: "4px 10px", borderRadius: "100px", fontWeight: "700" }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: "500" }}>
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 style={{ fontSize: "1.25rem", color: "var(--primary-dark)", marginBottom: "12px", lineHeight: "1.4" }}>
                    <a href={`/blog/${post.slug}`} className="hover-green">
                      {post.title}
                    </a>
                  </h3>
                  
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "20px", flex: 1 }}>
                    {post.summary}
                  </p>
                  
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border-light)", paddingTop: "16px", marginTop: "auto" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--primary-dark)", fontWeight: "600" }}>
                      ✍️ {post.author}
                    </span>
                    <a 
                      href={`/blog/${post.slug}`} 
                      style={{ 
                        color: "var(--primary-green)", 
                        fontSize: "0.85rem", 
                        fontWeight: "700", 
                        display: "inline-flex", 
                        alignItems: "center", 
                        gap: "4px" 
                      }}
                    >
                      Read Post →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
