"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ChatMessage {
  sender: "ai" | "user";
  text: string;
  time: string;
}

export default function LiveAIDashboard() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "ai",
      text: "🙏 Namaste! Main Sahayak AI hoon!\n\nAapki koi bhi Gem portal problem ho — bids, catalog, rebuttal — sab mein help karunga.\n\nHindi ya Hinglish mein poochho! 😊",
      time: "05:00 pm",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleQuickAction = (actionText: string, aiResponseText: string) => {
    const now = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: actionText, time: now },
    ]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: aiResponseText, time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }) },
      ]);
    }, 800);
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputVal.trim()) return;

    const userQ = inputVal.trim();
    setInputVal("");
    const now = new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true });

    setMessages((prev) => [...prev, { sender: "user", text: userQ, time: now }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let reply = "Aap GeM tender PDF upload karke summary dekh sakte hain ya keyword type karke active bids search kar sakte hain! Chrome extension install karein 1-click access ke liye.";
      if (userQ.toLowerCase().includes("pdf") || userQ.toLowerCase().includes("tender")) {
        reply = "📄 Bid PDF Analyze karne ke liye extension panel mein PDF file select karein. Sahayak AI Buyer details, EMD exemptions, dates, aur commercial terms 10 seconds mein summary report dega.";
      } else if (userQ.toLowerCase().includes("bid") || userQ.toLowerCase().includes("search")) {
        reply = "🔍 Ministry of Defence, MP, Maharashtra aur kisi bhi city ki active bids search karne ke liye bas bolen ya type karein (e.g., 'Bhopal computer bids').";
      } else if (userQ.toLowerCase().includes("udyam") || userQ.toLowerCase().includes("msme")) {
        reply = "🛡️ Udyam Aadhaar linking se EMD waiver aur turnover exemptions claim kar sakte hain. Sahayak AI aapke profile documents automatically verify karta hai.";
      }
      setMessages((prev) => [...prev, { sender: "ai", text: reply, time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }) }]);
    }, 1000);
  };

  return (
    <div
      style={{
        background: "#0F172A",
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)",
        width: "100%",
        maxWidth: 480,
        fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif",
      }}
    >
      {/* ── TOP APP HEADER ── */}
      <div
        style={{
          background: "#0B1329",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid #1E293B",
        }}
      >
        {/* Logo Badge */}
        <div
          style={{
            background: "#ffffff",
            padding: "4px 12px",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <img
            src="/logo_symbol.png"
            alt="SahayakAI"
            style={{ width: 18, height: 18, objectFit: "contain" }}
          />
          <span style={{ color: "#0C2E4A", fontWeight: 800, fontSize: "0.92rem", letterSpacing: "-0.3px" }}>
            Sahayak<span style={{ color: "#0E8A8A" }}>AI</span>
          </span>
        </div>

        {/* User Badge & Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              background: "rgba(16, 185, 129, 0.15)",
              color: "#34D399",
              padding: "4px 10px",
              borderRadius: 6,
              fontSize: "0.75rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 4,
              border: "1px solid rgba(16, 185, 129, 0.3)"
            }}
          >
            <span style={{ fontSize: "0.7rem" }}>⚡</span> Live Assistant
          </div>
          <button
            aria-label="Settings"
            style={{
              background: "#1E293B",
              color: "#94A3B8",
              border: "none",
              width: 28,
              height: 28,
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            ⚙️
          </button>
        </div>
      </div>

      {/* ── CHAT MESSAGES BODY ── */}
      <div
        style={{
          padding: 16,
          maxHeight: 320,
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <AnimatePresence>
          {messages.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              style={{
                alignSelf: m.sender === "user" ? "flex-end" : "flex-start",
                maxWidth: "92%",
              }}
            >
              <div
                style={{
                  background: m.sender === "user" ? "#0284C7" : "#1E293B",
                  color: m.sender === "user" ? "#ffffff" : "#F1F5F9",
                  borderRadius: m.sender === "user" ? "14px 14px 2px 14px" : "14px 14px 14px 2px",
                  padding: "12px 14px",
                  fontSize: "0.83rem",
                  lineHeight: 1.55,
                  whiteSpace: "pre-line",
                  border: m.sender === "user" ? "none" : "1px solid #334155",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                }}
              >
                {m.text}
                <div
                  style={{
                    fontSize: "0.64rem",
                    color: m.sender === "user" ? "rgba(255,255,255,0.7)" : "#64748B",
                    textAlign: "right",
                    marginTop: 6,
                  }}
                >
                  {m.time}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <div
            style={{
              alignSelf: "flex-start",
              background: "#1E293B",
              color: "#94A3B8",
              borderRadius: "14px 14px 14px 2px",
              padding: "8px 14px",
              fontSize: "0.75rem",
              border: "1px solid #334155",
            }}
          >
            Sahayak AI type kar raha hai...
          </div>
        )}
      </div>

      {/* ── QUICK ACTIONS PANEL ── */}
      <div style={{ padding: "0 16px 12px", borderTop: "1px solid #1E293B", paddingTop: 12 }}>
        <p
          style={{
            fontSize: "0.68rem",
            fontWeight: 800,
            color: "#64748B",
            letterSpacing: "0.05em",
            marginBottom: 8,
            textTransform: "uppercase",
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          ⚡ QUICK ACTIONS
        </p>

        {/* Action Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 8 }}>
          <button
            onClick={() => handleQuickAction("Aaj ki bids", "🔍 Bhopal aur Madhya Pradesh ki aaj ki top 5 active bids fetch ho gayi hain. Details check karein!")}
            style={{
              background: "linear-gradient(135deg, #0F766E 0%, #115E59 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: 8,
              padding: "9px 10px",
              fontSize: "0.76rem",
              fontWeight: 700,
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            🔍 Aaj ki bids
          </button>
          <button
            onClick={() => handleQuickAction("Catalog tips", "📦 GeM Catalog Listing tips: Always check Golden Code and Level 4 category path to avoid brand rejection.")}
            style={{
              background: "linear-gradient(135deg, #0F766E 0%, #115E59 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: 8,
              padding: "9px 10px",
              fontSize: "0.76rem",
              fontWeight: 700,
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            📦 Catalog tips
          </button>
          <button
            onClick={() => handleQuickAction("Rejection ka Jawab", "✍️ Technical Disqualification Appeal template ready. 48-hour timeline ke andar representation submit karein.")}
            style={{
              background: "linear-gradient(135deg, #0F766E 0%, #115E59 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: 8,
              padding: "9px 10px",
              fontSize: "0.76rem",
              fontWeight: 700,
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            ✍️ Rejection ka Jawab
          </button>
          <button
            onClick={() => handleQuickAction("Clarification", "💬 Pre-bid clarification letter template generated. Restrictive clauses challenge karne ke liye buyer ko mail karein.")}
            style={{
              background: "linear-gradient(135deg, #0F766E 0%, #115E59 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: 8,
              padding: "9px 10px",
              fontSize: "0.76rem",
              fontWeight: 700,
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            💬 Clarification
          </button>
        </div>

        {/* Full Width Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <button
            onClick={() => handleQuickAction("Bid PDF Analyze Karo", "📄 Bid PDF Analyze selected. File drag karein ya extension button par click karke PDF summary generate karein.")}
            style={{
              background: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: 8,
              padding: "9px 12px",
              fontSize: "0.78rem",
              fontWeight: 700,
              cursor: "pointer",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            📄 Bid PDF Analyze Karo
          </button>

          <a
            href="/tools/ai-catalog-dashboard"
            style={{
              background: "linear-gradient(135deg, #0284C7 0%, #0369A1 100%)",
              color: "#ffffff",
              border: "none",
              borderRadius: 8,
              padding: "9px 12px",
              fontSize: "0.78rem",
              fontWeight: 700,
              textDecoration: "none",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            🏷️ Open Catalog Helper Dashboard
          </a>
        </div>
      </div>

      {/* ── INPUT FORM BAR ── */}
      <div style={{ padding: "0 16px 12px" }}>
        <form
          onSubmit={handleSend}
          style={{
            background: "#1E293B",
            borderRadius: 10,
            border: "1px solid #334155",
            padding: "4px 6px 4px 12px",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Kuch bhi poochho..."
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#F8FAFC",
              fontSize: "0.82rem",
              flex: 1,
              fontFamily: "inherit",
            }}
          />
          <button
            type="button"
            aria-label="Voice Input"
            style={{
              background: "#334155",
              color: "#94A3B8",
              border: "none",
              borderRadius: 6,
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "0.8rem",
            }}
          >
            🎤
          </button>
          <button
            type="submit"
            aria-label="Send Message"
            style={{
              background: "#0284C7",
              color: "#ffffff",
              border: "none",
              borderRadius: 6,
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              fontSize: "0.85rem",
            }}
          >
            ➢
          </button>
        </form>
      </div>

      {/* ── FOOTER DISCLAIMER BOX ── */}
      <div
        style={{
          background: "#0B1329",
          padding: "10px 14px",
          borderTop: "1px solid #1E293B",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "0.66rem", color: "#F59E0B", lineHeight: 1.4, margin: 0, fontWeight: 500 }}>
          ⚠️ Sahayak AI ek AI agent hai jo mistake kar sakta hai. Diye gaye bids ka data server issues ke karan kabhi-kabhi delay ya mislead ho sakta hai. Kripya swayam recheck karein.
        </p>
      </div>
    </div>
  );
}
