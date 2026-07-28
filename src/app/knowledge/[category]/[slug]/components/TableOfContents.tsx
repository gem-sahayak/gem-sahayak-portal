"use client";

import React, { useEffect, useState } from "react";

interface HeadingItem {
  text: string;
  id: string;
  level: number;
}

interface TableOfContentsProps {
  headings: HeadingItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const scrolled = (window.scrollY / totalHeight) * 100;
        setScrollPercent(Math.min(Math.max(scrolled, 0), 100));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            const currentIdx = headings.findIndex((h) => h.id === entry.target.id);
            if (currentIdx !== -1) {
              const completed = headings.slice(0, currentIdx).map((h) => h.id);
              setCompletedIds(completed);
            }
          }
        });
      },
      { rootMargin: "-80px 0px -50% 0px" }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => {
      headings.forEach((heading) => {
        const el = document.getElementById(heading.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [headings]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
      setIsOpenMobile(false);
    }
  };

  if (!headings || headings.length === 0) return null;

  // Circular progress calculations
  const radius = 24;
  const circumference = 2 * Math.PI * radius; // 150.79
  const strokeDashoffset = circumference - (scrollPercent / 100) * circumference;

  // Estimated reading time calculation
  const minsLeft = Math.max(Math.ceil((100 - scrollPercent) * 0.06), 1);

  return (
    <div>
      {/* Top Fixed Reading Progress Bar (Runs continuously across top of viewport) */}
      <div 
        style={{ 
          position: "fixed", 
          top: 0, 
          left: 0, 
          width: `${scrollPercent}%`, 
          height: "4px", 
          background: "linear-gradient(90deg, #0E8A8A 0%, #25D366 100%)", 
          zIndex: 99999,
          boxShadow: "0 0 10px rgba(14, 138, 138, 0.5)",
          transition: "width 0.1s linear" 
        }} 
      />

      {/* Mobile Collapsible TOC */}
      <div className="mobile-only-toc" style={{ display: "none", marginBottom: "24px" }}>
        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          style={{
            width: "100%",
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "14px",
            padding: "14px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "0.9rem",
            fontWeight: "700",
            color: "#0C2E4A",
            cursor: "pointer",
          }}
        >
          <span>📋 Knowledge Navigator ({Math.round(scrollPercent)}%)</span>
          <span style={{ fontSize: "0.75rem", transform: isOpenMobile ? "rotate(180deg)" : "rotate(0)" }}>▼</span>
        </button>
        {isOpenMobile && (
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderTop: "none",
              borderRadius: "0 0 14px 14px",
              padding: "16px 20px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {headings.map((h, i) => (
              <a
                key={i}
                href={`#${h.id}`}
                onClick={(e) => handleLinkClick(e, h.id)}
                style={{
                  fontSize: "0.85rem",
                  paddingLeft: h.level === 3 ? "12px" : "0",
                  color: activeId === h.id ? "#0E8A8A" : "#475569",
                  fontWeight: activeId === h.id ? "700" : "500",
                  textDecoration: "none",
                }}
              >
                {completedIds.includes(h.id) ? "✓ " : ""}
                {h.text}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Sticky TOC (Navigator) */}
      <div className="desktop-only-toc" style={{ position: "sticky", top: "100px", alignSelf: "start", display: "flex", flexDirection: "column", gap: "24px" }}>
        
        {/* On This Page List */}
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "28px", boxShadow: "0 8px 24px rgba(0, 0, 0, 0.03)" }}>
          <h4
            style={{
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "#0C2E4A",
              fontWeight: "800",
              marginBottom: "18px",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            💬 On This Page
          </h4>
          <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {headings.map((h, i) => {
              const isSelected = activeId === h.id;
              const isCompleted = completedIds.includes(h.id);
              return (
                <a
                  key={i}
                  href={`#${h.id}`}
                  onClick={(e) => handleLinkClick(e, h.id)}
                  style={{
                    fontSize: "0.85rem",
                    padding: isSelected ? "8px 12px" : "4px 8px",
                    borderRadius: isSelected ? "8px" : "0",
                    background: isSelected ? "#f0fdf4" : "transparent",
                    color: isSelected ? "#15803d" : isCompleted ? "#16a34a" : "#475569",
                    fontWeight: isSelected ? "700" : "500",
                    textDecoration: "none",
                    transition: "all 0.15s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <span style={{ fontSize: "0.75rem", minWidth: "14px" }}>
                    {isCompleted ? "✅" : isSelected ? "🟢" : "📄"}
                  </span>
                  <span style={{ overflow: "hidden", textAnchor: "middle", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {h.text}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Circular Progress Ring Card */}
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "28px", boxShadow: "0 8px 24px rgba(0, 0, 0, 0.03)", display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ position: "relative", width: "56px", height: "56px", flexShrink: 0 }}>
            <svg width="56" height="56" viewBox="0 0 56 56">
              <circle cx="28" cy="28" r="24" fill="transparent" stroke="#f1f5f9" strokeWidth="4" />
              <circle
                cx="28"
                cy="28"
                r="24"
                fill="transparent"
                stroke="#0E8A8A"
                strokeWidth="4"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform="rotate(-90 28 28)"
                style={{ transition: "stroke-dashoffset 0.1s ease" }}
              />
            </svg>
            <div style={{ position: "absolute", top: 0, left: 0, width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem", fontWeight: "800", color: "#0C2E4A" }}>
              {Math.round(scrollPercent)}%
            </div>
          </div>

          <div>
            <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#0C2E4A", display: "block" }}>Keep going!</span>
            <span style={{ fontSize: "0.75rem", color: "#64748b", display: "block", marginTop: "2px" }}>Time left: ~ {minsLeft} min{minsLeft > 1 ? "s" : ""}</span>
          </div>
        </div>

        {/* Need Help Card */}
        <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "18px", padding: "28px", boxShadow: "0 8px 24px rgba(0, 0, 0, 0.03)" }}>
          <h4 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#15803d", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
            🟢 Need Help?
          </h4>
          <span style={{ fontSize: "0.85rem", fontWeight: "800", color: "#0C2E4A", display: "block", marginBottom: "4px" }}>Ask AI Assistant</span>
          <p style={{ fontSize: "0.8rem", color: "#64748b", margin: "0 0 18px 0", lineHeight: "1.4" }}>
            Get instant answers to your procurement questions.
          </p>
          <a
            href="/contact"
            style={{ display: "block", width: "100%", background: "#0C2E4A", color: "white", padding: "10px", borderRadius: "10px", fontSize: "0.82rem", fontWeight: "700", textAlign: "center", textDecoration: "none", transition: "background 0.2s" }}
            onMouseOver={(e) => e.currentTarget.style.background = "#082136"}
            onMouseOut={(e) => e.currentTarget.style.background = "#0C2E4A"}
          >
            Chat Now →
          </a>
        </div>

      </div>
    </div>
  );
}
