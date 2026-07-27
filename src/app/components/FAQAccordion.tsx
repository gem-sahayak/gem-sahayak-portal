"use client";
import React, { useState } from "react";

const FAQS = [
  { q: "Kya SahayakAI free hai?", a: "Haan! SahayakAI ka testing version bilkul free hai. Aap Chrome Web Store se install karke turant use karna shuru kar sakte hain. Premium features ke liye affordable plans available hain." },
  { q: "Kya mujhe apna GeM portal password share karna hoga?", a: "Bilkul nahi! SahayakAI ko aapke GeM portal credentials dene ki koi zaroorat nahi hai. 100% secure hai — sirf public procurement data analyze karta hai." },
  { q: "WhatsApp alerts kaise kaam karte hain?", a: "Extension mein jo results aate hain unke set alert pe click karke specific city ya item ka alert set karte hain. Jaise hi nai bids aayengi, SahayakAI aapko WhatsApp pe notify karega." },
  { q: "Kaun kaun se cities aur ministries supported hain?", a: "SahayakAI almost sabhi Indian cities (District level) aur lagbhag sabhi central/state government ministries ko support karta hai. Aap kisi bhi city ya ministry ke bids track kar sakte hain." },
  { q: "Kya mobile pe bhi use kar sakte hain?", a: "Abhi SahayakAI Chrome Extension hai — laptop/desktop pe Chrome browser mein kaam karta hai. WhatsApp alerts aapke phone pe aate hain, toh aap on-the-go bhi updated rehte hain. Mobile app jaldi launch hone wala hai!" },
];

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ padding: "80px 0", background: "#F8FAFC" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 52px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(12,46,74,0.08)", color: "#0C2E4A",
            padding: "6px 16px", borderRadius: 9999,
            fontSize: "0.82rem", fontWeight: 700,
            border: "1px solid rgba(12,46,74,0.12)",
            marginBottom: 20,
          }}>❓ FAQ</div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 800, color: "#0C2E4A", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Aksar Poochhe Jaane Wale Sawal
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#64748B", lineHeight: 1.7 }}>
            SahayakAI ke baare mein common questions aur unke answers.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", flexDirection: "column", gap: 12 }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                border: `1.5px solid ${open === i ? "#10B98150" : "#E2E8F0"}`,
                borderRadius: 16, overflow: "hidden",
                boxShadow: open === i ? "0 4px 24px rgba(16,185,129,0.08)" : "0 1px 4px rgba(0,0,0,0.04)",
                transition: "border-color 0.2s, box-shadow 0.2s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", padding: "20px 24px",
                  background: "none", border: "none", cursor: "pointer",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  fontFamily: "inherit", fontSize: "1rem", fontWeight: 700,
                  color: "#0C2E4A", textAlign: "left",
                  gap: 16,
                }}
              >
                <span>{faq.q}</span>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  background: open === i ? "#10B981" : "#F1F5F9",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                  transition: "background 0.2s, transform 0.3s",
                  transform: open === i ? "rotate(45deg)" : "rotate(0)",
                  fontSize: "1.1rem", color: open === i ? "#fff" : "#64748B",
                }}>+</div>
              </button>
              <div style={{
                maxHeight: open === i ? 200 : 0,
                overflow: "hidden",
                transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
                padding: open === i ? "0 24px 20px" : "0 24px",
              }}>
                <p style={{ fontSize: "0.95rem", color: "#64748B", lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
