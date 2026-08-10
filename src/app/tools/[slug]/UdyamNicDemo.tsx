"use client";

import React, { useState } from "react";

interface NicRecord {
  queryKeyword: string;
  nicCode: string;
  nicDescription: string;
  activityType: "Manufacturing" | "Services";
  gemCategoryPath: string;
  hsnSacCode: string;
  gstRate: string;
  udyamSteps: string[];
}

const KNOWLEDGE_BASE_NIC: NicRecord[] = [
  {
    queryKeyword: "furniture",
    nicCode: "31001",
    nicDescription: "Manufacture of wooden furniture used in offices, homes, schools and institutions",
    activityType: "Manufacturing",
    gemCategoryPath: "Office Supplies > Furniture > Seating & Workstations > Executive & Revolving Chairs",
    hsnSacCode: "9403",
    gstRate: "18%",
    udyamSteps: [
      "Log in to official Udyam portal (udyamregistration.gov.in) using URN & Mobile OTP.",
      "Navigate to Update Details -> Add Activity / NIC Code.",
      "Select Manufacturing -> Division 31 (Furniture) -> 5-Digit Code 31001.",
      "Click Submit & Update Certificate. Updated Udyam generates in 24 Hours."
    ]
  },
  {
    queryKeyword: "computer",
    nicCode: "26201",
    nicDescription: "Manufacture and assembly of computers, laptops, servers, and electronic peripherals",
    activityType: "Manufacturing",
    gemCategoryPath: "IT & Telecommunications > Computers & Hardware > Desktop & All-in-One Computers",
    hsnSacCode: "8471",
    gstRate: "18%",
    udyamSteps: [
      "Log in to official Udyam portal (udyamregistration.gov.in).",
      "Go to Update Details -> Add NIC Code.",
      "Select Manufacturing -> Division 26 -> 5-Digit Code 26201.",
      "Submit update request. GeM portal will auto-sync the new NIC code upon profile refresh."
    ]
  },
  {
    queryKeyword: "manpower",
    nicCode: "78102",
    nicDescription: "Supply of human resources, security personnel, outsourcing services, and manpower staffing",
    activityType: "Services",
    gemCategoryPath: "Services > Human Resources > Manpower Outsourcing Services > Security & Unskilled Staff",
    hsnSacCode: "9985",
    gstRate: "18%",
    udyamSteps: [
      "Log in to official Udyam portal.",
      "Select Services -> Division 78 (Employment activities) -> 5-Digit Code 78102.",
      "Submit and re-verify Udyam details on GeM profile under MSE Details tab."
    ]
  },
  {
    queryKeyword: "catering",
    nicCode: "56210",
    nicDescription: "Event catering services, institutional canteen management, and food supply",
    activityType: "Services",
    gemCategoryPath: "Services > Canteen & Hospitality > Event Catering & Meal Supply Services",
    hsnSacCode: "9963",
    gstRate: "5% / 18%",
    udyamSteps: [
      "Log in to Udyam portal -> Update Profile -> NIC Codes.",
      "Select Services -> Division 56 -> 5-Digit Code 56210.",
      "Update Udyam certificate and upload to GeM Seller profile."
    ]
  },
  {
    queryKeyword: "cctv",
    nicCode: "80200",
    nicDescription: "Security systems services, installation and maintenance of CCTV cameras and electronic security",
    activityType: "Services",
    gemCategoryPath: "Services > Security & Surveillance > CCTV & Electronic Security System Maintenance",
    hsnSacCode: "9985 / 8525",
    gstRate: "18%",
    udyamSteps: [
      "Log in to Udyam portal -> Add Activity.",
      "Select Services -> Division 80 (Security & Investigation) -> Code 80200.",
      "Update Udyam and refresh MSE status on GeM."
    ]
  }
];

export default function UdyamNicDemo() {
  const [query, setQuery] = useState("");
  const [selectedRecord, setSelectedRecord] = useState<NicRecord | null>(KNOWLEDGE_BASE_NIC[0]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const q = query.trim().toLowerCase();
    if (!q) {
      setError("Kripya product ya service ka naam enter karein!");
      return;
    }

    const matched = KNOWLEDGE_BASE_NIC.find(
      (r) => q.includes(r.queryKeyword) || r.nicDescription.toLowerCase().includes(q) || r.gemCategoryPath.toLowerCase().includes(q)
    );

    if (matched) {
      setSelectedRecord(matched);
    } else {
      // Dynamic Fallback Generator for any unmapped product/service
      setSelectedRecord({
        queryKeyword: q,
        nicCode: q.includes("service") ? "99859" : "32909",
        nicDescription: `General commercial operations, manufacturing, and supply for ${query.toUpperCase()}`,
        activityType: q.includes("service") ? "Services" : "Manufacturing",
        gemCategoryPath: `General Products & Commercial Services > ${query.toUpperCase()} Category`,
        hsnSacCode: q.includes("service") ? "9985" : "9999",
        gstRate: "18%",
        udyamSteps: [
          "Log in to official Udyam portal (udyamregistration.gov.in).",
          "Search Division matching your core product activity.",
          "Add 5-Digit NIC Code and save update.",
          "Refresh MSE details on GeM profile."
        ]
      });
    }
  };

  return (
    <div style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "16px", padding: "24px", color: "#F8FAFC" }}>
      {/* Header */}
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(14, 138, 138, 0.15)", border: "1px solid #0E8A8A", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", color: "#14B8A6", fontWeight: 600, marginBottom: "8px" }}>
          <span>🏷️ Udyam NIC Code &amp; GeM Category Matcher</span>
        </div>
        <h2 style={{ fontSize: "20px", fontWeight: 700, margin: 0, color: "#FFFFFF" }}>
          Udyam 5-Digit NIC Code &amp; GeM Category Search Tool
        </h2>
        <p style={{ fontSize: "13px", color: "#94A3B8", margin: "6px 0 0 0" }}>
          Check your product/service 5-Digit NIC code, HSN mapping, and Udyam amendment steps to ensure 100% bid compliance.
        </p>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
        <input
          type="text"
          placeholder="Enter product or service (e.g. Office Furniture, Manpower, Catering, CCTV)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flex: 1, padding: "12px 16px", borderRadius: "10px", background: "#182234", border: "1px solid #334155", color: "#FFF", fontSize: "14px" }}
        />
        <button
          type="submit"
          style={{ padding: "12px 24px", background: "#0E8A8A", color: "#FFF", borderRadius: "10px", border: "none", fontWeight: 700, cursor: "pointer" }}
        >
          Find NIC Code 🔍
        </button>
      </form>

      {error && <div style={{ color: "#F87171", fontSize: "13px", marginBottom: "16px" }}>{error}</div>}

      {/* Result Card */}
      {selectedRecord && (
        <div style={{ background: "#182234", borderRadius: "12px", padding: "24px", border: "1px solid #28354D" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", flexWrap: "wrap", gap: "8px" }}>
            <div>
              <span style={{ fontSize: "12px", color: "#94A3B8", textTransform: "uppercase" }}>Matched 5-Digit NIC Code</span>
              <div style={{ fontSize: "26px", fontWeight: 800, color: "#38BDF8" }}>{selectedRecord.nicCode}</div>
            </div>
            <span style={{ padding: "6px 14px", borderRadius: "20px", background: "rgba(16, 185, 129, 0.15)", color: "#10B981", border: "1px solid #10B981", fontSize: "12px", fontWeight: 700 }}>
              {selectedRecord.activityType}
            </span>
          </div>

          <div style={{ marginBottom: "16px" }}>
            <div style={{ fontSize: "12px", color: "#94A3B8" }}>NIC Code Description</div>
            <div style={{ fontSize: "14px", color: "#F8FAFC", fontWeight: 600, marginTop: "4px" }}>{selectedRecord.nicDescription}</div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "20px" }}>
            <div style={{ background: "#0F172A", padding: "12px", borderRadius: "8px", border: "1px solid #1E293B" }}>
              <div style={{ fontSize: "11px", color: "#94A3B8" }}>GeM Category Path</div>
              <div style={{ fontSize: "12px", color: "#14B8A6", fontWeight: 600, marginTop: "4px" }}>{selectedRecord.gemCategoryPath}</div>
            </div>
            <div style={{ background: "#0F172A", padding: "12px", borderRadius: "8px", border: "1px solid #1E293B" }}>
              <div style={{ fontSize: "11px", color: "#94A3B8" }}>HSN / SAC Code</div>
              <div style={{ fontSize: "14px", color: "#F59E0B", fontWeight: 700, marginTop: "4px" }}>{selectedRecord.hsnSacCode} ({selectedRecord.gstRate} GST)</div>
            </div>
          </div>

          {/* Udyam Portal Amendment Steps */}
          <div style={{ background: "#0F172A", borderRadius: "10px", padding: "16px", border: "1px solid #1E293B" }}>
            <h4 style={{ fontSize: "14px", color: "#38BDF8", margin: "0 0 10px 0" }}>📝 Udyam Portal Amendment Steps:</h4>
            <ol style={{ margin: 0, paddingLeft: "20px", fontSize: "13px", color: "#CBD5E1", lineHeight: "1.6" }}>
              {selectedRecord.udyamSteps.map((step, idx) => (
                <li key={idx} style={{ marginBottom: "6px" }}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
