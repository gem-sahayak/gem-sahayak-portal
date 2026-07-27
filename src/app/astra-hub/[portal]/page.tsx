import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PortalInfo {
  name: string;
  fullname: string;
  description: string;
  commonGuides: string[];
}

const PORTALS_DATA: Record<string, PortalInfo> = {
  "cppp": {
    name: "CPPP Hub",
    fullname: "Central Public Procurement Portal (India)",
    description: "Guides and tools to help sellers register, navigate, and bid on major CPPP work tenders.",
    commonGuides: [
      "How to configure Digital Signature Certificate (DSC) for CPPP",
      "Step-by-step CPPP vendor enrollment instructions",
      "Uploading technical bids and BOQ templates"
    ]
  },
  "railways-ireps": {
    name: "IREPS Railways",
    fullname: "Indian Railways E-Procurement System",
    description: "Navigate IREPS for vendor approval, railway supply bidding, and material contracts.",
    commonGuides: [
      "IREPS vendor registration prerequisites",
      "Configuring e-token and PKI certificate in IREPS",
      "Tracking railway material supply bids and tenders"
    ]
  },
  "state-procurement": {
    name: "State Procurement Tenders",
    fullname: "Indian State Government Tender Portals",
    description: "Access state e-procurement guidelines for Madhya Pradesh, Uttar Pradesh, Maharashtra, and other states.",
    commonGuides: [
      "MP Tenders profile setup & DSC pairing",
      "UP e-Procurement portal registration guide",
      "Maharashtra e-Tenders technical guidelines"
    ]
  },
  "international": {
    name: "Global Procurement",
    fullname: "International Public Procurement Tenders",
    description: "Explore opportunities on global government marketplaces including UK Find a Tender and US SAM.gov.",
    commonGuides: [
      "SAM.gov registration checklist for international firms",
      "UK government contracts bidding rules",
      "Exclusion criteria for international tenders"
    ]
  }
};

interface Props {
  params: Promise<{ portal: string }>;
}

export async function generateStaticParams() {
  return Object.keys(PORTALS_DATA).map((portal) => ({ portal }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { portal } = await params;
  const data = PORTALS_DATA[portal];
  if (!data) return {};

  return {
    title: `${data.name} Bidding Guide & Helper — SahayakAI`,
    description: `${data.description} Learn how to succeed on ${data.fullname} using our independent tutorials.`,
    alternates: {
      canonical: `https://sahayakai.com/astra-hub/${portal}`
    }
  };
}

export default async function PortalPage({ params }: Props) {
  const { portal } = await params;
  const data = PORTALS_DATA[portal];

  if (!data) {
    notFound();
  }

  return (
    <div style={{ background: "#f8fafc", padding: "60px 0 80px 0" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        
        {/* Header Block */}
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "rgba(245, 130, 32, 0.15)", color: "#f58220", padding: "6px 16px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: "700", marginBottom: "16px" }}>
            ✨ ASTRA Multi-Portal Knowledge Hub
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "12px", letterSpacing: "-0.5px" }}>
            {data.name}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748b", lineHeight: "1.5" }}>
            {data.fullname}
          </p>
        </div>

        {/* Legal Disclaimer Box */}
        <div style={{ background: "#fef2f2", border: "1px solid #fee2e2", borderRadius: "10px", padding: "16px 20px", marginBottom: "32px", fontSize: "0.85rem", color: "#991b1b" }}>
          ⚠️ <strong>Disclaimer & Non-Affiliation Policy:</strong> SahayakAI is an independent helper tool. We are <strong>NOT affiliated, associated, or officially connected</strong> with the {data.fullname}, national procurement offices, or any state government portal. Users must submit bids directly on official domains.
        </div>

        {/* Content Panel */}
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "20px" }}>
            Popular Guides & Resources
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {data.commonGuides.map((guide, i) => (
              <div key={i} style={{ borderBottom: i < data.commonGuides.length - 1 ? "1px solid #f1f5f9" : "none", paddingBottom: i < data.commonGuides.length - 1 ? "12px" : "0" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: "700", color: "#0C2E4A", marginBottom: "6px" }}>
                  📖 {guide}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "#64748b", margin: 0 }}>
                  Learn pre-bid setup, DSC pairings, and eligibility compliance guides.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future ASTRA AI CTA */}
        <div style={{ background: "linear-gradient(135deg, #0D2137 0%, #162E4A 100%)", color: "white", borderRadius: "16px", padding: "28px", marginTop: "32px", textAlign: "center" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "800", marginBottom: "8px" }}>
            ASTRA AI Procurement Assistant Coming Soon!
          </h3>
          <p style={{ fontSize: "0.88rem", color: "#94A3B8", maxWidth: "600px", margin: "0 auto 20px auto", lineHeight: "1.5" }}>
            We are building ASTRA - the universal AI assistant to draft bids, summarize documents, and track tenders across IREPS, CPPP, and state platforms.
          </p>
          <button style={{ background: "#f58220", color: "white", border: "none", padding: "10px 24px", borderRadius: "8px", fontWeight: "700", fontSize: "0.85rem", cursor: "not-allowed" }} disabled>
            Join ASTRA Waitlist
          </button>
        </div>

      </div>
    </div>
  );
}
