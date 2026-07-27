import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { loadArticle } from "@/lib/content/contentLoader";
import { REGISTRY_ARTICLES } from "@/content/registry";
import { generateSeoMetadata } from "@/lib/seo/metadata";
import { getRelatedArticles } from "@/lib/seo/linking";

// Import reusable client components
import TableOfContents from "./components/TableOfContents";
import FaqAccordion from "./components/FaqAccordion";
import InteractiveAiRecommendation from "./components/InteractiveAiRecommendation";
import CollapsibleDisclaimer from "./components/CollapsibleDisclaimer";
import QuickSearch from "./components/QuickSearch";
import QuickActions from "./components/QuickActions";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return REGISTRY_ARTICLES.map((post) => ({
    category: post.category.toLowerCase().replace(/\s+/g, '-'),
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = await loadArticle(slug);
  if (!post) return {};

  const expectedCategorySlug = post.category.toLowerCase().replace(/\s+/g, '-');
  if (expectedCategorySlug !== category) return {};

  return generateSeoMetadata({
    title: `${post.title} — SahayakAI`,
    description: post.summary,
    path: `/knowledge/${category}/${slug}`,
    keywords: [post.title, post.category, 'gem tutorials', 'procurement guide'],
    ogType: 'article'
  });
}

export default async function KnowledgeArticle({ params }: PageProps) {
  const { category, slug } = await params;
  const post = await loadArticle(slug);

  if (!post) {
    notFound();
  }

  const expectedCategorySlug = post.category.toLowerCase().replace(/\s+/g, '-');
  if (expectedCategorySlug !== category) {
    notFound();
  }

  // Related guides & nodes
  const relatedArticles = getRelatedArticles(post.slug, 3);
  const trendingArticles = REGISTRY_ARTICLES.slice(0, 4);

  // Dynamic Summary calculations (Procurement OS v8.1 Spec)
  let problem = "GeM portal validation and synchronization delays.";
  let shortAnswer = "Verify details match corporate registrar databases, check API sync times, and re-trigger manual verification on the portal.";
  let cause = "Database mismatch or missing compliance declarations.";
  let fixTime = "24-48 Hours";
  let officialRule = "GFR 2017 Rule 149 compliant";
  let recommendedToolName = "AI Bid Search";
  let recommendedToolLink = "/tools/bid-search";
  let difficulty = "Easy";
  let applicableUsers = "MSME, Startup, OEM, Manufacturer, Trader";
  let exemptionTarget = "Registered MSMEs on GeM with valid UDYAM Certificate";

  if (slug === "udyam-error") {
    problem = "Udyam registration validation mismatch on GeM portal.";
    shortAnswer = "Update spelling in Udyam Aadhaar and verify after database sync. Re-trigger validation on GeM profile page.";
    cause = "Organization name spelling mismatches or PAN database verification delay.";
    fixTime = "24-48 Hours";
    officialRule = "GeM Registration Directive 2026";
    recommendedToolName = "Tender Eligibility Checker";
    recommendedToolLink = "/tools/bid-analyzer";
    difficulty = "Easy";
    applicableUsers = "MSME, Startup, Trader";
    exemptionTarget = "Registered MSMEs on GeM with valid UDYAM Certificate";
  } else if (slug === "gem-portal-direct-purchase-limit-rules-2026") {
    problem = "Compliance issues with direct purchases on the portal.";
    shortAnswer = "Direct purchases are allowed up to ₹50,000. For ₹50,000 to ₹10,000,000, L1 comparison of 3 sellers is mandatory.";
    cause = "L1 comparison mandates not met or price comparison criteria violated.";
    fixTime = "5 Mins Check";
    officialRule = "GFR 2017 Rule 149 (i) Slabs";
    recommendedToolName = "L1 Margin Calculator";
    recommendedToolLink = "/tools/bid-analyzer";
    difficulty = "Medium";
    applicableUsers = "OEM, Manufacturer, Trader";
    exemptionTarget = "All government buyers and sellers transacting on GeM";
  } else if (slug === "how-to-claim-emd-exemption-gem-portal-bids") {
    problem = "Rejection of EMD exemption claims in bids.";
    shortAnswer = "Provide valid Udyam registration, verify your NIC codes match bid criteria, and select EMD waiver option in bid upload.";
    cause = "Incorrect NIC code matching in Udyam Certificate uploads.";
    fixTime = "10 Mins Check";
    officialRule = "DoE Mandate on MSE Procurement Preference";
    recommendedToolName = "AI Tender Analyzer";
    recommendedToolLink = "/tools/bid-analyzer";
    difficulty = "Easy";
    applicableUsers = "MSME, Startup, Manufacturer";
    exemptionTarget = "Registered MSMEs on GeM with valid UDYAM Certificate";
  } else if (slug === "how-to-search-gem-tenders") {
    problem = "Missing relevant bids due to poor search parameters.";
    shortAnswer = "Use exact Bid Number format on BidPlus portal or use SahayakAI's AI Bid Search for fuzzy keyword matches.";
    cause = "Limitations in standard keyword filters on the official search tool.";
    fixTime = "3 Mins Check";
    officialRule = "BidPlus Search Guidelines";
    recommendedToolName = "AI Bid Search";
    recommendedToolLink = "/tools/bid-search";
    difficulty = "Easy";
    applicableUsers = "MSME, OEM, Trader";
    exemptionTarget = "Sellers searching for active bids on the portal";
  }

  // Schema generation
  const schemas: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sahayakai.com" },
        { "@type": "ListItem", "position": 2, "name": "Knowledge Hub", "item": "https://sahayakai.com/knowledge" },
        { "@type": "ListItem", "position": 3, "name": post.category, "item": `https://sahayakai.com/knowledge/${category}` },
        { "@type": "ListItem", "position": 4, "name": post.title, "item": `https://sahayakai.com/knowledge/${category}/${slug}` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": post.title,
      "description": post.summary,
      "datePublished": post.date,
      "dateModified": post.updatedDate || post.date,
      "author": { "@type": "Organization", "name": post.author, "url": "https://sahayakai.com" },
      "publisher": {
        "@type": "Organization",
        "name": "SahayakAI",
        "logo": { "@type": "ImageObject", "url": "https://sahayakai.com/logo_symbol.png" }
      }
    }
  ];

  return (
    <div style={{ background: "#f8fafc", padding: "40px 0 80px 0" }}>
      {/* Schema Injection */}
      {schemas.map((s, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* Main Container (1320px Centered) */}
      <div className="container" style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 24px" }}>
        
        {/* 2-Column Documentation Workspace Grid (250px Sticky TOC | 1fr Documentation Workspace | Gap: 40px) */}
        <div className="workspace-layout-grid" style={{ display: "grid", gridTemplateColumns: "250px 1fr", gap: "40px" }}>
          
          {/* Left Column: Sticky Knowledge Navigator TOC */}
          <div className="left-sidebar-col" style={{ position: "sticky", top: "100px", alignSelf: "start" }}>
            <TableOfContents headings={post.headings || []} />
          </div>

          {/* Center Column: Core Content Workspace (900px-920px Reading Width) */}
          <div className="article-main-col" style={{ minWidth: 0, maxWidth: "920px", display: "flex", flexDirection: "column", gap: "40px" }}>
            
            {/* Core Header Section */}
            <div>
              {/* Breadcrumbs */}
              <nav style={{ fontSize: "0.85rem", color: "#64748b", marginBottom: "16px" }} aria-label="Breadcrumb">
                <a href="/" style={{ color: "#64748b", textDecoration: "none" }}>Home</a>
                <span style={{ margin: "0 8px" }}>&gt;</span>
                <a href="/knowledge" style={{ color: "#64748b", textDecoration: "none" }}>Knowledge OS</a>
                <span style={{ margin: "0 8px" }}>&gt;</span>
                <a href={`/knowledge/${category}`} style={{ color: "#0E8A8A", textDecoration: "none", fontWeight: "700" }}>{post.category}</a>
                <span style={{ margin: "0 8px" }}>&gt;</span>
                <span style={{ color: "#475569" }}>{post.title}</span>
              </nav>

              {/* Progress Tracker (Linear scroll-synced look) */}
              <div style={{ background: "#e2e8f0", height: "4px", borderRadius: "2px", overflow: "hidden", marginBottom: "24px" }}>
                <div style={{ background: "#0E8A8A", height: "100%", width: "45%" }}></div>
              </div>

              {/* Badges Row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "16px" }}>
                <span className="glow-badge" style={{ background: "rgba(14, 138, 138, 0.08)", color: "#0E8A8A", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.78rem", fontWeight: "700" }}>
                  📁 {post.category}
                </span>
                <span className="glow-badge" style={{ background: "#eff6ff", color: "#2563eb", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.78rem", fontWeight: "700" }}>
                  🛡️ Verified Guide
                </span>
                <span className="glow-badge" style={{ background: "#f5f3ff", color: "#7c3aed", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.78rem", fontWeight: "700" }}>
                  ⏱️ {post.readingTime || "6 mins"} read
                </span>
                <span className="glow-badge" style={{ background: "#f0fdf4", color: "#16a34a", padding: "4px 12px", borderRadius: "9999px", fontSize: "0.78rem", fontWeight: "700" }}>
                  📅 Updated: July 2026
                </span>
              </div>

              {/* Main Heading H1 (Documentation scale) */}
              <h1 style={{ fontSize: "clamp(2.2rem, 3.8vw, 3rem)", fontWeight: "800", color: "#0C2E4A", marginBottom: "16px", lineHeight: "1.15", letterSpacing: "-0.03em" }}>
                {post.title}
              </h1>

              {/* Summary description paragraph */}
              <p style={{ fontSize: "1.15rem", color: "#475569", lineHeight: "1.65", marginBottom: "24px" }}>
                {post.summary}
              </p>

              {/* Stats matrix inline badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "24px" }}>
                <span style={{ fontSize: "0.88rem", color: "#475569", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  📈 <strong>Difficulty:</strong> {difficulty}
                </span>
                <span style={{ fontSize: "0.88rem", color: "#475569", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  ⏱️ <strong>Resolution Time:</strong> {fixTime}
                </span>
                <span style={{ fontSize: "0.88rem", color: "#475569", display: "inline-flex", alignItems: "center", gap: "6px" }}>
                  👥 <strong>For:</strong> {applicableUsers}
                </span>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "16px" }}>
                <a
                  href={recommendedToolLink}
                  className="btn-teal-primary"
                  style={{ padding: "0 24px", height: "48px", borderRadius: "12px", fontWeight: "700", fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
                >
                  Open {recommendedToolName} →
                </a>
                <a
                  href="https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-secondary"
                  style={{ padding: "0 24px", height: "48px", borderRadius: "12px", fontWeight: "700", fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
                >
                  🧩 Install Extension
                </a>
              </div>
            </div>

            {/* QUICK ANSWER CARD (Light Green / 4-Column Matrix / Footer Highlight) */}
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "20px" }}>
              <h3 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#15803d", display: "flex", alignItems: "center", gap: "6px", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                ⚡ Quick Answer
              </h3>
              
              {/* 4 Equal Cards Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "16px" }}>
                <div style={{ background: "#ffffff", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "16px" }}>
                  <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: "800", display: "block", marginBottom: "6px" }}>🚨 PROBLEM</span>
                  <span style={{ fontSize: "0.88rem", color: "#0C2E4A", fontWeight: "700", lineHeight: "1.4" }}>EMD blocks your working capital.</span>
                </div>
                <div style={{ background: "#ffffff", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "16px" }}>
                  <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: "800", display: "block", marginBottom: "6px" }}>✅ SOLUTION</span>
                  <span style={{ fontSize: "0.88rem", color: "#0C2E4A", fontWeight: "700", lineHeight: "1.4" }}>Eligible MSMEs can claim EMD exemption.</span>
                </div>
                <div style={{ background: "#ffffff", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "16px" }}>
                  <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: "800", display: "block", marginBottom: "6px" }}>📜 RULE</span>
                  <span style={{ fontSize: "0.88rem", color: "#0C2E4A", fontWeight: "700", lineHeight: "1.4" }}>DoE MSE Procurement Preference.</span>
                </div>
                <div style={{ background: "#ffffff", border: "1px solid #bbf7d0", borderRadius: "12px", padding: "16px" }}>
                  <span style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: "800", display: "block", marginBottom: "6px" }}>🎁 BENEFIT</span>
                  <span style={{ fontSize: "0.88rem", color: "#0C2E4A", fontWeight: "700", lineHeight: "1.4" }}>Bid on tenders without EMD.</span>
                </div>
              </div>

              {/* Green Alert Footer Pill */}
              <div style={{ background: "rgba(22, 163, 74, 0.06)", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "12px 18px", fontSize: "0.88rem", color: "#15803d", fontWeight: "700" }}>
                <strong>Who Can Claim:</strong> {exemptionTarget}
              </div>
            </div>

            {/* Core Guide Body Card (Parsed compile-time markdown) */}
            <div className="fade-up" style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "36px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)" }}>
              
              {/* Trust Layer metadata block */}
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px", borderBottom: "1px solid #f1f5f9", paddingBottom: "16px", marginBottom: "28px", fontSize: "0.82rem", color: "#64748b" }}>
                <span>✍️ <strong>By:</strong> {post.author}</span>
                <span>📅 <strong>Last Updated:</strong> {post.updatedDate || post.date}</span>
                <span>🛡️ <strong>Verified by:</strong> Compliance Officer Desk</span>
              </div>

              {/* Core Guide Body with Mid-Article Converter Injection */}
              {(() => {
                const html = post.contentHtml || "";
                const h2Matches = [...html.matchAll(/<h2/gi)];
                
                let injectIndex = -1;
                if (h2Matches.length >= 3) {
                  injectIndex = h2Matches[2].index;
                } else if (h2Matches.length >= 2) {
                  injectIndex = h2Matches[1].index;
                } else {
                  const pMatches = [...html.matchAll(/<p/gi)];
                  if (pMatches.length >= 2) {
                    const midP = Math.floor(pMatches.length / 2);
                    injectIndex = pMatches[midP].index;
                  } else if (html.length > 500) {
                    injectIndex = Math.floor(html.length / 2);
                  }
                }

                if (injectIndex > 0) {
                  const part1 = html.slice(0, injectIndex);
                  const part2 = html.slice(injectIndex);
                  return (
                    <>
                      <article 
                        className="blog-content" 
                        style={{ color: "#334155", lineHeight: "1.75", fontSize: "1.05rem" }}
                        dangerouslySetInnerHTML={{ __html: part1 }} 
                      />
                      
                      {/* MID-ARTICLE SALE CONVERTER CTA */}
                      <div style={{ margin: "36px 0" }}>
                        <InteractiveAiRecommendation />
                      </div>

                      <article 
                        className="blog-content" 
                        style={{ color: "#334155", lineHeight: "1.75", fontSize: "1.05rem" }}
                        dangerouslySetInnerHTML={{ __html: part2 }} 
                      />
                    </>
                  );
                }

                return (
                  <>
                    <article 
                      className="blog-content" 
                      style={{ color: "#334155", lineHeight: "1.75", fontSize: "1.05rem" }}
                      dangerouslySetInnerHTML={{ __html: html }} 
                    />
                    <div style={{ margin: "36px 0" }}>
                      <InteractiveAiRecommendation />
                    </div>
                  </>
                );
              })()}

              {/* Reusable Mission statement block */}
              <div style={{ borderTop: "1px solid #e2e8f0", marginTop: "40px", paddingTop: "32px" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "8px" }}>
                  SahayakAI Mission
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: "1.6" }}>
                  SahayakAI ka mission hai Bharat ke businesses ko Government procurement ko aasaan tareeke se samajhne aur confidently participate karne me madad karna.
                  Hum AI-powered productivity tools, practical guidance aur compliance-first approach ke through sellers ko empower karte hain, taaki woh Government e-Marketplace (GeM) Portal aur anya public procurement platforms par behtar tareeke se kaam kar sakein.
                </p>
              </div>

            </div>

            {/* Accordion FAQ Block */}
            {post.faqs && post.faqs.length > 0 && (
              <div>
                <h2 style={{ fontSize: "1.4rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "16px" }}>
                  ❓ Frequently Asked Questions (FAQs)
                </h2>
                <FaqAccordion faqs={post.faqs} />
              </div>
            )}

            {/* Connected Topics Graph Navigator */}
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.02)" }}>
              <h4 style={{ fontSize: "0.85rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                🔗 Connected Topics Link-Graph
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px" }}>
                {[
                  { name: "Registration", path: "/knowledge/gem-registration" },
                  { name: "EMD Exemptions", path: "/knowledge/compliance-policy/how-to-claim-emd-exemption-gem-portal-bids" },
                  { name: "Catalog upload", path: "/knowledge/catalog-management" },
                  { name: "Direct Slabs", path: "/knowledge/compliance-policy/gem-portal-direct-purchase-limit-rules-2026" },
                  { name: "Bid Search", path: "/knowledge/gem-bidding" }
                ].map((topic, idx, arr) => (
                  <React.Fragment key={idx}>
                    <a href={topic.path} style={{ fontSize: "0.82rem", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "6px", padding: "6px 12px", color: "#0E8A8A", fontWeight: "700", textDecoration: "none" }} className="hover-card">
                      {topic.name}
                    </a>
                    {idx < arr.length - 1 && <span style={{ color: "#cbd5e1", fontSize: "0.9rem" }}>→</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Context-aware Related guides */}
            {relatedArticles.length > 0 && (
              <div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "16px" }}>
                  🔗 Related Knowledge Guides
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
                  {relatedArticles.map((art) => {
                    const catSlug = art.category.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <a key={art.slug} href={`/knowledge/${catSlug}/${art.slug}`} style={{ textDecoration: "none" }}>
                        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.02)" }} className="hover-card">
                          <div>
                            <span style={{ fontSize: "0.72rem", color: "#0E8A8A", textTransform: "uppercase", fontWeight: "800" }}>{art.category}</span>
                            <h4 style={{ fontSize: "0.9rem", fontWeight: "800", color: "#0C2E4A", margin: "6px 0 8px 0", lineHeight: "1.35" }}>{art.title}</h4>
                          </div>
                          <span style={{ fontSize: "0.78rem", color: "#64748b", marginTop: "12px" }}>⏱️ {art.readingTime || "5 mins"} read →</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {/* INTEGRATED KNOWLEDGE PANEL (Bottom Ecosystem Hub) */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginTop: "12px" }}>
              {/* INSTANT SEARCH CARD */}
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.02)" }}>
                <h4 style={{ fontSize: "0.78rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  🔎 Instant Knowledge Search
                </h4>
                <QuickSearch />
              </div>

              {/* RECOMMENDED TOOL CARD */}
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 16px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontSize: "0.72rem", color: "#0E8A8A", textTransform: "uppercase", fontWeight: "800", letterSpacing: "0.05em" }}>RECOMMENDED AI TOOL</span>
                  <h4 style={{ fontSize: "1rem", fontWeight: "800", color: "#0C2E4A", margin: "4px 0 6px 0" }}>{recommendedToolName}</h4>
                  <p style={{ fontSize: "0.82rem", color: "#64748b", margin: "0 0 16px 0", lineHeight: "1.4" }}>
                    Analyze tender documents and requirements in seconds with AI.
                  </p>
                </div>
                <a
                  href={recommendedToolLink}
                  style={{ display: "block", width: "100%", background: "#0C2E4A", color: "white", padding: "10px", borderRadius: "8px", fontSize: "0.82rem", fontWeight: "700", textAlign: "center", textDecoration: "none" }}
                >
                  Launch Tool →
                </a>
              </div>

              {/* ENTERPRISE CHROME EXTENSION BANNER */}
              <div style={{ background: "linear-gradient(135deg, #0e8a8a 0%, #075e5e 100%)", color: "white", borderRadius: "16px", padding: "24px", boxShadow: "0 8px 24px rgba(14, 138, 138, 0.15)", gridColumn: "1 / -1" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                  <div>
                    <span style={{ fontSize: "0.8rem", fontWeight: "800", color: "#a7f3d0", display: "block", marginBottom: "4px" }}>SAHAYAKAI CHROME EXTENSION</span>
                    <h3 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#ffffff", margin: 0 }}>
                      🛡️ Easiest Way to Automate Bids & Compliance
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "#cbd5e1", margin: "4px 0 0 0" }}>
                      Get real-time WhatsApp alerts, bid compliance validation, and instant rejection replies on GeM Portal.
                    </p>
                  </div>
                  <a
                    href="https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ background: "#ffffff", color: "#0E8A8A", padding: "12px 24px", borderRadius: "8px", fontSize: "0.88rem", fontWeight: "800", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                  >
                    Install Extension - Free →
                  </a>
                </div>
              </div>
            </div>

            {/* Collapsible disclaimer card */}
            <CollapsibleDisclaimer />

          </div>

        </div>

      </div>

      {/* Floating WhatsApp Widget */}
      <a 
        href="https://wa.me/919999999999" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{
          position: "fixed",
          bottom: "32px",
          right: "32px",
          background: "#25d366",
          color: "white",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(37, 211, 102, 0.3)",
          fontSize: "1.8rem",
          zIndex: 9999,
          textDecoration: "none"
        }}
        aria-label="Contact us on WhatsApp"
      >
        💬
      </a>
    </div>
  );
}
