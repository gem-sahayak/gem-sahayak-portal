import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — GeM Sahayak",
  description: "Read the Privacy Policy of GeM Sahayak Chrome Extension. Understand how we protect your data and handle local storage securely.",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ padding: "60px 0", background: "#f8fafc" }}>
      <div className="container" style={{ maxWidth: "800px", background: "#ffffff", padding: "40px", borderRadius: "12px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "8px", color: "#0C3E5E" }}>Privacy Policy</h1>
        <p style={{ fontSize: "0.9rem", color: "#64748B", marginBottom: "24px" }}>Last updated: June 20, 2026</p>
        
        <hr style={{ border: "none", borderTop: "1px solid #e2e8f0", margin: "24px 0" }} />

        <div className="policy-content" style={{ display: "flex", flexDirection: "column", gap: "20px", color: "#334155", lineHeight: "1.7" }}>
          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>1. Introduction</h2>
            <p style={{ color: "#64748B" }}>
              GeM Sahayak ("we", "our", or "us") operates the GeM Sahayak Chrome extension and the website gemsahayak.co.in. We are committed to protecting your privacy. This Privacy Policy explains how we handle data within our browser extension and associated services.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>2. Information Collection and Local Storage</h2>
            <p style={{ color: "#64748B" }}>
              <strong>We do not collect or store your personal credentials, passwords, OTPs, or private bidding details on any central server.</strong>
            </p>
            <p style={{ color: "#64748B", marginTop: "10px" }}>
              To provide our helper features, the extension stores the following profile information <strong>locally on your computer</strong> using Chrome's secure storage API (`chrome.storage.local`):
            </p>
            <ul style={{ listStyle: "disc", marginLeft: "20px", marginTop: "8px", color: "#64748B" }}>
              <li>Your name and location (to personalize the greetings and default bid searches).</li>
              <li>Your WhatsApp configuration settings (required to send alert digests to your mobile number).</li>
              <li>Your own Gemini API Key (if provided by you for localized AI parsing).</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>3. Data Transmission</h2>
            <p style={{ color: "#64748B" }}>
              To perform searches and deliver alerts, the extension securely transmits data to the following endpoints:
            </p>
            <ul style={{ listStyle: "disc", marginLeft: "20px", marginTop: "8px", color: "#64748B" }}>
              <li><strong>Backend API Server (api.gemsahayak.co.in)</strong>: Search parameters (state, city, keyword) are sent to execute automated query selectors on the GeM portal and retrieve active tenders.</li>
              <li><strong>WhatsApp Gateway API (Green API / UltraMsg)</strong>: When you click "Send WA" or "WA Digest", the bid text is transmitted to your configured instance to deliver a message to your phone.</li>
              <li><strong>Google Gemini API</strong>: The text of bids or search queries is sent to Gemini only to translate search intent or summarize PDF documents.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>4. Security of Your Data</h2>
            <p style={{ color: "#64748B" }}>
              All communications between the GeM Sahayak extension, our backend APIs, and third-party APIs are encrypted in transit using industry-standard SSL (HTTPS) protocols. Since your API keys and profile details remain in your browser's local storage, they are protected by your operating system's local user security.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>5. Your Choices & Data Removal</h2>
            <p style={{ color: "#64748B" }}>
              You are in full control of your data. You can delete all your stored settings and profile details from the extension instantly by clicking the <strong>"Logout"</strong> button in the extension header. Uninstalling the extension will also automatically erase all locally stored data.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>6. Third-Party Links & Disclaimers</h2>
            <p style={{ color: "#64748B" }}>
              Our extension interacts with the official Government e-Marketplace (GeM India) portal (`gem.gov.in`). We are not affiliated with, authorized, or officially connected with GeM India. Please check GeM's official terms and privacy policy when interacting with their portal.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>7. Changes to This Privacy Policy</h2>
            <p style={{ color: "#64748B" }}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the date at the top.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: "1.3rem", color: "#0C3E5E", marginBottom: "10px" }}>8. Contact Us</h2>
            <p style={{ color: "#64748B" }}>
              If you have any questions or feedback regarding this privacy policy, please contact us via email at <strong>support@gemsahayak.co.in</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
