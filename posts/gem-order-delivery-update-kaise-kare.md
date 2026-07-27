---
title: "GeM Order Delivery Update Kaise Kare? Dispatch & Tracking Guide (2026)"
summary: "GeM portal par order dispatch karne ke baad delivery status, tracking number aur transport details update karne ka step-by-step process Hinglish mein."
date: "2026-07-20"
updatedDate: "2026-07-20"
author: "SahayakAI Editorial Team"
category: "catalog-management"
layout: "post"
reviewer: "Senior Procurement Consultant"
version: "1.0.0"
readingTime: "10 min read"
sources:
  - "Government e Marketplace (GeM) Seller Manual for Shipment & Delivery"
  - "GeM General Terms and Conditions (GTC) 2026"
cta: "Delivery status notification aur tracking tools direct dashboard par integrate karne ke liye SahayakAI Chrome Extension download karein."
keyTakeaways:
  - "Goods dispatch karne ke baad portal par delivery details update karna payment verification ke liye mandatory step hai."
  - "Shipment update karne ke liye valid transport mode, transporter name aur tracking number/LR number ki entry karni hoti hai."
  - "Correct dispatch updates system me update hone ke baad hi Buyer ke dashboard par PRC aur CRAC generation ka option active hota hai."
  - "Delivery details update na karne par order 'delayed supply' category me chala jata hai aur Liquidated Damages (LD) apply ho sakti hain."
faqs:
  - q: "GeM par dispatch details update karna kyun compulsory hai?"
    a: "Jab tak aap portal par delivery updates nahi daalte, buyer ke dashboard par PRC (Provisional Receipt Certificate) aur CRAC (Consignee Receipt and Acceptance Certificate) generate karne ka option nahi khulta. Iske bina payment delay ho jata hai."
  - q: "Courier tracking number edit ho sakta hai kya?"
    a: "Ek baar dispatch slip generate aur verify ho jaye, toh entry details edit karna mushkil hota hai. Kuch situations me buyer support ticket ke support se hi change possible hai, isliye correct information daalna zaroori hai."
relatedTools:
  - "SahayakAI Dispatch Details Generator"
  - "SahayakAI Tracking Number Linker"
related_articles: ['gem-consignee-receipt-process', 'gem-order-accept-kaise-kare', 'gem-order-cancel-rules']
related_entities: ['Delivery Update', 'Dispatch Slip', 'Order Tracking', 'Consignee Address']
user_journey_stage: 'Order'
intent: 'HowTo'
difficulty: 'Beginner'
---

<div class="hero-badge-container">
  <span class="badge category-badge">Order Fulfillment</span>
  <span class="badge verified-badge">✓ Verified 2026</span>
  <span class="badge time-badge">⏱️ 10 min read</span>
  <span class="badge difficulty-badge">📊 Difficulty: Beginner</span>
  <span class="badge update-badge">📅 Updated: July 2026</span>
</div>

# GeM Order Delivery Update Kaise Kare? Step-by-Step Dispatch & Tracking Guide

<div class="hero-summary-box">
  <p><strong>GeM portal par order dispatch karne ke baad delivery status, tracking details update karna aur dispatch slip generate karna ek compulsory process hai.</strong> Agar aap is step ko time par complete nahi karte, toh system me delivery delay show hoga jisse payments delay hone aur penalties (Liquidated Damages) lagne ka risk badh jata hai. Is guide me hum step-by-step dispatch slip generate karne se lekar transport details fill karne ka complete process samjhenge.</p>
</div>

---

## ⚡ Quick Answer: GeM Order Delivery Update Process

<div class="quick-answer-box">
  <h3>⚡ Quick Answer: Delivery Status Update Summary</h3>
  <table>
    <tr>
      <td><strong>Problem</strong></td>
      <td>Goods dispatch karne ke baad bhi portal par status 'Accepted' ya 'Pending Dispatch' dikhna, jisse buyer delivery verify nahi kar pata.</td>
    </tr>
    <tr>
      <td><strong>SLA Timeline</strong></td>
      <td>Shipment dispatch hone ke immediate baad (within 24-48 hours) aur actual delivery milestone date se pehle update karna mandatory hai.</td>
    </tr>
    <tr>
      <td><strong>Required Action</strong></td>
      <td>Seller Dashboard > Orders > Active Orders me jakar 'Generate Shipment' par click karein. GST Invoice, Transporter Name, LR/AWB Number aur Dispatch Date enter karein.</td>
    </tr>
    <tr>
      <td><strong>Verification Mode</strong></td>
      <td>Aadhaar OTP or Digital Signature Certificate (DSC) validation.</td>
    </tr>
    <tr>
      <td><strong>Payment Impact</strong></td>
      <td>Portal par details update hote hi buyer dashboard par PRC (Provisional Receipt) aur CRAC (Consignee Receipt) generate karne ka window enable ho jata hai.</td>
    </tr>
  </table>
</div>

---

## ⚡ At a Glance Dashboard

| Parameter / Field | Requirements & Details |
| :--- | :--- |
| **Applicable Stage** | Post-Acceptance / Order Fulfillment Stage |
| **Ideal Update Timeline** | Within 24-48 hours of dispatching the goods |
| **Mandatory Details Required** | Transporter Name, Consignment Note No / LR No, Date of Dispatch, Transport Mode |
| **Verification Method** | Aadhaar OTP or DSC (Digital Signature Certificate) verification of Dispatch Slip |
| **SLA Impact** | Failure to update status leads to "Delayed Delivery" status, triggering Liquidated Damages (LD) |
| **Next Step for Buyer** | Generating PRC (Provisional Receipt Certificate) & CRAC (Consignee Receipt and Acceptance Certificate) |

---

## 📌 Table of Contents
1. [Introduction](#introduction)
2. [Who Should Read This Guide](#who-should-read-this-guide)
3. [Prerequisites](#prerequisites)
4. [Required Documents Checklist](#required-documents-checklist)
5. [Eligibility Criteria Table](#eligibility-criteria-table)
6. [Step-by-Step Guide with Flow Diagram](#step-by-step-guide-with-flow-diagram)
7. [Decision Tree](#decision-tree)
8. [Warning Callout Box](#warning-callout-box)
9. [Comparison Table: Online Dispatch Update vs Delayed/Manual Update](#comparison-table-online-dispatch-update-vs-delayedmanual-update)
10. [AI Search / RAG Target Block](#ai-search--rag-target-block)
11. [Structured FAQs (15 Detailed Q&As)](#structured-faqs-15-detailed-qas)
12. [Related Knowledge Articles](#related-knowledge-articles)
13. [Your Next Knowledge Journey](#your-next-knowledge-journey)
14. [SahayakAI Tools CTA Block](#sahayakai-tools-cta-block)
15. [Official Reference Links](#official-reference-links)
16. [Platform Disclaimer](#platform-disclaimer)

---

## Introduction

Dosto, jab aap Government e-Marketplace (GeM Portal) par koi order accept kar lete hain aur default contract generate ho jata hai, toh next sabse important step hota hai **Shipment Generation aur Delivery Status Update** karna. 

Aksar dekha jata hai ki naye sellers goods toh dispatch kar dete hain par portal par uski tracking details aur dispatch slip upload karna bhool jate hain. Aisa karne se buyer ke system par show hota hai ki aapne order abhi tak ship hi nahi kiya. Iska result ye hota hai ki buyer delivery received confirm nahi kar pata aur aapki payment timeline latak jati hai. 

Is article me hum bilkul aasan Hinglish me samjhenge ki GeM portal par **dispatch details update kaise karein**, courier details aur tracking number kaise link karein, aur bina kisi error ke dispatch slip generate kaise karein taaki aapka bill payment fast-track ho sake.

---

## Who Should Read This Guide

- **GeM Sellers & Vendors**: Jo apne accepted orders ko successfully ship kar rahe hain aur portal status update karna chahte hain.
- **Logistics & Dispatch Teams**: Jo products ko pack karke transporter/courier ke through dispatch karte hain aur documentation handle karte hain.
- **Back-Office Operations Staff**: Jo invoice generation aur GeM portal entries manage karte hain.
- **Finance & Accounts Managers**: Jo fast PRC/CRAC process aur early payments release karwane ke liye rules follow kar rahe hain.

---

## Prerequisites

Bina kisi rukawat ke dispatch details enter karne ke liye niche likhi requirements poori honi chahiye:
* **Active GeM Account**: Dashboard access ke liye username aur password.
* **Order Status: Accepted**: Order accepted hona chahiye aur contract generated hona chahiye.
* **Aadhaar Linked Mobile Number / DSC**: Dispatch Slip sign aur verify karne ke liye authorized person ka security verification validation.
* **Transporter Bill / Courier Receipt**: Transporter se mili consignment slip (LR copy) jis par LR No, date aur mode mentioned ho.

---

## Required Documents Checklist

Shipment detail link karte waqt in documents aur details ko apne pass zaroor rakh lein:

- [ ] **GeM Contract Copy** (PDF Format - Reference check ke liye)
- [ ] **Seller Invoice (Bill)** (GST Invoice Jo system me upload karni hogi)
- [ ] **Transporter Receipt / Lorry Receipt (LR) / Consignment Note Copy** (Courier standard transport receipts)
- [ ] **Tracking Number / AWB (Airway Bill) Number** (Delivery tracking detail verify karne ke liye)
- [ ] **E-Way Bill PDF** (Agar goods ki value ₹50,000 se zyaada hai aur transport by road hai)

---

## Eligibility Criteria Table

Aapko kis scenario me kaun si transport detail bharni hogi, uski summary niche table me di gayi hai:

| Shipment Mode | Mandatory Inputs | E-Way Bill Requirement | Verification Process | Best Suited For |
| :--- | :--- | :--- | :--- | :--- |
| **By Road (Transporter/Lorry)** | Transporter Name, Vehicle Number (if available), LR/CN Number, Date of Dispatch | Mandatory if invoice value > ₹50,000 | Aadhaar OTP or DSC on Dispatch Slip | Bulky items, local/interstate road delivery |
| **By Courier / Speed Post** | Courier Agency Name, AWB / Tracking Number, Dispatch Date | Mandatory if invoice value > ₹50,000 | Aadhaar OTP or DSC on Dispatch Slip | Small parcels, books, laptops, documentation |
| **By Air / Rail** | Airline/Railways Name, Airway Bill (AWB) or Railway Receipt (RR) No, Date | Mandatory if invoice value > ₹50,000 | Aadhaar OTP or DSC on Dispatch Slip | High-priority shipments, long-distance bulk supplies |
| **Self-Delivery / Hand Delivery** | Person Name, Contact Number, Authorized ID Details, Date of Dispatch | Not applicable (but delivery challan is needed) | Aadhaar OTP or DSC on Dispatch Slip | Local purchases, same-city services/goods delivery |

---

## Step-by-Step Guide with Flow Diagram

Chaliye details update karne ki standard procedure ko step-by-step follow karte hain:

### Step 1: GeM Portal par Login aur Active Orders Dashboard par Jayein
* **Action**: `gem.gov.in` open karein aur registered credentials se login karein.
* **Navigation**: Top menu bar par **Orders** tab par hover karein aur **Active Orders** option select karein.
* **Expected Result**: Aapko screen par un orders ki list dikhegi jo accepted hain aur fulfillment ke liye pending hain.

### Step 2: Desired Order Select Karke 'Generate Shipment' par Click Karein
* **Action**: Jis order ka material dispatch kiya hai, uske extreme right side me check karein aur **Generate Shipment** ya **View Details** par click karein.
* **Key Check**: Order status status "Accepted" hona chahiye. Agar status pending acceptance hai, toh pehle use accept karein.

### Step 3: Seller Invoice (GST Invoice) Details Fill Karein
* **Action**: Shipment page par aate hi sabse pehle seller invoice details enter karni hoti hain:
  - Invoice Number (Jo aapke internal system ka GST bill number hai)
  - Invoice Date (Actual billing date)
  - Taxable Value aur GST details (System auto-populate bhi karta hai contract value ke basis par, use check kar lein)
  - **Upload Invoice**: Invoice PDF copy upload karein. File size standard limit (usually 2MB) ke andar honi chahiye.

### Step 4: Transport Details aur Tracking Number Enter Karein
* **Action**: Niche scroll karke **Logistics/Dispatch Details** form ko fill karein:
  - **Mode of Transport**: Dropdown me se Road, Rail, Air, Courier ya Hand Delivery select karein.
  - **Transporter / Courier Name**: Transporter/Courier agency ka naam enter karein (jaise BlueDart, Delhivery, Speed Post, etc.).
  - **Consignment Note / LR Number / Tracking ID**: Tracking number link karein. Yeh sabse important entry hai kyunki iske through buyer status verify kar sakta hai.
  - **Date of Dispatch**: Jis din material hand-over kiya gaya hai, wo date select karein.
  - **E-way Bill Details**: Agar applicable ho, toh E-Way Bill Number enter karein.

### Step 5: Dispatch Slip Preview Aur Verify Karein
* **Action**: Saari details enter karne ke baad system automatic draft **Dispatch Slip** generate karein. **Preview** link par click karke address, tracking ID, invoice details double check kar lein.

### Step 6: Aadhaar OTP / DSC ke Through Sign & Submit Karein
* **Action**: Validation complete karne ke liye digital validation step screen par aayega:
  - **Option A**: Aadhaar OTP verification (Authorized signatory ke mobile number par OTP aayega, use enter karein).
  - **Option B**: Digital Signature Certificate (DSC) apply karke sign submit karein.
* **Result**: Screen par "Shipment Generated Successfully" message appear hoga aur status update hokar **"Dispatched"** ho jayega.



---

## Decision Tree

Niche diye gaye logic structure se sellers and operators check kar sakte hain ki unhe different cases me kya process apply karni hai:

```
Goods Ready for Dispatch
       │
       ▼
Check Invoice Value
 ├── Value > ₹50,000?
 │      └── YES ► Generate E-Way Bill first ► Proceed to GeM Portal
 └── Value <= ₹50,000?
        └── NO  ► Directly login to GeM Portal
               │
               ▼
         Select Transport Mode
          ├── Road Transport (Truck/Lorry)  ► Enter Transporter Name + LR/CN No.
          ├── Courier Service (Post/Express) ► Enter Courier Agency Name + AWB/Tracking ID
          └── Hand Delivery (Local Buyer)   ► Enter Dispatch Challan No. + Delivery Person ID
                 │
                 ▼
          Click 'Generate Shipment' on Portal
                 │
                 ├─ Upload GST Invoice PDF
                 ├─ Fill Out Transport Form Details
                 ▼
          Security Verification (OTP / DSC)
                 │
                 ▼
          Status Updated: Dispatched (Dispatch Slip Generated)
```

---

## Warning Callout Box

> [!WARNING]
> **Incorrect Tracking Number / LR Number ki Entry Block kar Degi Aapka Payment!**
> GeM portal par galat tracking details ya fake consignment numbers enter karne se strictly bachein. Agar entered tracking information galat hoti hai, toh audit trail match nahi hoti aur finance officer aapka CRAC (Consignee Receipt and Acceptance Certificate) issue nahi kar payega. Iske alawa system automatically **Shipment Delivery Delay Flag** raise kar deta hai, jiske karan delayed days ke liye contract value par **Liquidated Damages (LD) 0.5% per week** ki penalty lag sakti hai. Hamesha dispatch slip update tabhi karein jag physical dispatch ho chuka ho aur correct LR/consignment receipt aapke hath me ho.

---

## Comparison Table: Online Dispatch Update vs Delayed/Manual Update

Sellers ko delivery status update time par karne ke benefits aur late karne ke risks ke bare me awareness honi chahiye:

| Comparison Metric | Real-time Portal Update (Within 24 Hours) | Delayed / Manual Update (Post-Delivery or Late) |
| :--- | :--- | :--- |
| **System Status Accuracy** | Instantly shows "Dispatched" & "In Transit" | Shows "Pending Dispatch" even if goods have reached |
| **SLA Tracking** | Protects from delivery delay alerts and LD penalties | System shows delay based on portal entry date, triggers penalty risk |
| **PRC/CRAC Window** | Instantly opens for buyer upon system delivery date | Closed for buyer; buyer cannot verify goods on portal |
| **Payment Release Process** | Fast-tracked; invoicing audit trail is clean | Delayed; accounts officer holds payment due to mismatch |
| **Audit Compliance** | 100% compliant with GeM GTC guidelines | Non-compliant; can lead to incident log for slow fulfillment |
| **Notification to Buyer** | Auto email and SMS alerts sent to consignee | No notification; buyer is unaware of the dispatch details |

---

## AI Search / RAG Target Block

<!-- AI Search / RAG Target Block -->
> **RAG & Search Optimizer:**
> - **Primary Query:** GeM order delivery update kaise kare (How to update delivery on GeM portal)
> - **Key Entities:** Dispatch Slip, Order Tracking, Consignee Address, LR Number, Consignment Note, Transport Mode.
> - **Standard SLA Rules:** Updating shipment details on the portal before actual delivery is necessary to enable PRC (Provisional Receipt Certificate) and CRAC (Consignee Receipt and Acceptance Certificate) generation by the buyer.
> - **Key Searches:** gem portal dispatch slip download, gem tracking number update, gem transporter details entry, gem billing invoice upload, gem shipment generation process, gem delivery tracking link.

---

## Structured FAQs (15 Detailed Q&As)

### Q1: GeM portal par order dispatch update karna kyun zaroori hai?
**Answer:** GeM portal par jab tak aap shipment generate karke delivery status update nahi karte, tab tak buyer ke pass portal par **PRC (Provisional Receipt Certificate)** aur **CRAC (Consignee Receipt and Acceptance Certificate)** generate karne ka option visible nahi hota. PRC aur CRAC ke bina finance department payment process nahi kar sakta. Isliye payment cycle shuru karne ke liye dispatch details update karna mandatory hai.

### Q2: Dispatch details ya shipment generation kab kiya jana chahiye?
**Answer:** Goods ko transporter ya courier agency ko handover karne ke immediately baad (ideally within 24 hours) aur consignee location par deliver hone se pehle aapko shipment details update kar deni chahiye. Delivery location par goods pahunchne se pehle system status "Dispatched" hona standard compliance hai.

### Q3: Kya hum ek se zyaada shipments ek hi order ke liye generate kar sakte hain?
**Answer:** Haan. Agar aapka order partial delivery/split delivery allow karta hai, toh aap multiple shipments generate kar sakte hain. Har dispatch ke liye alag invoice aur alag transport/LR details dalni hongi aur utni hi quantity ka shipment select karna hoga jitna deliver ho raha hai.

### Q4: Transport Mode select karte waqt kya details bharni hoti hain?
**Answer:** Transport details update karte waqt niche diye dropdown fields mandatory hote hain:
- **Mode of Transport**: Road, Rail, Air, Courier, or Hand/Self Delivery.
- **Transporter Name**: Courier agency ya transport company ka name.
- **Consignment Note/LR No**: Unka receipt number.
- **Date of Dispatch**: Jis din transport handover hua.

### Q5: Agar main local delivery self-vehicle ya hand-delivery ke through kar raha hoon, toh transport mode kya chunein?
**Answer:** Agar delivery local hai aur aap transport agency use nahi kar rahe hain, toh dropdown me se **Hand Delivery / Self Delivery** option chunein. Yahan tracking ID/LR number ki jagah par aap delivery challan number ya authorization letter reference number enter kar sakte hain aur vehicle details daal sakte hain.

### Q6: Dispatch Slip kya hai aur ise download kaise karein?
**Answer:** Dispatch Slip ek system-generated document hai jo portal par shipment generation process aur digital signature/OTP validation complete hone ke baad create hota hai. Ise save karne ke liye dashboard ke shipment details panel me jakar "Print/Download Dispatch Slip" par click karein. Physical package ke sath iski print copy bhejni chahiye.

### Q7: Kya ek baar submit karne ke baad tracking number ya transporter details edit kar sakte hain?
**Answer:** System security and audit rules ke mutabik once a shipment is generated and verified with OTP/DSC, transport details direct edit nahi ki ja sakti hain. Agar koi major mistake ho gayi hai toh aapko buyer se contact karna hoga ya support ticket raise karni hogi. Isliye verification step se pehle details ko confirm zaroori kar lein.

### Q8: E-Way bill number update karna kab mandatory hai?
**Answer:** Indian Goods and Services Tax (GST) regulations ke hisab se, agar product transport by road ho raha hai aur invoice value (inclusive of GST) ₹50,000 se zyaada hai, toh E-Way Bill generate karna zaroori hai. GeM portal par shipment generate karte waqt aapko E-Way bill number entry box me use link karna mandatory hoga.

### Q9: System verification ke liye Aadhaar OTP na aane par kya option hai?
**Answer:** Agar server issues ke karan registered mobile number par Aadhaar OTP nahi aa raha, toh aap Digital Signature Certificate (DSC) ka upayog kar sakte hain. Apne computer me DSC token insert karein, system service utility run karein aur signature confirm karein.

### Q10: Delivery period expiry date nikal jane ke baad delivery status kaise update karein?
**Answer:** Agar Delivery Period (DP) expire ho chuka hai, toh system aapse pehle **Delivery Period (DP) Extension** apply karne ko bolega. Bina extended DP approve hue, status update button block ho sakta hai. DP extension approve hone ke baad hi shipment generate ho payegi.

### Q11: Transporter/Courier status tracker GeM portal se directly linked hota hai kya?
**Answer:** GeM portal par static tracking numbers link hote hain. Yeh courier tracking details direct live track nahi hoti lekin system audit trails ke liye reference ka kaam karti hain. Buyer ko status verify karne ke liye reference transport document upload dekhna padta hai.

### Q12: Agar buyer delivery confirm na kare, toh dispatch slip kya help karegi?
**Answer:** Agar aapne portal par timely dispatch details update kiye hain aur correct transport proof/receipt upload kiya hai, aur goods buyer destination par deliver ho chuke hain, toh updates clear target date record karenge. Buyer agar 10 days tak CRAC generate nahi karega, toh system automatic CRAC auto-generation flow coordinate kar sakta hai default terms ke mutabik.

### Q13: Portal par Invoice PDF upload karte waqt file error aaye toh kya karein?
**Answer:** Upload karne wali PDF file scan copy clear honi chahiye. Standard file format `.pdf` hona chahiye aur size 2MB se kam honi chahiye. Agar error aa raha ho, toh browser cache clear karein aur secure file compress software se size check karein.

### Q14: Kya secondary user account se shipment generate aur update ki ja sakti hai?
**Answer:** Haan, primary user agar dashboard menu settings me secondary user profile ko **Fulfillment/Shipment Manager** assign karta hai, toh secondary logins se bhi transport aur billing info entries ki ja sakti hain.

### Q15: Galat tracking information fill karne par kya penalty lag sakti hai?
**Answer:** Galat tracking information ko intentional deviation mana jata hai. Buyer incident raise kar sakta hai, jisse seller rating damage ho sakti hai. Delivery tracking audit fail hone ke case me payment delay ke sath delayed duration par liquidated damages lag sakti hain.

---

## Related Knowledge Articles

- [GeM Consignee Receipt Process: PRC & CRAC Guidelines](/posts/gem-consignee-receipt-process)
- [GeM Order Accept Kaise Kare? SLA Timelines & Contract Rules](/posts/gem-order-accept-kaise-kare)
- [GeM Order Cancellation Rules: Delay Penalties & Blacklisting Risk Guidelines](/posts/gem-order-cancel-rules)

---

## Your Next Knowledge Journey

<div class="knowledge-journey-container">
  <div class="journey-step previous-step">
    <span class="journey-label">Previous Step</span>
    <strong><a href="/posts/gem-order-accept-kaise-kare">Order Accept Kaise Kare</a></strong>
  </div>
  <div class="journey-arrow">↓</div>
  <div class="journey-step current-step">
    <span class="journey-label">Current Guide</span>
    <strong>Order Delivery Update Kaise Kare</strong>
  </div>
  <div class="journey-arrow">↓</div>
  <div class="journey-step next-step">
    <span class="journey-label">Next Step</span>
    <strong><a href="/posts/gem-consignee-receipt-process">Consignee Receipt Process (PRC/CRAC)</a></strong>
  </div>
</div>

---

## SahayakAI Tools CTA Block

<div class="extension-cta-box">
  <h3>🧩 Delivery Tracking Aur Documents Management Ko Banayein Aasan!</h3>
  <p>Apne GeM shipments ko real-time monitor karne aur multiple transport details track karne ke liye SahayakAI ke advanced operational extension tools ka free use karein. Yeh aapke workflow ko smooth banata hai.</p>
</div>

---

## Official Reference Links

- **Government e Marketplace (GeM) Official Portal**: [gem.gov.in](https://gem.gov.in)
- **GeM General Terms and Conditions (GTC)**: [gem.gov.in/landing/resources/pdf/GTC.pdf](https://gem.gov.in/landing/resources/pdf/GTC.pdf)
- **GeM Training Manual for Shipment Generation**: [lms.gem.gov.in](https://lms.gem.gov.in)

---

Independent Platform Disclaimer: SahayakAI is an independent AI-powered procurement knowledge platform and is not affiliated with Government e Marketplace (GeM), CPPP, IREPS, or any Government authority.
