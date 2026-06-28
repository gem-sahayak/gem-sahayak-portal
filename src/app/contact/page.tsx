import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — GeM Sahayak",
  description: "Get in touch with Suneel Verma and the GeM Sahayak team for support, feedback, and inquiries.",
};

export default function ContactUs() {
  return (
    <div style={{ padding: "100px 0", background: "var(--bg-light)", minHeight: "60vh" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1 style={{ fontSize: "2.5rem", color: "var(--primary-dark)", marginBottom: "16px", textAlign: "center" }}>
          Contact Us
        </h1>
        <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", textAlign: "center", marginBottom: "48px" }}>
          We would love to hear from you! Reach out for support, feedback, or any business inquiries.
        </p>

        <div style={{ background: "white", padding: "40px", borderRadius: "16px", boxShadow: "var(--shadow-md)" }}>
          <h2 style={{ fontSize: "1.5rem", color: "var(--primary-dark)", marginBottom: "24px" }}>
            Get In Touch
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div style={{ fontSize: "1.5rem" }}>👤</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", color: "var(--primary-dark)", marginBottom: "4px" }}>Contact Person</h3>
                <p style={{ color: "var(--text-muted)" }}>Suneel Verma</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div style={{ fontSize: "1.5rem" }}>📱</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", color: "var(--primary-dark)", marginBottom: "4px" }}>WhatsApp</h3>
                <p style={{ color: "var(--text-muted)" }}>
                  <a href="https://wa.me/918982255900" target="_blank" style={{ color: "var(--primary-green)", textDecoration: "none", fontWeight: "600" }}>+91 8982255900</a>
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div style={{ fontSize: "1.5rem" }}>📧</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", color: "var(--primary-dark)", marginBottom: "4px" }}>Email</h3>
                <p style={{ color: "var(--text-muted)" }}>
                  <a href="mailto:gemsahayak@gmail.com" style={{ color: "var(--primary-green)", textDecoration: "none", fontWeight: "600" }}>gemsahayak@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "40px", paddingTop: "32px", borderTop: "1px solid var(--border-light)" }}>
            <h3 style={{ fontSize: "1.2rem", color: "var(--primary-dark)", marginBottom: "16px" }}>Follow Us</h3>
            <div style={{ display: "flex", gap: "16px" }}>
              <a href="#" className="btn btn-outline" style={{ padding: "8px 16px", borderRadius: "8px", fontSize: "0.9rem" }}>🐦 Twitter</a>
              <a href="#" className="btn btn-outline" style={{ padding: "8px 16px", borderRadius: "8px", fontSize: "0.9rem" }}>💼 LinkedIn</a>
              <a href="#" className="btn btn-outline" style={{ padding: "8px 16px", borderRadius: "8px", fontSize: "0.9rem" }}>📘 Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
