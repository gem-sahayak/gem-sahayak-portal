import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — SahayakAI",
  description: "Learn about the mission, vision, and team behind SahayakAI Chrome Extension. Empowering Indian MSMEs on the Government e-Marketplace.",
};

export default function AboutUsPage() {
  return (
    <div style={{ padding: "60px 0", background: "#f8fafc" }}>
      <div className="container" style={{ maxWidth: "800px", background: "#ffffff", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "8px", color: "#0C3E5E" }}>About Us</h1>
        <p style={{ fontSize: "1.1rem", color: "#64748B", marginBottom: "32px" }}>
          Empowering Indian MSMEs and Government Contractors to Scale and Succeed.
        </p>
        
        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "24px 0" }} />

        <div className="about-content" style={{ display: "flex", flexDirection: "column", gap: "24px", color: "#334155", lineHeight: "1.7" }}>
          <section>
            <h2 style={{ fontSize: "1.5rem", color: "#0C3E5E", marginBottom: "12px" }}>Our Mission</h2>
            <p style={{ color: "#64748B" }}>
              SahayakAI was born out of a simple vision: to make the government e-marketplace (Gem India) portal accessible, automated, and highly productive for everyday business owners, contractors, and Micro, Small & Medium Enterprises (MSMEs). 
            </p>
            <p style={{ color: "#64748B", marginTop: "12px" }}>
              We build intelligent, lightweight, and secure helper tools that cut through the complexity of manual bid tracking, pricing evaluations, and catalog uploads. Our goal is to level the playing field so that local sellers can participate in government tenders with speed and accuracy.
            </p>
          </section>

          {/* 🇮🇳 Trust Banner & Cards (Part 2A: Trust Architecture) */}
          <section style={{ 
            background: "linear-gradient(135deg, rgba(14, 138, 138, 0.03) 0%, rgba(13, 33, 55, 0.05) 100%)", 
            border: "1px solid rgba(226, 232, 240, 0.8)", 
            borderRadius: "16px", 
            padding: "32px", 
            margin: "24px 0", 
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.01)" 
          }}>
            {/* Trust Banner Header */}
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <span style={{ fontSize: "1.5rem", display: "block", marginBottom: "8px" }}>🇮🇳</span>
              <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "#0C3E5E", marginBottom: "10px", letterSpacing: "-0.3px" }}>
                Proudly Supporting Indian Businesses
              </h3>
              <p style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "#0E8A8A", marginBottom: "12px" }}>
                AI-Powered &bull; Compliance-First &bull; Independent Technology Platform
              </p>
              <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto", fontStyle: "italic" }}>
                Bharat ke MSMEs, Manufacturers, Traders, Startups aur Contractors ko digital procurement me safalta ki taraf le jaana hi hamara uddeshya hai.
              </p>
            </div>

            {/* 4 Trust Cards Grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
              gap: "20px" 
            }}>
              {/* Card 1 */}
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02)" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "12px" }}>🛡️</div>
                <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#0C3E5E", marginBottom: "8px" }}>Compliance First</h4>
                <p style={{ fontSize: "0.82rem", color: "#64748B", lineHeight: "1.5" }}>
                  Designed with a compliance-first approach to help businesses work more confidently while respecting procurement rules and platform policies.
                </p>
              </div>

              {/* Card 2 */}
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02)" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "12px" }}>👥</div>
                <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#0C3E5E", marginBottom: "8px" }}>Built for Indian Businesses</h4>
                <p style={{ fontSize: "0.82rem", color: "#64748B", lineHeight: "1.5" }}>
                  Created to support MSMEs, Manufacturers, Traders, Startups and Contractors across India.
                </p>
              </div>

              {/* Card 3 */}
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02)" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "12px" }}>⚡</div>
                <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#0C3E5E", marginBottom: "8px" }}>AI-Powered Productivity</h4>
                <p style={{ fontSize: "0.82rem", color: "#64748B", lineHeight: "1.5" }}>
                  Helping users save time, simplify procurement tasks and make better informed decisions using AI.
                </p>
              </div>

              {/* Card 4 */}
              <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "12px", padding: "20px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.02)" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "12px" }}>📈</div>
                <h4 style={{ fontSize: "1rem", fontWeight: "700", color: "#0C3E5E", marginBottom: "8px" }}>Supporting Digital Procurement</h4>
                <p style={{ fontSize: "0.82rem", color: "#64748B", lineHeight: "1.5" }}>
                  Helping Indian businesses understand and participate more confidently in Government procurement processes.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: "1.5rem", color: "#0C3E5E", marginBottom: "12px" }}>Why SahayakAI?</h2>
            <p style={{ color: "#64748B" }}>
              Bidding on government contracts shouldn't require complex software setups or hours of manual screen refreshing. SahayakAI sits directly inside your Chrome browser as a secure overlay helper, assisting you with:
            </p>
            <ul style={{ listStyle: "disc", marginLeft: "20px", marginTop: "12px", color: "#64748B", display: "flex", flexDirection: "column", gap: "8px" }}>
              <li>
                <strong>Instant WhatsApp Alerts</strong>: Get notified immediately on your mobile when new bids match your target keywords, state, or city.
              </li>
              <li>
                <strong>Smart Bid Pricing Suggestions</strong>: Get automatic minimum matching price suggestions derived securely from standard BOQ and market data.
              </li>
              <li>
                <strong>1-Click Bid Summaries</strong>: Upload thick PDF bid documents and get quick summaries of experience, turnover, and EMD requirements within seconds.
              </li>
              <li>
                <strong>Easy Catalog Setup</strong>: Get step-by-step guidance on how to easily list products and build clean portfolios on the marketplace.
              </li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.5rem", color: "#0C3E5E", marginBottom: "12px" }}>"Created For Bhaarat"</h2>
            <p style={{ color: "#64748B" }}>
              We strongly support the Government of India's digital initiatives like Digital India, Make in India, and the e-Marketplace framework that brings transparency and equality to public procurement. 
            </p>
            <p style={{ color: "#64748B", marginTop: "12px" }}>
              By empowering local merchants, we aim to accelerate the vision of <strong>"Sabka Saath, Sabka Vikas"</strong>. Every merchant registered and selling on Gem portal contributes to building a stronger, self-reliant Bharat.
            </p>
          </section>

          <section style={{ background: "#f1f5f9", padding: "20px", borderRadius: "8px", borderLeft: "4px solid #0C3E5E", marginTop: "12px" }}>
            <h3 style={{ fontSize: "1.1rem", color: "#0C3E5E", marginBottom: "8px" }}>⚠️ Non-Affiliation Notice</h3>
            <p style={{ color: "#64748B", fontSize: "0.9rem" }}>
              SahayakAI is an independent software utility and browser extension. We are <strong>NOT</strong> affiliated, sponsored, authorized, or officially connected with the government e-marketplace (Gem India), the Ministry of Commerce and Industry, or any government agency. The official government portal is hosted at <a href="https://gem.gov.in" target="_blank" style={{ color: "#16a34a", textDecoration: "underline" }}>https://gem.gov.in</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
