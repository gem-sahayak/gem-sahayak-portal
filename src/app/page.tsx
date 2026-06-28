'use client';

import React, { useState } from "react";

interface MockBid {
  id: string;
  bidNumber: string;
  category: string;
  department: string;
  endDate: string;
}

export default function Home() {
  const [activeAlert, setActiveAlert] = useState<string | null>(null);
  const [waSentBid, setWaSentBid] = useState<string | null>(null);

  const mockBids: MockBid[] = [
    {
      id: "1",
      bidNumber: "GEM/2026/B/7632006",
      category: "Digital Multimeter - Professional Grade (Conforming to IS 1375)",
      department: "Ministry of Defence — Department of Military Affairs",
      endDate: "26-06-2026"
    },
    {
      id: "2",
      bidNumber: "GEM/2026/B/7557642",
      category: "Entry Level Desktop Computers (Intel Core i3, 8GB RAM, 512GB SSD)",
      department: "Ministry of Communications — Department of Posts",
      endDate: "03-07-2026"
    },
    {
      id: "3",
      bidNumber: "GEM/2026/B/7541762",
      category: "Fixed Computer Workstation & A3 Size Multifunction Printer",
      department: "Ministry of Education — Department of Higher Education",
      endDate: "25-06-2026"
    }
  ];

  const handleSendWA = (bidNumber: string) => {
    setWaSentBid(bidNumber);
    setTimeout(() => setWaSentBid(null), 3000);
  };

  const handleSetAlert = (bidNumber: string) => {
    setActiveAlert(bidNumber);
    setTimeout(() => setActiveAlert(null), 3000);
  };

  return (
    <div>
      {/* 🚀 HERO SECTION */}
      <section style={{ background: "radial-gradient(circle at 80% 20%, rgba(22, 163, 74, 0.08) 0%, rgba(13, 33, 55, 0.02) 100%)", padding: "100px 0 80px 0", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container grid grid-2" style={{ alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "linear-gradient(135deg, rgba(22, 163, 74, 0.1) 0%, rgba(22, 163, 74, 0.2) 100%)", color: "#15803d", padding: "8px 16px", borderRadius: "100px", fontSize: "0.9rem", fontWeight: "800", marginBottom: "20px", border: "1px solid rgba(22, 163, 74, 0.3)" }}>
              🚀 NEW: GeM Sahayak Chrome Extension is LIVE!
            </div>
            <h1 className="animate-fade-in-up" style={{ marginBottom: "20px", color: "var(--primary-dark)" }}>
              GeM Portal Bidding <span className="animate-text-shimmer">Bani Aasaan!</span>
            </h1>
            <p className="animate-fade-in-up delay-1" style={{ marginBottom: "32px", fontSize: "1.15rem", color: "var(--text-muted)", fontWeight: "500" }}>
              Stop refreshing the GeM portal manually every hour. GeM Sahayak tracks bids in the background, pushes new alerts to your WhatsApp, gives you the best suggestions for bidding price evaluation, helps you understand the full Bid Document in a very simple way, and suggests how to create your catalog and add products easily.
            </p>
            <div className="animate-fade-in-up delay-2" style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a href="https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf" target="_blank" className="btn btn-primary" style={{ padding: "16px 32px", fontSize: "1.05rem" }}>
                📥 Add to Chrome — It's Free
              </a>
              <a href="#demo" className="btn btn-outline" style={{ padding: "16px 32px", fontSize: "1.05rem" }}>
                🎥 Live Dashboard Demo
              </a>
            </div>
            
            <div style={{ display: "flex", gap: "32px", marginTop: "48px" }}>
              <div>
                <h3 style={{ fontSize: "1.4rem", color: "var(--primary-green)", marginBottom: "4px" }}>Tested ✅</h3>
                <p style={{ fontSize: "0.9rem", fontWeight: "600" }}>City Searches</p>
              </div>
              <div style={{ borderRight: "1px solid var(--border-light)" }}></div>
              <div>
                <h3 style={{ fontSize: "1.4rem", color: "var(--primary-green)", marginBottom: "4px" }}>Tested ✅</h3>
                <p style={{ fontSize: "0.9rem", fontWeight: "600" }}>Ministry Searches</p>
              </div>
              <div style={{ borderRight: "1px solid var(--border-light)" }}></div>
              <div>
                <h3 style={{ fontSize: "1.4rem", color: "var(--primary-green)", marginBottom: "4px" }}>Tested ✅</h3>
                <p style={{ fontSize: "0.9rem", fontWeight: "600" }}>Product Searches</p>
              </div>
            </div>
          </div>

          {/* 3D Floating Alert Bell Visual (Option A) */}
          <div className="float-element" style={{ position: "relative", display: "flex", justifyContent: "center" }}>
            <div className="glass" style={{ width: "100%", maxWidth: "420px", padding: "24px", borderRadius: "24px", border: "1px solid #cbd5e1", boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "16px", borderBottom: "1px solid #e2e8f0", paddingBottom: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#25d366", display: "flex", alignItems: "center", color: "white", fontWeight: "bold", fontSize: "1.1rem", justifyContent: "center" }}>W</div>
                <div>
                  <h4 style={{ fontSize: "0.95rem", color: "#1e293b" }}>GeM Sahayak WhatsApp Alert</h4>
                  <p style={{ fontSize: "0.75rem", color: "#64748b" }}>Just now</p>
                </div>
              </div>
              <div style={{ background: "#efeae2", padding: "16px", borderRadius: "12px", borderLeft: "4px solid #16a34a", boxShadow: "inset 0 1px 3px rgba(0,0,0,0.05)" }}>
                <p style={{ color: "#334155", fontSize: "0.9rem", fontFamily: "monospace", whiteSpace: "pre-line", wordBreak: "break-all" }}>
                  *GeM Sahayak Alert* 🚨{"\n\n"}
                  📦 *Item:* Digital UHF Repeater Sets{"\n"}
                  🏛️ *Dept:* Ministry of Defence{"\n"}
                  📅 *End Date:* 26-06-2026{"\n"}
                  🔢 *Bid No:* GEM/2026/B/7481811{"\n\n"}
                  🔗 *Link:* https://bidplus.gem.gov.in/showbidDocument/9282985{"\n\n"}
                  Namaste! 🙏
                </p>
              </div>
              <div className="pulse-soft" style={{ position: "absolute", top: "-15px", right: "-15px", background: "linear-gradient(135deg, #16a34a 0%, #15803d 100%)", color: "white", width: "48px", height: "48px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", boxShadow: "0 4px 14px rgba(22, 163, 74, 0.4)" }}>
                🔔
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🛡️ CORE FEATURES SECTION */}
      <section id="features" style={{ padding: "80px 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 60px auto" }}>
            <h2 style={{ marginBottom: "16px" }}>Features Jo Aapki Bidding Ko Karein <span className="animate-text-shimmer">Asar-Dar</span></h2>
            <p>GeM Sahayak extension background mein kaam karke aapko har tender update ke sath sync rakhta hai, taaki aap koi bhi Government Business miss na karein.</p>
          </div>

          <div className="grid grid-3 scene-3d">
            {/* Feature 1 */}
            <div className="card-3d">
              <div className="card-3d-content">
                <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>💬</div>
                <h3 style={{ marginBottom: "12px", color: "var(--primary-dark)" }}>Real-Time WhatsApp Alerts</h3>
                <p>Aapki saved search filters ya locations (jaise Bhopal, Indore) ko monitor karke nai active bids ka notification direct aapke mobile par instant bhejta hai.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card-3d">
              <div className="card-3d-content">
                <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>📋</div>
                <h3 style={{ marginBottom: "12px", color: "var(--primary-dark)" }}>WhatsApp Bids Digest</h3>
                <p>Ek page ki sabhi bids ko 1-click mein consolidate karke ek single WhatsApp digest message bhej sakte hain. Partners aur vendors ke saath share karna hua bilkul aasan.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card-3d">
              <div className="card-3d-content">
                <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>🤖</div>
                <h3 style={{ marginBottom: "12px", color: "var(--primary-dark)" }}>Bid Pricing Intelligence</h3>
                <p>Market pricing data, technical compliance metrics aur BOQ standard rates ko automatic scan karke minimum matching price suggest karta hai jisse aapke tender milne ke chance badh jaten hain.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="card-3d">
              <div className="card-3d-content">
                <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>📝</div>
                <h3 style={{ marginBottom: "12px", color: "var(--primary-dark)" }}>Rebuttal & Clarification AI</h3>
                <p>Catalog rejection ya custom request ke replies directly extension window se create karein. Buyer clarification ko standard templates ke saath turant answer karein.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="card-3d">
              <div className="card-3d-content">
                <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>📂</div>
                <h3 style={{ marginBottom: "12px", color: "var(--primary-dark)" }}>1-Click PDF Downloads</h3>
                <p>Bina Browser click kiye Direct ek lengthy Bid document ke pdf ko upload karke reports ko download kar sakte hain.</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="card-3d">
              <div className="card-3d-content">
                <div style={{ fontSize: "2.5rem", marginBottom: "20px" }}>⚙️</div>
                <h3 style={{ marginBottom: "12px", color: "var(--primary-dark)" }}>Secure & Zero-Config Setup</h3>
                <p>Minimum details for registration, no GeM ID/Password needed, no big configuration needed, just plug and play.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 UPCOMING MOBILE APP SECTION */}
      <section id="mobile-app" style={{ padding: "80px 0", background: "linear-gradient(135deg, rgba(14, 138, 138, 0.05) 0%, rgba(13, 33, 55, 0.05) 100%)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div className="container grid grid-2" style={{ alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fef3c7", color: "#d97706", padding: "6px 14px", borderRadius: "100px", fontSize: "0.85rem", fontWeight: "700", marginBottom: "20px" }}>
              📱 UPCOMING RELEASE
            </div>
            <h2 style={{ marginBottom: "20px", color: "var(--primary-dark)" }}>GeM Sahayak Mobile App</h2>
            <p style={{ marginBottom: "32px", fontSize: "1.1rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
              Sellers on the go! Very soon, you won't even need a laptop to stay updated. We are launching the GeM Sahayak Mobile App for Android and iOS. 
              Manage your bids, respond to clarifications, and get AI-powered insights right from your pocket.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <button className="btn btn-outline" style={{ padding: "12px 24px", display: "flex", alignItems: "center", gap: "8px" }} onClick={() => alert('Waitlist joined successfully!')}>
                Join the Waitlist 🚀
              </button>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
             <div style={{ width: "260px", height: "540px", borderRadius: "36px", border: "10px solid #1e293b", position: "relative", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {/* Mock Mobile Screen replacing with real screenshot */}
                <img src="/mobile_mockup.png" alt="GeM Sahayak Mobile App" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
             </div>
          </div>
        </div>
      </section>

      {/* 🎥 INTERACTIVE DEMO SECTION */}
      <section id="demo" style={{ padding: "80px 0", background: "var(--bg-light)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px auto" }}>
            <h2 style={{ marginBottom: "16px" }}>Experience the Live Interactive Mock</h2>
            <p>GeM Sahayak extension ke screen panel ke working structure ko niche diye dashboard mockup mein click karke check karein.</p>
          </div>

          <div className="mock-dashboard" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="mock-header">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
              <span style={{ color: "#94a3b8", fontSize: "0.85rem", fontFamily: "monospace", marginLeft: "12px" }}>GeM Sahayak Panel v2.0 - Active Bids Bhopal</span>
            </div>
            
            <div className="mock-body">
              {/* Notification Toast Messages */}
              {waSentBid && (
                <div style={{ background: "#dcfce7", color: "#166534", border: "1px solid #bbf7d0", padding: "10px 16px", borderRadius: "6px", marginBottom: "16px", fontSize: "0.85rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px" }}>
                  ✅ WhatsApp alert for bid <strong>{waSentBid}</strong> sent successfully to your configured number!
                </div>
              )}

              {activeAlert && (
                <div style={{ background: "#e0f2fe", color: "#0369a1", border: "1px solid #bae6fd", padding: "10px 16px", borderRadius: "6px", marginBottom: "16px", fontSize: "0.85rem", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px" }}>
                  🔔 Alert successfully set! Backend scraper will notify you daily for matches related to <strong>{activeAlert}</strong>.
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid #334155", paddingBottom: "12px" }}>
                <div>
                  <h4 style={{ color: "#f8fafc", fontSize: "1rem" }}>🎯 BHOPAL Mein Total **498 bids** mili hain!</h4>
                  <p style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Page 1 of 50</p>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button onClick={() => handleSendWA("ALL-DIGEST")} className="btn btn-primary" style={{ padding: "6px 12px", fontSize: "0.75rem" }}>
                    🟢 Send WA Digest
                  </button>
                  <button onClick={() => handleSetAlert("BHOPAL SEARCH")} className="btn btn-secondary" style={{ padding: "6px 12px", fontSize: "0.75rem", background: "#0E8A8A" }}>
                    🔔 Alert Set
                  </button>
                </div>
              </div>

              {/* Bids List Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {mockBids.map((bid, index) => (
                  <div key={bid.id} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: "10px", padding: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ background: "#334155", color: "#94a3b8", fontSize: "0.75rem", padding: "2px 8px", borderRadius: "4px", fontWeight: "600" }}>#{index + 1}</span>
                      <span style={{ fontFamily: "monospace", fontSize: "0.85rem", fontWeight: "700", color: "#38bdf8" }}>{bid.bidNumber}</span>
                    </div>
                    
                    <div>
                      <p style={{ color: "#f1f5f9", fontSize: "0.9rem", fontWeight: "600", marginBottom: "4px" }}>📦 {bid.category}</p>
                      <p style={{ color: "#94a3b8", fontSize: "0.8rem" }}>🏛️ {bid.department}</p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #334155", paddingTop: "12px", marginTop: "4px" }}>
                      <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>📅 End Date: {bid.endDate}</span>
                      <div style={{ display: "flex", gap: "8px" }}>
                        <button onClick={() => handleSendWA(bid.bidNumber)} className="btn btn-primary" style={{ padding: "4px 10px", fontSize: "0.7rem", borderRadius: "4px" }}>
                          🟢 Send WA
                        </button>
                        <a href={`https://bidplus.gem.gov.in/showbidDocument/${bid.id === "1" ? "9432031" : (bid.id === "2" ? "9323943" : "9318127")}`} target="_blank" className="btn btn-outline" style={{ padding: "4px 10px", fontSize: "0.7rem", color: "#f1f5f9", borderColor: "#f1f5f9", borderRadius: "4px" }}>
                          🔗 View PDF
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 MARKET DOMINATION ACCELERATION SECTION */}
      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div>
              <h2 style={{ marginBottom: "20px" }}>Humare sath Bharat Sarkar ke "Sabka Sath Sabka Vikas" ke sapney ko poora karen</h2>
              <p style={{ marginBottom: "16px" }}>Bidding system ek race hai. Jab tak aap manual website search se bids find karke specifications read karenge, tab tak dusre bid submit kar chuke hote hain.</p>
              <p style={{ marginBottom: "24px" }}>GeM Sahayak extension ke sath, notification trigger hote hi raw values calculate ho jati hain, jisse aap minimal response timeline ke andar competitive bidding execute kar pate hain.</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontWeight: "700", color: "var(--primary-dark)" }}>
                <li>✅ 100% Secure Chrome Extension (zero credentials shared)</li>
                <li>✅ Sub-1.5s light-speed responsive loading panels</li>
                <li>✅ Automatic country code (91) pre-fixing to avoid format errors</li>
              </ul>
            </div>
            
            <div style={{ background: "linear-gradient(135deg, var(--primary-dark) 0%, #1e293b 100%)", padding: "40px", borderRadius: "24px", color: "#e2e8f0", boxShadow: "var(--shadow-lg)" }}>
              <h3 style={{ color: "#f8fafc", marginBottom: "16px" }}>Ready to scale your business?</h3>
              <p style={{ color: "#94a3b8", marginBottom: "32px", fontSize: "0.95rem" }}>Install standard Chrome Extension directly from store, scan the QR code to set up your WhatsApp alerts gateway, and start tracking in less than 2 minutes.</p>
              <a href="https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf" target="_blank" className="btn btn-primary" style={{ width: "100%", padding: "16px" }}>
                Add GeM Sahayak to Chrome — 100% Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 🛠️ Technical SEO JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "GeM Sahayak",
            "operatingSystem": "Windows, macOS, Linux, ChromeOS",
            "applicationCategory": "BusinessApplication, BrowserExtension",
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "INR"
            },
            "description": "Helper Chrome Extension to track Government e-Marketplace (GeM India) active bids, L1 price matching, WhatsApp alerts, and catalog optimization."
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is GeM Sahayak?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GeM Sahayak is a free helper Chrome Extension for MSMEs and government contractors in India to automate active bid tracking, WhatsApp notifications, catalog optimization, and L1 evaluations on the Government e-Marketplace (GeM) portal."
                }
              },
              {
                "@type": "Question",
                "name": "How do I get GeM bid alerts on WhatsApp?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Simply install the GeM Sahayak extension, configure your WhatsApp gateway (like Green API or UltraMsg) in the extension settings panel, and click 'Alert Set' on any search result page. The backend scraper will run queries and notify you on WhatsApp instantly when new bids match."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}
