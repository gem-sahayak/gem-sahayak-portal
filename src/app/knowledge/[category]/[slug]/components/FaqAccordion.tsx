"use client";

import React, { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FaqAccordionProps {
  faqs: FAQItem[];
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", margin: "24px 0" }}>
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: isOpen ? "0 4px 12px rgba(0, 0, 0, 0.03)" : "none",
              transition: "all 0.25s ease",
            }}
          >
            <button
              onClick={() => toggleIndex(idx)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 24px",
                textAlign: "left",
                cursor: "pointer",
                outline: "none",
              }}
            >
              <span
                style={{
                  fontSize: "1rem",
                  fontWeight: "700",
                  color: isOpen ? "#0E8A8A" : "#0C2E4A",
                  transition: "color 0.2s ease",
                }}
              >
                {faq.q}
              </span>
              <span
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "#0E8A8A",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                  lineHeight: 1,
                }}
              >
                ＋
              </span>
            </button>
            <div
              style={{
                maxHeight: isOpen ? "300px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s ease",
              }}
            >
              <div
                style={{
                  padding: "0 24px 20px 24px",
                  fontSize: "0.95rem",
                  color: "#475569",
                  lineHeight: "1.6",
                  borderTop: "1px solid #f1f5f9",
                  paddingTop: "16px",
                }}
              >
                {faq.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
