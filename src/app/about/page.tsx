import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — SahayakAI",
  description: "Learn about the mission, vision, and team behind SahayakAI Chrome Extension. Empowering Indian MSMEs on the Government e-Marketplace.",
};

export default function AboutUsPage() {
  return (
    <div style={{ padding: "60px 0", background: "#f8fafc" }}>
      <div className="container" style={{ maxWidth: "880px", background: "#ffffff", padding: "48px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)", border: "1px solid #e2e8f0" }}>
        
        {/* Header Badge */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span style={{ display: "inline-block", background: "rgba(16, 185, 129, 0.1)", color: "#059669", padding: "6px 16px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: "700", marginBottom: "16px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
            🧪 PUBLIC BETA MISSION STORY
          </span>
          <h1 style={{ fontSize: "2.6rem", fontWeight: "800", color: "#0C3E5E", marginBottom: "12px", letterSpacing: "-0.5px" }}>
            Building India&apos;s AI Procurement Platform Together
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#64748B", maxWidth: "680px", margin: "0 auto", lineHeight: "1.6" }}>
            Empowering Indian MSMEs, Manufacturers, Traders, and Contractors to scale public procurement through trust-first technology.
          </p>
        </div>
        
        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "32px 0" }} />



        <div className="about-content" style={{ display: "flex", flexDirection: "column", gap: "32px", color: "#334155", lineHeight: "1.7" }}>
          <section>
            <h2 style={{ fontSize: "1.5rem", color: "#0C3E5E", marginBottom: "12px", fontWeight: "800" }}>Why SahayakAI Exists</h2>
            <p style={{ color: "#475569" }}>
              Public procurement on government e-marketplaces (GeM India) presents massive commercial opportunities for Indian MSMEs. However, everyday business owners face overwhelming complexity—manual bid tracking, obscure eligibility clauses, technical document evaluation, and constant compliance updates.
            </p>
            <p style={{ color: "#475569", marginTop: "12px" }}>
              SahayakAI was created to level the playing field. By combining lightweight browser extensions, structured compliance knowledge hubs, and natural language AI tools, we make public bidding fast, transparent, and accessible to every seller in India.
            </p>
          </section>

          {/* Zero Credentials & Compliance Philosophy */}
          <section style={{
            background: "linear-gradient(135deg, rgba(12, 46, 74, 0.04) 0%, rgba(14, 138, 138, 0.06) 100%)",
            border: "1px solid rgba(14, 138, 138, 0.2)",
            borderRadius: "16px",
            padding: "32px"
          }}>
            <h2 style={{ fontSize: "1.35rem", color: "#0C3E5E", marginBottom: "12px", fontWeight: "800", display: "flex", alignItems: "center", gap: "10px" }}>
              🔒 Zero Credentials & Privacy First Philosophy
            </h2>
            <p style={{ color: "#475569", marginBottom: "16px" }}>
              We operate under a strict <strong>Zero Credential Philosophy</strong>. SahayakAI NEVER asks for, reads, stores, or transmits your GeM portal logins, passwords, session tokens, OTPs, or bank details.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
              <div style={{ background: "#FFFFFF", padding: "16px", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0C3E5E", marginBottom: "6px" }}>🛡️ Compliance First</h4>
                <p style={{ fontSize: "0.82rem", color: "#64748B", margin: 0 }}>Built strictly as a sidecar overlay. Zero portal interference.</p>
              </div>
              <div style={{ background: "#FFFFFF", padding: "16px", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0C3E5E", marginBottom: "6px" }}>🔒 No Passwords Needed</h4>
                <p style={{ fontSize: "0.82rem", color: "#64748B", margin: 0 }}>Use extension features without giving away portal credentials.</p>
              </div>
              <div style={{ background: "#FFFFFF", padding: "16px", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
                <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0C3E5E", marginBottom: "6px" }}>🇮🇳 Built for Indian MSMEs</h4>
                <p style={{ fontSize: "0.82rem", color: "#64748B", margin: 0 }}>Designed in Hinglish & local terms for maximum accessibility.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 style={{ fontSize: "1.5rem", color: "#0C3E5E", marginBottom: "12px", fontWeight: "800" }}>&quot;Created For Bhaarat&quot;</h2>
            <p style={{ color: "#475569" }}>
              We strongly support the Government of India&apos;s digital initiatives like Digital India, Make in India, and the e-Marketplace framework that brings transparency and equality to public procurement. 
            </p>
            <p style={{ color: "#475569", marginTop: "12px" }}>
              By empowering local merchants, we aim to accelerate the vision of <strong>&quot;Sabka Saath, Sabka Vikas&quot;</strong>. Every merchant registered and selling on Gem portal contributes to building a stronger, self-reliant Bharat.
            </p>
          </section>

          <section style={{ background: "#f1f5f9", padding: "20px", borderRadius: "12px", borderLeft: "4px solid #0C3E5E" }}>
            <h3 style={{ fontSize: "1.05rem", color: "#0C3E5E", marginBottom: "8px", fontWeight: "800" }}>⚠️ Non-Affiliation Notice</h3>
            <p style={{ color: "#64748B", fontSize: "0.88rem", margin: 0 }}>
              SahayakAI is an independent software utility and browser extension. We are <strong>NOT</strong> affiliated, sponsored, authorized, or officially connected with the government e-marketplace (Gem India), the Ministry of Commerce and Industry, or any government agency. The official government portal is hosted at <a href="https://gem.gov.in" target="_blank" style={{ color: "#16a34a", textDecoration: "underline" }}>https://gem.gov.in</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
