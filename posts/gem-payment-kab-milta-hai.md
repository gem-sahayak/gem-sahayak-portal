---
title: "GeM Payment Kab Milta Hai? Timelines, GFR 2017 Rules & PFMS Mapping"
summary: "GeM portal par delivery complete hone ke baad payment kab aur kaise credit hoti hai? GFR Rule 172, CRAC timeline, PFMS mapping aur payment delay hone par 1% monthly interest charges ki poori jaankari."
date: "2026-07-20"
updatedDate: "2026-07-20"
author: "SahayakAI Editorial Team"
category: "catalog-management"
layout: "post"
reviewer: "Procurement Specialist"
version: "1.0.0"
readingTime: "15 min read"
sources:
  - "General Financial Rules (GFR) 2017 - Rule 172(iv)"
  - "GeM General Terms and Conditions (GTC) - Clause on Payment and CRAC Timelines"
  - "Public Financial Management System (PFMS) - Buyer Payment Guidelines"
cta: "GeM payment status aur billing alerts ko automated updates ke through check karne ke liye SahayakAI Chrome Extension try karein."
keyTakeaways:
  - "GFR 2017 Rule 172(iv) ke mutabik CRAC generate hone ke baad 10 working days ke andar payment clear hona zaroori hai."
  - "Delivery ke baad 10 days me manual CRAC na banne par, 11th day par system auto-CRAC generate karta hai."
  - "PFMS integration ke throw central government payments direct seller bank account me transfer hoti hain."
  - "Delayed payments par buyer department ko 1% per month ka late interest charges pay karna padta hai."
faqs:
  - q: "GeM portal par supply delivery ke baad payment kab milti hai?"
    a: "GFR Rule 172(iv) ke mutabik, Consignee Receipt and Acceptance Certificate (CRAC) generate hone ke 10 working days ke andar buyer ko payment release karni hoti hai."
  - q: "GFR 2017 Rule 172 kya kahta hai GeM payments ke baare me?"
    a: "GFR Rule 172(iv) explicitly mandate karta hai ki GeM par procurement ke liye CRAC generate hone ke 10 calendar/working days ke andar online payment clear ho jani chahiye."
  - q: "CRAC kya hai aur iske bina payment kyu nahi milti?"
    a: "CRAC (Consignee Receipt and Acceptance Certificate) ek confirmation hai ki delivered items accepted hain. Iske generate hone par hi buyer dashboard par bill status verification open hota hai."
  - q: "Agar consignee CRAC generate na kare, toh system kab auto-generate karta hai?"
    a: "Delivery ke baad agar consignee manually CRAC generate nahi karta, toh system delivery date ke 10 calendar days ke baad auto-CRAC generate kar deta hai (provided koi rejection report/consigned review raise na ho)."
  - q: "PFMS mapping kya hoti hai aur iska payment me kya role hai?"
    a: "PFMS (Public Financial Management System) ek central financial portal hai. GeM bills PFMS par digitally map hote hain, jisse Government Departments ke bills direct treasury/RBI ke throw process hote hain."
  - q: "PFMS-mapped payments me kitna time lagta hai?"
    a: "PFMS mapping ke baad token approval aur bank clearance me aamtaur par 2-3 working days ka time lagta hai. CRAC ke baad 10 days ke overall timeline me yeh included hota hai."
  - q: "GeM payment status dashboard par kaise check karein?"
    a: "Seller portal par login karein, 'Dashboard' par jayein, 'Bills' ya 'Shipments' section par click karke 'Payment Status' select karein, jahan PFMS token ID aur current status update hota hai."
  - q: "Agar buyer payment delay kare, toh kya late interest milta hai?"
    a: "Haan, Department of Expenditure ke rules ke mutabik, CRAC timeline ke baad delay hone par buyer department ko seller ko 1% per month ka interest charge pay karna padta hai, jo automatic portal calculate karta hai."
  - q: "Bank details change hone par GeM payment ruk sakti hai?"
    a: "Haan, bank account verification (PFMS validation) fail hone par payment block ho jati hai. Account details change karne par GeM dashboard par PFMS re-validation zaroori hai."
  - q: "Bill Generation ke baad invoice me error ho toh kya payment ruk jayegi?"
    a: "Bilkul, invoice amount, GST split, ya delivery location details me error hone par buyer bill return kar sakta hai, jisse payment pipeline halt ho jati hai."
  - q: "Direct Purchase, Bid, ya L1 order ke payment cycle me kya farq hai?"
    a: "Payment release timelines (10 days post-CRAC) sabhi ke liye same hain, lekin verification flows aur source of funds (GPA vs PFMS vs Offline payment) different ho sakte hain."
  - q: "GeM Pool Account (GPA) kya hota hai?"
    a: "GPA ek non-interest bearing bank account hai jo buyers open karte hain. Autonomous bodies ya PSU buyers orders clear karne se pehle isme funds reserve karte hain taaki payment time par ho sake."
  - q: "Central Government, State Government, aur PSUs ki payment timelines me kya difference hai?"
    a: "Central Departments PFMS se 10-day rule follow karte hain, State Governments apne state treasuries (jaise IFMS) se payment release karte hain, aur PSUs direct electronic payment ya GPA use karte hain."
  - q: "Kya buyer material reject karne ke baad payment hold kar sakta hai?"
    a: "Haan, agar buyer ne delivery reject kar di hai aur 'Rejection Report' generate ki hai, toh payment withhold ho jayegi github tak issue solve nahi ho jata."
  - q: "Payment status 'Token Generated' dikha raha hai, iska kya matlab hai?"
    a: "Iska matlab hai ki buyer department ne bill approve kar diya hai aur billing token treasury (PFMS) ko bhej diya hai. Payment 24-48 working hours me aapke bank account me credit ho jayegi."
relatedTools:
  - "SahayakAI Payment Status Tracker"
  - "SahayakAI CRAC Monitor Chrome Extension"
related_entities:
  - "PFMS"
  - "GeM Payment"
  - "GFR 2017"
  - "CRAC"
related_articles:
  - "gem-invoice-generate-kaise-kare"
  - "gem-payment-status-kaise-check-kare"
  - "gem-crac-kaise-generate-hota-hai"
user_journey_stage: "Payment"
intent: "Guide"
difficulty: "Beginner"
---

<div class="hero-badge-container">
  <span class="badge category-badge">Payment & Billing</span>
  <span class="badge verified-badge">✓ Verified 2026</span>
  <span class="badge time-badge">⏱️ 15 min read</span>
  <span class="badge difficulty-badge">📊 Difficulty: Beginner</span>
  <span class="badge update-badge">📅 Updated: July 2026</span>
</div>

# gem payment kab milta hai

<div class="hero-summary-box">
  <p><strong>GeM portal par order supply deliver karne ke baad sabse bada sawaal hota hai - Payment kab milegi?</strong> GFR 2017 ke rules aur PFMS integration ke mutabik payments direct aur digital hoti hain. Is complete guide me hum payment cycle timelines, GFR Rule 172, PFMS mapping aur buyer dwara payment delay karne par default interest rules ke baare me poori jaankari step-by-step Hinglish me samjhenge.</p>
</div>

---

## ⚡ Quick Answer: GeM Payment Cycle Rules

<div class="quick-answer-box">
  <h3>⚡ Quick Answer: GeM Payment Cycle Rules</h3>
  <table>
    <tr>
      <td><strong>Problem</strong></td>
      <td>GeM portal par delivery complete hone ke baad payment timelines aur rules ko lekar confusion hona.</td>
    </tr>
    <tr>
      <td><strong>GFR Rule & Timeline</strong></td>
      <td><strong>GFR 2017 Rule 172(iv)</strong> ke mutabik, Consignee Receipt and Acceptance Certificate (CRAC) generate hone ke <strong>10 working days</strong> ke andar payment release hona mandatory hai.</td>
    </tr>
    <tr>
      <td><strong>Default CRAC Timeline</strong></td>
      <td>Agar buyer delivery ke baad 10 calendar days tak manual CRAC generate nahi karta, toh system delivery validation ke baad auto-CRAC generate kar deta hai.</td>
    </tr>
    <tr>
      <td><strong>Delay Penalty</strong></td>
      <td>Agar buyer CRAC ke 10 days baad bhi payment delay karta hai, toh <strong>1% per month (12% per annum)</strong> ka late payment interest default charge apply hota hai.</td>
    </tr>
    <tr>
      <td><strong>Payment Source</strong></td>
      <td>Central Governments ke liye PFMS (Public Financial Management System), States ke liye IFMS/Treasury, aur PSUs ke liye GPA (GeM Pool Account) use hota hai.</td>
    </tr>
    <tr>
      <td><strong>Recommended Tool</strong></td>
      <td>Apne shipments, bill submission status aur payment alerts ko central dashboard par live monitor karne ke liye use karein <strong>SahayakAI Payment Tracker Extension</strong>.</td>
    </tr>
  </table>
</div>

---

## ⚡ At a Glance Dashboard

| Parameter | Details & Rules |
|---|---|
| **Governing Rule** | General Financial Rules (GFR) 2017, Rule 172(iv) |
| **Mandatory Timeline** | Within 10 Working Days from CRAC generation date |
| **Auto-CRAC Trigger** | 10 Calendar Days post-delivery (if buyer is inactive) |
| **Default Interest Rate** | 1% per month on delayed payment (12% per annum) |
| **System Mapping** | PFMS (Public Financial Management System) / GPA / IFMS |
| **Payment Status Key Indicators** | Token Generated, PFMS Approved, Bill Approved |
| **Common Delay Causes** | Bank validation mismatch, wrong invoice details, missing CRAC |

---

## 📌 Table of Contents
1. [Introduction](#introduction)
2. [Who Should Read This Guide](#who-should-read-this-guide)
3. [Prerequisites for Payment Release](#prerequisites-for-payment-release)
4. [Required Documents Checklist for Billing](#required-documents-checklist-for-billing)
5. [Eligibility Criteria & Threshold Table](#eligibility-criteria--threshold-table)
6. [Step-by-Step Guide: GeM Payment Process & Timelines](#step-by-step-guide-gem-payment-process--timelines)
7. [Decision Tree: GeM Payment Cycle Workflow](#decision-tree-gem-payment-cycle-workflow)
8. [⚠️ Important Warning & Late Payment Penalties](#️-important-warning--late-payment-penalties)
9. [Comparison Table: GeM Online Payment System vs Offline Manual Billing](#comparison-table-gem-online-payment-system-vs-offline-manual-billing)
10. [🤖 AI Search & RAG Target Summary](#-ai-search--rag-target-summary)
11. [Frequently Asked Questions (FAQs)](#frequently-asked-questions-faqs)
12. [Related Knowledge Articles](#related-knowledge-articles)
13. [Your Next Knowledge Journey](#your-next-knowledge-journey)
14. [SahayakAI Tools CTA](#sahayakai-tools-cta)
15. [Official Reference Links](#official-reference-links)

---

## Introduction

Dosto, agar aap Government e-Marketplace (GeM Portal) par sell kar rahe hain ya naye seller bane hain, toh aapke mind me ek common query zaroor aati hogi: **"GeM Payment kab milta hai?"** Bahut se sellers ko dar rehta hai ki sarkar ke sath business karne par payment fass toh nahi jayegi.

Aisa bilkul nahi hai! Government of India ne procurement process ko fast aur transparent banane ke liye **General Financial Rules (GFR) 2017** me strict rules banaye hain. GeM portal par payment cycle ko automatic track kiya jata hai jo ki **PFMS (Public Financial Management System)**, **IFMS (State Treasuries)** aur **GPA (GeM Pool Account)** se link hai.

Is guide me hum simple terms me samjhenge ki delivery se lekar payment credit hone tak kya process hai aur late payments par buyer par kya action hota hai.

---

## Who Should Read This Guide

Yeh guide un sabhi logon ke liye behad important hai jo GeM portal par transaction cycles ko handle karte hain:
- **Active GeM Sellers**: Jo payments track karne aur delay issues se bachna chahte hain.
- **MSMEs & Small Scale Enterprises**: Jinhe cashflow management ke liye exact credit timelines ka pata hona chahiye.
- **Finance and Accounts Teams**: Jo government invoices aur PFMS tracking handle karte hain.
- **New Registrants**: Jo GeM par contract delivery ke billing regulations ko start se samajhna chahte hain.

---

## Prerequisites for Payment Release

Payment process shuru hone se pehle niche di gayi prerequisites satisfy hona zaroori hai:
* **Verified Bank Account**: Bank details GeM dashboard par PFMS verified honi chahiye.
* **Delivered Goods/Services**: Shipment successfully delivery location par deliver ho chuki ho.
* **Digitally Signed Invoice**: Invoice copy seller portal par generate ho chuki ho.
* **No Active Incidents**: Seller ya buyer ke transaction par kisi dispute ka hold na ho.

---

## Required Documents Checklist for Billing

Bill submission aur payment verification ke dauran in documents ki zaroorat hoti hai:

- [ ] **Consignee Receipt and Acceptance Certificate (CRAC)** (either manual or auto-generated)
- [ ] **Digitally Signed GeM Invoice** (with GST/HSN split details)
- [ ] **Proof of Delivery (POD)** (Courier receipt, transport LR copy, or physical receiving copy signed by the buyer)
- [ ] **Original Bill of Lading / Challan** (delivery proof checking ke liye)
- [ ] **E-Way Bill** (if goods value exceeds ₹50,000 or regional limits)

---

## Eligibility Criteria & Threshold Table

GeM portal par orders value aur buyer type ke hisab se alag-alag payment systems integrate kiye gaye hain:

| Buyer Category | Primary Payment Mode | Authorized Bank / System | Mandatory SLA Timeline | Late Payment Penalty Applicable |
|---|---|---|---|---|
| **Central Ministries & Departments** | PFMS (Public Financial Management System) | Central Treasury / RBI | 10 Working Days post-CRAC | Yes, 1% per month |
| **State Government Departments** | IFMS (Integrated Financial Management System) | State Treasury / SBI | 10-15 Working Days post-CRAC | Yes, subject to state GFR adaptation |
| **PSUs, Railways & Defense** | GPA (GeM Pool Account) or Direct Electronic Transfer | Associated PSU Escrow Bank | 10 Working Days post-CRAC | Yes, 1% per month |
| **Autonomous Bodies & Municipalities** | GPA (GeM Pool Account) | Direct Bank Integration | 10 Working Days post-CRAC | Yes, 1% per month |

---

## Step-by-Step Guide: GeM Payment Process & Timelines

GeM portal par order process hone se lekar bank account me paisa aane tak ka step-by-step process niche diya gaya hai:

### Step 1: Shipment Deliver Karein aur Invoice Generate Karein
* **Why**: Billing process start karne ke liye.
* **Action**: Goods ko consignee location par safely deliver karein. GeM portal par login karke **Shipment** tab me dispatch details upload karein aur digitally signed tax invoice generate karein.

### Step 2: Inspection and Receipt Stage (10 Days Window)
* **Why**: Buyer material quality aur quantity verify karta hai.
* **Action**: Delivery confirmation milne par consignee ke paas inspection ke liye 10 days ka time hota hai. Goods inspect hone ke baad buyer **CRAC (Consignee Receipt and Acceptance Certificate)** generate karein.

### Step 3: Auto-CRAC Generation (SLA Compliance)
* **Why**: Deliberate delay se seller ko bachane ke liye.
* **Action**: Agar buyer delivery ke baad 10 days tak manually CRAC generate nahi karta, toh system delivery validation ke baad 11th day par **Auto-CRAC** trigger kar deta hai.

### Step 4: Bill Submission to DDO/Payment Authority
* **Why**: Finance department verification ke liye.
* **Action**: CRAC generate hote hi system invoice aur CRAC documents ko automatically buyer department ke **Drawing and Disbursing Officer (DDO)** ko forward kar deta hai.

### Step 5: PFMS Integration & Token Generation
* **Why**: Treasury release verification.
* **Action**: Central ministries ke cases me, DDO bill ko PFMS dashboard par process karta hai. PFMS system seller ke PAN aur bank details validate karke ek specific **Billing Token** generate karta hai.

### Step 6: Treasury Release & Bank Account Credit
* **Why**: Fund transfer complete karne ke liye.
* **Action**: Token generate hone ke baad 24-48 working hours me treasury amount release kar deti hai aur direct bank transfer (DBT) ke throw paisa seller ke registered account me aa jata hai.

---

## Steps Flowchart



---

## Decision Tree: GeM Payment Cycle Workflow

```
Goods Delivered & Invoice Submitted
       │
       ▼
Buyer Inspections (Quality check)
 ├── Issue Detected? 
 │      └── YES ► Buyer generates Rejection Report ► Payment Suspended (Seller must replace goods)
 └── Goods OK?
        │
        ▼
   CRAC Generation Stage (Consignee Receipt and Acceptance Certificate)
     ├── Manual CRAC generated by buyer within 10 days
     └── Auto-CRAC triggered by portal on 11th day (No action from buyer)
            │
            ▼
       Bill verification by DDO / Finance Section
            │
            ▼
       Payment Gateway / Integration Mapping
         ├─ Case A: PFMS Mode (Central Govt) ──► PFMS Token Issued ──► Bank Credit
         ├─ Case B: GPA Mode (PSUs/Autonomous) ─► Fund Reservation ──► Direct Transfer
         └─ Case C: IFMS Mode (State Govts) ───► State Treasury ─────► Bank Credit
```

---

## ⚠️ Important Warning & Late Payment Penalties

> [!WARNING]
> **PFMS Validation Fail Hone Ka Khatra!**
> GeM portal par profile update karte waqt check karein ki aapka corporate name, PAN aur bank account details exact match karti hain ya nahi. PFMS system payment release karne se pehle cross-verification karta hai. Agar wahan name mismatch (jaise 'A B Enterprises' vs 'AB Enterprises') hota hai, toh payment token status permanently \"PFMS Validation Failed\" show karega aur aapki payment tab tak hold par rahegi agar aap dashboard se bank validation request approve nahi karwate.

---

## Comparison Table: GeM Online Payment System vs Offline Manual Billing

| Feature | GeM Online Payment (PFMS/GPA) | Traditional Offline Govt Billing |
|---|---|---|
| **Timelines** | Strictly bound by GFR (10 working days post-CRAC) | Unpredictable, dependent on manual file movements |
| **Inspection Proof** | Digital CRAC (Consignee Receipt & Acceptance Certificate) | Physical Inspection Note (I-Note) or receiving receipt |
| **Delayed Payment Action** | Automated late interest charge calculation (1% per month) | No automated system interest, requires legal/arbitration path |
| **Validation Method** | Direct digital validation of PAN/IFSC via PFMS/Bank Integration | Manual bank account check on printed vouchers |
| **Transparency & Tracking** | Real-time payment stage tracking on dashboard | Personal follow-ups at the treasury/DDO office required |

---

## 🤖 AI Search & RAG Target Summary

- **Primary Query**: GeM payment kab milta hai (When do we get payment on GeM portal)
- **GFR 2017 Ruling**: Rule 172(iv) specifies payment must be released within 10 working days from the date of CRAC generation.
- **CRAC Timeline**: Consignee gets 10 days to check the goods. Auto-CRAC is generated on the 11th day if the buyer remains inactive.
- **Payment Delay Interest**: In case of delay, buyers are charged interest at a rate of 1% per month (12% per year) for the delay period.
- **Key Payment Systems**: Public Financial Management System (PFMS), Integrated Financial Management System (IFMS), and GeM Pool Account (GPA).
- **Core Search Keywords**: gem payment cycle, gem payment timeline, gfr rule 172 gem, pfms mapping status gem, gem auto crac rules, delayed payment interest gem.

---

## Frequently Asked Questions (FAQs)

### Q1. GeM portal par supply delivery ke baad payment kab milti hai?
GFR Rule 172(iv) ke mutabik, Consignee Receipt and Acceptance Certificate (CRAC) generate hone ke 10 working days ke andar buyer ko payment release karni hoti hai.

### Q2. GFR 2017 Rule 172 kya kahta hai GeM payments ke baare me?
GFR Rule 172(iv) explicitly mandate karta hai ki GeM par procurement ke liye CRAC generate hone ke 10 calendar/working days ke andar online payment clear ho jani chahiye.

### Q3. CRAC kya hai aur iske bina payment kyu nahi milti?
CRAC (Consignee Receipt and Acceptance Certificate) ek confirmation hai ki delivered items accepted hain. Iske generate hone par hi buyer dashboard par bill status verification open hota hai.

### Q4. Agar consignee CRAC generate na kare, toh system kab auto-generate karta hai?
Delivery ke baad agar consignee manually CRAC generate nahi karta, toh system delivery date ke 10 calendar days ke baad auto-CRAC generate kar deta hai (provided koi rejection report/consigned review raise na ho).

### Q5. PFMS mapping kya hoti hai aur iska payment me kya role hai?
PFMS (Public Financial Management System) ek central financial portal hai. GeM bills PFMS par digitally map hote hain, jisse Government Departments ke bills direct treasury/RBI ke throw process hote hain.

### Q6. PFMS-mapped payments me kitna time lagta hai?
PFMS mapping ke baad token approval aur bank clearance me aamtaur par 2-3 working days ka time lagta hai. CRAC ke baad 10 days ke overall timeline me yeh included hota hai.

### Q7. GeM payment status dashboard par kaise check karein?
Seller portal par login karein, 'Dashboard' par jayein, 'Bills' ya 'Shipments' section par click karke 'Payment Status' select karein, jahan PFMS token ID aur current status update hota hai.

### Q8. Agar buyer payment delay kare, toh kya late interest milta hai?
Haan, Department of Expenditure ke rules ke mutabik, CRAC timeline ke baad delay hone par buyer department ko seller ko 1% per month ka interest charge pay karna padta hai, jo automatic portal calculate karta hai.

### Q9. Bank details change hone par GeM payment ruk sakti hai?
Haan, bank account verification (PFMS validation) fail hone par payment block ho jati hai. Account details change karne par GeM dashboard par PFMS re-validation zaroori hai.

### Q10. Bill Generation ke baad invoice me error ho toh kya payment ruk jayegi?
Bilkul, invoice amount, GST split, ya delivery location details me error hone par buyer bill return kar sakta hai, jisse payment pipeline halt ho jati hai.

### Q11. Direct Purchase, Bid, ya L1 order ke payment cycle me kya farq hai?
Payment release timelines (10 days post-CRAC) sabhi ke liye same hain, lekin verification flows aur source of funds (GPA vs PFMS vs Offline payment) different ho sakte hain.

### Q12. GeM Pool Account (GPA) kya hota hai?
GPA ek non-interest bearing bank account hai jo buyers open karte hain. Autonomous bodies ya PSU buyers orders clear karne se pehle isme funds reserve karte hain taaki payment time par ho sake.

### Q13. Central Government, State Government, aur PSUs ki payment timelines me kya difference hai?
Central Departments PFMS se 10-day rule follow karte hain, State Governments apne state treasuries (jaise IFMS) se payment release karte hain, aur PSUs direct electronic payment ya GPA use karte hain.

### Q14. Kya buyer material reject karne ke baad payment hold kar sakta hai?
Haan, agar buyer ne delivery reject kar di hai aur 'Rejection Report' generate ki hai, toh payment withhold ho jayegi jab tak issue solve nahi ho jata.

### Q15. Payment status 'Token Generated' dikha raha hai, iska kya matlab hai?
Iska matlab hai ki buyer department ne bill approve kar diya hai aur billing token treasury (PFMS) ko bhej diya hai. Payment 24-48 working hours me aapke bank account me credit ho jayegi.

---

## Related Knowledge Articles

- [GeM Invoice Generate Kaise Kare? Step-by-Step Process](/posts/gem-invoice-generate-kaise-kare) — Invoice creation and verification guide.
- [GeM Payment Status Kaise Check Kare? Live Tracking Guide](/posts/gem-payment-status-kaise-check-kare) — Status checks and PFMS token verification.
- [GeM CRAC Kaise Generate Hota Hai? System Rules & Timelines](/posts/gem-crac-kaise-generate-hota-hai) — Inspection terms and auto-CRAC guidelines.

---

## Your Next Knowledge Journey

<div class="knowledge-journey-container">
  <div class="journey-step previous-step">
    <span class="journey-label">Previous Step</span>
    <strong><a href="/posts/gem-invoice-generate-kaise-kare">Invoice Generate Kaise Kare</a></strong>
  </div>
  <div class="journey-arrow">↓</div>
  <div class="journey-step current-step">
    <span class="journey-label">Current Guide</span>
    <strong>GeM Payment Kab Milta Hai</strong>
  </div>
  <div class="journey-arrow">↓</div>
  <div class="journey-step next-step">
    <span class="journey-label">Next Step</span>
    <strong><a href="/posts/gem-payment-status-kaise-check-kare">Payment Status Check Kare</a></strong>
  </div>
</div>

---

## SahayakAI Tools CTA

<div class="extension-cta-box">
  <h3>🧩 Payment Delay Se Mukaabla Karein!</h3>
  <p>GeM portal par apne active bills, PFMS tokens, aur payment clearance timelines ko dynamically track karne ke liye humare free <strong>SahayakAI Payment Status Tracker</strong> ka upayog karein. Yeh extension aapko automated alerts bhejkar payment status track karne me help karega.</p>
</div>

---

## Official Reference Links

- **Government e Marketplace (GeM) Official Portal**: [gem.gov.in](https://gem.gov.in)
- **Public Financial Management System (PFMS) Portal**: [pfms.nic.in](https://pfms.nic.in)
- **Ministry of Finance GFR 2017 Guidelines**: [doe.gov.in](https://doe.gov.in)

---

Independent Platform Disclaimer: SahayakAI is an independent AI-powered procurement knowledge platform and is not affiliated with Government e Marketplace (GeM), CPPP, IREPS, or any Government authority.
