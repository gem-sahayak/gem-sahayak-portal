"use client";

import React, { useState, useEffect, useRef } from "react";

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: Date;
}

const CITIES_MAP: Record<string, string> = {
  bhopal: "BHOPAL",
  indore: "INDORE",
  jabalpur: "JABALPUR",
  gwalior: "GWALIOR",
  ujjain: "UJJAIN",
  rewa: "REWA",
  mumbai: "MUMBAI",
  pune: "PUNE",
  nagpur: "NAGPUR",
  nashik: "NASHIK",
  delhi: "DELHI",
  "new delhi": "NEW DELHI",
  jaipur: "JAIPUR",
  jodhpur: "JODHPUR",
  udaipur: "UDAIPUR",
  lucknow: "LUCKNOW",
  agra: "AGRA",
  varanasi: "VARANASI",
  kanpur: "KANPUR",
  noida: "NOIDA",
  ahmedabad: "AHMEDABAD",
  surat: "SURAT",
  vadodara: "VADODARA",
  rajkot: "RAJKOT",
  bengaluru: "BENGALURU",
  bangalore: "BENGALURU",
  mysuru: "BENGALURU",
  chennai: "CHENNAI",
  coimbatore: "COIMBATORE",
  madurai: "MADURAI",
  kolkata: "WEST BENGAL",
  hyderabad: "HYDERABAD",
  secunderabad: "TELANGANA",
  chandigarh: "CHANDIGARH",
  ludhiana: "PUNJAB",
  amritsar: "PUNJAB",
  patna: "BIHAR",
  ranchi: "JHARKHAND",
  raipur: "CHHATTISGARH",
  bilaspur: "CHHATTISGARH",
  bhubaneswar: "ODISHA",
  guwahati: "ASSAM",
  dehradun: "UTTARAKHAND",
  jammu: "JAMMU AND KASHMIR",
  srinagar: "JAMMU AND KASHMIR",
  kochi: "KERALA",
  thiruvananthapuram: "KERALA",
  kozhikode: "KERALA"
};

const STATES_MAP: Record<string, string> = {
  "uttar pradesh": "UTTAR PRADESH",
  up: "UTTAR PRADESH",
  "madhya pradesh": "MADHYA PRADESH",
  mp: "MADHYA PRADESH",
  maharashtra: "MAHARASHTRA",
  delhi: "DELHI",
  rajasthan: "RAJASTHAN",
  gujarat: "GUJARAT",
  karnataka: "KARNATAKA",
  "tamil nadu": "TAMIL NADU",
  "west bengal": "WEST BENGAL",
  telangana: "TELANGANA",
  punjab: "PUNJAB",
  "himachal pradesh": "HIMACHAL PRADESH",
  chhattisgarh: "CHHATTISGARH",
  bihar: "BIHAR",
  jharkhand: "JHARKHAND",
  odisha: "ODISHA",
  assam: "ASSAM",
  uttarakhand: "UTTARAKHAND",
  "jammu and kashmir": "JAMMU AND KASHMIR",
  kerala: "KERALA"
};

const MINISTRIES_MAP: Record<string, string> = {
  defence: "Ministry of Defence",
  defense: "Ministry of Defence",
  railways: "Ministry of Railways",
  railway: "Ministry of Railways",
  education: "Ministry of Education",
  health: "Ministry of Health and Family Welfare",
  home: "Ministry of Home Affairs",
  finance: "Ministry of Finance",
  msme: "Ministry of Micro Small and Medium Enterprises",
  agriculture: "Ministry of Agriculture and Farmers Welfare",
  water: "Ministry of Jal Shakti",
  road: "Ministry of Road Transport and Highways",
  it: "Ministry of Electronics and Information Technology",
  power: "Ministry of Power",
  coal: "Ministry of Coal",
  steel: "Ministry of Steel",
  textiles: "Ministry of Textiles"
};

export default function BidSearchDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [demoUsed, setDemoUsed] = useState(false);
  const [isBypassMode, setIsBypassMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastQuery, setLastQuery] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Initial greeting message
    setMessages([
      {
        role: "assistant",
        content: "👋 Namaste! Main Sahayak AI hoon. Main GeM portal par active bids dhoondhne mein aapki help kar sakta hoon.\n\nHindi ya Hinglish mein likhein, jaise:\n• *indore ki bids do*\n• *computer ki bids do*\n• *Ministry of Defence ki bids do*",
        timestamp: new Date()
      }
    ]);

    // 2. Developer bypass validation
    if (typeof window !== "undefined") {
      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const hasBypassParam = window.location.search.includes("bypass=true") || window.location.search.includes("test=true");
      if (hasBypassParam) {
        localStorage.setItem("sahayak_test_bypass", "true");
      }
      const testBypass = localStorage.getItem("sahayak_test_bypass") === "true";
      setIsBypassMode(isLocal || testBypass);
      
      const used = localStorage.getItem("sahayak_demo_used") === "true";
      setDemoUsed(used && !isLocal && !testBypass);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const parseQueryAndSubmit = async (queryText: string, pageNum = 1) => {
    if (!queryText.trim() || loading) return;
    if (demoUsed) {
      setMessages(prev => [
        ...prev,
        { role: "user", content: queryText, timestamp: new Date() },
        { role: "system", content: "⚠️ Free demo limit exhausted. Kripya alerts automate karne ke liye hamara Chrome Extension install karein.", timestamp: new Date() }
      ]);
      return;
    }

    if (pageNum === 1) {
      setMessages(prev => [...prev, { role: "user", content: queryText, timestamp: new Date() }]);
      setCurrentPage(1);
      setLastQuery(queryText);
    } else {
      setMessages(prev => [...prev, { role: "user", content: `Load Page ${pageNum}`, timestamp: new Date() }]);
    }
    setInput("");
    setLoading(true);

    const queryLower = queryText.toLowerCase().trim();
    
    // 1. Client side NLP entity extraction
    let city = "";
    let state = "";
    let ministry = "";
    let category = "";

    // Find city
    const matchedCityKey = Object.keys(CITIES_MAP).find(key => new RegExp(`\\b${key}\\b`, "i").test(queryLower));
    if (matchedCityKey) {
      city = matchedCityKey;
      state = CITIES_MAP[matchedCityKey];
    } else {
      // Find state
      const matchedStateKey = Object.keys(STATES_MAP).find(key => new RegExp(`\\b${key}\\b`, "i").test(queryLower));
      if (matchedStateKey) {
        state = STATES_MAP[matchedStateKey];
      }
    }

    // Find ministry
    const matchedMinKey = Object.keys(MINISTRIES_MAP).find(key => new RegExp(`\\b${key}\\b`, "i").test(queryLower));
    if (matchedMinKey) {
      ministry = MINISTRIES_MAP[matchedMinKey];
    }

    // Extract category by removing filter keywords & stopwords
    let cleanItem = queryLower;
    if (matchedCityKey) cleanItem = cleanItem.replace(new RegExp(`\\b${matchedCityKey}\\b`, "g"), "");
    if (matchedMinKey) cleanItem = cleanItem.replace(new RegExp(`\\b${matchedMinKey}\\b`, "g"), "");
    
    const stopwords = [
      "ki bids do", "bids de do", "bids do", "bid do", "bids", "bid", "do", "search", 
      "karo", "find", "get", "show", "de do", "dikhao", "batao", "chahiye", "nikalo", 
      "lao", "khojo", "dhundo", "mein", "me", "se", "ko", "ki", "ka", "ke", "fresh", 
      "saari", "online", "portal", "naya", "nayi", "new"
    ];

    stopwords.forEach(word => {
      cleanItem = cleanItem.replace(new RegExp(`\\b${word}\\b`, "g"), "");
      cleanItem = cleanItem.replace(new RegExp(word, "g"), "");
    });
    
    category = cleanItem.replace(/\s+/g, " ").trim();
    if (category.length < 2) {
      category = "";
    }

    const searchTarget = city || ministry || state || "Bharat";
    const statusMsgId = Date.now();

    // Show temporary search status
    setMessages(prev => [
      ...prev,
      {
        role: "assistant",
        content: `🔍 **${searchTarget.toUpperCase()}** mein ${category ? `"${category}" ` : ""}bids dhoondh raha hoon...`,
        timestamp: new Date()
      }
    ]);

    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (isBypassMode) {
        headers["x-bypass-limit"] = "true";
      }

      // Check if it's a general conversational chat query or standard search query
      const isConversational = !city && !state && !ministry && !category && 
        /hello|hi|namaste|kaise|rules|help|how to|what is|pricing|price/i.test(queryLower);

      if (isConversational) {
        // Route to Gemini chat proxy
        const response = await fetch("https://api.sahayakai.co.in/api/chat", {
          method: "POST",
          headers,
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: queryText }] }]
          })
        });

        const data = await response.json();
        if (response.status === 403 || data.error === "LIMIT_EXHAUSTED") {
          setDemoUsed(true);
          if (typeof window !== "undefined") {
            localStorage.setItem("sahayak_demo_used", "true");
          }
          setMessages(prev => [
            ...prev,
            { role: "system", content: "⚠️ Free demo limit exhausted. Please install the Extension to continue.", timestamp: new Date() }
          ]);
          return;
        }

        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Mafi chahta hoon, main samajh nahi paya.";
        setMessages(prev => [...prev, { role: "assistant", content: reply, timestamp: new Date() }]);
      } else {
        // Route to bid search demo proxy
        const response = await fetch("https://api.sahayakai.co.in/api/demo/search-bids", {
          method: "POST",
          headers,
          body: JSON.stringify({
            state: state || "",
            city: city ? (CITIES_MAP[city] || city.toUpperCase()) : "",
            ministry: ministry || "",
            category: category || "",
            page: pageNum
          })
        });

        const data = await response.json();

        if (response.status === 403 || data.error === "LIMIT_EXHAUSTED") {
          setDemoUsed(true);
          if (typeof window !== "undefined") {
            localStorage.setItem("sahayak_demo_used", "true");
          }
          setMessages(prev => [
            ...prev,
            { role: "system", content: "⚠️ Free demo limit exhausted. Please install the Extension to continue.", timestamp: new Date() }
          ]);
          return;
        }

        if (!response.ok) {
          throw new Error(data.error || "Bids load karne mein dikkat aayi.");
        }

        if (data.success && data.bids && data.bids.length > 0) {
          // Format bids into display list
          let formattedList = `🎯 **${searchTarget.toUpperCase()} (Page ${pageNum})** mein kul **${data.totalFound || data.bids.length} bids** mili hain!\n\n`;
          
          data.bids.slice(0, 10).forEach((bid: any, idx: number) => {
            const indexNo = (pageNum - 1) * 10 + idx + 1;
            const cat = bid.category ? `\n📦 **Category**: ${bid.category.substring(0, 60)}` : "";
            const dept = bid.department ? `\n🏛️ **Department**: ${bid.department}` : "";
            const start = bid.startDate ? `\n📅 **Start**: ${bid.startDate}` : "";
            const end = bid.endDate ? `\n📅 **End**: ${bid.endDate}` : "";
            formattedList += `${indexNo}. **${bid.bidNumber}**${cat}${dept}${start}${end}\n\n`;
          });

          formattedList += `ℹ️ *Best experiance and full features ke liye Please Extension install karein!*`;
          setMessages(prev => [...prev, { role: "assistant", content: formattedList, timestamp: new Date() }]);
          setCurrentPage(pageNum);
        } else {
          setMessages(prev => [
            ...prev,
            { role: "assistant", content: `❌ **${searchTarget.toUpperCase()}** mein abhi koi matching bids nahi mili hain. Kripya doosra keyword search karein.`, timestamp: new Date() }
          ]);
        }
      }

      if (!isBypassMode) {
        setDemoUsed(true);
        if (typeof window !== "undefined") {
          localStorage.setItem("sahayak_demo_used", "true");
        }
      }
    } catch (err: any) {
      console.error("[Search Error]", err.message);
      setMessages(prev => [
        ...prev,
        { role: "system", content: `⚠️ Error: ${err.message || "Connection failed."}`, timestamp: new Date() }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    parseQueryAndSubmit(input);
  };

  const handleChipClick = (query: string) => {
    if (loading) return;
    parseQueryAndSubmit(query);
  };

  const renderMessageText = (content: string, role: string) => {
    // Parse formatting rules matching formatBidForDisplay
    if (role === "assistant" && content.includes("GEM/")) {
      const sections = content.split("\n\n");
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {sections.map((sec, secIdx) => {
            const trimmedSec = sec.trim();
            if (!trimmedSec) return null;

            // Check if it is a bid item: e.g. starting with a number and contains "GEM"
            const isBid = /^\d+\.\s+\*\*GEM/i.test(trimmedSec);
            if (isBid) {
              // Extract bid number: e.g. "GEM/2026/B/12345"
              const bidNoMatch = trimmedSec.match(/\*\*(GEM\/.*?)\*\*/i);
              const bidNumber = bidNoMatch ? bidNoMatch[1] : "GEM Bid";

              // Extract Category details
              const catMatch = trimmedSec.match(/📦\s*\*\*Category\*\*:\s*(.*)/i);
              const category = catMatch ? catMatch[1] : "";

              // Extract Department details
              const deptMatch = trimmedSec.match(/🏛️\s*\*\*Department\*\*:\s*(.*)/i);
              const department = deptMatch ? deptMatch[1] : "";

              // Extract Start/End date
              const startMatch = trimmedSec.match(/📅\s*\*\*Start\*\*:\s*(.*)/i);
              const endMatch = trimmedSec.match(/📅\s*\*\*End\*\*:\s*(.*)/i);
              const startDate = startMatch ? startMatch[1] : "";
              const endDate = endMatch ? endMatch[1] : "";

              return (
                <div 
                  key={secIdx} 
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "16px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.02)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginTop: "4px"
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #f1f5f9", paddingBottom: "8px" }}>
                     <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "#0E8A8A" }}>
                       {trimmedSec.match(/^(\d+\.)/)?.[1] || ""} {bidNumber}
                     </span>
                     <a 
                       href={`https://api.sahayakai.co.in/bid-document/${bidNumber}`} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       style={{ fontSize: "0.72rem", background: "rgba(14, 138, 138, 0.1)", color: "#0E8A8A", padding: "4px 10px", borderRadius: "6px", fontWeight: "700", textDecoration: "none" }}
                     >
                       🔗 View Bid
                     </a>
                  </div>

                  {category && (
                    <div style={{ fontSize: "0.78rem", color: "#475569" }}>
                      <strong>📦 Category:</strong> {category}
                    </div>
                  )}

                  {department && (
                    <div style={{ fontSize: "0.78rem", color: "#475569" }}>
                      <strong>🏛️ Dept:</strong> {department}
                    </div>
                  )}

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", fontSize: "0.72rem", color: "#64748b", marginTop: "4px" }}>
                    {startDate && (
                      <span style={{ background: "#f8fafc", padding: "4px 8px", borderRadius: "6px", border: "1px solid #e2e8f0" }}>
                        📅 Start: {startDate}
                      </span>
                    )}
                    {endDate && (
                      <span style={{ background: "#fef2f2", color: "#991b1b", padding: "4px 8px", borderRadius: "6px", border: "1px solid #fee2e2" }}>
                        📅 End: {endDate}
                      </span>
                    )}
                  </div>
                </div>
              );
            }

            // Render other blocks normally
            return (
              <div key={secIdx} style={{ fontSize: "0.85rem", lineHeight: "1.4" }}>
                {parseInlineMarkdown(trimmedSec)}
              </div>
            );
          })}
        </div>
      );
    }

    const lines = content.split("\n");
    return lines.map((line, idx) => {
      let styledLine = line;
      // Bold Markdown tags
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(line)) !== null) {
        if (match.index > lastIndex) {
          parts.push(line.substring(lastIndex, match.index));
        }
        parts.push(<strong key={match.index} style={{ color: "#0C2E4A" }}>{match[1]}</strong>);
        lastIndex = boldRegex.lastIndex;
      }
      if (lastIndex < line.length) {
        parts.push(line.substring(lastIndex));
      }

      // Check if this line is a bid item list item
      const isBidHeader = /^\d+\.\s+\*\*/.test(line);
      const isPropertyText = line.startsWith("📦") || line.startsWith("🏛️") || line.startsWith("📅");

      return (
        <div 
          key={idx} 
          style={{
            marginBottom: isBidHeader ? "12px" : "4px",
            paddingLeft: isPropertyText ? "16px" : "0",
            fontSize: isBidHeader ? "0.9rem" : "0.85rem",
            lineHeight: "1.4"
          }}
        >
          {parts.length > 0 ? parts : styledLine}
        </div>
      );
    });
  };

  function parseInlineMarkdown(text: string) {
    const boldRegex = /\*\*(.*?)\*\*/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = boldRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push(<strong key={match.index} style={{ color: "#0C2E4A" }}>{match[1]}</strong>);
      lastIndex = boldRegex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  }

  return (
    <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "24px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", minHeight: "450px", maxHeight: "850px", height: "auto" }}>
      
      {/* Header */}
      <div style={{ borderBottom: "1px solid #f1f5f9", paddingBottom: "12px", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#0C2E4A", margin: 0 }}>
            💬 Sahayak AI Bid Search
          </h2>
          <span style={{ fontSize: "0.75rem", color: "#64748b" }}>Live GeM portal bid finder console</span>
        </div>
        {isBypassMode && (
          <span style={{ fontSize: "0.68rem", background: "#d1fae5", color: "#065f46", padding: "4px 8px", borderRadius: "100px", fontWeight: "700" }}>
            🛠️ Dev Bypass Mode
          </span>
        )}
      </div>

      {/* Messages Log */}
      <div style={{ flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: "14px", paddingRight: "6px", marginBottom: "16px" }}>
        {messages.map((msg, i) => (
          <div 
            key={i} 
            style={{
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              maxWidth: "85%",
              background: msg.role === "user" ? "#0E8A8A" : msg.role === "system" ? "#fee2e2" : "#f8fafc",
              color: msg.role === "user" ? "#ffffff" : msg.role === "system" ? "#991b1b" : "#334155",
              border: msg.role === "user" ? "none" : msg.role === "system" ? "1px solid #fecaca" : "1px solid #e2e8f0",
              borderRadius: msg.role === "user" ? "16px 16px 2px 16px" : "16px 16px 16px 2px",
              padding: "12px 16px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.02)"
            }}
          >
            {renderMessageText(msg.content, msg.role)}
          </div>
        ))}
        {loading && (
          <div style={{ alignSelf: "flex-start", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px 16px 16px 2px", padding: "12px 16px", display: "flex", alignItems: "center", gap: "8px" }}>
            <div className="dot-flashing" style={{
              width: "8px",
              height: "8px",
              background: "#0E8A8A",
              borderRadius: "50%",
              animation: "flash 1s infinite alternate"
            }} />
            <span style={{ fontSize: "0.78rem", color: "#64748b" }}>Sahayak is working...</span>
            <style>{`
              @keyframes flash {
                0% { opacity: 0.2; }
                100% { opacity: 1; }
              }
            `}</style>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Preset Query Chips */}
      {!demoUsed && !loading && messages.length <= 2 && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "12px" }}>
          {["Bhopal ki bids do", "computer ki bids do", "indore ki bids do"].map((chip, idx) => (
            <button
              key={idx}
              onClick={() => handleChipClick(chip)}
              style={{
                background: "#f1f5f9",
                border: "1px solid #e2e8f0",
                color: "#475569",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "0.78rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background 0.2s"
              }}
            >
              🔍 {chip}
            </button>
          ))}
        </div>
      )}

      {/* Next Page Pagination Button */}
      {messages.length > 1 && !loading && !demoUsed && lastQuery && (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "12px" }}>
          <button
            type="button"
            onClick={() => parseQueryAndSubmit(lastQuery, currentPage + 1)}
            style={{
              background: "#0E8A8A",
              color: "#ffffff",
              border: "none",
              padding: "8px 16px",
              borderRadius: "8px",
              fontWeight: "700",
              fontSize: "0.82rem",
              cursor: "pointer",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              transition: "transform 0.2s"
            }}
          >
            Next Page ➡️ (Page {currentPage + 1})
          </button>
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSend} style={{ display: "flex", gap: "8px" }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={loading || demoUsed}
          placeholder={demoUsed ? "Free Demo Used. Install extension to continue..." : "Ask Sahayak: e.g., indore ki bids do..."}
          style={{
            flex: 1,
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
            padding: "10px 14px",
            fontSize: "0.88rem",
            outline: "none",
            background: demoUsed ? "#f8fafc" : "#ffffff",
            cursor: demoUsed ? "not-allowed" : "text"
          }}
        />
        <button
          type="submit"
          disabled={loading || !input.trim() || demoUsed}
          style={{
            background: (loading || !input.trim() || demoUsed) ? "#cbd5e1" : "#0E8A8A",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "0 18px",
            fontWeight: "700",
            fontSize: "0.85rem",
            cursor: (loading || !input.trim() || demoUsed) ? "not-allowed" : "pointer"
          }}
        >
          Send
        </button>
      </form>

      {/* Bottom Simplified Extension CTA Box (Repositioned, shown after demo used) */}
      {demoUsed && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "14px", borderTop: "1px solid #f1f5f9", paddingTop: "14px" }}>
          <p style={{ fontSize: "0.8rem", color: "#475569", fontWeight: "600", margin: 0, textAlign: "center" }}>
            Demo Complete! Want to tracking live bids directly in your browser?
          </p>
          <div style={{ background: "linear-gradient(135deg, #0e8a8a 0%, #075e5e 100%)", borderRadius: "10px", padding: "14px", color: "#ffffff", textAlign: "center", display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: "1.4" }}>
              Install the SahayakAI Chrome Extension to track bids, parse documents, and bypass restrictions.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#ffffff",
                color: "#0E8A8A",
                padding: "8px",
                borderRadius: "6px",
                fontWeight: "700",
                fontSize: "0.78rem",
                textDecoration: "none"
              }}
            >
              📥 Install Free Chrome Extension
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
