import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GeM Sahayak — Free WhatsApp GeM Bid Tracker & Helper for MSMEs",
  description: "Automate bid search, active tenders tracking, and real-time WhatsApp alerts on Government e-Marketplace (GeM India). Boost your MSME sales with the premium GeM Sahayak extension.",
  keywords: "GeM portal, Government e-Marketplace, GeM bids search, GeM L1 evaluation, GeM WhatsApp alerts, GeM tender tracker, MSME bids, Indian government tenders, catalog helper",
  authors: [{ name: "GeM Sahayak Team" }],
  openGraph: {
    title: "GeM Sahayak — Free WhatsApp GeM Bid Tracker & Helper",
    description: "Automate active tenders and get real-time WhatsApp alerts on GeM India. The ultimate helper tool for MSME government sellers.",
    url: "https://gemsahayak.co.in",
    siteName: "GeM Sahayak",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Global Navigation Bar */}
        <header className="navbar">
          <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <a href="/" className="logo">
              🎯 GeM Sahayak<span>.co.in</span>
            </a>
            
            <nav className="nav-links">
              <a href="/#features" className="nav-link">Features</a>
              <a href="/#demo" className="nav-link">Live Demo</a>
              <a href="/blog" className="nav-link">Blogs</a>
              <a href="https://chrome.google.com/webstore" target="_blank" className="btn btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem" }}>
                📥 Add to Chrome
              </a>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main style={{ minHeight: "calc(100vh - 80px - 280px)" }}>
          {children}
        </main>

        {/* Global Footer with Disclaimer */}
        <footer style={{ background: "#0D2137", color: "#94A3B8", padding: "64px 0 24px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "40px", marginBottom: "40px" }}>
              <div>
                <h3 style={{ color: "#F1F5F9", marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px" }}>
                  🎯 GeM Sahayak
                </h3>
                <p style={{ color: "#94A3B8", fontSize: "0.9rem", marginBottom: "16px" }}>
                  Empowering MSMEs and government contractors across India with automated bid tracking, WhatsApp alerts, and catalog intelligence.
                </p>
              </div>

              <div>
                <h4 style={{ color: "#F1F5F9", marginBottom: "16px", fontSize: "1rem" }}>Quick Links</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li><a href="/#features" className="hover-white" style={{ fontSize: "0.9rem" }}>Core Features</a></li>
                  <li><a href="/#demo" className="hover-white" style={{ fontSize: "0.9rem" }}>Interactive Demo</a></li>
                  <li><a href="/blog" className="hover-white" style={{ fontSize: "0.9rem" }}>Knowledge Hub & Blog</a></li>
                  <li><a href="https://chrome.google.com/webstore" target="_blank" className="hover-white" style={{ fontSize: "0.9rem" }}>Chrome Web Store</a></li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: "#F1F5F9", marginBottom: "16px", fontSize: "1rem" }}>Resources</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li><a href="/blog/how-to-automate-gem-bid-tracking-whatsapp-alerts" className="hover-white" style={{ fontSize: "0.9rem" }}>WhatsApp Setup Guide</a></li>
                  <li><a href="/blog/gem-bidding-mistakes-msme-tenders" className="hover-white" style={{ fontSize: "0.9rem" }}>Bidding Best Practices</a></li>
                  <li><a href="/blog/understanding-gem-l1-evaluation-process" className="hover-white" style={{ fontSize: "0.9rem" }}>L1 Process Guide</a></li>
                </ul>
              </div>
            </div>

            {/* Legal Disclaimer Block */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px", padding: "20px", marginBottom: "32px" }}>
              <h5 style={{ color: "#E2E8F0", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>
                ⚠️ Important Disclaimer & Legal Notice
              </h5>
              <p style={{ color: "#64748B", fontSize: "0.8rem", lineHeight: "1.5" }}>
                <strong>GeM Sahayak</strong> is an independent software tool and helper Chrome extension designed to assist registered sellers on the Government e-Marketplace. GeM Sahayak is <strong>NOT affiliated, associated, authorized, endorsed by, or in any way officially connected</strong> with the Government e-Marketplace (GeM), Ministry of Commerce and Industry, or any official government agency of India. The official GeM website can be found at <a href="https://gem.gov.in" target="_blank" style={{ color: "#16a34a", textDecoration: "underline" }}>https://gem.gov.in</a>. All official terms, bidding data, and portal updates are properties of their respective government authorities.
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "24px", fontSize: "0.85rem", color: "#64748B" }}>
              <p>© {new Date().getFullYear()} GeM Sahayak. Made with ❤️ for MSMEs in India.</p>
              <div style={{ display: "flex", gap: "24px" }}>
                <a href="#" className="hover-white">Terms of Service</a>
                <a href="#" className="hover-white">Privacy Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
