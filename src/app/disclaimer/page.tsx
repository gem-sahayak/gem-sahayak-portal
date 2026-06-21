import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer — GeM Sahayak",
  description: "Read the official legal disclaimer and non-affiliation notice for GeM Sahayak. Learn about our status as an independent third-party tool.",
};

export default function DisclaimerPage() {
  return (
    <div style={{ padding: "60px 0", background: "#f8fafc" }}>
      <div className="container" style={{ maxWidth: "800px", background: "#ffffff", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "8px", color: "#0C3E5E" }}>Disclaimer & Legal Notice</h1>
        <p style={{ fontSize: "0.9rem", color: "#64748B", marginBottom: "24px" }}>Last updated: June 21, 2026</p>
        
        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "24px 0" }} />

        <div className="disclaimer-content" style={{ display: "flex", flexDirection: "column", gap: "20px", color: "#334155", lineHeight: "1.7" }}>
          <section style={{ background: "#fef2f2", padding: "20px", borderRadius: "8px", borderLeft: "4px solid #ef4444" }}>
            <h2 style={{ fontSize: "1.2rem", color: "#991b1b", marginBottom: "8px" }}>1. Non-Affiliation and Independence</h2>
            <p style={{ color: "#7f1d1d", fontSize: "0.95rem" }}>
              <strong>GeM Sahayak</strong> is an independent, third-party software utility and browser extension. We are <strong>NOT affiliated, associated, authorized, endorsed by, or in any way officially connected</strong> with the Government e-Marketplace (GeM India), the Ministry of Commerce and Industry, or any official government agency, department, or enterprise of the Government of India.
            </p>
            <p style={{ color: "#7f1d1d", fontSize: "0.95rem", marginTop: "10px" }}>
              The official Government e-Marketplace portal is hosted at <a href="https://gem.gov.in" target="_blank" style={{ color: "#b91c1c", textDecoration: "underline", fontWeight: "600" }}>https://gem.gov.in</a>. All official transactions, bid updates, catalog submissions, and registrations must be performed directly on that official domain.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>2. Software Provided "As Is"</h2>
            <p style={{ color: "#64748B" }}>
              GeM Sahayak is provided on an "as is" and "as available" basis. While we strive to maintain high accuracy and up-to-date data, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, bid listings, pricing data, or PDF analysis reports compiled by the software.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>3. Bidding Price & L1 Suggestions</h2>
            <p style={{ color: "#64748B" }}>
              Any suggestions or calculations provided by the extension's Bid Pricing Intelligence or PDF Summary tools are for informational and convenience purposes only. Sellers and contractors are solely responsible for manually verifying tender documents, eligibility rules, compliance requirements, and pricing limits before submitting active bids on the GeM portal. We are not responsible for any bid rejections, pricing errors, or tender losses.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>4. Local Data Security</h2>
            <p style={{ color: "#64748B" }}>
              GeM Sahayak does not collect, record, or request your official GeM portal username, passwords, or transactional details. All user configurations, alert filters, and profile settings are stored locally on your device. It is your responsibility to maintain the physical and digital security of your device.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>5. Contact Us</h2>
            <p style={{ color: "#64748B" }}>
              If you have any questions or require legal clarification regarding this disclaimer, please contact us via email at <strong>support@gemsahayak.co.in</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
