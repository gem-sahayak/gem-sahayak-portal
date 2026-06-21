import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — GeM Sahayak",
  description: "Read the Terms of Service of GeM Sahayak Chrome Extension. Understand the guidelines and limitations of our software utility.",
};

export default function TermsOfServicePage() {
  return (
    <div style={{ padding: "60px 0", background: "#f8fafc" }}>
      <div className="container" style={{ maxWidth: "800px", background: "#ffffff", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "8px", color: "#0C3E5E" }}>Terms of Service</h1>
        <p style={{ fontSize: "0.9rem", color: "#64748B", marginBottom: "24px" }}>Last updated: June 20, 2026</p>
        
        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "24px 0" }} />

        <div className="terms-content" style={{ display: "flex", flexDirection: "column", gap: "20px", color: "#334155", lineHeight: "1.7" }}>
          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>1. Acceptance of Terms</h2>
            <p style={{ color: "#64748B" }}>
              By installing the GeM Sahayak Chrome extension or using gemsahayak.co.in, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not install or use our services.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>2. Description of Service</h2>
            <p style={{ color: "#64748B" }}>
              GeM Sahayak is a productivity helper and voice-assistant tool designed to assist registered sellers in searching active bids, setting up automated WhatsApp alerts, analyzing compliance requirements, and organizing product catalogue details. It acts as an automation overlay to simplify navigation on the Government e-Marketplace (GeM) portal.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>3. Official Government Disclaimer & Non-Affiliation</h2>
            <p style={{ color: "#64748B", fontWeight: "600" }}>
              ⚠️ GeM Sahayak is an INDEPENDENT utility software. We are NOT associated, authorized, endorsed by, or in any way officially connected with the Government e-Marketplace (GeM India), the Ministry of Commerce and Industry, or any other Indian government department.
            </p>
            <p style={{ color: "#64748B", marginTop: "10px" }}>
              The official portal is accessible at <a href="https://gem.gov.in" target="_blank" style={{ color: "#16a34a", textDecoration: "underline" }}>https://gem.gov.in</a>. All transactions, bidding regulations, registrations, and official portal updates must be performed directly on the official GeM website in compliance with government rules.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>4. AI and Data Limitations</h2>
            <p style={{ color: "#64748B" }}>
              GeM Sahayak utilizes artificial intelligence (AI) and automated network requests to compile and present information. 
            </p>
            <ul style={{ listStyle: "disc", marginLeft: "20px", marginTop: "8px", color: "#64748B" }}>
              <li><strong>AI Error Margins</strong>: AI models can make errors or overlook details. You must manually check and verify any L1 eligibility, category selection, or pricing suggestions before placing bids.</li>
              <li><strong>Network Delays</strong>: Portal data retrieved by the automation server can occasionally be delayed or mismatched due to server issues or network congestion.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>5. Permitted Use & Account Security</h2>
            <p style={{ color: "#64748B" }}>
              You agree to use GeM Sahayak solely for lawful business purposes in compliance with the GeM Portal Terms of Use. You are solely responsible for keeping your login credentials, passwords, and OTPs secure. GeM Sahayak does not collect, record, or request your official login credentials.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>6. Limitation of Liability</h2>
            <p style={{ color: "#64748B" }}>
              In no event shall GeM Sahayak, its developers, or its team be liable for any direct, indirect, incidental, special, or consequential damages (including loss of business, bids, or profits) arising out of the use or inability to use the helper extension, even if advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>7. Termination</h2>
            <p style={{ color: "#64748B" }}>
              We reserve the right to modify or discontinue any part of our service, or terminate your license to use the extension, at any time without notice. You can terminate these terms by uninstalling the extension and removing all configuration data.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>8. Contact Us</h2>
            <p style={{ color: "#64748B" }}>
              For any questions regarding these terms, please contact us at <strong>support@gemsahayak.co.in</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
