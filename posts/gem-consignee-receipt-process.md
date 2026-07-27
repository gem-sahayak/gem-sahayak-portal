---
title: "GeM Consignee Receipt Process: Physical Verification, PRC & CRAC (2026)"
summary: "GeM portal par order delivery ke baad Consignee Receipt and Acceptance Certificate (CRAC) aur Provisional Receipt Certificate (PRC) generate karne ka step-by-step process. Timelines aur physical receipt guidelines ki poori jaankari."
date: "2026-07-20"
updatedDate: "2026-07-20"
author: "SahayakAI Editorial Team"
category: "catalog-management"
layout: "post"
reviewer: "Senior Procurement Architect"
version: "1.0.0"
readingTime: "15 min read"
sources:
  - "Government e Marketplace (GeM) General Terms and Conditions (GTC) 2026"
  - "GeM Buyer & Consignee Manual for Goods Receipt"
  - "Ministry of Finance Procurement Guidelines for Consignment Verification"
cta: "SLA notification aur delivery tracking details directly pane ke liye SahayakAI Chrome Extension try karein."
keyTakeaways:
  - "PRC (Provisional Receipt Certificate) goods physical receipt ke 48 hours ke andar consignee ko portal par issue karna hota hai."
  - "CRAC (Consignee Receipt and Acceptance Certificate) quality inspection ke baad 10 days ke andar issue karna mandatory hai."
  - "Agar Consignee 10 days tak CRAC generate nahi karta, toh standard system rules ke mutabik Auto-CRAC trigger ho jata hai (kuch categories ko chhod kar)."
  - "Physical verification aur offline verify process me Quantity Check, Specifications Check aur Damage Analysis include hote hain."
faqs:
  - q: "PRC aur CRAC me kya difference hota hai?"
    a: "PRC (Provisional Receipt) physical delivery check karke 48 hours me generate hota hai aur yeh prove karta hai ki goods receive ho gaye hain. CRAC (Acceptance Certificate) detailed physical inspection ke baad 10 days ke andar issue hota hai jo quality aur specifications ki confirmation deta hai."
  - q: "Agar consignee 10 din tak CRAC generate na kare toh kya payment ruk jati hai?"
    a: "Nahi, GeM portal par 10 calendar days ke baad Auto-CRAC rule apply hota hai, jisse system automatically CRAC generate kar deta hai aur payment process shuru ho jata hai, agar koi dispute raise na kiya gaya ho."
relatedTools:
  - "SahayakAI Order Alert Chrome Extension"
  - "SahayakAI Delivery Tracker Tool"
relatedArticles:
  - "gem-crac-kaise-generate-hota-hai"
  - "gem-order-delivery-update-kaise-kare"
  - "gem-invoice-generate-kaise-kare"
related_entities:
  - "Consignee Receipt"
  - "Physical Verify"
  - "CRAC Generation"
  - "Inspection Report"
related_articles:
  - "gem-crac-kaise-generate-hota-hai"
  - "gem-order-delivery-update-kaise-kare"
  - "gem-invoice-generate-kaise-kare"
user_journey_stage: "Order"
intent: "Guide"
difficulty: "Intermediate"
---

<div class="hero-badge-container">
  <span class="badge category-badge">Order Fulfillment</span>
  <span class="badge verified-badge">✓ Verified 2026</span>
  <span class="badge time-badge">⏱️ 15 min read</span>
  <span class="badge difficulty-badge">📊 Difficulty: Intermediate</span>
  <span class="badge update-badge">📅 Updated: July 2026</span>
</div>

# gem consignee receipt process

<div class="hero-summary-box">
  <p><strong>GeM portal par order delivery ke baad Consignee Receipt and Acceptance Certificate (CRAC) aur Provisional Receipt Certificate (PRC) generate karne ka step-by-step process.</strong> Bahut se sellers ko lagta hai ki goods buyer ke gate tak pahunchana hi unka aakhri kaam hai, lekin sach yeh hai ki jab tak portal par digital confirmation (PRC aur CRAC) generate nahi hota, tab tak transaction official taur par complete nahi hoti. Is guide me hum samjhenge ki offline physical verification kaise hota hai aur digital validation timeline ko kaise maintain karein.</p>
</div>

---

## ⚡ Quick Answer: Consignee Receipt & Verification Summary

<div class="quick-answer-box">
  <h3>⚡ Quick Answer: Consignee Receipt & Verification Rules</h3>
  <table>
    <tr>
      <td><strong>Core Goal</strong></td>
      <td>Goods receive hone ke baad physical verification karna aur portal par digital acceptance (PRC & CRAC) complete karna.</td>
    </tr>
    <tr>
      <td><strong>SLA Timelines</strong></td>
      <td><strong>PRC:</strong> Within 48 hours of physical receipt.<br><strong>CRAC:</strong> Within 10 calendar days of physical receipt.</td>
    </tr>
    <tr>
      <td><strong>Key Steps</strong></td>
      <td>Physical Delivery -> Offline Inspection -> PRC Generation -> Quality & Quantity Check -> CRAC Generation -> Payment Processing.</td>
    </tr>
    <tr>
      <td><strong>Auto-CRAC Feature</strong></td>
      <td>Agar consignee 10 days ke baad bhi action nahi leta, toh system automatically Auto-CRAC generate kar deta hai (provided no incident is raised).</td>
    </tr>
    <tr>
      <td><strong>Sellers Recommendation</strong></td>
      <td>Delivery ke sath inspection report, invoice copy, aur offline challan strictly submit karein aur SahayakAI Chrome Extension se auto-reminders tracking set karein.</td>
    </tr>
  </table>
</div>

---

## ⚡ At a Glance Dashboard

| Parameter | Details & SLA Requirements |
|---|---|
| **PRC Timeline** | 48 Hours from physical delivery |
| **CRAC Timeline** | 10 Calendar Days from physical delivery |
| **Inspection Type** | Quantity, Quality, Specification Mismatch, Damage Check |
| **Action Initiated By** | Consignee (Buyer Representative) |
| **Auto-CRAC Policy** | Enabled (Auto-accepts after 10 days if pending) |
| **Rejection Flow** | Partial or Full rejection allowed with official reasons |
| **Next Stage** | Invoice Generation & Bill Submission |

---

## 📌 Table of Contents
1. [Introduction](#introduction)
2. [Who Should Read This Guide](#who-should-read-this-guide)
3. [Prerequisites for Consignee Receipt Process](#prerequisites-for-consignee-receipt-process)
4. [Required Documents Checklist](#required-documents-checklist)
5. [Eligibility Criteria & Inspection Matrix](#eligibility-criteria--inspection-matrix)
6. [Step-by-Step Guide: Consignee Receipt & Physical Verification](#step-by-step-guide-consignee-receipt--physical-verification)
7. [Decision Tree: Receipt & Acceptance Workflow](#decision-tree-receipt--acceptance-workflow)
8. [⚠️ Important Warning: SLA Violations & Delays](#️-important-warning-sla-violations--delays)
9. [Comparison Table: PRC vs CRAC](#comparison-table-prc-vs-crac)
10. [🤖 AI Search & RAG Target Summary](#-ai-search--rag-target-summary)
11. [Frequently Asked Questions (FAQs)](#frequently-asked-questions-faqs)
12. [Related Articles & Next Steps](#related-articles--next-steps)
13. [Your Next Knowledge Journey](#your-next-knowledge-journey)
14. [SahayakAI Tools CTA](#sahayakai-tools-cta)
15. [Official Reference Links](#official-reference-links)

---

## Introduction

Dosto, Government e-Marketplace (GeM Portal) par jab aap successfully material deliver kar dete hain, toh contract close karne aur payment receive karne ke liye **Consignee Receipt Process** sabse bada aur mahatvapurna milestone hota hai. Bahut se sellers ko lagta hai ki goods buyer ke gate tak pahunchana hi unka aakhri kaam hai, lekin sach yeh hai ki jab tak portal par digital confirmation (PRC aur CRAC) generate nahi hota, tab tak transaction official taur par complete nahi hoti.

Is process me do stages hote hain: pehla hai **Provisional Receipt Certificate (PRC)** jo physical receipt confirmation hota hai, aur doosra hai **Consignee Receipt and Acceptance Certificate (CRAC)** jo detailed technical inspection ke baad final acceptance confirm karta hai. Agar aap ek seller hain, toh is process ki deep knowledge hona behad zaroori hai taaki aapki payment stuck na ho aur agar aap buyer ya consignee hain, toh regulatory SLA rules ke compliance ke liye ise samajhna mandatory hai.

---

## Who Should Read This Guide

Yeh guide un sabhi professionals ke liye likhi gayi hai jo GeM portal par supply management handle karte hain:
* **GeM Registered Sellers & OEMs**: Jo apne delivered items ki payment jaldi release karwana chahte hain.
* **Government Consignees & Store Officers**: Jinhe incoming materials ka physical check aur online verification rules ke tahat audit trail maintain karna hota hai.
* **Logistics & Dispatch Teams**: Jo delivery challans aur goods handovers manage karte hain.
* **Accounts & Finance Officers**: Jo billing aur payment processing ke liye final approvals check karte hain.

---

## Prerequisites for Consignee Receipt Process

Process shuru karne se pehle niche di gayi requirements ko verify kar lein:
* **Seller Side**: GeM portal par shipment status "Dispatched" ya "Delivered" mark hona chahiye. Original invoice aur Delivery Challan physically goods ke sath attached hona chahiye.
* **Consignee Side**: Buyer dashboard ke credentials active hone chahiye aur primary link verify hona chahiye.
* **Offline Inspection Setup**: Physical measurement tools, testing equipments, aur contract technical specifications sheet ready honi chahiye.

---

## Required Documents Checklist

Consignee location par physical verify karte waqt aur online entry fill karte samay in documents ki zaroorat hoti hai:

- [ ] **GeM Contract Copy** (Specifications cross-check karne ke liye)
- [ ] **Seller Invoice Copy** (Quantity aur pricing matching ke liye)
- [ ] **Delivery Challan (DC)** (Physical receipt proof signature ke liye)
- [ ] **Inspection / Lab Test Report** (Specialized products ke liye, if applicable)
- [ ] **Authorized Signatory ID / Stamp** (Offline document clearance ke liye)

---

## Eligibility Criteria & Inspection Matrix

Physical receipt verify karte waqt consignee ko niche diye gaye parameters ko cross-check karna padta hai:

| Inspection Parameter | Verification Process (Offline) | GeM Portal Action Required | Acceptable Variance |
|---|---|---|---|
| **Quantity Check** | Physical counting of packages and individual items as per Invoice/Challan. | Enter received quantity while generating PRC & CRAC. | Zero tolerance (unless partial delivery allowed). |
| **Technical Specifications** | Cross-checking technical parameters (e.g., RAM size, dimensions, material grade) with the contract copy. | If mismatch, attach Inspection Report and select "Reject" option. | Strictly no deviation allowed from Bid Specs. |
| **Physical Integrity** | Inspecting for transit damage, broken seals, or leaking packaging. | Mention damaged count in PRC/CRAC. Reject damaged units. | Damaged items must be replaced by seller. |
| **Brand & Model Match** | Verifying the manufacturer label, brand, and exact model number. | Match with catalog details uploaded on GeM. | Must match exactly as per contract. |
| **Warranty & Certifications** | Checking OEM warranty cards, test certificates, and manuals. | Upload test certificates during CRAC (if mandatory). | All documentation must be valid. |

---

## Step-by-Step Guide: Consignee Receipt & Physical Verification

GeM consignee process ko smooth banane ke liye offline verify aur online updates ko is step-by-step structure me complete kiya jata hai:

### Step 1: Physical Consignment Handover & Challan Check
* **Why**: Yeh ensure karne ke liye ki physical packets received numbers matches original invoice.
* **Action**: Jab delivery vehicle consignee store par pahunchta hai, storekeeper package box labels aur count ko check karta hai. Delivery Challan par details verification stamp lagakar preliminary acknowledgment di jati hai.

### Step 2: Generation of Provisional Receipt Certificate (PRC)
* **Why**: Portal ko physical delivery update karne ke liye.
* **Action**: Consignee login karta hai, **Dashboard > Orders > Shipments** section me jata hai. Received consignment select karke **"Generate PRC"** button par click karta hai. Quantity aur initial packages ki verification daal kar ise save kiya jata hai.
* **Timeline**: Delivery aane ke **48 Hours** ke andar ise portal par update karna mandatory hai.

### Step 3: Detailed Offline Technical Inspection
* **Why**: Material quality standard aur specification matching confirm karne ke liye.
* **Action**: Consignee ki inspection committee (ya user department) boxes open karke technical specifications ko GeM Contract document ke parameters se match karti hai.
* **Pro Tip**: High-tech items ke case me physical working check karne ke liye installation test run kiya jata hai.

### Step 4: Quality & Inspection Report Upload
* **Why**: Transparency aur audit purposes ke liye.
* **Action**: Inspection check details ko ek official format sheet me fill karke committee sign-off karti hai. Is verification file ko scanner se portal ke attachment tab me upload kiya jata hai.

### Step 5: Final CRAC Generation (Acceptance / Rejection)
* **Why**: Contract closed-loop control aur billing clearance.
* **Action**: Final inspection pass hone ke baad, Consignee portal par **"Generate CRAC"** option par click karta hai.
  - **Accept**: Agar goods parameters pass hain, toh "Accepted" quantity feed karke update process karein.
  - **Reject**: Agar quality mismatch hai, toh "Rejected" quantity enter karein aur details/reason fill karke save karein.
* **Timeline**: PRC generation ke baad maximum **10 Calendar Days** ke andar final CRAC complete hona chahiye.

---

## Steps Flowchart



---

## Decision Tree: Receipt & Acceptance Workflow

```
Physical Consignment Reaches Consignee Location
       │
       ▼
Check Quantity & Preliminary Damages (Offline)
 ├── Damaged outer packages / Shortage noticed immediately?
 │      └── YES ► Note down on Delivery Challan ► Generate PRC with remarks
 └── Packaging looks good?
        │
        ▼
   Generate PRC (Within 48 Hours on Portal)
        │
        ▼
Detailed Physical & Quality Inspection (Offline)
 ├── Specifications Mismatch or Defective Goods?
 │      ├── YES (Major issues) ► Generate CRAC with REJECTED status ► Log Incident & Return Goods
 │      └── YES (Minor/Quantity Shortage) ► Generate CRAC with PARTIAL ACCEPTANCE
 └── All items match perfectly?
        │
        ▼
   Generate CRAC (Accepted Status within 10 Days)
        │
        ▼
Invoice Unlocked for Payment Processing
```

---

## ⚠️ Important Warning: SLA Violations & Delays

> [!WARNING]
> **Auto-CRAC aur Payment Timeline Rules (2026)**
> Bahut se Consignees CRAC generate karne me unnecessary delay karte hain. Dhyaan rakhein, GeM GTC ke mutabik 10-day limit ke baad portal automatically **Auto-CRAC** trigger kar deta hai. Lekin agar Consignee ne manually "Rejected" select kar diya ya incident open kar diya, toh Auto-CRAC block ho jata hai. Agar aapko physical delivery ke samay koi issues aate hain, toh delivery date ke 48 hours me hi buyer ko formally notify karein aur portal par correct delivery updates upload karein taaki buyer galat rejection na daal sake.

---

## Comparison Table: PRC vs CRAC

| Feature | Provisional Receipt Certificate (PRC) | Consignee Receipt and Acceptance Certificate (CRAC) |
|---|---|---|
| **Definition** | Material physically milne ka initial confirmation. | Material accept ya reject hone ka final certificate. |
| **Generation SLA** | Goods receive hone ke **48 Hours** ke andar. | Goods receive hone ke **10 Calendar Days** ke andar. |
| **Purpose** | Portal ko batana ki shipment consignee ke location par reach ho gaya hai. | Technical inspection aur quality analysis ka outcome register karna. |
| **Payment Status** | Payment process start nahi hota (PRC is only receipt). | Invoice approval aur billing unlock ho jati hai (CRAC is mandatory for payment). |
| **Rejection Option** | PRC stage par rejection option nahi hota (sirf remarks enter kar sakte hain). | CRAC stage par Consignee partial ya full rejection trigger kar sakta hai. |
| **Auto-Generation** | Yeh automatic generate nahi hota, manually generate karna hota hai. | 10 days ke baad system isko automatically generate (Auto-CRAC) kar deta hai. |

---

## 🤖 AI Search & RAG Target Summary

- **Primary Query**: GeM consignee receipt process, PRC & CRAC timeline, physical verification rules, offline check.
- **Key SLA Timelines**: PRC generation within 48 hours of delivery; CRAC generation within 10 calendar days.
- **Auto-CRAC Rules**: The system automatically generates CRAC after 10 days of PRC if the consignee remains inactive and no dispute is raised.
- **Physical Inspection Process**: Offline check involves verifying quantity, technical parameters against bid specifications, transit damage, and OEM certification.
- **Rejection Mechanism**: Consignee can issue full or partial rejection in CRAC. If rejected, an incident is logged, and the seller must replace or rectify the goods.
- **Required Documents**: Delivery Challan, Inspection Report (if applicable), Invoices, Test Certificates.
- **Key Terms**: Provisional Receipt Certificate (PRC), Consignee Receipt and Acceptance Certificate (CRAC), Auto-CRAC, Physical Verification, Offline Verify, Inspection Committee.

---

## Frequently Asked Questions (FAQs)

### Q1. PRC kya hai aur iska primary function kya hota hai?
PRC ka matlab hota hai Provisional Receipt Certificate. Jab delivery physical location par enter karti hai, tab consignee portal par PRC generate karke verify karta hai ki material count ke sath receive ho gaya hai. Yeh detailed technical inspection ka check nahi hota.

### Q2. CRAC kya hota hai aur payment ke liye yeh kyun zaroori hai?
CRAC (Consignee Receipt and Acceptance Certificate) final document hai jo buyer dashboard se generate hota hai. Jab tak CRAC generate nahi hoga, tab tak seller billing system par invoice claim submit nahi kar sakta. Ise physical quality test clear hone ke baad hi issue kiya jata hai.

### Q3. PRC aur CRAC generate karne ki official timelines kya hain?
GeM Guidelines ke mutabik, physical consignment reach hone ke 48 hours ke andar PRC generate hona chahiye, aur additional inspection ke baad, cumulative 10 Calendar Days ke andar CRAC generate karna mandatory hai.

### Q4. Auto-CRAC system kaise kaam karta hai aur iski condition kya hai?
Agar consignee goods physical delivery updates hone ke 10 days ke baad bhi koi step nahi leta, toh GeM system auto-generation logic trigger karta hai. System automatically online verification status "Accepted" karke CRAC process kar deta hai taaki vendor payment safe rahe.

### Q5. Kya Auto-CRAC block ho sakta hai?
Haan. Agar Consignee ne digital system par pending delivery ke related koi dispute raise kiya ho, ya Incident Management me case file kiya ho, toh Auto-CRAC timeline block ho jati hai jab tak resolution process update na ho.

### Q6. Partial CRAC kya hota hai aur seller ko isme kya milta hai?
Agar contract quantity me se 80% items specification clear kar chuke hain aur 20% defective hain, toh consignee partial CRAC generate karta hai. Isme 80% items accept ho jate hain aur unki partial bill payment shuru ho jati hai. Baki 20% rejected items ke replacement orders generate hote hain.

### Q7. Offline physical verification kiske through kiya jata hai?
Offline check hamesha Buyer Department ke physical verification officer, Storekeeper, ya internal technical inspection committee dwara check kiya jata hai. High-value orders ke liye Third Party Inspection Agency (TPIA) bhi engage ki ja sakti hai.

### Q8. Specification mismatch hone par consignee kya action leta hai?
Consignee portal par CRAC stage par "Reject" select karega. Iske baad use rejection explanation details feed karni hogi aur physical inspection report upload karni padegi. Iski digital copy seller ko instant warning ke roop me dashboard par visible hogi.

### Q9. Rejected goods ko seller wapas kaise leta hai?
Rejection notice milne ke baad seller ko specific GTC guidelines ke timeline ke andar un products ko consignee location se physical pickup karna hota hai aur free of cost correct products redeliver karne hote hain.

### Q10. Delivery Challan (DC) par physical signature kyun important hai?
Physical Delivery Challan offline proof hota hai. In case portal data sync issue ki wajah se crash ho jaye ya legal disputes generate hon, physical sign and seal verification proof banate hain jo arbitration panel accept karta hai.

### Q11. Services procurement ke case me CRAC kaise generate hota hai?
Service orders (jaise manpower supply ya logistics) me hourly logs ya weekly performance reports ke verification sheet ke basis par monthly CRAC (Service Acceptance Certificate) generate hota hai. Isme physical material delivery check nahi, balki SLA compliance checklist metrics inspect hote hain.

### Q12. Agar Buyer manual inspection me unnecessary delay kare toh seller kya kare?
Seller ko delivery updates sheet portal par upload karke time stamps lock karne chahiye. Agar delay excessive hai, toh system tickets submit karke ya ticket history raise karke dashboard se higher buyer authority ko report kiya ja sakta hai.

### Q13. Transit damage ke check ke liye rules kya hain?
Transit damage delivery location tak pahunchne se pehle seller ki responsibility hoti hai. Storekeeper initial damage check ke dauran material physically accept karne se mana kar sakta hai ya PRC remarks column me damages record kar sakta hai.

### Q14. Kya consignee dynamic testing ke liye 10 days se zyada extension le sakta hai?
Strictly nahi. GTC rules ke mutabik 10 calendar days hard deadline hai. Special laboratory inspection (jaise coal testing ya specialized software testing) me extended timelines GTC contract parameters specifications me explicitly standard custom document clauses ke sath add honi chahiye.

### Q15. GeM portal verification error "UIDAI Authentication Failure" ko kaise handle karein?
Consignee signature verification biometric ya OTP based validation UIDAI issues ki wajah se fail ho sakta hai. Aise cases me browser cache check karein ya system credentials login verify karke option badal kar digital token (DSC) use karein.

---

## Related Knowledge Articles

- [GeM CRAC Kaise Generate Hota Hai](/posts/gem-crac-kaise-generate-hota-hai) — Step-by-step CRAC generation tutorial.
- [GeM Order Delivery Update Kaise Kare](/posts/gem-order-delivery-update-kaise-kare) — How to update shipment details and delivery dates.
- [GeM Invoice Generate Kaise Kare](/posts/gem-invoice-generate-kaise-kare) — Generating tax invoices after successful delivery.

---

## Your Next Knowledge Journey

<div class="knowledge-journey-container">
  <div class="journey-step previous-step">
    <span class="journey-label">Previous Step</span>
    <strong><a href="/posts/gem-order-delivery-update-kaise-kare">Order Delivery Update</a></strong>
  </div>
  <div class="journey-arrow">↓</div>
  <div class="journey-step current-step">
    <span class="journey-label">Current Guide</span>
    <strong>Consignee Receipt Process</strong>
  </div>
  <div class="journey-arrow">↓</div>
  <div class="journey-step next-step">
    <span class="journey-label">Next Step</span>
    <strong><a href="/posts/gem-crac-kaise-generate-hota-hai">CRAC Generation Guide</a></strong>
  </div>
</div>

---

## SahayakAI Tools CTA

<div class="extension-cta-box">
  <h3>🧩 Delivery aur CRAC Dates Ko Auto-Track Karein!</h3>
  <p>GeM portal par orders dispatch karne ke baad physical delivery aur CRAC generation ki dates ko manually track karna mushkil hota hai. <strong>SahayakAI Delivery Tracker Tool</strong> aur Chrome Extension use karein jo automated email notifications aur desktop alerts bhejta hai taaki aapka payment cycle bilkul smooth chale.</p>
</div>

---

## Official Reference Links

- **Government e Marketplace Official Portal**: [gem.gov.in](https://gem.gov.in)
- **GeM General Terms and Conditions (GTC)**: [gem.gov.in/resources/pdf/GTC.pdf](https://gem.gov.in/resources/pdf/GTC.pdf)
- **GeM Help Desk & FAQ Support**: [gem.gov.in/help](https://gem.gov.in/help)

---

Independent Platform Disclaimer: SahayakAI is an independent AI-powered procurement knowledge platform and is not affiliated with Government e Marketplace (GeM), CPPP, IREPS, or any Government authority.
