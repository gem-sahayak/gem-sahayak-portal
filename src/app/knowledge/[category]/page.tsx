import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { REGISTRY_ARTICLES } from "@/content/registry";

interface CategoryInfo {
  name: string;
  description: string;
  longDescription: string;
}

const CATEGORIES_DATA: Record<string, CategoryInfo> = {
  "gem-registration": {
    name: "GeM Registration",
    description: "Guides and troubleshooting for primary seller account registration on GeM.",
    longDescription: "Step-by-step documentation covering seller profile setup, Udyam Aadhaar verification, PAN card validation, bank account links, and vendor assessments."
  },
  "gem-bidding": {
    name: "GeM Bidding Strategies",
    description: "Advanced strategies to participate, compete, and succeed in tenders on GeM.",
    longDescription: "Learn how government purchase criteria work, technical bidding checklists, reverse auction rules, and drafting representation replies."
  },
  "catalog-management": {
    name: "Catalogue Management",
    description: "Guidelines to upload products, OEM registrations, and manage listings.",
    longDescription: "A complete reference for HSN mapping, OEM dashboard panel activation, pairing products, generic vs brand approvals, and resolving upload rejects."
  },
  "compliance-policy": {
    name: "Compliance & Government Policy",
    description: "Public procurement rules, GFR 2017 policies, and purchase preferences.",
    longDescription: "Detailed breakdowns of the Make In India (MII) preference, MSE exemptions, EMD waivers, and compliance audits for government audits."
  },
  "government-procurement": {
    name: "Government Procurement Hub",
    description: "General guidelines and principles of Indian public procurement.",
    longDescription: "Articles explaining the General Financial Rules (GFR), Central Public Procurement Portal (CPPP) mappings, and vendor eligibility limits."
  }
};

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CATEGORIES_DATA).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const data = CATEGORIES_DATA[category];
  if (!data) return {};

  return {
    title: `${data.name} Guides & Tutorials — SahayakAI`,
    description: `${data.description} Learn how to succeed on GeM with our independent tutorials.`,
    alternates: {
      canonical: `https://sahayakai.com/knowledge/${category}`
    }
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const data = CATEGORIES_DATA[category];

  if (!data) {
    notFound();
  }

  // Filter posts that belong to this category (using a simple slug/category filter)
  const allPosts = REGISTRY_ARTICLES;
  const categoryPosts = allPosts.filter(post => {
    const postCategorySlug = post.category.toLowerCase().replace(/\s+/g, '-');
    return postCategorySlug === category;
  });

  return (
    <div style={{ background: "#f8fafc", padding: "60px 0 80px 0" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        
        {/* Category Header */}
        <div style={{ marginBottom: "40px" }}>
          <a href="/knowledge" style={{ color: "#0E8A8A", textDecoration: "none", fontSize: "0.9rem", fontWeight: "700" }}>
            ← Back to Knowledge Hub
          </a>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#0C2E4A", marginTop: "16px", marginBottom: "12px", letterSpacing: "-0.5px" }}>
            {data.name}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.6" }}>
            {data.longDescription}
          </p>
        </div>

        {/* Disclaimer banner */}
        <div style={{ background: "#f1f5f9", borderRadius: "8px", padding: "12px 16px", marginBottom: "32px", fontSize: "0.82rem", color: "#475569" }}>
          ⚠️ <strong>Disclaimer:</strong> SahayakAI is an independent helper tool. This guide is for educational purposes. Access official resources directly on <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: "#0E8A8A", textDecoration: "underline" }}>gem.gov.in</a>.
        </div>

        {/* Article list */}
        <h2 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "20px" }}>
          Articles in this Category
        </h2>

        {categoryPosts.length === 0 ? (
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "40px", textAlign: "center" }}>
            <span style={{ fontSize: "2rem" }}>📚</span>
            <p style={{ color: "#64748b", fontSize: "0.9rem", marginTop: "12px" }}>
              Guides coming soon! Check back for updates.
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {categoryPosts.map((post) => (
              <a
                key={post.slug}
                href={`/knowledge/${category}/${post.slug}`}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px", transition: "transform 0.2s ease, box-shadow 0.2s ease", cursor: "pointer" }}
                  className="hover-card"
                >
                  <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0C2E4A", marginBottom: "6px" }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#64748b", margin: 0 }}>
                    {post.date} • Read Guide →
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
