import React from "react";
import type { Metadata } from "next";
import { REGISTRY_ARTICLES } from "@/content/registry";

export const metadata: Metadata = {
  title: "Knowledge Hub & Bidding Guides — SahayakAI",
  description: "Explore our comprehensive public procurement Knowledge Hub. Get step-by-step guides on GeM Portal registration, bidding compliance, and HSN searches.",
  alternates: {
    canonical: "https://sahayakai.co.in/knowledge"
  }
};

const SECTIONS = [
  { slug: "gem-registration", name: "Registration Hub", icon: "👤", desc: "Troubleshoot Udyam matching, PAN verification, and profile approval." },
  { slug: "gem-bidding", name: "Bidding Strategies", icon: "📈", desc: "Learn bid compilation, technical parameters check, and Commercial Terms & Evaluation." },
  { slug: "catalog-management", name: "Catalogue Management", icon: "📂", desc: "Pair products, OEM dashboard setup, and HSN description optimization." },
  { slug: "compliance-policy", name: "Compliance & GFR", icon: "🛡️", desc: "Waiver rules, GFR 2017 circular details, and MII parameters." },
  { slug: "government-updates", name: "Government Updates", icon: "📰", desc: "Stay informed on the latest marketplace portal updates and policy shifts." },
  { slug: "case-studies", name: "Case Studies & Success", icon: "🏆", desc: "Real-world stories of how Indian MSMEs scaled their sales." }
];

export default function KnowledgeHubHome() {
  const posts = REGISTRY_ARTICLES;

  // Pick popular / trending posts
  const popularGuides = posts.slice(0, 3);
  const recentlyUpdated = posts.slice(0, 5);

  return (
    <div style={{ background: "#f8fafc", padding: "60px 0 80px 0" }}>
      <div className="container" style={{ maxWidth: "1100px" }}>
        
        {/* Hub Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(14, 138, 138, 0.1)", color: "#0E8A8A", padding: "6px 14px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: "700", marginBottom: "16px" }}>
            📚 Knowledge Hub & Guides
          </div>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "16px", letterSpacing: "-0.5px" }}>
            Government Procurement Simplified
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.6" }}>
            Learn how to register as a seller, list your catalogue compliantly, and optimize your bids on the Government e-Marketplace (GeM) Portal.
          </p>
        </div>

        {/* 🇮🇳 Trust Banner */}
        <div style={{ 
          background: "linear-gradient(135deg, rgba(14, 138, 138, 0.03) 0%, rgba(13, 33, 55, 0.05) 100%)", 
          border: "1px solid rgba(226, 232, 240, 0.8)", 
          borderRadius: "12px", 
          padding: "20px 24px", 
          marginBottom: "40px", 
          textAlign: "center" 
        }}>
          <span style={{ fontSize: "1.2rem", marginRight: "8px" }}>🇮🇳</span>
          <strong style={{ color: "#0C2E4A" }}>Proudly Supporting Indian Businesses:</strong>
          <span style={{ color: "#475569", marginLeft: "8px" }}>
            AI-Powered &bull; Compliance-First &bull; Independent Technology Platform
          </span>
        </div>

        {/* Categories Grid */}
        <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "20px" }}>
          Knowledge Categories
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "48px" }}>
          {SECTIONS.map((sec) => (
            <a key={sec.slug} href={`/knowledge/${sec.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "24px", height: "100%", transition: "transform 0.2s ease, box-shadow 0.2s ease", cursor: "pointer" }} className="hover-card">
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "12px" }}>{sec.icon}</span>
                <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#0C2E4A", marginBottom: "8px" }}>{sec.name}</h3>
                <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0, lineHeight: "1.5" }}>{sec.desc}</p>
              </div>
            </a>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "32px" }}>
          
          {/* Recently Updated */}
          <div>
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "20px" }}>
              Recently Updated Articles
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {recentlyUpdated.map((post) => {
                const categorySlug = post.category.toLowerCase().replace(/\s+/g, '-');
                return (
                  <a key={post.slug} href={`/knowledge/${categorySlug}/${post.slug}`} style={{ textDecoration: "none" }}>
                    <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "16px" }} className="hover-card">
                      <span style={{ background: "rgba(14, 138, 138, 0.1)", color: "#0E8A8A", fontSize: "0.75rem", padding: "2px 8px", borderRadius: "100px", fontWeight: "700", display: "inline-block", marginBottom: "8px" }}>
                        {post.category}
                      </span>
                      <h3 style={{ fontSize: "1rem", fontWeight: "700", color: "#0C2E4A", marginBottom: "6px" }}>{post.title}</h3>
                      <p style={{ fontSize: "0.8rem", color: "#64748b", margin: 0 }}>{post.date} &bull; Read Guide →</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Popular Guides & Quick Tools Link */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            <div>
              <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "20px" }}>
                Popular Guides
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {popularGuides.map((post) => {
                  const categorySlug = post.category.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <a key={post.slug} href={`/knowledge/${categorySlug}/${post.slug}`} style={{ textDecoration: "none" }}>
                      <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "16px" }} className="hover-card">
                        <h3 style={{ fontSize: "0.95rem", fontWeight: "700", color: "#0C2E4A", marginBottom: "6px" }}>{post.title}</h3>
                        <p style={{ fontSize: "0.8rem", color: "#64748b", margin: 0 }}>View Popular Tutorial →</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* AI Tools CTA Card */}
            <div style={{ background: "linear-gradient(135deg, #0C2E4A 0%, #071f33 100%)", color: "white", borderRadius: "14px", padding: "24px" }}>
              <span style={{ fontSize: "2rem" }}>🛠️</span>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "800", marginTop: "12px", marginBottom: "8px" }}>
                AI Bidding Assistance Tools
              </h3>
              <p style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: "20px", lineHeight: "1.5" }}>
                Try our free independent suite of AI tools to parse tender requirements, check startup eligibility, and calculate transaction margins.
              </p>
              <a href="/tools" style={{ display: "inline-block", background: "#0E8A8A", color: "white", padding: "10px 20px", borderRadius: "6px", fontWeight: "700", fontSize: "0.85rem", textDecoration: "none" }}>
                Open Tools Directory
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
