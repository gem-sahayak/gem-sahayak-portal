"use client";

import React, { useState } from "react";

export default function RegistrationReadinessDemo() {
  const [currentStep, setCurrentStep] = useState(1);

  // Form State matching official GeM Primary Seller Registration Wizard
  const [formData, setFormData] = useState({
    // Step 1: Constitution
    constitution: "Proprietorship",
    legalName: "",
    commencementDate: "",

    // Step 2: Primary User & KMP
    userId: "",
    password: "",
    kmpName: "",
    aadhaarNumber: "",
    mobileNumber: "",
    emailAddress: "",

    // Step 3: PAN & Entity Identification
    panNumber: "",
    dobOrCoi: "",
    cinNumber: "",

    // Step 4: Tax, Office Address & ITR
    hasGst: true,
    gstin: "",
    nonGstReason: "",
    addressFlat: "",
    locality: "",
    state: "MADHYA PRADESH",
    pincode: "",
    city: "BHOPAL",
    itrAckAy2425: "",
    itrGrossIncome: "",

    // Step 5: MSME & Udyam
    isMsme: true,
    udyamNumber: "",
    nicCode: "",
    enterpriseTier: "Micro",
    isWomenOwned: false,
    isScSt: false,

    // Step 6: Bank & PFMS
    accountType: "Current",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    hasCancelledCheque: true,

    // Step 7: Caution Money & OEM Status
    turnoverTier: "less50l", // less50l, 50l_to_1cr, above1cr
    vendorRole: "Reseller" // Reseller vs OEM
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Helper validation checks
  const isPanValid = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNumber.toUpperCase());
  const isGstValid = !formData.hasGst || /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(formData.gstin.toUpperCase());
  const isAadhaarValid = /^[0-9]{12}$/.test(formData.aadhaarNumber.replace(/\s+/g, ""));
  const isMobileValid = /^[6-9][0-9]{9}$/.test(formData.mobileNumber);
  const isUdyamValid = !formData.isMsme || /^UDYAM-[A-Z]{2}-[0-9]{2}-[0-9]{7}$/i.test(formData.udyamNumber);

  // Score Calculation
  const calculateScore = () => {
    let score = 0;
    if (formData.legalName.trim().length > 2) score += 15;
    if (isPanValid) score += 15;
    if (isAadhaarValid && isMobileValid) score += 15;
    if (isGstValid) score += 15;
    if (formData.isMsme && isUdyamValid) score += 15;
    if (formData.accountNumber.length > 5 && formData.ifscCode.length === 11) score += 15;
    if (formData.vendorRole) score += 10;
    return Math.min(100, score);
  };

  const score = calculateScore();

  // Caution Money calculation
  const getCautionMoney = () => {
    if (formData.turnoverTier === "less50l") return "₹ 5,000";
    if (formData.turnoverTier === "50l_to_1cr") return "₹ 10,000";
    return "₹ 25,000";
  };

  const stepsList = [
    "1. Constitution",
    "2. User & KMP",
    "3. PAN Verification",
    "4. GST & Address",
    "5. Udyam MSME",
    "6. Bank & PFMS",
    "7. Caution & OEM"
  ];

  return (
    <div style={{ background: "#0F172A", border: "1px solid #1E293B", borderRadius: "16px", padding: "24px", color: "#F8FAFC" }}>
      {/* Top Header & Audit Badge */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(14, 138, 138, 0.15)", border: "1px solid #0E8A8A", padding: "4px 12px", borderRadius: "20px", fontSize: "12px", color: "#14B8A6", fontWeight: 600, marginBottom: "8px" }}>
            <span>🏛️ GeM Official Primary Registration Wizard Schema</span>
          </div>
          <h2 style={{ fontSize: "20px", fontWeight: 700, margin: 0, color: "#FFFFFF" }}>
            GeM Seller Profile Registration Readiness Assessor
          </h2>
        </div>
        <div style={{ background: "#1E293B", padding: "10px 16px", borderRadius: "10px", textAlign: "right" }}>
          <div style={{ fontSize: "11px", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.5px" }}>Live Audit Score</div>
          <div style={{ fontSize: "22px", fontWeight: 800, color: score >= 80 ? "#10B981" : score >= 50 ? "#F59E0B" : "#EF4444" }}>
            {score} / 100
          </div>
        </div>
      </div>

      {/* Progress Wizard Steps */}
      <div style={{ display: "flex", gap: "6px", overflowX: "auto", paddingBottom: "12px", marginBottom: "24px", borderBottom: "1px solid #1E293B" }}>
        {stepsList.map((st, idx) => {
          const stepNum = idx + 1;
          const isActive = currentStep === stepNum;
          const isDone = currentStep > stepNum;
          return (
            <button
              key={st}
              onClick={() => setCurrentStep(stepNum)}
              style={{
                flex: "1 0 auto",
                padding: "8px 12px",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                background: isActive ? "#0E8A8A" : isDone ? "rgba(14, 138, 138, 0.2)" : "#1E293B",
                color: isActive ? "#FFFFFF" : isDone ? "#14B8A6" : "#94A3B8",
                transition: "all 0.2s"
              }}
            >
              {st}
            </button>
          );
        })}
      </div>

      {/* Wizard Form Panels */}
      {!submitted ? (
        <div style={{ background: "#182234", borderRadius: "12px", padding: "20px", border: "1px solid #28354D" }}>
          
          {/* STEP 1: CONSTITUTION */}
          {currentStep === 1 && (
            <div>
              <h3 style={{ fontSize: "16px", color: "#38BDF8", marginBottom: "16px" }}>Step 1: Business Constitution & Legal Identity</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Business Constitution Type *</label>
                  <select
                    value={formData.constitution}
                    onChange={(e) => handleInputChange("constitution", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  >
                    <option value="Proprietorship">Proprietorship Firm</option>
                    <option value="Partnership">Partnership Firm</option>
                    <option value="LLP">Limited Liability Partnership (LLP)</option>
                    <option value="Private Limited">Private Limited Company</option>
                    <option value="Public Limited">Public Limited Company</option>
                    <option value="Trust/Society">Trust / Society</option>
                    <option value="SHG/FPO">Self-Help Group (SHG) / FPO</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Legal Entity Name (Exact as per PAN) *</label>
                  <input
                    type="text"
                    placeholder="e.g. Acme Enterprises Private Limited"
                    value={formData.legalName}
                    onChange={(e) => handleInputChange("legalName", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Date of Business Commencement</label>
                  <input
                    type="date"
                    value={formData.commencementDate}
                    onChange={(e) => handleInputChange("commencementDate", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: USER & KMP */}
          {currentStep === 2 && (
            <div>
              <h3 style={{ fontSize: "16px", color: "#38BDF8", marginBottom: "16px" }}>Step 2: Primary User Credentials & KMP Aadhaar</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Desired Primary User ID *</label>
                  <input
                    type="text"
                    placeholder="e.g. acme_seller_admin"
                    value={formData.userId}
                    onChange={(e) => handleInputChange("userId", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>KMP / Proprietor Full Name *</label>
                  <input
                    type="text"
                    placeholder="Name as printed on Aadhaar"
                    value={formData.kmpName}
                    onChange={(e) => handleInputChange("kmpName", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>KMP Aadhaar / Virtual ID (12 Digit) *</label>
                  <input
                    type="text"
                    maxLength={12}
                    placeholder="12 digit Aadhaar number"
                    value={formData.aadhaarNumber}
                    onChange={(e) => handleInputChange("aadhaarNumber", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: isAadhaarValid || !formData.aadhaarNumber ? "1px solid #334155" : "1px solid #EF4444", color: "#FFF" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Aadhaar-Linked Mobile Number *</label>
                  <input
                    type="text"
                    maxLength={10}
                    placeholder="10 digit mobile for OTP"
                    value={formData.mobileNumber}
                    onChange={(e) => handleInputChange("mobileNumber", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: isMobileValid || !formData.mobileNumber ? "1px solid #334155" : "1px solid #EF4444", color: "#FFF" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PAN VERIFICATION */}
          {currentStep === 3 && (
            <div>
              <h3 style={{ fontSize: "16px", color: "#38BDF8", marginBottom: "16px" }}>Step 3: Company PAN & Regulatory NSDL Verification</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Business / Individual PAN Number *</label>
                  <input
                    type="text"
                    maxLength={10}
                    placeholder="e.g. ABCDE1234F"
                    value={formData.panNumber.toUpperCase()}
                    onChange={(e) => handleInputChange("panNumber", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: isPanValid || !formData.panNumber ? "1px solid #334155" : "1px solid #EF4444", color: "#FFF", textTransform: "uppercase" }}
                  />
                  {!isPanValid && formData.panNumber && <span style={{ fontSize: "11px", color: "#F87171" }}>Invalid PAN format (5 Letters + 4 Digits + 1 Letter)</span>}
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>DOB (Proprietor) / Date of Incorporation</label>
                  <input
                    type="date"
                    value={formData.dobOrCoi}
                    onChange={(e) => handleInputChange("dobOrCoi", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  />
                </div>
                {formData.constitution.includes("Limited") && (
                  <div>
                    <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>CIN (Corporate Identification Number)</label>
                    <input
                      type="text"
                      placeholder="e.g. U72200MP2026PTC123456"
                      value={formData.cinNumber}
                      onChange={(e) => handleInputChange("cinNumber", e.target.value)}
                      style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                    />
                  </div>
                )}
              </div>
            </div>
          )}

          {/* STEP 4: GST & ADDRESS */}
          {currentStep === 4 && (
            <div>
              <h3 style={{ fontSize: "16px", color: "#38BDF8", marginBottom: "16px" }}>Step 4: GSTIN, Office Address & ITR Acknowledgments</h3>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "13px", color: "#CBD5E1" }}>
                  <input
                    type="checkbox"
                    checked={formData.hasGst}
                    onChange={(e) => handleInputChange("hasGst", e.target.checked)}
                  />
                  Firm holds active GSTIN (Uncheck if exempt under GST threshold)
                </label>
              </div>

              {formData.hasGst ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>15-Digit GSTIN *</label>
                    <input
                      type="text"
                      maxLength={15}
                      placeholder="23ABCDE1234F1Z5"
                      value={formData.gstin.toUpperCase()}
                      onChange={(e) => handleInputChange("gstin", e.target.value)}
                      style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: isGstValid || !formData.gstin ? "1px solid #334155" : "1px solid #EF4444", color: "#FFF", textTransform: "uppercase" }}
                    />
                  </div>
                </div>
              ) : (
                <div style={{ marginBottom: "16px" }}>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Non-GST Exemption Declaration</label>
                  <input
                    type="text"
                    placeholder="Annual Turnover below GST registration threshold limit"
                    value={formData.nonGstReason}
                    onChange={(e) => handleInputChange("nonGstReason", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  />
                </div>
              )}

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Flat / Door / Building No</label>
                  <input
                    type="text"
                    placeholder="Plot No 42, Floor 2"
                    value={formData.addressFlat}
                    onChange={(e) => handleInputChange("addressFlat", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>State</label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Pincode</label>
                  <input
                    type="text"
                    maxLength={6}
                    placeholder="462001"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange("pincode", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: MSME UDYAM */}
          {currentStep === 5 && (
            <div>
              <h3 style={{ fontSize: "16px", color: "#38BDF8", marginBottom: "16px" }}>Step 5: MSME Udyam Registration & EMD Preferences</h3>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "inline-flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "13px", color: "#CBD5E1" }}>
                  <input
                    type="checkbox"
                    checked={formData.isMsme}
                    onChange={(e) => handleInputChange("isMsme", e.target.checked)}
                  />
                  Hold valid Udyam MSME Certificate (Recommended for EMD Waivers & Price Preference)
                </label>
              </div>

              {formData.isMsme && (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginBottom: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Udyam Registration Number (URN) *</label>
                    <input
                      type="text"
                      placeholder="UDYAM-MP-01-0012345"
                      value={formData.udyamNumber.toUpperCase()}
                      onChange={(e) => handleInputChange("udyamNumber", e.target.value)}
                      style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: isUdyamValid || !formData.udyamNumber ? "1px solid #334155" : "1px solid #EF4444", color: "#FFF", textTransform: "uppercase" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>5-Digit NIC Code (Primary Activity)</label>
                    <input
                      type="text"
                      maxLength={5}
                      placeholder="e.g. 31001 (Furniture) / 62011 (IT)"
                      value={formData.nicCode}
                      onChange={(e) => handleInputChange("nicCode", e.target.value)}
                      style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Enterprise Category</label>
                    <select
                      value={formData.enterpriseTier}
                      onChange={(e) => handleInputChange("enterpriseTier", e.target.value)}
                      style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                    >
                      <option value="Micro">Micro Enterprise (Turnover &lt; ₹5 Cr)</option>
                      <option value="Small">Small Enterprise (Turnover ₹5 Cr - ₹50 Cr)</option>
                      <option value="Medium">Medium Enterprise (Turnover &gt; ₹50 Cr)</option>
                    </select>
                  </div>
                </div>
              )}

              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <label style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#CBD5E1" }}>
                  <input type="checkbox" checked={formData.isWomenOwned} onChange={(e) => handleInputChange("isWomenOwned", e.target.checked)} />
                  Women Entrepreneur (51%+ female equity for Womaniya 3% quota)
                </label>
                <label style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#CBD5E1" }}>
                  <input type="checkbox" checked={formData.isScSt} onChange={(e) => handleInputChange("isScSt", e.target.checked)} />
                  SC / ST Entrepreneur Category
                </label>
              </div>
            </div>
          )}

          {/* STEP 6: BANK & PFMS */}
          {currentStep === 6 && (
            <div>
              <h3 style={{ fontSize: "16px", color: "#38BDF8", marginBottom: "16px" }}>Step 6: Bank Account & PFMS Penny Drop Verification</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Account Type</label>
                  <select
                    value={formData.accountType}
                    onChange={(e) => handleInputChange("accountType", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  >
                    <option value="Current">Current Account (Recommended)</option>
                    <option value="Savings">Savings Account (Proprietorship only)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Account Holder Name (PAN Match) *</label>
                  <input
                    type="text"
                    placeholder="Must match PAN / Legal Entity Name"
                    value={formData.accountHolderName}
                    onChange={(e) => handleInputChange("accountHolderName", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Account Number *</label>
                  <input
                    type="text"
                    placeholder="Bank Account Number"
                    value={formData.accountNumber}
                    onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>IFSC Code *</label>
                  <input
                    type="text"
                    maxLength={11}
                    placeholder="e.g. SBIN0001234"
                    value={formData.ifscCode.toUpperCase()}
                    onChange={(e) => handleInputChange("ifscCode", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF", textTransform: "uppercase" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 7: CAUTION & OEM */}
          {currentStep === 7 && (
            <div>
              <h3 style={{ fontSize: "16px", color: "#38BDF8", marginBottom: "16px" }}>Step 7: Caution Money Deposit Tier & OEM Assessment Status</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Annual Business Turnover Tier *</label>
                  <select
                    value={formData.turnoverTier}
                    onChange={(e) => handleInputChange("turnoverTier", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  >
                    <option value="less50l">Turnover Less Than ₹ 50 Lakhs (Caution Money: ₹5,000)</option>
                    <option value="50l_to_1cr">Turnover Between ₹ 50 Lakhs &amp; ₹ 1 Crore (Caution Money: ₹10,000)</option>
                    <option value="above1cr">Turnover Above ₹ 1 Crore (Caution Money: ₹25,000)</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "13px", color: "#CBD5E1", marginBottom: "6px" }}>Vendor Seller Role *</label>
                  <select
                    value={formData.vendorRole}
                    onChange={(e) => handleInputChange("vendorRole", e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "#0F172A", border: "1px solid #334155", color: "#FFF" }}
                  >
                    <option value="Reseller">Reseller / Trader (Exempt from Vendor Assessment)</option>
                    <option value="OEM">Original Equipment Manufacturer (QCI Assessment Required)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px", paddingTop: "16px", borderTop: "1px solid #28354D" }}>
            <button
              disabled={currentStep === 1}
              onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
              style={{ padding: "10px 20px", borderRadius: "8px", border: "1px solid #334155", background: "#0F172A", color: "#CBD5E1", cursor: currentStep === 1 ? "not-allowed" : "pointer", opacity: currentStep === 1 ? 0.5 : 1 }}
            >
              ← Previous Step
            </button>
            
            {currentStep < 7 ? (
              <button
                onClick={() => setCurrentStep((prev) => Math.min(7, prev + 1))}
                style={{ padding: "10px 24px", borderRadius: "8px", border: "none", background: "#0E8A8A", color: "#FFF", fontWeight: 600, cursor: "pointer" }}
              >
                Next Step →
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                style={{ padding: "10px 24px", borderRadius: "8px", border: "none", background: "#10B981", color: "#FFF", fontWeight: 700, cursor: "pointer" }}
              >
                Generate Final Readiness Report 🎯
              </button>
            )}
          </div>
        </div>
      ) : (
        /* FINAL COMPREHENSIVE AUDIT REPORT PANEL */
        <div style={{ background: "#182234", borderRadius: "12px", padding: "24px", border: "1px solid #0E8A8A" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#10B981", margin: 0 }}>
              🎯 GeM Registration Audit &amp; Readiness Certificate Report
            </h3>
            <button
              onClick={() => setSubmitted(false)}
              style={{ padding: "6px 14px", borderRadius: "6px", border: "1px solid #334155", background: "#0F172A", color: "#94A3B8", fontSize: "12px", cursor: "pointer" }}
            >
              ✏️ Edit Profile Fields
            </button>
          </div>

          {/* Key Metric Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "24px" }}>
            <div style={{ background: "#0F172A", padding: "14px", borderRadius: "10px", border: "1px solid #1E293B" }}>
              <div style={{ fontSize: "12px", color: "#94A3B8" }}>Caution Money Required</div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: "#F59E0B" }}>{getCautionMoney()}</div>
            </div>
            <div style={{ background: "#0F172A", padding: "14px", borderRadius: "10px", border: "1px solid #1E293B" }}>
              <div style={{ fontSize: "12px", color: "#94A3B8" }}>EMD Waiver Status</div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: formData.isMsme ? "#10B981" : "#EF4444" }}>
                {formData.isMsme ? "100% Eligible (MSME/Udyam)" : "Not Exempt (Udyam Missing)"}
              </div>
            </div>
            <div style={{ background: "#0F172A", padding: "14px", borderRadius: "10px", border: "1px solid #1E293B" }}>
              <div style={{ fontSize: "12px", color: "#94A3B8" }}>Vendor Assessment</div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: formData.vendorRole === "Reseller" ? "#38BDF8" : "#F59E0B" }}>
                {formData.vendorRole === "Reseller" ? "Exempt (Reseller Mode)" : "QCI Assessment Mandatory"}
              </div>
            </div>
          </div>

          {/* Rejection Warning Box */}
          <div style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid #EF4444", borderRadius: "10px", padding: "16px", marginBottom: "24px" }}>
            <h4 style={{ fontSize: "14px", color: "#F87171", margin: "0 0 10px 0" }}>⚠️ Critical Rejection Risk Audit:</h4>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "13px", color: "#FCA5A5", lineHeight: "1.6" }}>
              {!isPanValid && <li>PAN Card Number invalid format — will cause NSDL validation failure.</li>}
              {!isGstValid && <li>GSTIN format incorrect — GSTN real-time API check will block tax profile.</li>}
              {formData.constitution.includes("Partnership") && <li>Partnership Firm: Registered Partnership Deed &amp; Firm PAN mandatory (Proprietor PAN not allowed).</li>}
              {formData.constitution.includes("Limited") && <li>Pvt Ltd: MCA CIN validation &amp; Board Resolution for KMP primary user mandatory.</li>}
              {formData.isMsme && !formData.nicCode && <li>5-Digit NIC code missing on Udyam declaration — will block tender category bidding exemptions.</li>}
              <li>Ensure Chartered Accountant Turnover Certificate includes valid 18-digit UDIN.</li>
            </ul>
          </div>

          {/* Sahayak Extension Callout Hook */}
          <div style={{ background: "linear-gradient(135deg, rgba(14, 138, 138, 0.2) 0%, rgba(56, 189, 248, 0.1) 100%)", border: "1px solid #0E8A8A", borderRadius: "12px", padding: "20px", textAlign: "center" }}>
            <h4 style={{ fontSize: "16px", color: "#FFF", margin: "0 0 8px 0" }}>🚀 Live Portal Onboarding Assistant</h4>
            <p style={{ fontSize: "13px", color: "#CBD5E1", margin: "0 0 16px 0", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
              GeM registration karte waqt errors se bachne aur real-time verification status track karne ke liye Sahayak Extension install karein.
            </p>
            <a
              href="https://chromewebstore.google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", padding: "12px 24px", background: "#0E8A8A", color: "#FFF", borderRadius: "8px", fontWeight: 700, textDecoration: "none" }}
            >
              Install Free Sahayak Chrome Extension →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
