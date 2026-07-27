import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import BetaAnnouncement from "./components/BetaAnnouncement";

export const metadata: Metadata = {
  title: "SahayakAI — Free WhatsApp Gem Portal Bid Tracker & Helper for MSMEs",
  description: "Automate bid search, active tenders tracking, and real-time WhatsApp alerts on government e-marketplace (Gem India). Boost your MSME sales with the premium SahayakAI extension.",
  keywords: "Gem portal, government e-marketplace, Gem portal bids search, Gem portal L1 evaluation, Gem portal WhatsApp alerts, Gem portal tender tracker, MSME bids, Indian government tenders, catalog helper",
  authors: [{ name: "SahayakAI Team" }],
  openGraph: {
    title: "SahayakAI — Free WhatsApp Gem Portal Bid Tracker & Helper",
    description: "Automate active tenders and get real-time WhatsApp alerts on Gem Portal India. The ultimate helper tool for MSME government sellers.",
    url: "https://sahayakai.co.in",
    siteName: "SahayakAI",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://sahayakai.co.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "SahayakAI — Gem Portal Bid Tracker & Helper for MSMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SahayakAI — Free WhatsApp Gem Portal Bid Tracker & Helper",
    description: "Automate active tenders and get real-time WhatsApp alerts on Gem Portal India.",
    images: ["https://sahayakai.co.in/og-image.png"],
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
      <head>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '26727525733592631');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display: 'none'}}
            src="https://www.facebook.com/tr?id=26727525733592631&ev=PageView&noscript=1"
          />
        </noscript>
        
        {/* Google Analytics Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S6DQFCGY9X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S6DQFCGY9X');
          `}
        </Script>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SahayakAI",
              "url": "https://sahayakai.co.in",
              "logo": "https://sahayakai.co.in/logo_symbol.png",
              "sameAs": [
                "https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf"
              ],
              "description": "SahayakAI is an independent third-party helper Chrome extension and software tool built to help Indian GeM portal sellers and MSMEs automate bid search, active tenders tracking, and real-time WhatsApp alerts."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "SahayakAI",
              "url": "https://sahayakai.co.in",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sahayakai.co.in/knowledge/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body>
        {/* Global Persistent Beta Ribbon */}
        <BetaAnnouncement />

        {/* Global Navigation Bar */}
        <Navbar />

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
                  🎯 SahayakAI
                </h3>
                <p style={{ color: "#94A3B8", fontSize: "0.9rem", marginBottom: "16px" }}>
                  SahayakAI is a software tool built to help Indian Gem Sellers and MSMEs succeed in public procurement by automating the tedious parts of the government e-marketplace portal.
                </p>
              </div>

              <div>
                <h4 style={{ color: "#F1F5F9", marginBottom: "16px", fontSize: "1rem" }}>Quick Links</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li><a href="/" className="hover-white" style={{ fontSize: "0.9rem" }}>Home</a></li>
                  <li><a href="/#features" className="hover-white" style={{ fontSize: "0.9rem" }}>Core Features</a></li>
                  <li><a href="/#demo" className="hover-white" style={{ fontSize: "0.9rem" }}>Interactive Demo</a></li>
                  <li><a href="/knowledge" className="hover-white" style={{ fontSize: "0.9rem" }}>Knowledge Hub</a></li>
                  <li><a href="/contact" className="hover-white" style={{ fontSize: "0.9rem" }}>Contact Us</a></li>
                  <li><a href="https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf" target="_blank" className="hover-white" style={{ fontSize: "0.9rem" }}>Chrome Web Store</a></li>
                </ul>
              </div>

              <div>
                <h4 style={{ color: "#F1F5F9", marginBottom: "16px", fontSize: "1rem" }}>Resources</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li><a href="/knowledge/gem-bidding/how-to-automate-gem-bid-tracking-whatsapp-alerts" className="hover-white" style={{ fontSize: "0.9rem" }}>WhatsApp & Voice Setup Guide</a></li>
                  <li><a href="/knowledge/compliance-policy/gem-bidding-mistakes-msme-tenders" className="hover-white" style={{ fontSize: "0.9rem" }}>Bidding Best Practices</a></li>
                  <li><a href="/knowledge/compliance-policy/how-to-claim-emd-exemption-gem-portal-bids" className="hover-white" style={{ fontSize: "0.9rem" }}>EMD Exemption Guide</a></li>
                </ul>
              </div>
            </div>

            {/* Legal Disclaimer Block */}
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "8px", padding: "20px", marginBottom: "32px" }}>
              <h5 style={{ color: "#E2E8F0", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>
                ⚠️ Important Disclaimer & Legal Notice
              </h5>
              <p style={{ color: "#64748B", fontSize: "0.8rem", lineHeight: "1.5" }}>
                <strong>SahayakAI</strong> is an independent software tool and helper Chrome extension designed to assist registered sellers on the government e-marketplace. SahayakAI is <strong>NOT affiliated, associated, authorized, endorsed by, or in any way officially connected</strong> with the Government e-Marketplace (Gem Portal), Ministry of Commerce and Industry, or any official government agency of India. The official Gem portal website can be found at <a href="https://gem.gov.in" target="_blank" style={{ color: "#16a34a", textDecoration: "underline" }}>https://gem.gov.in</a>. All official terms, bidding data, and portal updates are properties of their respective government authorities.
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "24px", fontSize: "0.85rem", color: "#64748B", flexWrap: "wrap", gap: "16px" }}>
              <p>© {new Date().getFullYear()} SahayakAI. Made with ❤️ for MSMEs in India.</p>
              <div style={{ display: "flex", gap: "24px" }}>
                <a href="/terms" className="hover-white">Terms and Conditions</a>
                <a href="/privacy" className="hover-white">Privacy Policy</a>
                <a href="/disclaimer" className="hover-white">Disclaimer</a>
              </div>
            </div>
            
            {/* Public Beta Footer Note */}
            <div style={{ marginTop: "20px", textAlign: "center", padding: "10px 16px", background: "rgba(110,231,183,0.06)", border: "1px solid rgba(110,231,183,0.2)", borderRadius: "8px", color: "#6EE7B7", fontSize: "0.82rem", fontWeight: "700" }}>
              🧪 Currently in Public Beta. SahayakAI is continuously evolving with feedback from Indian businesses.
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Support Button */}
        <a
          href="https://wa.me/919183712004?text=Hi%20SahayakAI%20Team%2C%20I%20need%20help%20with%20the%20extension."
          target="_blank"
          rel="noopener noreferrer"
          className="fab-whatsapp"
          aria-label="Chat with us on WhatsApp"
        >
          <span className="fab-whatsapp-tooltip">Need Help? Chat Now!</span>
          <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </a>
      </body>
    </html>
  );
}
