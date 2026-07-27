"use client";

import React, { useState, useEffect, useRef } from "react";

export default function TenderDemo() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isBypassMode, setIsBypassMode] = useState(false);
  const [demoUsed, setDemoUsed] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (selected.type !== "application/pdf") {
      setError("Kripya sirf PDF file hi upload karein!");
      setFile(null);
      return;
    }

    if (selected.size > 5 * 1024 * 1024) {
      setError("File size exceeds 5MB limit. Kripya choti file select karein.");
      setFile(null);
      return;
    }

    setFile(selected);
  };

  const handleUploadClick = () => {
    if (demoUsed) return;
    fileInputRef.current?.click();
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Kripya ek PDF file select karein!");
      return;
    }

    setLoading(true);
    setError(null);

    // Convert file to base64
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64String = reader.result as string;

      try {
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
        };
        if (isBypassMode) {
          headers["x-bypass-limit"] = "true";
        }

        const response = await fetch("https://api.sahayakai.com/api/demo/analyze-pdf", {
          method: "POST",
          headers,
          body: JSON.stringify({ pdfData: base64String }),
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
          throw new Error(data.error || "Failed to analyze PDF. Please try again.");
        }

        // Store result in sessionStorage for the report viewer tab
        if (typeof window !== "undefined") {
          sessionStorage.setItem("sahayak_latest_report", data.response);
          sessionStorage.setItem("sahayak_latest_report_name", file.name);
          if (!isBypassMode) {
            localStorage.setItem("sahayak_demo_used", "true");
          }
        }

        setSuccess(true);
        if (!isBypassMode) {
          setDemoUsed(true);
        }
      } catch (err: any) {
        console.error("[Upload Error]", err.message);
        setError(err.message || "Failed to analyze PDF.");
      } finally {
        setLoading(false);
      }
    };

    reader.onerror = () => {
      setError("Failed to read PDF file.");
      setLoading(false);
    };
  };

  const openReportTab = () => {
    window.open("/tools/report", "_blank");
  };

  return (
    <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)", display: "flex", flexDirection: "column", gap: "20px" }}>
      
      <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#0C2E4A", margin: 0 }}>
        Interactive Tool Console
      </h2>
      
      <p style={{ fontSize: "0.9rem", color: "#64748b", margin: 0, lineHeight: "1.4" }}>
        Upload any GeM tender document PDF (up to 5MB) below to run a complete compliance, eligibility, and commercial term check.
      </p>

      {/* Upload Drag & Drop Area */}
      <div 
        onClick={handleUploadClick}
        style={{
          border: demoUsed ? "2px dashed #cbd5e1" : "2px dashed #0E8A8A",
          borderRadius: "12px",
          padding: "36px 20px",
          textAlign: "center",
          background: demoUsed ? "#f8fafc" : "rgba(14, 138, 138, 0.02)",
          cursor: demoUsed ? "not-allowed" : "pointer",
          transition: "border 0.2s, background 0.2s",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <span style={{ fontSize: "2.5rem" }}>📄</span>
        {file ? (
          <div>
            <p style={{ fontSize: "0.9rem", fontWeight: "700", color: "#0C2E4A", margin: "0 0 4px 0" }}>
              {file.name}
            </p>
            <p style={{ fontSize: "0.75rem", color: "#64748b", margin: 0 }}>
              {(file.size / (1024 * 1024)).toFixed(2)} MB
            </p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <p style={{ fontSize: "0.9rem", color: demoUsed ? "#94a3b8" : "#475569", fontWeight: "600", margin: 0 }}>
              {demoUsed ? "Free Demo Already Used" : "Drag and drop your tender PDF here, or"}
            </p>
            {!demoUsed && (
              <span style={{ display: "inline-block", background: "#0E8A8A", color: "white", padding: "6px 14px", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "700", marginTop: "4px" }}>
                Browse File
              </span>
            )}
          </div>
        )}
        <input 
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="application/pdf"
          disabled={loading || demoUsed}
          style={{ display: "none" }}
        />
      </div>

      {/* Buttons */}
      {!success ? (
        <button
          onClick={handleAnalyze}
          disabled={loading || !file || demoUsed}
          style={{
            background: (loading || !file || demoUsed) ? "#94a3b8" : "#0E8A8A",
            color: "#ffffff",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            fontWeight: "700",
            fontSize: "0.9rem",
            cursor: (loading || !file || demoUsed) ? "not-allowed" : "pointer",
            transition: "background 0.2s",
            textAlign: "center"
          }}
        >
          {loading ? "Analyzing PDF Tender..." : demoUsed ? "Free Demo Used" : "Analyze PDF Tender"}
        </button>
      ) : (
        <button
          onClick={openReportTab}
          style={{
            background: "#22c55e",
            color: "#ffffff",
            border: "none",
            padding: "14px",
            borderRadius: "8px",
            fontWeight: "800",
            fontSize: "0.95rem",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(34, 197, 94, 0.2)",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px"
          }}
        >
          📄 View Full Professional Report
        </button>
      )}

      {/* Loading Bar */}
      {loading && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", padding: "10px" }}>
          <div className="spinner" style={{
            width: "36px",
            height: "36px",
            border: "3px solid #f3f3f3",
            borderTop: "3px solid #0E8A8A",
            borderRadius: "50%",
            animation: "spin 1s linear infinite"
          }} />
          <span style={{ fontSize: "0.85rem", color: "#64748b" }}>Analyzing document & running compliance checks...</span>
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

      {/* Conversion CTA (Repositioned below, simplified) */}
      {demoUsed && (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "10px", borderTop: "1px solid #f1f5f9", paddingTop: "20px" }}>
          <p style={{ fontSize: "0.85rem", color: "#475569", fontWeight: "600", margin: 0, textAlign: "center" }}>
            {success ? "Analysis Complete! Want to use our dedicated bid tracking dashboard?" : "Want to use our dedicated bid tracking dashboard?"}
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
