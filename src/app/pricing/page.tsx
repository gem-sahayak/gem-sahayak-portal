'use client';

import React, { useState } from "react";

type Plan = {
  name: string;
  priceMonthly?: number;
  priceAnnual?: number;
  custom?: boolean;
  description: string;
  badge: string;
  color: string;
  gradient: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  popular: boolean;
};

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  const [activeTab, setActiveTab] = useState<"individual" | "managed" | "enterprise">("individual");

  const individualPlans: Plan[] = [
    {
      name: "Solo Starter",
      priceMonthly: 999,
      priceAnnual: 9999,
      description: "Occasional bidders aur naye sellers ke liye best hai jo limited bids check karte hain.",
      badge: "Sasta & Aasan",
      color: "#0F172A",
      gradient: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      features: [
        "25 Monthly PDF Analysis (Max 20 pages/PDF)",
        "200 Monthly WhatsApp Alerts (3 Keyword slots)",
        "1-Click Excel Export for searches",
        "Hinglish Catalog Helper (Basic)",
        "Standard Voice Narration",
        "Max 1 Device login only",
        "Email + WhatsApp Support"
      ],
      ctaText: "Get Started Now",
      ctaLink: "https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf",
      popular: false
    },
    {
      name: "Solo Professional",
      priceMonthly: 1999,
      priceAnnual: 19999,
      description: "Active individual sellers ke liye jinko complete workspace aur document vault chahiye.",
      badge: "Most Popular",
      color: "#16A34A",
      gradient: "linear-gradient(135deg, #135C82 0%, #0E8A8A 100%)",
      features: [
        "🔥 Full SahayakAI Cloud Workspace Access",
        "📁 Centralized Document Vault (GST, MSME, ITRs)",
        "50 Monthly PDF Analysis (Max 40 pages/PDF)",
        "600 Monthly WhatsApp Alerts (15 Keyword slots)",
        "Historical Award Insights (10 searches/mo)",
        "Hinglish Catalog Helper (Unlimited)",
        "Premium Google Neural TTS Voice",
        "Max 3 Devices login",
        "Priority WhatsApp Group Support"
      ],
      ctaText: "Upgrade to Professional",
      ctaLink: "https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf",
      popular: true
    },
    {
      name: "Solo Premium",
      priceMonthly: 4999,
      priceAnnual: 49999,
      description: "Power individual bidders aur consultants ke liye heavy-duty automation aur full checklist.",
      badge: "Power User",
      color: "#0F172A",
      gradient: "linear-gradient(135deg, #0C3E5E 0%, #0F172A 100%)",
      features: [
        "🔥 Full SahayakAI Cloud Workspace + Priority Queue",
        "📁 Unlimited Document Vault Storage",
        "150 Monthly PDF Analysis (100 pages/PDF)",
        "2,000 Monthly WhatsApp Alerts (Unlimited Keywords)",
        "1-Click Excel Export for searches",
        "Historical Award Insights (Unlimited searches)",
        "Auto-Document Checklist & Risk Scanner",
        "Max 5 Devices login",
        "Priority Phone + WhatsApp Support"
      ],
      ctaText: "Get Solo Premium",
      ctaLink: "https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf",
      popular: false
    }
  ];

  const managedPlans: Plan[] = [
    {
      name: "Starter BidDesk",
      priceMonthly: 9999,
      priceAnnual: 99999,
      description: "Naye sellers aur MSMEs ke liye zero-hassle GeM registration aur guaranteed tender filing.",
      badge: "Best for New Sellers",
      color: "#0F172A",
      gradient: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      features: [
        "🎯 End-to-End GeM Seller Account & Profile Setup",
        "📦 Catalog Listing (Up to 50 Products / 1 Brand)",
        "📝 Up to 5 Active Tender Bids Prepared & Filed / Month",
        "🛡️ Guaranteed 100% Technical Document Compliance",
        "🔍 Daily Curated Tender Matching via WhatsApp",
        "👤 Dedicated In-House Account Manager (Call + WhatsApp)",
        "Extra Bids @ ₹1,500 per bid"
      ],
      ctaText: "Start Managed BidDesk",
      ctaLink: "/#founding-member",
      popular: false
    },
    {
      name: "Growth BidDesk",
      priceMonthly: 18999,
      priceAnnual: 189999,
      description: "Active manufacturers aur distributors ke liye full-throttle bid preparation aur L1 intel.",
      badge: "Most Popular DFY",
      color: "#16A34A",
      gradient: "linear-gradient(135deg, #135C82 0%, #0E8A8A 100%)",
      features: [
        "🎯 Everything in Starter + Multi-Brand / OEM Support",
        "📦 Catalog Listing (Up to 150 Products / Multi-Brand)",
        "📝 Up to 12 Active Tender Bids Prepared & Filed / Month",
        "🛡️ Guaranteed 100% Technical Document Compliance",
        "📊 Competitor Past L1 Pricing & Winner Analysis",
        "⚖️ Pre-Bid Representation & Query Drafting Support",
        "👤 Dedicated Senior Bid Specialist & Priority Desk",
        "Extra Bids @ ₹1,200 per bid"
      ],
      ctaText: "Get Growth BidDesk",
      ctaLink: "/#founding-member",
      popular: true
    },
    {
      name: "Enterprise OEM Desk",
      priceMonthly: 34999,
      priceAnnual: 349999,
      description: "Large OEMs aur high-volume contractors ke liye complete outsourced GeM bidding department.",
      badge: "Full Outsourcing",
      color: "#0F172A",
      gradient: "linear-gradient(135deg, #0C3E5E 0%, #0F172A 100%)",
      features: [
        "🏢 Complete Outsourced GeM Procurement Department",
        "📦 Unlimited Catalog Management & Vendor Assessment",
        "📝 Up to 25 Active Tender Bids Prepared & Filed / Month",
        "🛡️ 100% Guaranteed Technical Compliance & Representation",
        "📈 High-Volume Custom Market & Reverse Auction Strategy",
        "👥 Assigned Senior Bid Desk Lead + Tender Associate",
        "⚡ Custom SLA with 24/7 Dedicated Support Desk"
      ],
      ctaText: "Get Enterprise Desk",
      ctaLink: "/#founding-member",
      popular: false
    }
  ];

  const enterprisePlans: Plan[] = [
    {
      name: "Team",
      priceMonthly: 14999,
      priceAnnual: 149999,
      description: "Chhoti agencies aur consultants ke liye jo team seats aur pooled limits chahte hain.",
      badge: "For Small Agencies",
      color: "#0F172A",
      gradient: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      features: [
        "Up to 5 Team Member Seats",
        "500 Pooled Monthly PDF Analysis",
        "5,000 Pooled Monthly WhatsApp Alerts (Unlimited Keywords)",
        "Shared Catalog & Document Vault across team",
        "Agency Device Manager (10 Devices)",
        "Priority WhatsApp + Email Support"
      ],
      ctaText: "Get Team Access",
      ctaLink: "https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf",
      popular: false
    },
    {
      name: "Business",
      priceMonthly: 34999,
      priceAnnual: 349999,
      description: "Established bidding agencies ke liye jo scale, multi-client tagging aur control chahti hain.",
      badge: "Most Popular Agency",
      color: "#16A34A",
      gradient: "linear-gradient(135deg, #135C82 0%, #0E8A8A 100%)",
      features: [
        "Up to 15 Team Member Seats",
        "1,500 Pooled Monthly PDF Analysis",
        "15,000 Pooled Monthly WhatsApp Alerts",
        "Role-Based Access (Admin / Bidder / Viewer)",
        "Client Workspaces & Multi-Client Tagging",
        "Discounted Outsourced Bid Submission Add-on",
        "Dedicated Account Manager + 24/7 Phone Support"
      ],
      ctaText: "Upgrade to Business",
      ctaLink: "https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf",
      popular: true
    },
    {
      name: "Enterprise Custom",
      custom: true,
      description: "Bade bidding consultancies aur government-facing corporations ke liye custom setup.",
      badge: "Contact Sales",
      color: "#0F172A",
      gradient: "linear-gradient(135deg, #0C3E5E 0%, #0F172A 100%)",
      features: [
        "Unlimited Team Seats & Logins",
        "Unlimited Pooled PDF Analysis & WhatsApp Alerts",
        "Custom API Access & ERP/Catalog Integrations",
        "White-Label Client PDF Reporting with Agency Logo",
        "Dedicated Onboarding + Custom SLA",
        "24/7 Dedicated Support Manager"
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact",
      popular: false
    }
  ];

  const plans = 
    activeTab === "individual" ? individualPlans :
    activeTab === "managed" ? managedPlans : enterprisePlans;

  const individualComparisonRows: { label: string; values: [string, string, string] }[] = [
    { label: "Cloud Workspace Access", values: ["Basic Access", "✓ Full Workspace", "✓ Priority Workspace"] },
    { label: "Document Vault (GST/MSME/ITR)", values: ["✕ Not Available", "✓ Centralized Vault", "✓ Unlimited Vault"] },
    { label: "Monthly PDF Analysis", values: ["25 Documents", "50 Documents", "150 Documents"] },
    { label: "Max Pages per PDF", values: ["Up to 20 pages", "Up to 40 pages", "Up to 100 pages"] },
    { label: "Monthly WhatsApp Alerts", values: ["200 Alerts", "600 Alerts", "2,000 Alerts"] },
    { label: "Alert Keyword Slots", values: ["3 Keywords", "15 Keywords", "Unlimited"] },
    { label: "Excel Export (1-Click)", values: ["✓ Yes", "✓ Yes", "✓ Yes"] },
    { label: "Historical Award Insights", values: ["✕ Not Available", "✓ 10 searches / mo", "✓ Unlimited searches"] },
    { label: "Auto-Document Checklist & Risk", values: ["✕ Not Available", "✕ Not Available", "✓ Yes"] },
    { label: "Catalog Helper limits", values: ["Basic (5 regens/product)", "Unlimited", "Unlimited"] },
    { label: "Device UUID Limit Lock", values: ["Max 1 Device", "Max 3 Devices", "Max 5 Devices"] },
    { label: "Customer Support", values: ["Email + WhatsApp", "Priority WhatsApp Group", "Priority Phone + WhatsApp"] }
  ];

  const managedComparisonRows: { label: string; values: [string, string, string] }[] = [
    { label: "Execution Model", values: ["Done-For-You (In-House Team)", "Done-For-You (In-House Team)", "Full Outsourced Department"] },
    { label: "Monthly Active Bids Filed", values: ["Up to 5 Bids / month", "Up to 12 Bids / month", "Up to 25 Bids / month"] },
    { label: "Technical Compliance Guarantee", values: ["✓ 100% Guaranteed", "✓ 100% Guaranteed", "✓ 100% Guaranteed"] },
    { label: "GeM Registration & Profile Setup", values: ["✓ Included", "✓ Included", "✓ Included"] },
    { label: "Catalog Listing Limit", values: ["Up to 50 Products", "Up to 150 Products", "Unlimited Products"] },
    { label: "Brand / OEM Approval Support", values: ["1 Brand Included", "Multi-Brand Support", "Unlimited Brands + Panel"] },
    { label: "Daily Curated WhatsApp Matches", values: ["✓ 2-3 Tenders Daily", "✓ 5-8 Tenders Daily", "✓ Unlimited Filtered"] },
    { label: "Competitor L1 Past Analysis", values: ["✕ Not Available", "✓ Included", "✓ Deep Reverse Auction Intel"] },
    { label: "Pre-Bid Representation Support", values: ["✕ Not Available", "✓ Included", "✓ Senior Legal / Desk Lead"] },
    { label: "Dedicated Support Resource", values: ["Dedicated Account Executive", "Senior Bid Specialist", "Dedicated Lead + Associate"] }
  ];

  const enterpriseComparisonRows: { label: string; values: [string, string, string] }[] = [
    { label: "Team Member Seats", values: ["Up to 5", "Up to 15", "Unlimited"] },
    { label: "Pooled Monthly PDF Analysis", values: ["500 Documents", "1,500 Documents", "Unlimited"] },
    { label: "Pooled Monthly WhatsApp Alerts", values: ["5,000 Alerts", "15,000 Alerts", "Unlimited"] },
    { label: "Alert Keyword Slots", values: ["Unlimited", "Unlimited", "Unlimited"] },
    { label: "Shared Catalog & Document Vault", values: ["✓ Yes", "✓ Yes", "✓ Yes"] },
    { label: "Role-Based Access (Admin/Bidder)", values: ["✕ Not Available", "✓ Admin/Bidder/Viewer", "✓ Admin/Bidder/Viewer"] },
    { label: "Client Workspaces & Tagging", values: ["✕ Not Available", "✓ Multi-Client Tagging", "✓ Unlimited Client Vaults"] },
    { label: "Agency Device Manager", values: ["10 Devices", "10 Devices", "Unlimited"] },
    { label: "Outsourced Bid Submission", values: ["✕ Not Available", "✓ Discounted Add-on", "✓ Included Priority"] },
    { label: "Custom API / Integrations", values: ["✕ Not Available", "✕ Not Available", "✓ Yes"] },
    { label: "White-Label PDF Reports", values: ["✕ Not Available", "✕ Not Available", "✓ Yes"] },
    { label: "Customer Support", values: ["Priority WhatsApp + Email", "Dedicated Manager + 24/7 Phone", "24/7 Dedicated Support Manager"] }
  ];

  const comparisonRows = 
    activeTab === "individual" ? individualComparisonRows :
    activeTab === "managed" ? managedComparisonRows : enterpriseComparisonRows;

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100vh" }}>
      {/* 🚀 HERO SECTION */}
      <section style={{ 
        background: "radial-gradient(circle at 50% 20%, rgba(22, 163, 74, 0.05) 0%, rgba(12, 62, 94, 0.02) 100%)", 
        padding: "80px 0 50px 0", 
        borderBottom: "1px solid #E2E8F0",
        textAlign: "center"
      }}>
        <div className="container">
          <span style={{ 
            display: "inline-flex", 
            alignItems: "center",
            gap: "6px",
            background: "rgba(14, 138, 138, 0.1)", 
            color: "#0E8A8A", 
            padding: "8px 18px", 
            borderRadius: "100px", 
            fontSize: "0.85rem", 
            fontWeight: "800", 
            marginBottom: "16px",
            border: "1px solid rgba(14, 138, 138, 0.2)"
          }}>
            🎁 Early Beta Members receive exclusive founding pricing when subscriptions officially launch.
          </span>
          <h1 style={{ marginBottom: "16px", color: "#0C3E5E" }}>
            Transparent Plans for <span style={{ color: "#16A34A" }}>Every GeM Seller</span>
          </h1>
          <p style={{ maxWidth: "740px", margin: "0 auto 32px auto", fontSize: "1.1rem", color: "#475569", lineHeight: "1.6" }}>
            Chahe aap khud software use karein, ya hamare in-house experts se end-to-end bids manage karwayein — SahayakAI aapko 100% technical compliance provide karta hai.
          </p>

          {/* 3-Track Tab Switcher */}
          <div style={{
            display: "inline-flex",
            background: "#FFFFFF",
            padding: "5px",
            borderRadius: "100px",
            border: "1px solid #CBD5E1",
            boxShadow: "var(--shadow-sm)",
            marginBottom: "16px",
            flexWrap: "wrap",
            gap: "4px",
            justifyContent: "center"
          }}>
            <button
              onClick={() => setActiveTab("individual")}
              style={{
                background: activeTab === "individual" ? "#16A34A" : "transparent",
                color: activeTab === "individual" ? "#FFFFFF" : "#64748B",
                border: "none",
                padding: "8px 22px",
                borderRadius: "100px",
                fontWeight: "700",
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              👤 Individual (SaaS DIY)
            </button>
            <button
              onClick={() => setActiveTab("managed")}
              style={{
                background: activeTab === "managed" ? "#0C3E5E" : "transparent",
                color: activeTab === "managed" ? "#FFFFFF" : "#64748B",
                border: "none",
                padding: "8px 22px",
                borderRadius: "100px",
                fontWeight: "700",
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              🎯 Managed BidDesk (DFY)
              <span style={{
                background: activeTab === "managed" ? "#6EE7B7" : "#0E8A8A",
                color: activeTab === "managed" ? "#0C3E5E" : "#FFFFFF",
                fontSize: "0.68rem",
                padding: "2px 6px",
                borderRadius: "100px",
                fontWeight: 800
              }}>
                POPULAR
              </span>
            </button>
            <button
              onClick={() => setActiveTab("enterprise")}
              style={{
                background: activeTab === "enterprise" ? "#16A34A" : "transparent",
                color: activeTab === "enterprise" ? "#FFFFFF" : "#64748B",
                border: "none",
                padding: "8px 22px",
                borderRadius: "100px",
                fontWeight: "700",
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              🏢 Agencies & Enterprise
            </button>
          </div>
          <br />

          {/* Billing Switcher */}
          <div style={{
            display: "inline-flex",
            background: "#FFFFFF",
            padding: "4px",
            borderRadius: "100px",
            border: "1px solid #CBD5E1",
            boxShadow: "var(--shadow-sm)"
          }}>
            <button
              onClick={() => setBillingPeriod("monthly")}
              style={{
                background: billingPeriod === "monthly" ? "#0C3E5E" : "transparent",
                color: billingPeriod === "monthly" ? "#FFFFFF" : "#64748B",
                border: "none",
                padding: "8px 24px",
                borderRadius: "100px",
                fontWeight: "600",
                fontSize: "0.88rem",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            >
              Monthly Billing
            </button>
            <button 
              onClick={() => setBillingPeriod("annual")}
              style={{
                background: billingPeriod === "annual" ? "#0C3E5E" : "transparent",
                color: billingPeriod === "annual" ? "#FFFFFF" : "#64748B",
                border: "none",
                padding: "8px 24px",
                borderRadius: "100px",
                fontWeight: "600",
                fontSize: "0.88rem",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              Annual Billing 
              <span style={{ 
                background: "#16A34A", 
                color: "#FFFFFF", 
                fontSize: "0.75rem", 
                padding: "2px 8px", 
                borderRadius: "100px", 
                fontWeight: "700"
              }}>
                Save ~15%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 🏷️ PRICING CARDS WITH GLASSMORPHISM BETA OVERLAY */}
      <section style={{ padding: "60px 0" }}>
        <div className="container">
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
            gap: "32px",
            alignItems: "stretch"
          }}>
            {plans.map((plan, index) => (
              <div 
                key={index}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "24px",
                  border: plan.popular ? "2px solid #16A34A" : "1px solid #E2E8F0",
                  padding: "40px 32px",
                  position: "relative",
                  boxShadow: plan.popular ? "var(--shadow-xl)" : "var(--shadow-md)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  transform: plan.popular ? "scale(1.03)" : "none",
                  overflow: "hidden"
                }}
                className="pricing-card"
              >
                {/* Glassmorphism Public Beta Overlay on Pricing Numbers only */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "220px",
                  borderRadius: "24px 24px 0 0",
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "20px",
                  textAlign: "center",
                  zIndex: 10,
                  borderBottom: "1px solid rgba(14, 138, 138, 0.2)"
                }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0E8A8A", background: "rgba(14, 138, 138, 0.1)", padding: "4px 12px", borderRadius: "9999px", marginBottom: "8px", border: "1px solid rgba(14, 138, 138, 0.2)" }}>
                    🚀 REVEALED AFTER PUBLIC BETA
                  </span>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0C2E4A", marginBottom: "4px" }}>
                    Free During Public Beta
                  </h4>
                  <p style={{ fontSize: "0.82rem", color: "#475569", marginBottom: "14px", maxWidth: "260px", lineHeight: "1.4" }}>
                    Early Beta Members receive exclusive founding pricing when subscriptions officially launch.
                  </p>
                  <a
                    href="/#founding-member"
                    style={{
                      background: "linear-gradient(135deg, #0C2E4A 0%, #0E8A8A 100%)",
                      color: "white",
                      padding: "8px 20px",
                      borderRadius: "9999px",
                      fontSize: "0.85rem",
                      fontWeight: 800,
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(12, 46, 74, 0.2)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    Join Beta Waitlist →
                  </a>
                </div>

                {/* Popular Badge */}
                <div style={{
                  position: "absolute",
                  top: "20px",
                  right: "24px",
                  background: plan.popular ? "#16A34A" : "#F1F5F9",
                  color: plan.popular ? "#FFFFFF" : "#475569",
                  padding: "4px 12px",
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  zIndex: 11
                }}>
                  {plan.badge}
                </div>

                <div>
                  <h3 style={{ color: "#0C3E5E", marginBottom: "8px", fontSize: "1.4rem" }}>{plan.name}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#64748B", marginBottom: "24px", minHeight: "44px" }}>
                    {plan.description}
                  </p>

                  {/* Pricing Display */}
                  {plan.custom ? (
                    <div style={{ marginBottom: "24px" }}>
                      <span style={{ fontSize: "1.8rem", fontWeight: "800", color: "#0C3E5E" }}>
                        Custom Pricing
                      </span>
                      <p style={{ color: "#64748B", fontSize: "0.85rem", marginTop: "4px" }}>
                        Contact sales for a custom quote
                      </p>
                    </div>
                  ) : (
                    <div style={{ position: "relative", display: "inline-flex", alignItems: "center", marginBottom: "24px" }}>
                      <div style={{
                        display: "flex",
                        alignItems: "baseline",
                        filter: "blur(6px)",
                        WebkitFilter: "blur(6px)",
                        userSelect: "none",
                        pointerEvents: "none"
                      }}>
                        <span style={{ fontSize: "2.5rem", fontWeight: "800", color: "#0C3E5E" }}>
                          ₹{(billingPeriod === "monthly" ? plan.priceMonthly! : plan.priceAnnual!).toLocaleString("en-IN")}
                        </span>
                        <span style={{ color: "#64748B", marginLeft: "4px", fontSize: "0.95rem" }}>
                          /{billingPeriod === "monthly" ? "month" : "year"}
                        </span>
                      </div>
                    </div>
                  )}

                  <hr style={{ border: "0", borderTop: "1px solid #F1F5F9", margin: "28px 0 24px 0" }} />

                  {/* Feature List - Fully visible */}
                  <div style={{ marginBottom: "12px", fontSize: "0.78rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.05em", color: "#0E8A8A" }}>
                    Included Features & Capabilities:
                  </div>
                  <ul style={{ listStyle: "none", padding: "0", margin: "0 0 40px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "#334155", lineHeight: "1.5" }}>
                        <span style={{ color: "#16A34A", fontWeight: "bold", flexShrink: 0 }}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a 
                  href="/#founding-member"
                  style={{
                    background: plan.popular 
                      ? "linear-gradient(135deg, #135C82 0%, #0E8A8A 100%)" 
                      : "#0C3E5E",
                    color: "#FFFFFF",
                    textAlign: "center",
                    padding: "14px 28px",
                    borderRadius: "12px",
                    fontWeight: "700",
                    transition: "all 0.3s ease",
                    textDecoration: "none"
                  }}
                  className="btn-pricing"
                >
                  Join Beta Waitlist
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📊 DETAIL COMPARISON SECTION */}
      <section style={{ padding: "60px 0", background: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px auto" }}>
            <h2 style={{ marginBottom: "12px", color: "#0C3E5E" }}>Plan Comparison Matrix</h2>
            <p style={{ color: "#64748B" }}>
              {activeTab === "individual" && "Individual SaaS plans ke limits aur tools ka direct comparison."}
              {activeTab === "managed" && "Managed BidDesk DFY plans ke deliverables aur support ka direct comparison."}
              {activeTab === "enterprise" && "Agencies aur Teams ke team seats aur enterprise capabilities ka comparison."}
            </p>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ 
              width: "100%", 
              borderCollapse: "collapse", 
              textAlign: "left",
              fontSize: "0.9rem",
              color: "#334155"
            }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #E2E8F0" }}>
                  <th style={{ padding: "16px 24px", color: "#0C3E5E", fontWeight: "700" }}>Core Deliverables & Limits</th>
                  {plans.map((p) => (
                    <th key={p.name} style={{ padding: "16px 24px", color: "#0C3E5E", fontWeight: "700" }}>
                      {p.name}{" "}
                      {p.custom ? (
                        <span style={{ color: "#64748B", fontWeight: 500 }}>(Custom)</span>
                      ) : (
                        <span style={{ filter: "blur(6px)", WebkitFilter: "blur(6px)", userSelect: "none" }}>
                          (₹{p.priceMonthly!.toLocaleString("en-IN")}/mo)
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} style={{ borderBottom: "1px solid #F1F5F9" }}>
                    <td style={{ padding: "16px 24px", fontWeight: "600" }}>{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} style={{ padding: "16px 24px", color: v.startsWith("✕") ? "#64748B" : undefined }}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ❓ PUBLIC BETA PRICING FAQ SECTION */}
      <section style={{ padding: "80px 0", background: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
        <div className="container" style={{ maxWidth: "800px" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0E8A8A", background: "rgba(14, 138, 138, 0.08)", padding: "6px 14px", borderRadius: "9999px", border: "1px solid rgba(14, 138, 138, 0.2)", display: "inline-block", marginBottom: "12px" }}>
              🧪 PUBLIC BETA FAQ
            </span>
            <h2 style={{ color: "#0C3E5E" }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", border: "1px solid #E2E8F0" }}>
              <h4 style={{ color: "#0C3E5E", marginBottom: "8px", fontSize: "1.05rem" }}>
                What is the difference between Individual SaaS and Managed BidDesk?
              </h4>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.6" }}>
                <strong>Individual SaaS (DIY)</strong> gives you full access to the SahayakAI tools, Chrome extension, and Cloud Workspace to analyze tenders and prepare bids yourself. <br />
                <strong>Managed BidDesk (DFY)</strong> is our full-service offering where our in-house GeM specialists personally handle your registration, daily matching, cataloging, and complete 100% technical bid submission for you.
              </p>
            </div>

            <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", border: "1px solid #E2E8F0" }}>
              <h4 style={{ color: "#0C3E5E", marginBottom: "8px", fontSize: "1.05rem" }}>
                Why are exact subscription prices blurred right now?
              </h4>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.6" }}>
                SahayakAI is currently in Public Beta. All core AI tools, bid search capabilities, and compliance guides are 100% free to explore during beta. Official paid billing will activate after the Public Beta concludes.
              </p>
            </div>

            <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", border: "1px solid #E2E8F0" }}>
              <h4 style={{ color: "#0C3E5E", marginBottom: "8px", fontSize: "1.05rem" }}>
                What benefits do Founding Beta Members receive?
              </h4>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.6" }}>
                Founding Beta Members receive early access to the upcoming SahayakAI Cloud Workspace, priority account manager assignments on Managed plans, and exclusive lifetime discounted founding pricing.
              </p>
            </div>

            <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", border: "1px solid #E2E8F0" }}>
              <h4 style={{ color: "#0C3E5E", marginBottom: "8px", fontSize: "1.05rem" }}>
                Can I switch between DIY Software and Managed BidDesk later?
              </h4>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.6" }}>
                Yes! You can start with our DIY SaaS workspace and upgrade to a dedicated Managed BidDesk plan anytime your bidding volume grows and you require full hands-off execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📥 BOTTOM CTA SECTION */}
      <section style={{ 
        background: "linear-gradient(135deg, #0C3E5E 0%, #0F172A 100%)", 
        color: "#FFFFFF", 
        padding: "80px 0",
        textAlign: "center"
      }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 style={{ color: "#FFFFFF", marginBottom: "16px" }}>Join India&apos;s AI Procurement Public Beta</h2>
          <p style={{ color: "#94A3B8", marginBottom: "32px" }}>
            Experience the next-generation GeM Procurement Workspace & Managed BidDesk. Sign up for free early beta access today.
          </p>
          <a 
            href="/#founding-member" 
            className="btn btn-primary"
            style={{ 
              background: "#6EE7B7", 
              color: "#0C3E5E",
              padding: "16px 36px",
              fontSize: "1.05rem",
              borderRadius: "100px",
              fontWeight: "800",
              border: "none",
              cursor: "pointer",
              textDecoration: "none"
            }}
          >
            🧪 Join Public Beta — Free Access →
          </a>
        </div>
      </section>
    </div>
  );
}
