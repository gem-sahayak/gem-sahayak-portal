"use client";

import React, { useState, useEffect } from "react";

// Helper to convert simple markdown (*, **, \n) to HTML safely
function formatMarkdown(text: string): string {
  let html = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Bold (**text**)
  html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  // Bullet items starting with * or -
  const lines = html.split("\n");
  const formattedLines = lines.map(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
      const content = trimmed.substring(2);
      return `<div style="margin-left: 14px; margin-bottom: 6px; display: flex; gap: 8px;"><span style="color: #0E8A8A;">•</span><div>${content}</div></div>`;
    }
    return line;
  });

  return formattedLines.join("\n");
}

export default function CatalogDemo() {
  const [productName, setProductName] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [demoUsed, setDemoUsed] = useState(false);
  const [isBypassMode, setIsBypassMode] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    if (typeof window !== "undefined") {
      const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
      const hasBypassParam = window.location.search.includes("bypass=true") || window.location.search.includes("test=true");
      if (hasBypassParam) {
        localStorage.setItem("sahayak_test_bypass", "true");
      }
      const testBypass = localStorage.getItem("sahayak_test_bypass") === "true";
      const isBypassed = isLocal || testBypass;
      setIsBypassMode(isBypassed);

      const used = localStorage.getItem("sahayak_demo_used") === "true";
      setDemoUsed(used && !isBypassed);
    }
  }, []);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult("");

    const name = productName.trim();
    if (!name) {
      setError("Kripya product ka naam enter karein!");
      return;
    }

    if (name.length > 100) {
      setError("Product name is too long (max 100 characters).");
      return;
    }

    const injectionPattern = /ignore|translate|instructions|prompt|system|markdown/i;
    if (injectionPattern.test(name)) {
      setError("Invalid product name. Please enter a standard product name.");
      return;
    }

    setLoading(true);

    try {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };
      if (isBypassMode) {
        headers["x-bypass-limit"] = "true";
      }

      const response = await fetch("https://api.sahayakai.co.in/api/demo/catalog", {
        method: "POST",
        headers,
        body: JSON.stringify({ productName: name }),
      });

      const data = await response.json();

      if (response.status === 403 || data.error === "LIMIT_EXHAUSTED") {
        if (!isBypassMode) {
          setDemoUsed(true);
          if (typeof window !== "undefined") {
            localStorage.setItem("sahayak_demo_used", "true");
          }
        }
        setError("Free demo already used. Install the Extension to continue.");
        return;
      }

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again later.");
      }

      setResult(data.response || "No response received.");
      
      // Save demo state to block subsequent tries
      if (!isBypassMode) {
        setDemoUsed(true);
        if (typeof window !== "undefined") {
          localStorage.setItem("sahayak_demo_used", "true");
        }
      }
    } catch (err: any) {
      console.error("[Demo Error]", err.message);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "28px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", gap: "20px" }}>
      
      <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#0C2E4A", margin: 0 }}>
        Interactive Tool Console
      </h2>
      
      <p style={{ fontSize: "0.88rem", color: "#64748b", margin: 0, lineHeight: "1.4" }}>
        Enter any product name below to see the GeM Category path, golden codes, and catalog specs generated instantly by our AI.
      </p>

      {/* Input Section (Always visible, but disabled once demo is used) */}
      <form onSubmit={handleGenerate} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div>
          <label htmlFor="prod-input" style={{ display: "block", fontSize: "0.8rem", fontWeight: "700", color: "#334155", marginBottom: "6px" }}>
            Product Name
          </label>
          <input
            id="prod-input"
            type="text"
            placeholder={demoUsed ? "Free Demo Already Used" : "e.g. Office Executive Chair, HP Laser Printer..."}
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            disabled={loading || demoUsed}
            style={{
              width: "100%",
              padding: "10px 14px",
              fontSize: "0.9rem",
              borderRadius: "8px",
              border: "1px solid #cbd5e1",
              outline: "none",
              transition: "border 0.2s",
              background: (loading || demoUsed) ? "#f1f5f9" : "#ffffff",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading || demoUsed}
          style={{
            background: (loading || demoUsed) ? "#94a3b8" : "#0E8A8A",
            color: "#ffffff",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            fontWeight: "700",
            fontSize: "0.9rem",
            cursor: (loading || demoUsed) ? "not-allowed" : "pointer",
            transition: "background 0.2s",
            textAlign: "center"
          }}
        >
          {loading ? "Generating AI Catalog..." : demoUsed ? "Free Demo Used" : "Generate AI Catalog"}
        </button>
      </form>

      {/* Loading Spinner */}
      {loading && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "20px" }}>
          <div className="spinner" style={{
            width: "36px",
            height: "36px",
            border: "3px solid #f3f3f3",
            borderTop: "3px solid #0E8A8A",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }} />
          <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Generating AI Catalog...</span>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div style={{ background: "#fef2f2", border: "1px solid #fee2e2", color: "#991b1b", padding: "12px 16px", borderRadius: "8px", fontSize: "0.85rem", lineHeight: "1.4" }}>
          ⚠️ {error}
        </div>
      )}

      {/* Result Display */}
      {result && (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h4 style={{ fontSize: "0.9rem", fontWeight: "700", color: "#0C2E4A", margin: 0 }}>
            Generated Catalog Guide:
          </h4>
          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              padding: "16px",
              fontSize: "0.85rem",
              color: "#334155",
              lineHeight: "1.5",
              maxHeight: "350px",
              overflowY: "auto"
            }}
            dangerouslySetInnerHTML={{ __html: formatMarkdown(result) }}
          />
        </div>
      )}

      {/* Conversion CTA (Repositioned Niche/Below results, simplified) */}
      {demoUsed && (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "10px", borderTop: "1px solid #f1f5f9", paddingTop: "20px" }}>
          <p style={{ fontSize: "0.85rem", color: "#475569", fontWeight: "600", margin: 0, textAlign: "center" }}>
            {result ? "This is just a small result. Want to use our dedicated catalog management dashboard?" : "Want to use our dedicated catalog management dashboard?"}
          </p>
          
          <div style={{ background: "linear-gradient(135deg, #0e8a8a 0%, #075e5e 100%)", borderRadius: "12px", padding: "20px 24px", color: "#ffffff", textAlign: "center", display: "flex", flexDirection: "column", gap: "12px" }}>
            <h3 style={{ fontSize: "1.1rem", fontWeight: "800", margin: 0 }}>
              🎉 Demo Complete!
            </h3>
            
            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: "1.4" }}>
              Try other great features like this for free. Install the SahayakAI Chrome Extension to get started.
            </p>
            
            <div style={{ marginTop: "4px" }}>
              <a
                href="https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  width: "100%",
                  background: "#ffffff",
                  color: "#0E8A8A",
                  padding: "10px",
                  borderRadius: "8px",
                  fontWeight: "700",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                }}
              >
                📥 Install Chrome Extension
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
