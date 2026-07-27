import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Procurement Tools Directory | SahayakAI",
  description: "Explore SahayakAI's collection of free AI-powered tools for the GeM portal. Try our live demos for AI Bid Search, AI Catalog Dashboard, and AI Tender Analyzer.",
  alternates: {
    canonical: "https://sahayakai.co.in/tools"
  }
};

interface ToolCardProps {
  icon: string;
  name: string;
  description: string;
  features: string[];
  slug: string;
  isUpcoming?: boolean;
}

function ToolCard({ icon, name, description, features, slug, isUpcoming = false }: ToolCardProps) {
  return (
    <div style={{
      background: "#ffffff",
      border: "1px solid #e2e8f0",
      borderRadius: "16px",
      padding: "28px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      transition: "transform 0.2s, box-shadow 0.2s",
      cursor: isUpcoming ? "default" : "pointer",
    }}
    className={isUpcoming ? "" : "hover-card"}
    >
      <div>
        {/* Badges row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
          <span style={{ fontSize: "2rem" }}>{icon}</span>
          <div style={{ display: "flex", gap: "6px" }}>
            {isUpcoming ? (
              <span style={{ background: "#f1f5f9", color: "#475569", padding: "4px 8px", borderRadius: "100px", fontSize: "0.75rem", fontWeight: "700" }}>
                🚀 Launching Soon
              </span>
            ) : (
              <>
                <span style={{ background: "rgba(16, 185, 129, 0.1)", color: "#059669", padding: "4px 8px", borderRadius: "100px", fontSize: "0.75rem", fontWeight: "700", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
                  🧪 Beta Tool
                </span>
                <span style={{ background: "rgba(139, 92, 246, 0.1)", color: "#8b5cf6", padding: "4px 8px", borderRadius: "100px", fontSize: "0.75rem", fontWeight: "700" }}>
                  ⚡ Pro Tool
                </span>
              </>
            )}
          </div>
        </div>

        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "10px" }}>
          {name}
        </h3>
        
        <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: "1.5", marginBottom: "20px" }}>
          {description}
        </p>

        {/* Features list */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
          {features.map((feat, idx) => (
            <li key={idx} style={{ fontSize: "0.8rem", color: "#334155", display: "flex", gap: "6px", alignItems: "center" }}>
              <span style={{ color: isUpcoming ? "#94a3b8" : "#0E8A8A" }}>✔</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        {isUpcoming ? (
          <button disabled style={{
            width: "100%",
            background: "#f1f5f9",
            color: "#94a3b8",
            border: "none",
            padding: "10px",
            borderRadius: "8px",
            fontWeight: "700",
            fontSize: "0.85rem",
            cursor: "not-allowed"
          }}>
            Coming Soon
          </button>
        ) : (
          <a href={`/tools/${slug}`} style={{
            display: "block",
            width: "100%",
            background: "#0E8A8A",
            color: "#ffffff",
            textAlign: "center",
            padding: "10px",
            borderRadius: "8px",
            fontWeight: "700",
            fontSize: "0.85rem",
            textDecoration: "none",
            boxShadow: "0 2px 4px rgba(14, 138, 138, 0.1)",
            transition: "background 0.2s"
          }}
          className="btn-try-demo"
          >
            Try Beta Tool →
          </a>
        )}
      </div>
    </div>
  );
}

export default function ToolsPage() {
  const liveTools = [
    {
      icon: "🔍",
      name: "AI Bid Search",
      description: "Filter and locate active GeM portal bids instantly using simple, natural language query commands.",
      features: ["Natural language filters", "State/City mappings", "Cache search indexing"],
      slug: "bid-search"
    },
    {
      icon: "📂",
      name: "AI Catalog Dashboard",
      description: "Get GeM compliance category paths, golden codes, and tech specs before listing products.",
      features: ["Category path generation", "Keyword suggestions", "Purchase threshold guidance"],
      slug: "ai-catalog-dashboard"
    },
    {
      icon: "📄",
      name: "AI Tender Document Analyzer",
      description: "Analyze complex PDF tenders and extract technical criteria, compliance, and bid deadlines in seconds.",
      features: ["Exemptions detection", "L1 criteria extraction", "Risk indicators scoring"],
      slug: "tender-summarizer"
    }
  ];

  const upcomingTools = [
    {
      icon: "📊",
      name: "Margin Calculator",
      description: "Calculate logistics, taxes, GeM transaction charges and estimated seller margins before preparing your quotation.",
      features: ["GST & Tax Slabs", "Freight & Logistics", "Packaging & Insurance", "GeM Transaction Fees", "Net Margin Breakdown"]
    },
    {
      icon: "📝",
      name: "Clarification Generator",
      description: "Draft representation letters for restrictive clauses to submit to portal buyers.",
      features: ["Exemption references", "Formal letter output", "Buyer templates support"]
    },
    {
      icon: "🛡️",
      name: "Rebuttal Generator",
      description: "Generate official appeals against incorrect technical bid disqualifications.",
      features: ["MSE compliance evidence", "Tender clause references", "48-hour timeline alerts"]
    },
    {
      icon: "🏭",
      name: "OEM Checker",
      description: "Validate manufacturer authorization parameters and authorized reseller scopes.",
      features: ["MAF checklist verification", "Reseller listing checker", "OEM direct validation"]
    }
  ];

  return (
    <div style={{ background: "#f8fafc", padding: "60px 0 80px 0" }}>
      <div className="container" style={{ maxWidth: "1200px" }}>
        
        {/* Header Block */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{ display: "inline-block", background: "rgba(16, 185, 129, 0.1)", color: "#059669", padding: "6px 16px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: "700", marginBottom: "16px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
            🧪 Available Free During Public Beta
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "12px", letterSpacing: "-0.5px" }}>
            SahayakAI Tools Directory
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748b", maxWidth: "700px", margin: "0 auto", lineHeight: "1.5" }}>
            Explore our live interactive beta tools built to simplify government bidding on the GeM portal.
          </p>
        </div>

        {/* Section 1: Live Beta Tools */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
            🧪 Live Public Beta Tools
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
            {liveTools.map((tool, idx) => (
              <ToolCard
                key={idx}
                icon={tool.icon}
                name={tool.name}
                description={tool.description}
                features={tool.features}
                slug={tool.slug}
              />
            ))}
          </div>
        </div>

        {/* Section 2: Flagship Platform Foundation */}
        <div style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
            🚀 The Future of SahayakAI
          </h2>
          
          <div style={{
            background: "linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            borderRadius: "20px",
            padding: "36px",
            boxShadow: "0 12px 32px rgba(14, 165, 233, 0.08)",
            position: "relative",
            overflow: "hidden"
          }}>
            {/* Top subtle accent bar */}
            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: "4px",
              background: "linear-gradient(90deg, #3B82F6, #10B981, #6366F1)"
            }} />

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ fontSize: "2.5rem" }}>🧠</span>
                <div>
                  <h3 style={{ fontSize: "1.65rem", fontWeight: "800", color: "#0C2E4A", margin: 0, letterSpacing: "-0.02em" }}>
                    Sahayak AI Workspace
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#0284C7", fontWeight: "700", margin: "3px 0 0 0" }}>
                    Flagship AI Procurement Assistant
                  </p>
                </div>
              </div>
              <span style={{
                background: "rgba(59, 130, 246, 0.12)",
                color: "#2563EB",
                padding: "6px 16px",
                borderRadius: "100px",
                fontSize: "0.82rem",
                fontWeight: "800",
                border: "1px solid rgba(59, 130, 246, 0.25)"
              }}>
                🚀 Future Platform
              </span>
            </div>

            <p style={{ fontSize: "1.05rem", color: "#334155", lineHeight: "1.65", marginBottom: "28px", maxWidth: "920px" }}>
              Your complete procurement business in one secure workspace. Manage your business profile, documents, catalogues, compliance, AI memory, procurement intelligence, and future procurement platforms—all from one place.
            </p>

            {/* Feature Bullets Container */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px 24px",
              marginBottom: "32px",
              background: "rgba(255, 255, 255, 0.85)",
              padding: "20px 24px",
              borderRadius: "14px",
              border: "1px solid rgba(226, 232, 240, 0.9)"
            }}>
              {[
                "Business Profile",
                "Secure Document Vault",
                "Smart AI Insights",
                "Catalogue Manager",
                "Tender Workspace",
                "Compliance Center",
                "Smart AI Recommendations",
                "Team Management",
                "Procurement Analytics",
                "Unified Portal Workspace"
              ].map((feat, idx) => (
                <div key={idx} style={{ fontSize: "0.9rem", color: "#0F172A", fontWeight: "600", display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ color: "#10B981", fontWeight: "800" }}>✓</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Bottom Row: Trust Badge & Button */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", paddingTop: "18px", borderTop: "1px solid rgba(226, 232, 240, 0.9)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#475569", fontWeight: "600" }}>
                <span style={{ fontSize: "1rem" }}>🔒</span>
                <span>Enterprise-grade security with transparent, optional permissions</span>
              </div>

              <button disabled style={{
                background: "#E2E8F0",
                color: "#475569",
                border: "none",
                padding: "10px 24px",
                borderRadius: "8px",
                fontWeight: "700",
                fontSize: "0.88rem",
                cursor: "not-allowed"
              }}>
                Designed together with Beta Members.
              </button>
            </div>
          </div>
        </div>

        {/* Section 3: Launching Soon */}
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px" }}>
            ✨ Upcoming Beta Tools
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
            {upcomingTools.map((tool, idx) => (
              <ToolCard
                key={idx}
                icon={tool.icon}
                name={tool.name}
                description={tool.description}
                features={tool.features}
                slug=""
                isUpcoming={true}
              />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .hover-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
        }
        .btn-try-demo:hover {
          background: #0b6b6b !important;
        }
      `}</style>
    </div>
  );
}
