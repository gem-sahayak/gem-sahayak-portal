'use client';

import React, { useState } from "react";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Starter Plan",
      priceMonthly: 999,
      priceAnnual: 9999,
      description: "Local contractors aur New sellers ke liye best hai jo limited bids check karte hain.",
      badge: "Sasta & Aasan",
      color: "#0F172A",
      gradient: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
      features: [
        "25 Monthly PDF Analysis (Max 20 pages/PDF)",
        "200 Monthly WhatsApp Alerts (3 Keyword slots)",
        "1-Click Excel Export for searches",
        "Hinglish Catalog Helper (Basic)",
        "Voice Narrations",
        "Max 1 Device login only",
        "Standard Email and Whatsapp Support"
      ],
      ctaText: "Get Started Now",
      ctaLink: "https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf",
      popular: false
    },
    {
      name: "Professional Plan",
      priceMonthly: 1999,
      priceAnnual: 19999,
      description: "Active MSMEs aur manufacturers and traders ke liye jo weekly bidding aur analytics chahte hain.",
      badge: "Most Popular",
      color: "#16A34A",
      gradient: "linear-gradient(135deg, #135C82 0%, #0E8A8A 100%)",
      features: [
        "50 Monthly PDF Analysis (Max 40 pages/PDF)",
        "600 Monthly WhatsApp Alerts (15 Keyword slots)",
        "1-Click Excel Export for searches",
        "Historical Award Insights (10 queries/mo)",
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
      name: "Enterprise Plan",
      priceMonthly: 4999,
      priceAnnual: 49999,
      description: "Tendering agencies aur bare bidding teams ke liye heavy-duty automation.",
      badge: "CTO Recommended",
      color: "#0F172A",
      gradient: "linear-gradient(135deg, #0C3E5E 0%, #0F172A 100%)",
      features: [
        "150 Monthly PDF Analysis (100 pages /PDF)",
        "2000 Monthly WhatsApp Alerts (Unlimited Keywords)",
        "1-Click Excel Export for searches",
        "Historical Award Insights (Unlimited queries)",
        "Auto-Document Checklist Generator",
        "Agency Device Manager (Nicknaming UI - 10 Devices)",
        "Discounted Agency Outsourcing Bid submission and account handling",
        "24/7 Phone Support & Dedicated Manager"
      ],
      ctaText: "Get Enterprise Access",
      ctaLink: "https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf",
      popular: false
    }
  ];

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
            Pricing Launches After <span style={{ color: "#16A34A" }}>Public Beta</span>
          </h1>
          <p style={{ maxWidth: "680px", margin: "0 auto 32px auto", fontSize: "1.1rem", color: "#475569", lineHeight: "1.6" }}>
            Join today and use SahayakAI free during Public Beta. Help us improve the platform, explore AI procurement tools, and receive Founding Member benefits.
          </p>

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
                {/* Glassmorphism Public Beta Overlay */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: "24px",
                  background: "rgba(255, 255, 255, 0.82)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "28px",
                  textAlign: "center",
                  zIndex: 10,
                  border: "1px solid rgba(14, 138, 138, 0.25)"
                }}>
                  <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0E8A8A", background: "rgba(14, 138, 138, 0.1)", padding: "6px 14px", borderRadius: "9999px", marginBottom: "12px", border: "1px solid rgba(14, 138, 138, 0.2)" }}>
                    🚀 LAUNCHING AFTER PUBLIC BETA
                  </span>
                  <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#0C2E4A", marginBottom: "8px" }}>
                    Free During Public Beta
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "#475569", marginBottom: "20px", maxWidth: "260px", lineHeight: "1.5" }}>
                    Early Beta Members receive exclusive founding pricing when subscriptions officially launch.
                  </p>
                  <a
                    href="/#founding-member"
                    style={{
                      background: "linear-gradient(135deg, #0C2E4A 0%, #0E8A8A 100%)",
                      color: "white",
                      padding: "12px 24px",
                      borderRadius: "9999px",
                      fontSize: "0.9rem",
                      fontWeight: 800,
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(12, 46, 74, 0.25)",
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
                  letterSpacing: "0.05em"
                }}>
                  {plan.badge}
                </div>

                <div>
                  <h3 style={{ color: "#0C3E5E", marginBottom: "8px", fontSize: "1.4rem" }}>{plan.name}</h3>
                  <p style={{ fontSize: "0.9rem", color: "#64748B", marginBottom: "24px", minHeight: "44px" }}>
                    {plan.description}
                  </p>

                  {/* Pricing Display */}
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
                        ₹{billingPeriod === "monthly" ? plan.priceMonthly.toLocaleString("en-IN") : plan.priceAnnual.toLocaleString("en-IN")}
                      </span>
                      <span style={{ color: "#64748B", marginLeft: "4px", fontSize: "0.95rem" }}>
                        /{billingPeriod === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    <span style={{
                      position: "absolute",
                      left: "0",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      color: "#0E8A8A",
                      background: "rgba(14, 138, 138, 0.12)",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      border: "1px solid rgba(14, 138, 138, 0.25)",
                      whiteSpace: "nowrap"
                    }}>
                      Revealed after Beta
                    </span>
                  </div>

                  <hr style={{ border: "0", borderTop: "1px solid #F1F5F9", marginBottom: "24px" }} />

                  {/* Feature List */}
                  <ul style={{ listStyle: "none", padding: "0", margin: "0 0 40px 0", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "#334155" }}>
                        <span style={{ color: "#16A34A", fontWeight: "bold" }}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a 
                  href="/#founding-member"
                  style={{
                    background: "linear-gradient(135deg, #135C82 0%, #0E8A8A 100%)",
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
            <p>Har detail ko breakdown karke dekhein aur apne business ke liye perfect setup customize karein.</p>
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
                  <th style={{ padding: "16px 24px", color: "#0C3E5E", fontWeight: "700" }}>Core Features & Limits</th>
                  <th style={{ padding: "16px 24px", color: "#0C3E5E", fontWeight: "700" }}>Starter <span style={{ filter: "blur(6px)", WebkitFilter: "blur(6px)", userSelect: "none" }}>(₹999/mo)</span></th>
                  <th style={{ padding: "16px 24px", color: "#0C3E5E", fontWeight: "700" }}>Professional <span style={{ filter: "blur(6px)", WebkitFilter: "blur(6px)", userSelect: "none" }}>(₹1,999/mo)</span></th>
                  <th style={{ padding: "16px 24px", color: "#0C3E5E", fontWeight: "700" }}>Enterprise <span style={{ filter: "blur(6px)", WebkitFilter: "blur(6px)", userSelect: "none" }}>(₹4,999/mo)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td style={{ padding: "16px 24px", fontWeight: "600" }}>Monthly PDF Analysis</td>
                  <td style={{ padding: "16px 24px" }}>25 Documents</td>
                  <td style={{ padding: "16px 24px" }}>50 Documents</td>
                  <td style={{ padding: "16px 24px" }}>150 Documents</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td style={{ padding: "16px 24px", fontWeight: "600" }}>Max Pages per PDF</td>
                  <td style={{ padding: "16px 24px" }}>Up to 15 pages</td>
                  <td style={{ padding: "16px 24px" }}>Up to 50 pages</td>
                  <td style={{ padding: "16px 24px" }}>Unlimited</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td style={{ padding: "16px 24px", fontWeight: "600" }}>ePBG & EMD Extraction</td>
                  <td style={{ padding: "16px 24px" }}>Yes</td>
                  <td style={{ padding: "16px 24px" }}>Yes</td>
                  <td style={{ padding: "16px 24px" }}>Yes (Detailed Analysis)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td style={{ padding: "16px 24px", fontWeight: "600" }}>Monthly WhatsApp Alerts</td>
                  <td style={{ padding: "16px 24px" }}>200 Alerts</td>
                  <td style={{ padding: "16px 24px" }}>600 Alerts</td>
                  <td style={{ padding: "16px 24px" }}>2,000 Alerts</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td style={{ padding: "16px 24px", fontWeight: "600" }}>Alert Keywords Slots</td>
                  <td style={{ padding: "16px 24px" }}>3 Keywords</td>
                  <td style={{ padding: "16px 24px" }}>20 Keywords</td>
                  <td style={{ padding: "16px 24px" }}>Unlimited</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td style={{ padding: "16px 24px", fontWeight: "600" }}>Excel Export (1-Click)</td>
                  <td style={{ padding: "16px 24px" }}>✓ Yes</td>
                  <td style={{ padding: "16px 24px" }}>✓ Yes</td>
                  <td style={{ padding: "16px 24px" }}>✓ Yes</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td style={{ padding: "16px 24px", fontWeight: "600" }}>Historical Award Analysis</td>
                  <td style={{ padding: "16px 24px", color: "#64748B" }}>✕ Not Available</td>
                  <td style={{ padding: "16px 24px" }}>✓ 10 searches / month</td>
                  <td style={{ padding: "16px 24px" }}>✓ Unlimited searches</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td style={{ padding: "16px 24px", fontWeight: "600" }}>Auto-Document Checklist</td>
                  <td style={{ padding: "16px 24px", color: "#64748B" }}>✕ Not Available</td>
                  <td style={{ padding: "16px 24px", color: "#64748B" }}>✕ Not Available</td>
                  <td style={{ padding: "16px 24px" }}>✓ Yes</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td style={{ padding: "16px 24px", fontWeight: "600" }}>Catalog Helper limits</td>
                  <td style={{ padding: "16px 24px" }}>Basic (5 regens/product)</td>
                  <td style={{ padding: "16px 24px" }}>Unlimited</td>
                  <td style={{ padding: "16px 24px" }}>Unlimited + Team Collab</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td style={{ padding: "16px 24px", fontWeight: "600" }}>Device UUID Limit Lock</td>
                  <td style={{ padding: "16px 24px" }}>Max 1 Device</td>
                  <td style={{ padding: "16px 24px" }}>Max 3 Devices</td>
                  <td style={{ padding: "16px 24px" }}>Max 10 Devices</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #F1F5F9" }}>
                  <td style={{ padding: "16px 24px", fontWeight: "600" }}>Customer Support</td>
                  <td style={{ padding: "16px 24px" }}>Email Only</td>
                  <td style={{ padding: "16px 24px" }}>Priority WhatsApp Group</td>
                  <td style={{ padding: "16px 24px" }}>24/7 Call Support + Personal Mgr</td>
                </tr>
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
                Why is paid pricing currently unavailable?
              </h4>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.6" }}>
                SahayakAI is currently in Public Beta. We are focusing on building trust, refining our AI tools alongside real MSME sellers, and perfecting the platform before accepting commercial subscriptions.
              </p>
            </div>

            <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", border: "1px solid #E2E8F0" }}>
              <h4 style={{ color: "#0C3E5E", marginBottom: "8px", fontSize: "1.05rem" }}>
                Will Public Beta access remain free?
              </h4>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.6" }}>
                Yes! During the Public Beta phase, all core AI tools, bid search capabilities, and compliance guides are completely free to explore and use.
              </p>
            </div>

            <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", border: "1px solid #E2E8F0" }}>
              <h4 style={{ color: "#0C3E5E", marginBottom: "8px", fontSize: "1.05rem" }}>
                What benefits do Founding Beta Members receive?
              </h4>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.6" }}>
                Founding Beta Members receive early access to the upcoming SahayakAI Workspace, direct founder feedback channels, feature preview access, and exclusive lifetime founding pricing when commercial plans officially launch.
              </p>
            </div>

            <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", border: "1px solid #E2E8F0" }}>
              <h4 style={{ color: "#0C3E5E", marginBottom: "8px", fontSize: "1.05rem" }}>
                When will the SahayakAI Workspace officially launch?
              </h4>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.6" }}>
                The SahayakAI Workspace is being developed collaboratively with our beta community. Beta members receive early access to new feature releases and updates.
              </p>
            </div>

            <div style={{ background: "#FFFFFF", padding: "24px", borderRadius: "16px", border: "1px solid #E2E8F0" }}>
              <h4 style={{ color: "#0C3E5E", marginBottom: "8px", fontSize: "1.05rem" }}>
                How do I join the Public Beta Waitlist?
              </h4>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.6" }}>
                Simply click &quot;Join Beta Waitlist&quot; on any card or join our Founding Beta Member program on the homepage to receive early access.
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
            Help shape the future Procurement Workspace. Use AI tools free during beta and share your feedback with us.
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
