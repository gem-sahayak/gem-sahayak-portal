"use client";

import React, { useState, useEffect } from "react";

interface BiddingItem {
  name: string;
  qty: string;
}

interface EligibilityItem {
  icon: string;
  text: string;
  status: "success" | "warning" | "danger";
}

interface PriceStrategyItem {
  name: string;
  val: string;
}

interface ParsedReport {
  bidNumber: string;
  ministry: string;
  emd: string;
  location: string;
  contact: string;
  epbg: string;
  msePreference: string;
  miiPreference: string;
  verdict: "yes" | "no" | "maybe";
  verdictReason: string;
  probability: number;
  probabilityLabel: string;
  items: BiddingItem[];
  eligibility: EligibilityItem[];
  priceStrategy: PriceStrategyItem[];
  risks: string[];
}

function cleanItemName(text: string): string {
  let name = text.trim();
  const match = name.match(/"([^"]+)"/);
  if (match) name = match[1];
  else {
    const singleMatch = name.match(/'([^'\s][^']*)'/);
    if (singleMatch) name = singleMatch[1];
  }
  name = name.replace(/[\*_\`\"\']/g, "");
  name = name.replace(/^(?:aur\s+)/i, "");
  name = name.replace(/^(?:lekin\s+)?(?:iske\s+)?alawa\s+/i, "");
  name = name.replace(/^(?:primary\s+category\s+hai\s+)/i, "");
  name = name.replace(/^(?:main\s+item\s+)/i, "");
  name = name.replace(/^(?:primary\s+product\s*:\s*)/i, "");
  name = name.replace(/^(?:other\s+items\s*:\s*)/i, "");
  name = name.replace(/ye\s+ek\s+bunch\s+bid.*/i, "");
  name = name.replace(/\s+bhi\s+hain\.?$/i, "");
  name = name.replace(/\s+bhi\s+hai\.?$/i, "");
  name = name.replace(/\s+bhi\.?$/i, "");
  name = name.replace(/\s+shamil\s+hain\.?$/i, "");
  name = name.replace(/\s+shamil\s+hai\.?$/i, "");
  name = name.replace(/\s+jaise\s+items\s+hain\.?$/i, "");
  name = name.replace(/\s+jaise\s+items\s+hai\.?$/i, "");
  name = name.replace(/\s+jaise\s+item\.?$/i, "");
  name = name.replace(/bahut\s+saare.*/i, "");
  return name.trim();
}

function parseRawReport(text: string): ParsedReport {
  const result: ParsedReport = {
    bidNumber: "Not Found",
    ministry: "Not Found",
    emd: "Exempted / NA",
    location: "Not Found",
    contact: "Not Found",
    epbg: "Exempted / NA",
    msePreference: "Exempted / NA",
    miiPreference: "Exempted / NA",
    verdict: "maybe",
    verdictReason: "",
    probability: 50,
    probabilityLabel: "Medium Chance",
    items: [],
    eligibility: [],
    priceStrategy: [],
    risks: []
  };

  const bidMatch = text.match(/GEM\/\d+\/[A-Z]\/\d+/i);
  if (bidMatch) {
    result.bidNumber = bidMatch[0];
  }

  const lines = text.split("\n");
  let currentSection = 0;
  let currentKey = "";
  let listKey = "";
  let extractedProductName = "";
  let extractedQty = "";

  lines.forEach(line => {
    const trimmed = line.trim();
    if (!trimmed) return;

    const cleanLine = trimmed.replace(/^\*+\s*/, "").replace(/\s*\*+$/, "").trim();

    // Section header check
    if (/^(?:#+\s*)?([1-6])\s*\.\s+/i.test(cleanLine) || /^(?:#+\s*)?(?:\*\*)?[1-6]\s*\.\s+.*(?:📋|✅|🏆|💰|⚠️|🎯)/i.test(trimmed)) {
      const lower = trimmed.toLowerCase();
      let section = currentSection;

      if (lower.includes("📋") || (lower.includes("summary") && /\b1\s*\./.test(lower))) {
        section = 1;
      } else if (lower.includes("✅") || (lower.includes("eligibility") && /\b2\s*\./.test(lower))) {
        section = 2;
      } else if (lower.includes("🏆") || ((lower.includes("winning") || lower.includes("l1 aane") || lower.includes("chances")) && /\b3\s*\./.test(lower))) {
        section = 3;
      } else if (lower.includes("💰") || ((lower.includes("price suggestion") || lower.includes("pricing")) && /\b4\s*\./.test(lower))) {
        section = 4;
      } else if (lower.includes("⚠️") || ((lower.includes("risk") || lower.includes("challenge")) && /\b5\s*\./.test(lower))) {
        section = 5;
      } else if (lower.includes("🎯") || ((lower.includes("recommendation") || lower.includes("verdict")) && /\b6\s*\./.test(lower))) {
        section = 6;
      }

      if (section !== currentSection) {
        currentSection = section;
        currentKey = "";
        listKey = "";
        return;
      }
    }

    if (currentSection === 1) {
      // Key-value bullets parser
      const match = trimmed.match(/^\s*[\-\*\u2022]\s*\*\*(.*?)\*\*\s*[:\-\?]?\s*(.*)/i);
      if (match) {
        const title = match[1].toLowerCase().trim();
        const value = match[2].trim();
        let fieldKey = "";

        if (title.includes("bid number") || title.includes("bid no")) {
          fieldKey = "bidNumber";
        } else if (title.includes("ministry") || title.includes("department") || title.includes("buyer") || title.includes("vibhag")) {
          fieldKey = "ministry";
        } else if (title.includes("emd") || title.includes("deposit") || title.includes("earnest money")) {
          fieldKey = "emd";
        } else if (title.includes("purchase") || title.includes("product") || title.includes("service")) {
          fieldKey = "productName";
        } else if (title.includes("quantity") || title.includes("qty") || title.includes("kitni hai")) {
          fieldKey = "quantity";
        } else if (title.includes("location") || title.includes("city") || title.includes("delivery") || title.includes("jagah") || title.includes("shahar")) {
          fieldKey = "location";
        } else if (title.includes("contact") || title.includes("grievance") || title.includes("email") || title.includes("phone") || title.includes("sampark")) {
          fieldKey = "contact";
        } else if (title.includes("epbg") || title.includes("performance bank guarantee") || title.includes("performance security")) {
          fieldKey = "epbg";
        }

        if (fieldKey) {
          currentKey = fieldKey;
          if (value) {
            const cleanVal = value.replace(/\*+/g, "").trim();
            if (fieldKey === "bidNumber") result.bidNumber = cleanVal;
            else if (fieldKey === "ministry") result.ministry = cleanVal;
            else if (fieldKey === "emd") result.emd = cleanVal;
            else if (fieldKey === "productName") extractedProductName = cleanVal;
            else if (fieldKey === "quantity") extractedQty = cleanVal;
            else if (fieldKey === "location") result.location = cleanVal;
            else if (fieldKey === "contact") result.contact = cleanVal;
            else if (fieldKey === "epbg") result.epbg = cleanVal;
          }
        }
      } else if (currentKey) {
        const value = trimmed.replace(/^\s*[\-\*\u2022]\s*/, "").replace(/\*+/g, "").trim();
        if (value) {
          if (currentKey === "bidNumber") result.bidNumber = value;
          else if (currentKey === "ministry") result.ministry = result.ministry === "Not Found" ? value : `${result.ministry} ${value}`;
          else if (currentKey === "emd") result.emd = result.emd === "Exempted / NA" ? value : `${result.emd} ${value}`;
          else if (currentKey === "productName") extractedProductName = `${extractedProductName}, ${value}`;
          else if (currentKey === "quantity") extractedQty = `${extractedQty} ${value}`;
          else if (currentKey === "location") result.location = result.location === "Not Found" ? value : `${result.location} ${value}`;
          else if (currentKey === "contact") result.contact = result.contact === "Not Found" ? value : `${result.contact} ${value}`;
          else if (currentKey === "epbg") result.epbg = result.epbg === "Exempted / NA" ? value : `${result.epbg} ${value}`;
        }
      }
    } else if (currentSection === 2) {
      // Eligibility Checklist parser
      const match = trimmed.match(/^\s*[\-\*\u2022]\s*\*\*(.*?)\*\*\s*[:\-\?]?\s*(.*)/i);
      if (match) {
        const title = match[1].toLowerCase().trim();
        const value = match[2].trim();
        if (title.includes("emd") || title.includes("deposit") || title.includes("earnest money")) {
          currentKey = "emd";
          result.emd = value.replace(/\*+/g, "").trim();
          return;
        } else {
          currentKey = "";
        }
      } else if (currentKey === "emd") {
        const val = trimmed.replace(/^\s*[\-\*\u2022]\s*/, "").replace(/\*+/g, "").trim();
        if (val) result.emd = result.emd === "Exempted / NA" ? val : `${result.emd} ${val}`;
        return;
      }

      const rawText = trimmed.replace(/^\s*[\-\*\u2022]\s*/, "").replace(/\*+/g, "").trim();
      if (rawText.length < 5 || rawText.toLowerCase().includes("eligibility check")) return;

      const inlineItem = trimmed.match(/^\s*[\-\*\u2022]\s*\*\*(.*?\??)\*\*\s*[:\-]?\s*(.*)/i);
      if (inlineItem && inlineItem[2].trim().length > 2) {
        const title = inlineItem[1].replace(/\*+/g, "").trim();
        const value = inlineItem[2].replace(/\*+/g, "").trim();
        const lowerTitle = title.toLowerCase();

        if (lowerTitle.includes("mse purchase") || lowerTitle.includes("mse preference")) {
          result.msePreference = value;
        } else if (lowerTitle.includes("mii purchase") || lowerTitle.includes("mii preference")) {
          result.miiPreference = value;
        }

        let status: "success" | "warning" | "danger" = "warning";
        let icon = "⚠️";
        const lowerVal = value.toLowerCase();

        if (lowerVal.includes("bilkul") || lowerVal.includes("haan") || lowerVal.includes("sakte hain") || lowerVal.includes("milegi") || lowerVal.includes("exempt") || lowerVal.includes("not required") || lowerVal.includes("allowed") || /^yes/i.test(lowerVal)) {
          status = "success";
          icon = "🟢";
        } else if (lowerVal.includes("not allowed") || lowerVal.includes("mandatory") || lowerVal.includes("required") || lowerVal.includes("experience") || /^no[^t]/i.test(lowerVal) || /^nahi/i.test(lowerVal)) {
          status = "danger";
          icon = "🔴";
        }

        result.eligibility.push({ icon, text: `${title}: ${value}`, status });
        listKey = "";
      } else if (inlineItem && inlineItem[2].trim().length <= 2) {
        listKey = inlineItem[1].replace(/\*+/g, "").trim();
      } else if (listKey) {
        const title = listKey;
        const value = rawText;
        const lowerTitle = title.toLowerCase();

        if (lowerTitle.includes("mse purchase") || lowerTitle.includes("mse preference")) {
          result.msePreference = value;
        } else if (lowerTitle.includes("mii purchase") || lowerTitle.includes("mii preference")) {
          result.miiPreference = value;
        }

        let status: "success" | "warning" | "danger" = "warning";
        let icon = "⚠️";
        const lowerVal = value.toLowerCase();

        if (lowerVal.includes("bilkul") || lowerVal.includes("haan") || lowerVal.includes("sakte hain") || lowerVal.includes("milegi") || lowerVal.includes("exempt") || lowerVal.includes("not required") || lowerVal.includes("allowed") || /^yes/i.test(lowerVal)) {
          status = "success";
          icon = "🟢";
        } else if (lowerVal.includes("not allowed") || lowerVal.includes("mandatory") || lowerVal.includes("required") || lowerVal.includes("experience") || /^no[^t]/i.test(lowerVal) || /^nahi/i.test(lowerVal)) {
          status = "danger";
          icon = "🔴";
        }

        result.eligibility.push({ icon, text: `${title}: ${value}`, status });
        listKey = "";
      } else {
        let status: "success" | "warning" | "danger" = "warning";
        let icon = "⚠️";
        const lowerRaw = rawText.toLowerCase();

        if (lowerRaw.includes("sakte hain") || lowerRaw.includes("milegi") || lowerRaw.includes("exempt") || lowerRaw.includes("preference")) {
          status = "success";
          icon = "🟢";
        } else if (lowerRaw.includes("mandatory") || lowerRaw.includes("zaroori") || lowerRaw.includes("required")) {
          status = "danger";
          icon = "🔴";
        }
        result.eligibility.push({ icon, text: rawText, status });
      }
    } else if (currentSection === 3) {
      // Win chances gauge calculator
      const rawText = trimmed.replace(/^\s*[\-\*\u2022]\s*/, "").replace(/\*+/g, "").trim();
      if (rawText.length < 5) return;

      const lower = rawText.toLowerCase();
      const testRegex = (pat: string) => RegExp(`\\b${pat}\\b`, "i").test(lower);

      if (result.probability === 50) {
        if (testRegex("high competition") || testRegex("competition high") || testRegex("bahut competition") || (/\blow\b/.test(lower) && /\bchance/.test(lower)) || testRegex("chances kam") || testRegex("mushkil") || testRegex("tough")) {
          result.probability = 30;
          result.probabilityLabel = "High Attention Required";
        } else if (testRegex("low competition") || testRegex("competition low") || testRegex("kam competition") || (/\bhigh\b/.test(lower) && /\bchance/.test(lower)) || (/\bgood\b/.test(lower) && /\bchance/.test(lower)) || testRegex("strong chance") || testRegex("aasan")) {
          result.probability = 85;
          result.probabilityLabel = "Ready for Submission";
        } else if (testRegex("medium") || testRegex("moderate") || testRegex("average") || testRegex("theek thaak")) {
          result.probability = 55;
          result.probabilityLabel = "Preparation Recommended";
        }
      }
    } else if (currentSection === 4) {
      // Pricing suggestions table
      const rawText = trimmed.replace(/^\s*[\-\*\u2022]\s*/, "").replace(/\*+/g, "").trim();
      if (rawText.length < 5 || rawText.toLowerCase().includes("price suggestion")) return;

      const match = trimmed.match(/^\s*[\-\*\u2022]\s*\*\*(.*?)\*\*\s*[:\-]?\s*(.*)/i);
      if (match) {
        const name = match[1].trim();
        const val = match[2].trim();
        if (name.length > 2 && val.length > 1) {
          result.priceStrategy.push({ name, val });
        }
      }
    } else if (currentSection === 5) {
      // Risks list
      const rawText = trimmed.replace(/^\s*[\-\*\u2022]\s*/, "").replace(/\*+/g, "").trim();
      if (rawText.length > 5 && !rawText.toLowerCase().includes("risk") && !rawText.toLowerCase().includes("challenge")) {
        result.risks.push(rawText);
      }
    } else if (currentSection === 6) {
      // Verdict parser
      const rawText = trimmed.replace(/^\s*[\-\*\u2022]\s*/, "").replace(/\*+/g, "").trim();
      const lower = rawText.toLowerCase();
      const cleanVerdict = lower.replace(/bid bharna chahiye ya nahi\??/gi, "").replace(/\(haan\/nahi\/maybe\)/gi, "").trim();

      if (cleanVerdict.length > 0) {
        const checkTerm = (term: string) => RegExp(`\\b${term}\\b`, "i").test(cleanVerdict);
        const subContent = cleanVerdict.replace(/\bno\s+(risk|issue|problem|dikkat|pareshani|tension|worry|objection|barrier|restriction|major|significant|serious)\b/gi, "").trim();

        if (cleanVerdict.includes("not recommended") || cleanVerdict.includes("nahi bharna") || cleanVerdict.startsWith("nahi") || cleanVerdict.includes("avoid this bid")) {
          result.verdict = "no";
        } else if (result.verdict !== "no") {
          if (cleanVerdict.includes("recommended") || cleanVerdict.includes("fill the bid") || cleanVerdict.includes("bharna chahiye") || cleanVerdict.startsWith("haan") || checkTerm("yes") || cleanVerdict.includes("bid bharo")) {
            result.verdict = "yes";
          } else if (result.verdict !== "yes") {
            if (checkTerm("maybe") || cleanVerdict.includes("check specs") || cleanVerdict.includes("depend") || cleanVerdict.includes("shayad") || cleanVerdict.includes("dekh lo")) {
              result.verdict = "maybe";
            } else if (result.verdict === "maybe" && (checkTerm("no") || checkTerm("nahi")) && subContent.length > 0) {
              result.verdict = "no";
            }
          }
        }
      }

      if (rawText.length > 5 && !lower.includes("recommendation") && !lower.includes("verdict")) {
        result.verdictReason = result.verdictReason ? `${result.verdictReason} ${rawText}` : rawText;
      }
    }
  });

  // Hydrate items checklist
  if (extractedProductName) {
    const listParser = (val: string) => {
      const itemsList: string[] = [];
      let temp = "";
      let brackets = 0;
      for (let i = 0; i < val.length; i++) {
        const char = val[i];
        if (char === "(" || char === "[" || char === "{") brackets++;
        else if (char === ")" || char === "]" || char === "}") brackets--;
        if ((char === "," || char === ";") && brackets === 0) {
          itemsList.push(temp);
          temp = "";
        } else temp += char;
      }
      if (temp) itemsList.push(temp);
      return itemsList;
    };

    let parseScope = extractedProductName;
    const bracketMatch = extractedProductName.match(/\(([^)]+,[^)]+)\)/);
    if (bracketMatch) parseScope = bracketMatch[1];

    listParser(parseScope).forEach(it => {
      const name = cleanItemName(it);
      const lowerName = name.toLowerCase();
      const hasVerb = /\b(hai|hain|hoga|hogi|jismein|ye\s+ek|kiya|diya)\b/.test(lowerName);
      const isGeneric = /\b(product\s+bid|service\s+bid|stationery|various\s+items)\b/.test(lowerName);

      if (name.length > 2 && !hasVerb && !isGeneric) {
        result.items.push({ name, qty: "See BOQ" });
      }
    });

    if (result.items.length > 0) {
      result.items[0].qty = extractedQty || "1 Unit";
    }
  }

  // Fallback fallbacks
  if (result.items.length === 0) {
    result.items.push({ name: "Bidding Items specified in bid scope", qty: "Refer to BOQ specs" });
  }
  if (result.eligibility.length === 0) {
    result.eligibility.push({ icon: "🟢", text: "MSME preference general conditions apply.", status: "success" });
    result.eligibility.push({ icon: "⚠️", text: "EMD and experience verification required.", status: "warning" });
  }
  if (result.priceStrategy.length === 0) {
    result.priceStrategy.push({ name: "Suggested Bidding Margin", val: "10% to 15% competitive pricing" });
    result.priceStrategy.push({ name: "Gem portal Transaction Charges", val: "Approx 2% of contract value" });
  }
  if (result.risks.length === 0) {
    result.risks.push("Review technical specification requirements before submission.");
  }
  if (!result.verdictReason) {
    result.verdictReason = "Bid conforms to standard Gem portal terms. Verify guidelines before proceeding.";
  }

  // EMD cleanups
  const emdLower = result.emd.toLowerCase();
  if (emdLower.includes("not required") || emdLower.includes("exempted") || emdLower.includes("no")) {
    result.emd = "Not Required / Exempted";
  } else {
    const numMatch = result.emd.match(/^[^.()]+/);
    if (numMatch) result.emd = numMatch[0].trim();
    if (result.emd.length > 50) result.emd = `${result.emd.substring(0, 50)}...`;
  }

  // ePBG cleanups
  const epbgLower = result.epbg.toLowerCase();
  if (epbgLower.includes("not required") || epbgLower.includes("exempted") || epbgLower.includes("no") || epbgLower === "na") {
    result.epbg = "Not Required / NA";
  }

  return result;
}

export default function ReportPage() {
  const [rawText, setRawText] = useState("");
  const [fileName, setFileName] = useState("");
  const [report, setReport] = useState<ParsedReport | null>(null);
  const [showRaw, setShowRaw] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedReport = sessionStorage.getItem("sahayak_latest_report") || "";
      const storedName = sessionStorage.getItem("sahayak_latest_report_name") || "Tender Document";
      setRawText(storedReport);
      setFileName(storedName);

      if (storedReport) {
        const parsed = parseRawReport(storedReport);
        setReport(parsed);
      }
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  if (!report) {
    return (
      <div style={{ background: "#f1f5f9", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
          <div style={{ background: "white", padding: "32px", borderRadius: "16px", textAlign: "center", maxWidth: "450px", border: "1px solid #e2e8f0" }}>
            <span style={{ fontSize: "2.5rem", display: "block", marginBottom: "16px" }}>⚠️</span>
            <h3 style={{ fontSize: "1.2rem", fontWeight: "800", color: "#0C2E4A", marginBottom: "10px" }}>No Active Report Found</h3>
            <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: "1.5", marginBottom: "20px" }}>
              Kripya tools section se tender PDF document upload karein taaki analysis report dekh sakein.
            </p>
            <a href="/tools/tender-summarizer" style={{ display: "inline-block", background: "#0E8A8A", color: "white", padding: "10px 20px", borderRadius: "8px", fontWeight: "700", fontSize: "0.85rem", textDecoration: "none" }}>
              Go back to Upload
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Win probability gauge math
  const needleRotation = -90 + report.probability * 1.8;
  const fillRotation = -45 + report.probability * 1.8;

  return (
    <div style={{ background: "#f1f5f9", minHeight: "100vh", paddingBottom: "60px" }}>

      <div style={{ maxWidth: "1000px", margin: "40px auto 0 auto", padding: "0 20px" }}>
        
        {/* Printable Card Wrapper */}
        <div className="printable-report" style={{ background: "#ffffff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "32px", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
          
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid #f1f5f9", paddingBottom: "20px", marginBottom: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <img src="/logo_symbol.png" alt="Sahayak AI Symbol" style={{ width: "44px", height: "44px", objectFit: "contain" }} />
              <div>
                <h1 style={{ fontSize: "1.25rem", fontWeight: "800", color: "#0d2137", margin: 0 }}>Sahayak AI</h1>
                <p style={{ fontSize: "0.7rem", color: "#64748b", margin: 0 }}>Smart Compliance & Tender Readiness Dashboard</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ fontSize: "0.75rem", background: "#e0f2fe", color: "#0369a1", padding: "6px 12px", borderRadius: "20px", fontWeight: "600" }}>
                Document: {fileName.length > 25 ? `${fileName.substring(0, 25)}...` : fileName}
              </span>
              <button onClick={handlePrint} className="no-print" style={{ background: "linear-gradient(135deg, #0E8A8A 0%, #1A5276 100%)", color: "white", border: "none", padding: "8px 18px", borderRadius: "10px", fontSize: "0.8rem", fontWeight: "700", cursor: "pointer" }}>
                🖨️ Print / Save PDF
              </button>
            </div>
          </div>

          {/* Highlights Row 1 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "16px" }}>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "16px" }}>
              <div style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: "600", textTransform: "uppercase", marginBottom: "4px" }}>📄 Bid Number</div>
              <div style={{ fontSize: "0.9rem", fontWeight: "700", color: "#0d2137", wordBreak: "break-all" }}>{report.bidNumber}</div>
            </div>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "16px" }}>
              <div style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: "600", textTransform: "uppercase", marginBottom: "4px" }}>🏛️ Ministry / Vibhag</div>
              <div style={{ fontSize: "0.9rem", fontWeight: "700", color: "#0d2137" }}>{report.ministry}</div>
            </div>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "16px" }}>
              <div style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: "600", textTransform: "uppercase", marginBottom: "4px" }}>💰 EMD Requirement</div>
              <div style={{ fontSize: "0.9rem", fontWeight: "700", color: "#0d2137" }}>{report.emd}</div>
            </div>
          </div>

          {/* Highlights Row 2 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "30px" }}>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "16px" }}>
              <div style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: "600", textTransform: "uppercase", marginBottom: "4px" }}>📍 Delivery Location (City)</div>
              <div style={{ fontSize: "0.9rem", fontWeight: "700", color: "#0d2137" }}>{report.location}</div>
            </div>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "16px" }}>
              <div style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: "600", textTransform: "uppercase", marginBottom: "4px" }}>✉️ Contact / Grievance</div>
              <div style={{ fontSize: "0.9rem", fontWeight: "700", color: "#0d2137", wordBreak: "break-all" }}>{report.contact}</div>
            </div>
            <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px", padding: "16px" }}>
              <div style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: "600", textTransform: "uppercase", marginBottom: "4px" }}>🛡️ ePBG Requirement</div>
              <div style={{ fontSize: "0.9rem", fontWeight: "700", color: "#0d2137" }}>{report.epbg}</div>
            </div>
          </div>

          {/* Verdict Banner Card */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", justifyContent: "space-between", marginBottom: "32px", padding: "20px 32px", background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: "16px" }}>
            <div style={{ display: "flex", gap: "32px", alignItems: "center", flexWrap: "wrap" }}>
              <div>
                <div style={{ fontSize: "0.68rem", color: "#64748b", fontWeight: "600", textTransform: "uppercase", marginBottom: "6px" }}>🎯 Final Verdict</div>
                <span style={{
                  display: "inline-block",
                  padding: "6px 16px",
                  borderRadius: "30px",
                  fontWeight: "800",
                  fontSize: "0.85rem",
                  textTransform: "uppercase",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  background: report.verdict === "yes" ? "#d1fae5" : report.verdict === "no" ? "#fee2e2" : "#fef3c7",
                  color: report.verdict === "yes" ? "#065f46" : report.verdict === "no" ? "#991b1b" : "#92400e",
                  border: report.verdict === "yes" ? "1.5px solid #a7f3d0" : report.verdict === "no" ? "1.5px solid #fecaca" : "1.5px solid #fde68a",
                }}>
                  {report.verdict === "yes" ? "Haan (Recommended)" : report.verdict === "no" ? "Nahi (Not Recommended)" : "Maybe (Check Specs)"}
                </span>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8rem", fontWeight: "700", color: "#475569" }}>
                  <span>MSE Preference:</span>
                  <span style={{ padding: "2px 8px", borderRadius: "6px", fontSize: "0.7rem", textTransform: "uppercase", background: "#e2e8f0", color: "#475569" }}>{report.msePreference}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8rem", fontWeight: "700", color: "#475569" }}>
                  <span>MII Preference:</span>
                  <span style={{ padding: "2px 8px", borderRadius: "6px", fontSize: "0.7rem", textTransform: "uppercase", background: "#e2e8f0", color: "#475569" }}>{report.miiPreference}</span>
                </div>
              </div>
            </div>
            
            {/* Win Probability Gauge */}
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <div style={{ position: "relative", width: "120px", height: "60px", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: "120px", height: "120px", borderRadius: "50%", border: "12px solid #e2e8f0", borderBottomColor: "transparent", borderLeftColor: "transparent", transform: "rotate(-45deg)", boxSizing: "border-box" }} />
                <div style={{ position: "absolute", top: 0, left: 0, width: "120px", height: "120px", borderRadius: "50%", border: "12px solid #0E8A8A", borderBottomColor: "transparent", borderLeftColor: "transparent", transform: `rotate(${fillRotation}deg)`, boxSizing: "border-box", transition: "transform 0.8s ease-out" }} />
                <div style={{ position: "absolute", bottom: 0, left: "50%", width: "10px", height: "10px", background: "#0d2137", borderRadius: "50%", transform: "translateX(-50%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: "50%", width: "4px", height: "42px", background: "#0d2137", transformOrigin: "bottom center", transform: `translateX(-50%) rotate(${needleRotation}deg)`, transition: "transform 0.8s ease-out" }} />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "1.25rem", fontWeight: "800", color: "#0d2137", lineHeight: 1 }}>{report.probability}%</div>
                <div style={{ fontSize: "0.68rem", marginTop: "4px", fontWeight: "700", color: "#0E8A8A", textTransform: "uppercase" }}>{report.probabilityLabel}</div>
              </div>
            </div>
          </div>

          {/* Section Grid 1: Bid Scope and Compliance */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "32px" }}>
            
            {/* Scope Table */}
            <div style={{ border: "1px solid #e2e8f0", borderRadius: "18px", padding: "24px" }}>
              <h2 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0d2137", marginBottom: "18px", borderBottom: "1.5px solid #f1f5f9", paddingBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                📋 Bid Scope & Items Required
              </h2>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.78rem" }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                    <th style={{ padding: "10px 8px", color: "#475569", fontWeight: "700" }}>Item Name & Category</th>
                    <th style={{ padding: "10px 8px", color: "#475569", fontWeight: "700", textAlign: "right" }}>Quantity / Scope</th>
                  </tr>
                </thead>
                <tbody>
                  {report.items.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: idx < report.items.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                      <td style={{ padding: "12px 8px", fontWeight: "600", color: "#1e293b" }}>{item.name}</td>
                      <td style={{ padding: "12px 8px", textAlign: "right", fontWeight: "700", color: "#0E8A8A" }}>{item.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Compliance Checklist */}
            <div style={{ border: "1px solid #e2e8f0", borderRadius: "18px", padding: "24px" }}>
              <h2 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0d2137", marginBottom: "18px", borderBottom: "1.5px solid #f1f5f9", paddingBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                ✅ Eligibility & Compliance Checklist
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {report.eligibility.map((elig, idx) => (
                  <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.8rem" }}>
                    <span style={{ fontSize: "1rem", lineHeight: 1.2 }}>{elig.icon}</span>
                    <div style={{ color: "#334155" }}>{elig.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section Grid 2: Pricing Strategy and Risks */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px", marginBottom: "32px" }}>
            
            {/* Price Suggestions */}
            <div style={{ border: "1px solid #e2e8f0", borderRadius: "18px", padding: "24px" }}>
              <h2 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0d2137", marginBottom: "18px", borderBottom: "1.5px solid #f1f5f9", paddingBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                💰 Margins & Pricing Strategy
              </h2>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.78rem" }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                    <th style={{ padding: "10px 8px", color: "#475569", fontWeight: "700" }}>Strategy Metric</th>
                    <th style={{ padding: "10px 8px", color: "#475569", fontWeight: "700", textAlign: "right" }}>Value / Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {report.priceStrategy.map((ps, idx) => (
                    <tr key={idx} style={{ borderBottom: idx < report.priceStrategy.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                      <td style={{ padding: "12px 8px", fontWeight: "500", color: "#475569" }}>{ps.name}</td>
                      <td style={{ padding: "12px 8px", textAlign: "right", fontWeight: "700", color: "#0d2137" }}>{ps.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Key Risks & Verdict Explanation */}
            <div style={{ border: "1px solid #e2e8f0", borderRadius: "18px", padding: "24px" }}>
              <h2 style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0d2137", marginBottom: "18px", borderBottom: "1.5px solid #f1f5f9", paddingBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                ⚠️ Key Risks & Final Recommendation
              </h2>
              <div style={{ marginBottom: "20px" }}>
                <h4 style={{ fontSize: "0.8rem", fontWeight: "700", color: "#0d2137", marginBottom: "8px" }}>Extracted Risks:</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.78rem", color: "#475569" }}>
                  {report.risks.map((risk, idx) => (
                    <div key={idx} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                      <span style={{ color: "#ef4444" }}>•</span>
                      <div>{risk}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: "#f8fafc", border: "1.5px dashed #cbd5e1", borderRadius: "12px", padding: "16px" }}>
                <h4 style={{ fontSize: "0.75rem", fontWeight: "700", color: "#0d2137", textTransform: "uppercase", marginBottom: "6px" }}>Verdict Analysis:</h4>
                <div style={{ fontSize: "0.75rem", color: "#475569", fontStyle: "italic", lineHeight: 1.4 }}>
                  {report.verdictReason}
                </div>
              </div>
            </div>
          </div>

          {/* Raw Report Dropdown */}
          <div style={{ border: "1px solid #e2e8f0", borderRadius: "18px", padding: "24px", marginBottom: "32px" }}>
            <h2 onClick={() => setShowRaw(!showRaw)} style={{ fontSize: "0.95rem", fontWeight: "800", color: "#0d2137", margin: 0, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span>🔍 Full Raw Analysis Report (Click to expand)</span>
              <span>{showRaw ? "▲" : "▼"}</span>
            </h2>
            {showRaw && (
              <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "16px", marginTop: "16px", fontSize: "0.75rem", color: "#475569", whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
                {rawText}
              </div>
            )}
          </div>

          {/* Simplified Extension CTA Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px", borderTop: "1px solid #f1f5f9", paddingTop: "30px", marginTop: "10px" }} className="no-print">
            <p style={{ fontSize: "0.85rem", color: "#475569", fontWeight: "600", margin: 0, textAlign: "center" }}>
              Analysis Complete! Want to automate bid notifications, PDF document analysis, and catalog listings?
            </p>
            
            <div style={{ background: "linear-gradient(135deg, #0e8a8a 0%, #075e5e 100%)", borderRadius: "12px", padding: "24px", color: "#ffffff", textAlign: "center", display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{ fontSize: "1.2rem", fontWeight: "800", margin: 0 }}>
                🎉 Demo Complete!
              </h3>
              
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.9)", margin: 0, lineHeight: "1.4" }}>
                Try other great features like this for free. Install the SahayakAI Chrome Extension to get started.
              </p>
              
              <div style={{ marginTop: "8px" }}>
                <a
                  href="https://chromewebstore.google.com/detail/gem-sahayak/baffilhpagolnhhfhaeaniaiagjgibcf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    background: "#ffffff",
                    color: "#0E8A8A",
                    padding: "10px 24px",
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

        </div>

      </div>

      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          body {
            background: white !important;
            padding: 0 !important;
          }
          .printable-report {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
