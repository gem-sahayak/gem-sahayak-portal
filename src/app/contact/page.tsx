import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — SahayakAI",
  description: "Get in touch with Suneel Verma and the SahayakAI team for support, feedback, and inquiries.",
};

export default function ContactUs() {
  return (
    <div style={{ padding: "80px 0", background: "var(--bg-light)", minHeight: "60vh" }}>
      <div className="container" style={{ maxWidth: "840px" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <span style={{ display: "inline-block", background: "rgba(16, 185, 129, 0.1)", color: "#059669", padding: "6px 16px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: "700", marginBottom: "16px", border: "1px solid rgba(16, 185, 129, 0.2)" }}>
            🧪 PUBLIC BETA COMMUNITY
          </span>
          <h1 style={{ fontSize: "2.5rem", color: "var(--primary-dark)", marginBottom: "12px", fontWeight: "800" }}>
            Become a Beta Partner
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", maxWidth: "640px", margin: "0 auto" }}>
            Help us build India&apos;s AI Procurement Platform. Share your feedback, request features, or explore enterprise partnerships directly with our founder.
          </p>
        </div>

        <div style={{ background: "white", padding: "40px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", border: "1px solid #e2e8f0" }}>
          
          {/* Beta Inquiry Categories Grid */}
          <h2 style={{ fontSize: "1.2rem", color: "#0C2E4A", marginBottom: "16px", fontWeight: "800" }}>
            How Can We Help You?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px", marginBottom: "36px" }}>
            {[
              { icon: "💬", title: "Product Feedback", desc: "Share your experience with our Beta tools" },
              { icon: "🐛", title: "Bug Reports", desc: "Report issues or unexpected portal behavior" },
              { icon: "💡", title: "Feature Requests", desc: "Suggest new AI features for Workspace" },
              { icon: "🤝", title: "Partnership Requests", desc: "Collaborate with SahayakAI ecosystem" },
              { icon: "🏢", title: "Enterprise Interest", desc: "Custom MSME agency setups & onboarding" },
              { icon: "📰", title: "Media Enquiries", desc: "Press, interviews & research queries" },
            ].map((cat, idx) => (
              <div key={idx} style={{ background: "#F8FAFC", padding: "16px", borderRadius: "12px", border: "1px solid #E2E8F0" }}>
                <div style={{ fontSize: "1.4rem", marginBottom: "6px" }}>{cat.icon}</div>
                <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "4px" }}>{cat.title}</h4>
                <p style={{ fontSize: "0.8rem", color: "#64748B", margin: 0 }}>{cat.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: "1.2rem", color: "var(--primary-dark)", marginBottom: "20px", fontWeight: "800" }}>
            Direct Channels
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div style={{ fontSize: "1.5rem" }}>👤</div>
              <div>
                <h3 style={{ fontSize: "1rem", color: "var(--primary-dark)", marginBottom: "2px", fontWeight: "700" }}>Founder & Lead</h3>
                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "0.92rem" }}>Suneel Verma</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div style={{ fontSize: "1.5rem" }}>📱</div>
              <div>
                <h3 style={{ fontSize: "1rem", color: "var(--primary-dark)", marginBottom: "2px", fontWeight: "700" }}>WhatsApp Support & Community</h3>
                <p style={{ color: "var(--text-muted)", margin: 0 }}>
                  <a href="https://wa.me/919183712004?text=Hi%20SahayakAI%20Team%2C%20I%20want%20to%20join%20Public%20Beta!" target="_blank" style={{ color: "var(--primary-green)", textDecoration: "none", fontWeight: "700" }}>+91 9183712004</a>
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
              <div style={{ fontSize: "1.5rem" }}>📧</div>
              <div>
                <h3 style={{ fontSize: "1rem", color: "var(--primary-dark)", marginBottom: "2px", fontWeight: "700" }}>Email Us</h3>
                <p style={{ color: "var(--text-muted)", margin: 0 }}>
                  <a href="mailto:support@sahayakai.co.in" style={{ color: "var(--primary-green)", textDecoration: "none", fontWeight: "700" }}>support@sahayakai.co.in</a>
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "36px", paddingTop: "28px", borderTop: "1px solid var(--border-light)" }}>
            <h3 style={{ fontSize: "1.05rem", color: "var(--primary-dark)", marginBottom: "16px", fontWeight: "700" }}>Follow Our Public Beta Journey</h3>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="https://x.com/SahayakAIofcial" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: "8px 16px", borderRadius: "8px", fontSize: "0.9rem" }}>🐦 Twitter</a>
              <a href="https://www.linkedin.com/company/sahayakai/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: "8px 16px", borderRadius: "8px", fontSize: "0.9rem" }}>💼 LinkedIn</a>
              <a href="https://www.facebook.com/profile.php?id=61591684731511" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ padding: "8px 16px", borderRadius: "8px", fontSize: "0.9rem" }}>📘 Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
