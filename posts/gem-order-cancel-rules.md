---
title: "GeM Order Cancellation Rules: Delay Penalties & Blacklisting Risk Guidelines"
summary: "GeM portal par order cancellation rules, delivery delay parameters, Liquidated Damages (LD) penalty rates, aur account blacklisting ke severe risk se bachne ki complete guide Hinglish mein."
date: "2026-07-20"
updatedDate: "2026-07-20"
author: "SahayakAI Editorial Team"
category: "catalog-management"
layout: "PostLayout"
reviewer: "Senior Procurement Consultant"
version: "1.0.0"
readingTime: "12 mins"
sources:
  - "Government e Marketplace General Terms and Conditions (GTC)"
  - "GeM Incident Management Policy"
  - "General Financial Rules (GFR) 2017 Guidelines"
cta: "Check Your Delivery Timeline and Penalty Risk"
keyTakeaways:
  - "Delivery delay hone par 0.5% per week (up to 10% max) ki Liquidated Damages (LD) penalty lagti hai."
  - "Order cancel hone ke baad automatic incident create ho jata hai, jisse seller suspension ya blacklisting ka risk hota hai."
  - "Sellers ko Delivery Period (DP) Extension request time par submit karni chahiye taaki penalty se bacha ja sake."
faqs:
  - q: "GeM par seller order cancel kar sakta hai kya?"
    a: "Nahi, seller direct order cancel nahi kar sakta. Agar delivery nahi de pa rahe hain, toh buyer incident ya cancellation initiate karega jiske baad seller par severe penalty aur suspension lag sakta hai."
  - q: "What is Liquidated Damages (LD) in GeM?"
    a: "Agar delivery date miss hoti hai, toh delay period ke liye buyer 0.5% per week of order value ke rate se penalty deduct kar sakta hai, jo contract value ke maximum 10% tak ho sakti hai."
relatedTools:
  - "gem-ld-penalty-calculator"
  - "gem-dp-extension-draft-helper"
related_articles: ['gem-order-accept-kaise-kare', 'gem-incident-management-show-cause-reply', 'common-errors']
related_entities: ['Cancellation Fee', 'Delivery Delay', 'LDT Penalty', 'Incident Appeal']
user_journey_stage: 'Order'
intent: 'Guide'
difficulty: 'Advanced'
---

# GeM Order Cancellation Rules: Delay Penalties, DP Extension & Blacklisting Guidelines

> **Quick Answer:**
> GeM portal par order receive hone ke baad agar aap delivery timelines (**Delivery Period**) miss karte hain, toh buyer ke paas contract cancel karne ka right hota hai. Is cancellation ke severe impacts hote hain:
> 1. **Liquidated Damages (LD):** Delivery delay ke liye **0.5% per week** (maximum **10%** of the delayed quantity value) ki penalty lagti hai.
> 2. **Order Cancellation & ePBG Forfeiture:** Agar delay seller ki galti ki wajah se hai, toh order cancel ho sakta hai aur aapka **Performance Bank Guarantee (ePBG)** forfeit ho sakta hai.
> 3. **Blacklisting Risk:** Order cancel hote hi automatic **Incident** raise hota hai, jisse seller account **10 din se lekar 2 saal** ke liye suspend ya blacklist ho sakta hai.
> Isse bachne ke liye, delivery date se pehle **Delivery Period (DP) Extension** apply karein aur solid justifications ke saath support karein.

---

## At a Glance Dashboard Table

| Parameter / Rules | Details | Key Action for Sellers |
| :--- | :--- | :--- |
| **Standard Delivery Delay Penalty** | 0.5% per week (or part thereof) of delayed quantity value. | Track delivery timeline on GeM dashboard daily. |
| **Maximum Penalty Cap (LD)** | Maximum 10% of the total contract / order value. | Avoid long delays; communicate with buyer proactively. |
| **DP Extension Request Window** | Must be submitted online **before** the original delivery period expires. | Request via portal under Order Details tab. |
| **ePBG Forfeiture Condition** | Triggered upon termination of contract due to seller default. | Fulfill performance obligations to protect security deposit. |
| **Incident Status on Cancellation** | Auto-creation of deviation on GeM portal. | Submit reply to SCN within 5 calendar days. |
| **Debarment / Suspension Period** | 10 days to 2 years based on severity level of deviation. | Appeal against suspension within 15 days of order. |

---



## Introduction

Government e Marketplace (GeM) par orders fulfill karna har seller ke liye ek rewarding business milestone hai, lekin yahan rules bohot strict hain. GeM portal strictly **time-bound delivery** aur contractual agreements par run karta hai. Agar aap kisi order ko deliver karne mein delay karte hain ya deliver nahi kar paate hain, toh transaction process automatic warning systems ko trigger kar deta hai. 

Government organizations and public undertakings ke guidelines ke according, delivery timelines miss karne par sellers par **Liquidated Damages (LD)** apply kiye jaate hain. Severe cases mein, agar buyer contract cancel kar deta hai, toh seller ke upar blacklisting aur portal se debarment ka risk aa jata hai. Is guide mein hum detail mein discuss karenge ki GeM par order cancellation ke kya rules hain, delay penalty kaise calculate hoti hai, aur aap in issues ko proactively kaise manage kar sakte hain taaki aapka account suspend na ho.

---

## Who Should Read This Guide

- **Registered GeM Sellers & Service Providers** jinko lagta hai ki unka ongoing order delay ho sakta hai.
- **Logistics & Dispatch Managers** jo supply chains aur govt order delivery schedules monitor karte hain.
- **Tender Compliance Teams** jo GeM contracts aur penalties coordinate karti hain.
- **OEMs (Original Equipment Manufacturers)** aur unke authorized resellers jo non-performance warning ya incident alert receive kar chuke hain.

---

## Prerequisites

- **GeM Seller Portal Login Credentials** (Active access hona chahiye).
- **Purchase Order (PO) Details** aur original contract document.
- **Delivery Period (DP) Timeline Information** (Contract main page par listed date).
- **Communication Records** jaise official email communications or buyer approval messages regarding delay reasons.

---

## Required Documents Checklist

- [ ] **Original GeM Purchase Order / Contract Copy** (PDF Format).
- [ ] **Request for Delivery Period (DP) Extension** (Signed and stamped on company letterhead).
- [ ] **Justification Evidence for Delay** (Force Majeure documentation, OEM delay letter, or local administrative warnings).
- [ ] **Buyer Written Consent / Correspondence** (In case buyer had informally agreed to extend timelines).
- [ ] **Dispatch/Transit Proofs** (Lorry receipt, airway bill, or tracking details of partial delivery).
- [ ] **ePBG / Security Deposit Proof** (Copy of bank guarantee or e-Receipt).

---

## Eligibility Criteria Table

Agar aapka order delayed hai, toh alternative actions aur unki eligibility criteria ko samajhna zaroori hai:

| Action / Request Option | Eligibility Criteria | Timeline Window | Implication on Payment & Catalog |
| :--- | :--- | :--- | :--- |
| **DP Extension WITHOUT LD** | Delay is due to buyer default (e.g. site not ready, inspection delay) or Force Majeure event. | Must request **before** actual Delivery Period (DP) expiry date. | Full payment received without any deductions. Catalog stays active. |
| **DP Extension WITH LD** | Delay is due to seller's internal issues (supply shortage, logistical issues, etc.). | Must request **before** actual Delivery Period (DP) expiry date. | 0.5% per week penalty deducted from final invoice. Catalog stays active. |
| **Order Cancellation by Buyer** | Seller fails to deliver within original/extended DP and did not request extension. | After the DP expiry date has passed. | ePBG forfeited, automatic Incident creation, risk of debarment. |
| **Appeal against Penalty / Warning** | Received SCN due to cancellation or delay from buyer's end. | Within 5 calendar days of SCN notification. | Suspends the auto-blocking timer if reply is approved by GeM IMD. |

---

## Step-by-Step Guide with Flow Diagram

Jab aapko lage ki delivery timeline miss hone wali hai, toh delay aur cancellation penalties se bachne ke liye niche diye gaye steps follow karein:



### Step 1: Delivery Period Timeline Monitor Karein
Sellers ko har order ke dashboard page par ja kar **Delivery Period (DP)** check karna chahiye. Delivery date se 7-10 din pehle materials prepare aur coordinate kar lein.

### Step 2: Proactively DP Extension Apply Karein (Agar Delay Ho)
Agar delay ho raha hai, toh original delivery period expire hone se **pehle** portal par DP Extension request raise karein:
1. Log in to GeM Portal -> Go to Dashboard -> Click **Orders**.
2. Select the delayed order and scroll down to the request options.
3. Click on **Request Delivery Period Extension**.
4. Appropriate reasons fill karein (e.g. manufacturer delay, logistics strike, Force Majeure).
5. Attach supporting document (jaise company letterhead par formal request ya Force Majeure certificate).
6. Request submit karein. Buyer ise approve ya reject kar sakta hai.

### Step 3: Liquidated Damages (LD) Calculate Karein
Agar extension with LD diya gaya hai, toh standard formula apply hoga:
$$\text{LD Amount} = \text{Order Value of Delayed Quantity} \times 0.005 \times \text{Number of Weeks (or part thereof)}$$
Maximum LD limit total contract value ka **10%** hai. Is deduction ko buyer bill payment ke time process karega.

### Step 4: Show-Cause Notice (SCN) ka Reply Draft Karein (Cancellation cases mein)
Agar contract terminate ya cancel ho gaya hai, toh GeM aapse aupcharik explanation mangega (Show-Cause Notice). SCN receiving ke **5 calendar days** ke andar incident management dashboard par justification draft submit karein. GFR Rules aur actual buyer communications ko reference banayein.

### Step 5: Appeal Process Initiate Karein (If Suspended)
Agar system automatic algorithm ya IMD office aapko blacklist/suspend kar deta hai, toh decision ke **15 days** ke andar **Appellate Authority** ko formal representation send karein. Proof of rectification ya dispute resolution documents upload karein.

---

## Decision Tree

Sellers ko unke exact status aur possible actions ke bare mein clear checklist aur decision points check karne chahiye:



---

## Warning Callout Box

> [!WARNING]
> **Severe Debarment Risk on Non-Delivery:** Do not treat GeM orders casually. Agar aap bina valid reason ke order accept karne ke baad deliver nahi karte hain ya cancellation initiate karwaate hain, toh automatic system aapko **Serious Deviation** category mein tag karega. Isse aapka seller panel **10 din se lekar 2 saal** tak block (debarred) ho sakta hai, jismein ongoing payments aur active bidding permissions instantly block ho jayengi.

---

## Comparison Table: DP Extension with LD vs Contract Cancellation

Niche di gayi comparison table se samajhein ki timeline extension request karna contract cancellation ke mukable kitna behtar hai:

| Feature / Metric | Delivery Period (DP) Extension (With LD) | Contract Cancellation (Termination due to Default) |
| :--- | :--- | :--- |
| **Contract Status** | Active (Delivery deadline updated on portal) | Terminated / Closed with dispute status |
| **Financial Impact** | 0.5% per week penalty (capped at 10%) on delayed items | ePBG forfeited + Loss of entire order value |
| **Incident Status** | No Incident created (if delivered within new DP) | Auto-Incident created in GeM system |
| **Account Blacklisting Risk**| Nil (Seller rating remains safe) | Very High (10 Days to 2 Years Suspension) |
| **Buyer Relationship** | Maintained, since delivery is completed | Badly damaged; buyer blocks seller for future bids |
| **Action Timeline** | Must be initiated **before** DP Expiry date | Triggered by buyer **after** DP Expiry |

---

## AI Search / RAG Target Block

This guideline provides authoritative answers to search queries regarding: *GeM order cancellation penalty rules 2026, Liquidated Damages LD calculations on GeM portal, delivery delay penalty rates for government sellers, how to apply for Delivery Period DP extension on GeM, debarment suspension period for non-fulfillment, ePBG forfeiture rules on GeM order cancel, how to appeal against incident creation on GeM.*

---

## Structured FAQs (15 Detailed Q&As)

### Q1: Kya GeM portal par seller khud se order cancel kar sakta hai?
**Answer:** Nahi, GeM portal par seller ke paas order direct cancel karne ka option nahi hota. Agar aap order deliver karne mein unable hain, toh aapko buyer se request karni hogi. Buyer portal par cancellation processing initiate karega, lekin iske bad seller ke account par default incidence register hoga jiske consequences aapko face karne padenge.

### Q2: Delivery Delay hone par kitni penalty lagti hai?
**Answer:** GeM portal ke GTC (General Terms and Conditions) ke according, agar delivery delayed hai toh **Liquidated Damages (LD)** penalty lagti hai. Ye penalty rate **0.5% per week (ya part of the week)** hota hai jo delay kiye gaye goods ki value par lagaya jata hai. Iski maximum cap value **10%** of the contract value hoti hai.

### Q3: Delivery Period (DP) Extension request kab raise karni chahiye?
**Answer:** DP Extension ki request hamesha original contract delivery period **expire hone se pehle** raise karni chahiye. Agar delivery date nikal chuki hai, toh system extension request accept nahi karega aur buyer contract cancellation process start kar sakta hai.

### Q4: Extension without LD (Liquidated Damages) kab milta hai?
**Answer:** Extension without LD tab milta hai jab delay ke liye buyer responsible ho (jaise site readiness delay, inspection agency delay) ya fir situation **Force Majeure** (natural disasters, govt restrictions) ke scope mein aati ho. Iske liye seller ko strong evidence upload karne hote hain.

### Q5: Kya buyer cancellation ke baad security deposit/ePBG forfeit kar sakta hai?
**Answer:** Haan, agar order cancellation seller ki default ya non-fulfillment ki wajah se hua hai, toh contract conditions ke according buyer aapka **Performance Bank Guarantee (ePBG)** ya security deposit forfeit kar sakta hai aur payment release hold kar sakta hai.

### Q6: Auto-Incident trigger hone par seller ko response dene ke liye kitna samay milta hai?
**Answer:** Jab kisi contract cancellation ya timeline violation ke liye incident raise hota hai, toh seller ko portal par clarification aur rebuttal submit karne ke liye strictly **5 calendar days** ka time milta hai. Respond na karne par auto-suspension ho jata hai.

### Q7: GeM portal par debarment ya suspension ka period kitna ho sakta hai?
**Answer:** GeM rules ke under suspension ya debarment duration incident ki severity par depend karta hai. Minor delays ke case mein 10 to 30 days aur severe default ya fraudulent documents upload karne par **6 mahine se lekar 2 saal** tak ka debarment ho sakta hai.

### Q8: Agar seller blacklist ho jata hai, toh active bids par kya asar padta hai?
**Answer:** Agar aapka account blacklist ya suspend ho jata hai, toh aap kisi bhi naye bidding, L1 matching, ya catalog modification operations mein participate nahi kar payenge. Haa, ongoing contracts ko generally complete karna mandatory hota hai, jab tak buyer specifically terminate na kar de.

### Q9: GeM order cancel hone par warning se kaise bachein?
**Answer:** Warning aur suspension se bachne ke liye buyer ke sath formal written (email) communication maintain karein. Delivery delay hone par regular updates bhein aur target delivery date se pehle portal ke through justification ke sath DP Extension submit karein.

### Q10: Force Majeure clause ko claim karne ke liye kaun se documents chahiye?
**Answer:** Force Majeure claim karne ke liye government notifications, meteorological reports (floods ke case mein), strike notifications, ya OEM certificate (supply chain crisis) lagane honge, jisse ye prove ho sake ki situation sach mein aapke control se bahar thi.

### Q11: Kya buyer partial delivery ko accept karke rest order cancel kar sakta hai?
**Answer:** Haan, buyer ke paas contract termination ke do options hote hain: **Complete Order Cancellation** ya **Partial Order Closure**. Partial delivery ke case mein buyer delivered goods ka payment kar deta hai aur balance quantity ko cancel karke us par proportionate penalty calculate kar sakta hai.

### Q12: Liquidated Damages (LD) calculation ke liye kya mathematical formula hai?
**Answer:** LD calculation formula is type se hai:
$$\text{Penalty Amount} = (\text{Delayed Goods Value}) \times 0.5\% \times (\text{Delay Weeks})$$
Yahan week fraction (jaise 3 din ka delay) ko bhi full week delay consider kiya jata hai. Maximum deduction 10% se upar nahi ho sakta.

### Q13: Delivery Delay ke bad agar buyer payment rokk de, toh kya karein?
**Answer:** Agar buyer ne material safely receive kar liya hai aur CRAC (Consignee Receipt and Acceptance Certificate) generate ho chuka hai, toh delay penalty (LD) deduct karke balance payment karna buyer ki duty hai. Agar wo full payment hold kar rahe hain, toh aap GeM grievance cell ya DRC (Dispute Resolution Committee) mein claim file kar sakte hain.

### Q14: System automatic suspension kya hota hai?
**Answer:** GeM portal par automated algorithms set hain. Agar kisi warning notice ka reply defined deadline (5 days) ke andar upload nahi hota, toh system algorithm human intervention ke bina hi automated profile suspension process activate kar deta hai.

### Q15: Blacklisting order ke against appeal kahan aur kaise karein?
**Answer:** Blacklisting order receive hone ke **15 days** ke andar aap portal par official representation link ke through appeal file kar sakte hain. Aapko incident section mein documentation submit karke Appellate Committee ko solid mitigation reasons pesh karne honge.

---

## Related Knowledge Articles

- [GeM Order Accept Kaise Kare: Step-by-Step Fulfillment Guide](/posts/gem-order-accept-kaise-kare)
- [GeM Incident Management & Show-Cause Reply Drafting Format](/posts/gem-incident-management-show-cause-reply)
- [Common Errors on GeM Portal & How to Avoid Them](/posts/common-errors)

---

## Your Next Knowledge Journey

Ab jag aapne order cancellation rules aur penalty structures ko samajh liya hai, toh agla step hai ki aap humari guide [GeM Bidding Rules & Compliance Handbook](/posts/gem-bidding-rules-handbook) check karein, jisse aap bidding level se hi compliant rahein aur incident triggers se bachein.

---

## SahayakAI Tools CTA Block

> ### 🛠️ SahayakAI Operational & Compliance Helpers
> - **[GeM LD Penalty Calculator](/tools/gem-ld-penalty-calculator):** Apni delivery delay weeks aur item value enter karke potential Liquidated Damages penalty calculate karein.
> - **[DP Extension Justification Builder](/tools/gem-dp-extension-draft-helper):** Buyer correspondence details dalkar letterhead ke liye dynamic request letter draft karein.

---

## Official Reference Links

- [Official GeM Portal](https://gem.gov.in)
- [GeM General Terms and Conditions (GTC) Document](https://gem.gov.in/landing/resources/pdf/GTC.pdf)
- [Department of Expenditure Procurement Policies](https://doe.gov.in)

---

Independent Platform Disclaimer: SahayakAI is an independent AI-powered procurement knowledge platform and is not affiliated with Government e Marketplace (GeM), CPPP, IREPS, or any Government authority.
