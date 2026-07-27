import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CatalogDemo from "./CatalogDemo";
import TenderDemo from "./TenderDemo";
import BidSearchDemo from "./BidSearchDemo";

interface ToolInfo {
  name: string;
  headline: string;
  description: string;
  mockPlaceholder: string;
  useCases: string[];
  faqs: { q: string; a: string }[];
}

const TOOLS_DATA: Record<string, ToolInfo> = {
  "ai-catalog-dashboard": {
    name: "AI Catalog Dashboard",
    headline: "Find correct GeM category paths and technical specification rules",
    description: "Analyze your product name, get official category taxonomy paths, and verify mandatory bid specs before listing.",
    mockPlaceholder: "Enter your product name (e.g. Office Chair, Executive Desk)...",
    useCases: [
      "Suggest Level 1 to Level 4 category path",
      "Find common golden codes / category codes",
      "Identify OEM authorization requirements and specifications",
      "List key mandatory technical specs"
    ],
    faqs: [
      { q: "Is the catalog path official?", a: "The path is mapped according to standard GeM categories. Always cross-verify on the live portal." },
      { q: "Does the website demo save my query data?", a: "No. All queries are handled securely and temporarily on our backend proxy. We do not store catalog queries." }
    ]
  },
  "bid-search": {
    name: "AI Bid Search",
    headline: "Search GeM portal bids instantly using natural language queries",
    description: "Filter active bids by state, city, ministry, and categories without dealing with tedious multi-step search forms.",
    mockPlaceholder: "e.g., Bhopal me computer ki bids dikhao, Ministry of Defence paper bids...",
    useCases: [
      "Search bids by custom city or district names",
      "Filter bids by specific Central Ministries",
      "Execute search without logging into the GeM portal"
    ],
    faqs: [
      { q: "Do I need to log in to search bids?", a: "No. Our public search tool queries active bids directly without requiring login." }
    ]
  },
  "bid-analyzer": {
    name: "AI Bid Analyzer",
    headline: "Compare bids and verify compliance parameters automatically",
    description: "Analyze technical bid specifications, check for deviation, and compare competitor criteria using advanced AI mapping. Ideal for GeM custom bids.",
    mockPlaceholder: "Drag & drop GeM bid document or copy technical specifications here...",
    useCases: [
      "Compare tender specifications and requirements",
      "Check technical evaluation criteria for exemptions",
      "Identify hidden restrictive clauses in custom bids"
    ],
    faqs: [
      { q: "Does the AI Bid Analyzer submit bids on my behalf?", a: "No. SahayakAI is an independent helper tool. All bid submissions must be made officially by the user on the government e-marketplace (GeM) portal." },
      { q: "Is my technical data secure?", a: "Yes. All uploads are processed securely and temporarily. We do not store or share proprietary bid parameters." }
    ]
  },
  "tender-summarizer": {
    name: "AI Tender Summarizer",
    headline: "Read 100-page tenders and extract key points in seconds",
    description: "Extract L1 evaluation criteria, eligibility parameters, EMD exemptions, and critical deadlines instantly from any complex PDF tender.",
    mockPlaceholder: "Choose or upload a tender PDF document...",
    useCases: [
      "Extract EMD details and fee exemption rules",
      "List key dates, bid submission deadlines, and pre-bid meeting locations",
      "Verify minimum turnover and work experience eligibility criteria"
    ],
    faqs: [
      { q: "Is the summary report legally binding?", a: "No. SahayakAI is a third-party helper tool. Always manually cross-verify the official PDF details on gem.gov.in before bidding." }
    ]
  },
  "l1-margin-calculator": {
    name: "GeM L1 Margin Calculator",
    headline: "Calculate profit margins and net quotation costs",
    description: "Determine your net quotation cost after factoring in GeM transaction fees, seller commissions, logistics, and tax margins.",
    mockPlaceholder: "Enter base cost price, delivery location, and target profit margin...",
    useCases: [
      "Calculate transaction charges automatically",
      "Factor in freight, logistics, and tax margins for net quotation cost",
      "Ensure compliant margins with tax adjustments"
    ],
    faqs: [
      { q: "Does this guarantee winning L1 status?", a: "No, this is an independent bidding aid tool. Bids depend on live competition and portal price matching algorithms." }
    ]
  },
  "eligibility-checker": {
    name: "GeM Tender Eligibility Checker",
    headline: "Verify if your profile meets tender requirements instantly",
    description: "Input your annual turnover, years of experience, and MSE status to check compliance against target tender rules.",
    mockPlaceholder: "Enter your profile turnover, experience, and target tender ID...",
    useCases: [
      "Check MSE / Startup eligibility exemptions",
      "Validate past experience criteria match",
      "Get recommendations on missing parameters"
    ],
    faqs: [
      { q: "Is this checker official?", a: "No, it is a third-party helper tool. Verify criteria on official government guidelines." }
    ]
  },
  "hsn-code-finder": {
    name: "HSN Code Finder",
    headline: "Find correct HSN codes for catalog listing",
    description: "Search HSN codes and GST rates for any product category to ensure smooth catalog upload on GeM.",
    mockPlaceholder: "e.g., Office Chair, Desktop Computer...",
    useCases: [
      "Get instant HSN code matches for products",
      "Check applicable GST percentage slabs",
      "Map items to the correct GeM catalog categories"
    ],
    faqs: [
      { q: "Are HSN codes updated?", a: "Yes, we map general GST categories. Cross-reference with the Ministry of Finance official schedules." }
    ]
  },
  "gem-keyword-generator": {
    name: "GeM Product Keyword Generator",
    headline: "Optimize your product descriptions for better search rankings",
    description: "Generate highly relevant keywords and bullet points that match government search queries on the marketplace.",
    mockPlaceholder: "Enter product name and basic specs...",
    useCases: [
      "Optimize title tags for GeM marketplace search algorithms",
      "Generate compliance specifications keywords",
      "Increase seller product visibility"
    ],
    faqs: [
      { q: "Will this guarantee sales?", a: "No. This tool helps optimize catalog listing visibility, but purchase decisions depend on bidding evaluation." }
    ]
  },
  "clarification-generator": {
    name: "Tender Clarification Letter Writer",
    headline: "Draft formal clarification letters for pre-bid queries",
    description: "Generate formal requests for clarification when tender specifications are restrictive or require exemptions.",
    mockPlaceholder: "Paste the restrictive clause or query details here...",
    useCases: [
      "Draft pre-bid clarification requests automatically",
      "Format formal templates for government buyers",
      "Explain restrictive clause issues clearly"
    ],
    faqs: [
      { q: "How do I submit this letter?", a: "Submit it officially via email or portal upload to the buyer as per the tender guidelines." }
    ]
  },
  "rejection-reply-generator": {
    name: "Rejection Representation Writer",
    headline: "Appeal wrong technical disqualifications formally",
    description: "Draft official representations to appeal incorrect technical evaluations or technical bid rejections on the portal.",
    mockPlaceholder: "Paste the disqualification reason and your arguments...",
    useCases: [
      "Appeal technical disqualifications",
      "Format formal representations referencing tender rules",
      "Cite MSE/MII compliance proofs"
    ],
    faqs: [
      { q: "What is the time limit for submitting representations?", a: "Usually 48 hours from evaluation. Check the official portal immediately after receiving notifications." }
    ]
  }
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(TOOLS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = TOOLS_DATA[slug];
  if (!tool) return {};

  return {
    title: `${tool.name} — Free AI Procurement Tool | SahayakAI`,
    description: `${tool.headline}. ${tool.description} Use our independent third-party tool to optimize bidding on GeM and public procurement portals.`,
    alternates: {
      canonical: `https://sahayakai.com/tools/${slug}`
    }
  };
}

export default async function ToolPage({ params }: Props) {
  const { slug } = await params;
  const tool = TOOLS_DATA[slug];

  if (!tool) {
    notFound();
  }

  // Create JSON-LD FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": tool.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div style={{ background: "#f8fafc", padding: "20px 0 60px 0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container" style={{ maxWidth: "1000px" }}>
        
        {/* Header Block */}
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <div style={{ display: "inline-block", background: "rgba(14, 138, 138, 0.1)", color: "#0E8A8A", padding: "6px 16px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: "700", marginBottom: "16px" }}>
            🛠️ AI Procurement Helper Tools
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "12px", letterSpacing: "-0.5px" }}>
            {tool.name}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748b", maxWidth: "700px", margin: "0 auto", lineHeight: "1.5" }}>
            {tool.headline}
          </p>
        </div>

        {/* Legal Non-Affiliation Box (Strictly Compliant) */}
        <div style={{ background: "#fef2f2", border: "1px solid #fee2e2", borderRadius: "10px", padding: "16px 20px", marginBottom: "32px", fontSize: "0.85rem", color: "#991b1b", display: "flex", gap: "10px", alignItems: "flex-start" }}>
          <span style={{ fontSize: "1.2rem" }}>⚠️</span>
          <div>
            <strong>Important Policy Notice:</strong> SahayakAI is an independent, private helper platform. We are <strong>not affiliated with, authorized, or endorsed by</strong> the Government e-Marketplace (GeM Portal) or any government organization. For official government transactions and bid submissions, please access the official portal at <a href="https://gem.gov.in" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", fontWeight: "600", color: "#b91c1c" }}>https://gem.gov.in</a>.
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
          
          {/* Main Action Card / Interactive Demo */}
          {slug === "ai-catalog-dashboard" ? (
            <CatalogDemo />
          ) : (slug === "tender-summarizer" || slug === "bid-analyzer") ? (
            <TenderDemo />
          ) : slug === "bid-search" ? (
            <BidSearchDemo />
          ) : (
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
              <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#0C2E4A", marginBottom: "16px" }}>
                Interactive Tool Console (Mockup Preview)
              </h2>
              <p style={{ fontSize: "0.9rem", color: "#64748b", marginBottom: "20px" }}>
                {tool.description}
              </p>

              {/* Input area */}
              <div style={{ border: "2px dashed #cbd5e1", borderRadius: "12px", padding: "40px 20px", textAlign: "center", background: "#f8fafc", marginBottom: "24px" }}>
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "12px" }}>🤖</span>
                <p style={{ fontSize: "0.9rem", color: "#64748b", fontWeight: "600" }}>
                  {tool.mockPlaceholder}
                </p>
              </div>

              {/* CTA to get chrome extension */}
              <div style={{ background: "linear-gradient(135deg, #0e8a8a 0%, #075e5e 100%)", borderRadius: "12px", padding: "20px", color: "#ffffff", textAlign: "center" }}>
                <h4 style={{ fontSize: "1rem", fontWeight: "700", marginBottom: "8px" }}>
                  Get real-time AI tools inside your browser tab!
                </h4>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.9)", marginBottom: "16px" }}>
                  Install SahayakAI Chrome Extension to analyze bids and extract specifications directly on the portal page.
                </p>
                <a
                  href="https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-block", background: "#ffffff", color: "#0E8A8A", padding: "10px 24px", borderRadius: "8px", fontWeight: "700", fontSize: "0.85rem", textDecoration: "none", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
                >
                  📥 Install Free Chrome Extension
                </a>
              </div>
            </div>
          )}

          {/* Use Cases & Help Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0C2E4A", marginBottom: "14px" }}>
                Key Use Cases
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {tool.useCases.map((uc, i) => (
                  <li key={i} style={{ fontSize: "0.88rem", color: "#334155", display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <span style={{ color: "#0E8A8A" }}>✔</span>
                    <span>{uc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs */}
            <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0C2E4A", marginBottom: "16px" }}>
                Frequently Asked Questions
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {tool.faqs.map((faq, i) => (
                  <div key={i} style={{ borderBottom: i < tool.faqs.length - 1 ? "1px solid #f1f5f9" : "none", paddingBottom: i < tool.faqs.length - 1 ? "12px" : "0" }}>
                    <h4 style={{ fontSize: "0.88rem", fontWeight: "700", color: "#0C2E4A", marginBottom: "6px" }}>
                      Q: {faq.q}
                    </h4>
                    <p style={{ fontSize: "0.82rem", color: "#64748b", lineHeight: "1.4" }}>
                      A: {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
