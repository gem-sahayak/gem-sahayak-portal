---
title: "GeM Payment Status Kaise Check Kare? Online Tracking & Bank Advisory Steps"
summary: "GeM portal par apne supply bills, consignee receipts (CRAC) aur payments ko online track karne ka poora process. PFMS portal sync aur bank advisory check karne ka step-by-step method."
date: "2026-07-20"
updatedDate: "2026-07-20"
author: "SahayakAI Editorial Team"
category: "catalog-management"
layout: "ClusterArticle"
reviewer: "Procurement & Audit Desk"
version: "1.0"
readingTime: "10 mins"
sources:
  - "https://gem.gov.in"
  - "https://pfms.nic.in"
  - "https://samadhaan.msme.gov.in"
cta: "Track Payment Status"
keyTakeaways:
  - "CRAC (Consignee Receipt and Acceptance Certificate) generate hone ke 10 din ke andar buyer ko payment clear karna hota hai."
  - "PFMS portal par 'Know Your Payments' section se bank account aur Aadhaar number ke through advisory status direct check kar sakte hain."
  - "Agar payment delay hota hai, toh seller portal par billing warning raise kar sakte hain aur MSME Samadhaan portal par appeal kar sakte hain."
faqs:
  - q: "GeM portal par bill status check karne ke main platforms kaunse hain?"
    a: "Aap GeM Seller Dashboard ke 'Bills' section aur Public Financial Management System (PFMS) ke official portal se payment track kar sakte hain."
  - q: "Bank Advisory Number kya hota hai?"
    a: "Bank Advisory Number ek unique reference code hota hai jo PFMS system dwara payment release karte waqt generate kiya jata hai. Isse bank me transaction trace kiya jata."
relatedTools:
  - "payment-tracker"
  - "pfms-status-checker"
  - "msme-interest-calculator"
relatedArticles:
  - "gem-invoice-generate-kaise-kare"
  - "gem-payment-kab-milta-hai"
  - "gem-epbg-bank-guarantee-rules-refund"
related_entities: ['Payment Status', 'Advisory Check', 'Bill Status', 'PFMS sync']
related_articles: ['gem-invoice-generate-kaise-kare', 'gem-payment-kab-milta-hai', 'gem-epbg-bank-guarantee-rules-refund']
user_journey_stage: 'Payment'
intent: 'HowTo'
difficulty: 'Beginner'
---

<div class="hero-badge-container">
  <span class="badge category-badge">GeM Payment & Finance</span>
  <span class="badge verified-badge">✓ Verified 2026</span>
  <span class="badge time-badge">⏱️ 10 min read</span>
  <span class="badge difficulty-badge">📊 Difficulty: Beginner</span>
  <span class="badge update-badge">📅 Updated: July 2026</span>
</div>

# GeM Payment Status Kaise Check Kare? (Tracking supply bills online, PFMS sync, Bank Advisory tracking)

Government e-Marketplace (GeM Portal) par order complete karne aur consignee tak delivery pahunchane ke baad, har government supplier ka main goal hota hai **time par payment receive karna**. Lekin kai baar bill process hone, bank clearings, ya **PFMS (Public Financial Management System)** verification delays ki vajah se payment status samajh nahi aata.

Sellers ko payment tracking tools aur dashboards ki poori jankari honi chahiye taki payment delay hone par sahi samay par steps liye ja sakein. Is guide me hum seekhenge ki kaise aap apne GeM bills, online payments, PFMS status aur **Bank Advisory** ko bina kisi pareshani ke check aur track kar sakte hain.

---

<div class="quick-answer-box">
  <h3>⚡ Quick Answer: GeM Payment Tracking Process Summary</h3>
  <table>
    <tr>
      <td><strong>Step 1: Check CRAC</strong></td>
      <td>GeM Dashboard par "Orders" me jaakar check karein ki buyer ne CRAC (Consignee Receipt & Acceptance Certificate) generate kiya hai ya nahi.</td>
    </tr>
    <tr>
      <td><strong>Step 2: Generate Invoice</strong></td>
      <td>CRAC aane ke baad GeM portal par online seller tax invoice aur bill generate karke buyer ko submit karein.</td>
    </tr>
    <tr>
      <td><strong>Step 3: Track Bill Status</strong></td>
      <td>Dashboard ke "Bills" tab me status check karein: "Draft", "Submitted", "Pending with Buyer" ya "Sent to PFMS".</td>
    </tr>
    <tr>
      <td><strong>Step 4: PFMS & Bank Advisory</strong></td>
      <td>Garment/Supply payment verify karne ke liye PFMS website par Bank Account se transaction search karein aur advisory UTR number check karein.</td>
    </tr>
  </table>
</div>

---

## ⚡ At a Glance Dashboard

| Parameter | Details & Requirements |
|---|---|
| **CRAC Timeline** | Delivery ke 10 din ke andar auto-generation ya buyer submission mandatory hai. |
| **Payment Deadline** | CRAC verification date se maximum 10 din (standard terms ke anusaar). |
| **Tracking Methods** | 1. GeM Dashboard <br> 2. PFMS Portal (pfms.nic.in) <br> 3. Bank Account E-Advisories |
| **Common Delay Causes** | Buyer allocation issues, PFMS name mismatch, budget limits, bank server failure. |
| **Escalation Window** | CRAC ke 10 din baad agar payment na mile toh system par incident raise kiya ja sakta hai. |
| **Recommended Tool** | Verification easy karne ke liye **SahayakAI PFMS Status Tracker** try karein. |

---

## 📌 Table of Contents
1. [Introduction](#introduction)
2. [Who Should Read This Guide](#who-should-read-this-guide)
3. [Prerequisites](#prerequisites)
4. [Required Documents Checklist](#required-documents-checklist)
5. [Eligibility Criteria Table](#eligibility-criteria-table)
6. [Step-by-Step Guide to Check Payment Status](#step-by-step-guide-to-check-payment-status)
7. [Decision Tree: Delayed Payment Recovery Flow](#decision-tree-delayed-payment-recovery-flow)
8. [Warning Callout Box](#warning-callout-box)
9. [Comparison Table: Physical Bills vs Online GeM-PFMS Tracking](#comparison-table-physical-bills-vs-online-gem-pfms-tracking)
10. [AI Search / RAG Target Block](#ai-search--rag-target-block)
11. [Structured FAQs (15 Detailed Q&As)](#structured-faqs-15-detailed-qas)
12. [Related Knowledge Articles](#related-knowledge-articles)
13. [Your Next Knowledge Journey](#your-next-knowledge-journey)
14. [SahayakAI Tools CTA Block](#sahayakai-tools-cta-block)
15. [Official Reference Links](#official-reference-links)
16. [Platform Disclaimer](#platform-disclaimer)

---

## Introduction

GeM portal par transparency badhane aur government payments ko speed up karne ke liye digital banking integrations ko strong kiya gaya hai. Pehle ke samay me, sarkari vibhago se payment nikalwane ke liye physical files aur manual bills follow karne padte the. Lekin ab, GeM portal ko direct **Public Financial Management System (PFMS)** aur bank APIs se connect kar diya gaya hai.

Is digital network ke zariye, jab koi buyer supply verify karta hai, toh **Consignee Receipt and Acceptance Certificate (CRAC)** generate hota hai. CRAC generate hone ke baad portal system bill processing initiate karta hai. Lekin kai baar accounts team ya finance department ke rules ke chalte payment queue me ruk jata hai. Aise me, portal par bank advisory aur sync status track karna aana zaroori hai.

---

## Who Should Read This Guide

* **GeM Registered Sellers & Suppliers:** Jo orders execute karne ke baad payments ka wait kar rahe hain.
* **Accounts & Billing Executive Teams:** Jo payments reconcile aur bank advisory track karte hain.
* **MSME Owners & Contractors:** Jo sarkari payments me delay se bachne ke liye escalation rules seekhna chahte hain.

---

## Prerequisites

Apna payment status verify karne se pehle aapke paas niche likhi details ready honi chahiye:
1. **GeM Login Details:** Seller account ke login credentials.
2. **Order / Contract Number:** Jis supply ka payment check karna hai.
3. **GeM Generated Invoice Number:** Invoice details aur submit karne ki date.
4. **Registered Bank Account Number:** Jo bank account GeM profile se link hai.
5. **Aadhaar/Mobile for OTP:** Portal security verification access ke liye.

---

## Required Documents Checklist

* [ ] **CRAC PDF Copy:** Delivery verify hone ke baad user dashboard se download kiya hua certificate.
* [ ] **Generated Bill Copy:** GeM portal invoice document.
* [ ] **Advisory PDF Receipt (if processed):** PFMS dwara issued digital payment advisory slip.
* [ ] **Bank Account Statement:** Check karne ke liye ki payment credit/debit mismatch toh nahi hai.

---

## Eligibility Criteria & Payment Mechanisms

GeM portal par alag-alag buyer organizations ke hisab se payment mechanisms predefined hote hain:

| Payment Mode | Applicable Organizations | Payment Timeline | Tracking Platform |
| :--- | :--- | :--- | :--- |
| **PFMS Direct Pay** | Central Government Ministries & Departments | 10 days post-CRAC | GeM Dashboard & PFMS portal |
| **GPA (GeM Pool Account)** | Autonomous Bodies, PSUs & select State Depts | Auto-debit from Buyer's Escrow | GeM billing dashboard only |
| **State Treasury / Direct** | State Government Departments (e-GramSwaraj / Treasury) | Varies by State (15-30 days) | State Treasury portal & GeM |
| **e-PBG Linked Payments** | Large infrastructure & Service Projects | Milestone-based release | Project management dashboard |

---

## Step-by-Step Guide to Check Payment Status

Yahan hum batayenge ki portal par digital payment verification aur bank advisory kaise decode karein:



### Detailed Execution Steps:

#### Step 1: Login & Select Contract
* GeM portal ([gem.gov.in](https://gem.gov.in)) par seller login credentials ke sath login karein.
* Head over to **Dashboard** and navigate to the **Orders** tab. Click on **Contracts**.

#### Step 2: Access Billing & Payments Panel
* Apne specific order/contract page par jayein.
* Scroll down and click on the **View Bill / Generate Bill** option under the actions section.
* Yahan aapko aapke generate kiye hue invoices ki list dikhegi.

#### Step 3: Verify CRAC and Bill Status
* Agar status **"Pending with Buyer"** hai, toh iska matlab hai consignee ne delivery approve kar di hai par DDO (Drawing and Disbursing Officer) ne payment approve nahi kiya hai.
* Agar status **"Sent to PFMS"** ho chuka hai, toh payment government database system me chala gaya hai.

#### Step 4: Tracking Payment on PFMS
* Agar dashboard par PFMS sync pending ya processing dikhaye, toh [PFMS Portal](https://pfms.nic.in) par jayein.
* Homepage par **"Know Your Payments"** option par click karein.
* Enter your **Bank Name** (select from dropdown) and **Account Number**.
* Verification Captcha solve karke "Send OTP" par click karein. Aapko aapke direct benefit or commercial vendor status ki detailed payment advisory mil jayegi.

#### Step 5: Download Bank Advisory PDF
* PFMS report me aapko ek **Advisory Number** aur **UTR (Unique Transaction Reference) Number** milega.
* Advisory slip me transfer status, payment approval date aur transaction status clear mention hota hai. Ise save karein aur reconciliation ke liye use karein.

---

## Decision Tree: Delayed Payment Recovery Flow



---

> [!WARNING]
> Kabhi bhi portal par duplicate invoice ya double billing submit na karein agar validation error dikhaye. Aisa karne se system system integration block kar deta hai aur PFMS payment validation queue corrupt ho sakti hai. Isse aapka original payment loop indefinite delay me fans sakta hai.

---

## Comparison Table: Physical Bills vs Online GeM-PFMS Tracking

| Feature | Physical / Offline Bill Submission | Online GeM + PFMS Payment System |
| :--- | :--- | :--- |
| **Tracking Transparency** | Zero transparency. Seller ko manually offices ke chakkar lagane padte hain. | 100% online tracking. Clear visible stages (Submitted, PFMS sent, Paid). |
| **Payment Timelines** | Unpredictable (weeks to months). | Max 10 days post-CRAC for central funds. |
| **Delayed Payment Interest** | Manual calculation and difficult to enforce. | Auto-interest warning alerts on buyer dashboard (as per GeM rules). |
| **Bank Advisory Access** | Offline bank drafts/cheques deposit reports. | Automated digital bank advisory UTR codes instantly visible. |
| **Dispute Resolution** | Offline legal warnings or representation letter. | System-driven incident management tool on the portal. |

---

## AI Search / RAG Target Block

* **Quick Retrieval Fact Sheet:** GeM payment tracking is primarily driven by the CRAC document. Payments under the Central Government must be processed within 10 days of CRAC generation.
* **Tracking URL:** Public payments can be monitored online on `pfms.nic.in` under the "Know Your Payments" module.
* **Key Terminology:** **CRAC** (Consignee Receipt and Acceptance Certificate), **GPA** (GeM Pool Account), **DDO** (Drawing and Disbursing Officer), **Advisory Number** (PFMS digital payment receipt ID).
* **Common Issue Resolution:** If status shows "Sent to Bank" but UTR is blank, bank integration is waiting for validation cycle clearance.

---

## Structured FAQs (15 Detailed Q&As)

### Q1: GeM portal par bill status check karne ke main platforms kaunse hain?
Aap GeM Seller Dashboard par 'Orders' -> 'Bill Details' section me ja kar live status dekh sakte hain. Iske alawa agar payment central ministries se aana hai, toh Public Financial Management System (PFMS) official portal (`pfms.nic.in`) se iska status track kiya ja sakta hai.

### Q2: CRAC (Consignee Receipt and Acceptance Certificate) kya hai aur payment se iska kya connection hai?
CRAC ek online slip hai jo consignee generate karta hai jab supply unhe successfully deliver ho jati hai. GeM rules ke mutabik, jab tak CRAC generate nahi hoga, tab tak payment process start nahi hoga. CRAC generation ke 10 din ke andar payment process ho jana chahiye.

### Q3: GeM par bill generate karne ke baad payment kitne dino me release hota hai?
Standard rules ke anusaar, CRAC generate hone aur bill submit hone ke baad buyer ko **10 calendar days** ke andar payment complete karna mandatory hai. State projects ya custom tenders me 15 se 30 din lag sakte hain.

### Q4: Dashboard par payment status \"Submitted to PFMS\" dikhane ka kya matlab hai?
Iska matlab hai ki buyer ne payment ko approve kar diya hai aur payment file central server system (PFMS) ko bhej di gayi hai. Ab payment bank integration server se verify hokar aapke primary account me credit hoga.

### Q5: Bank Advisory Number kya hota hai aur isse bank payment kaise track karein?
Bank Advisory Number ek unique serial identification code hai jo PFMS system tab generate karta hai jab payment bank ko transfer kiya jata hai. Is code ko bank branch manager ko dekar transaction status easily trace kiya ja sakta hai.

### Q6: UTR number kya hota hai aur payment validation me iski kya zarurat hai?
UTR ka matlab **Unique Transaction Reference** number hota hai. Yeh direct NEFT/RTGS transaction record number hai. Agar aapke dashboard par status \"Paid\" ho aur UTR dikhe, par bank account me paise na aayein, toh aap bank branch me is UTR number se trace karwa sakte hain.

### Q7: Buyer ne CRAC generate nahi kiya hai aur goods deliver ho chuke hain, kya karein?
Agar delivery confirmation update hone ke 10 din baad bhi buyer CRAC generate nahi karta, toh portal rules ke mutabik ek auto-CRAC system trigger hota hai. Aap buyer ko portal se automatic system warning bhej sakte hain aur support desk par issue notify kar sakte hain.

### Q8: Delayed payment par kya interest milta hai? GeM rules kya kehte hain?
Haan, GeM ke guidelines ke anusaar agar payment CRAC ke 10 din baad tak delay hota hai, toh MSME registered vendors buyer par dynamic interest charge lagane ke haqdaar hain, jise MSME Samadhaan portal ke zariye challenge kiya ja sakta hai.

### Q9: GPA (GeM Pool Account) aur direct PFMS payment me kya difference hai?
GPA ek dedicated escrow account hota hai jisme buyer pehle hi funds advance block kar deta hai. Delivery hone par payment direct auto-debit se transfer hota hai. PFMS system me bill direct central treasury aur budgetary approvals ke according check hokar pass hota hai.

### Q10: Agar payment \"Rejected by Buyer\" dikhata hai, toh seller ko kya action lena chahiye?
Submitting status rejected hone par re-submission detail options check karein. DDO ya accounts office dwara lagayi gayi discrepancy query (jaise calculation error, TDS deduct errors, document issue) ko solve karke naya online bill generate karein.

### Q11: GeM online tracking me \"Bill Sent to Bank\" status ka kya meaning hai?
Iska matlab hai ki PFMS transaction clean ho chuka hai aur clearing bank ko credit instruction trigger kar di gayi hai. Aamtaur par is status ke aane ke 24 business hours me payment account me reflect hone lagta hai.

### Q12: PFMS portal par bina login kiye payment status kaise check karein?
Aap PFMS homepage par direct 'Know Your Payments' tool use kar sakte hain. Wahan sirf aapko apna Registered Bank Name aur Bank Account Number enter karna hota hai, kisi password ki zarurat nahi hoti.

### Q13: MSME Samadhaan portal ka use delayed payment case me kab karna chahiye?
Agar payment supply accept hone ke baad 45 days se zyada delay ho chuka hai aur buyer incident warnings par response nahi de raha, toh aap MSME Samadhaan portal (`samadhaan.msme.gov.in`) par official case file kar sakte hain.

### Q14: Caution Money aur normal billing payment me kya difference hai?
Caution money ek security deposit hota hai jo seller bidding options open karne ke liye bank system me block karta hai. Billing payment aapki actual supply invoices ka cash settlement hota hai jo buyer dwara product delivery accept hone ke baad milta hai.

### Q15: Bank change karne ke baad old pending bills ka payment kis account me aayega?
Jo bills naya bank profile link hone aur PFMS verification complete hone se pehle sanction ho chuke the, unka payment purane bank me hi transfer hota hai. Naye generate hone wale bill payments updated bank account me clear honge.

---

## Related Knowledge Articles

* **[GeM Invoice Generate Kaise Kare](/posts/gem-invoice-generate-kaise-kare):** Detailed guide on preparing tax invoices and bills on GeM.
* **[GeM Payment Kab Milta Hai](/posts/gem-payment-kab-milta-hai):** Detailed analysis of payment cycles, terms, and auto-CRAC guidelines.
* **[GeM ePBG Bank Guarantee Rules & Refund Process](/posts/gem-epbg-bank-guarantee-rules-refund):** Rules on bank guarantees and online SFMS verification.

---

## Your Next Knowledge Journey

<div class="knowledge-journey-container">
  <div class="journey-step previous-step">
    <span class="journey-label">Previous Step</span>
    <strong><a href="/posts/gem-invoice-generate-kaise-kare">Invoice Generation Guide</a></strong>
  </div>
  <div class="journey-arrow">↓</div>
  <div class="journey-step current-step">
    <span class="journey-label">Current Guide</span>
    <strong>Payment & Bill Tracking</strong>
  </div>
  <div class="journey-arrow">↓</div>
  <div class="journey-step next-step">
    <span class="journey-label">Next Step</span>
    <strong><a href="/posts/gem-payment-kab-milta-hai">Understanding Payment Timelines</a></strong>
  </div>
</div>

---

## SahayakAI Tools CTA Block

<div class="extension-cta-box">
  <h3>🧩 Monitor Your Payments Automatically</h3>
  <p>Apne bills aur payment release status ko bina kisi hassle ke track karne ke liye aaj hi use karein hamara free <strong>SahayakAI Payment Tracker Extension</strong> jo aapko real-time browser alerts deta hai.</p>
</div>

---

## Official Reference Links

* **Government e Marketplace Official Portal:** [gem.gov.in](https://gem.gov.in)
* **Public Financial Management System Official Link:** [pfms.nic.in](https://pfms.nic.in)
* **MSME Samadhaan Official Dispute Portal:** [samadhaan.msme.gov.in](https://samadhaan.msme.gov.in)

---

## Platform Disclaimer

Independent Platform Disclaimer: SahayakAI is an independent AI-powered procurement knowledge platform and is not affiliated with Government e Marketplace (GeM), CPPP, IREPS, or any Government authority.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://sahayakai.co.in/posts/gem-payment-status-kaise-check-kare#article",
      "headline": "GeM Payment Status Kaise Check Kare? Online Tracking & Bank Advisory Steps",
      "description": "Government e Marketplace (GeM) portal par payment status check karne ka complete guide. GeM bills processing tracking, Bank Advisory checks, PFMS sync, aur payment delayed warning solutions.",
      "datePublished": "2026-07-20",
      "dateModified": "2026-07-20",
      "author": {
        "@type": "Organization",
        "name": "SahayakAI"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SahayakAI",
        "url": "https://sahayakai.co.in"
      }
    },
    {
      "@type": "HowTo",
      "@id": "https://sahayakai.co.in/posts/gem-payment-status-kaise-check-kare#howto",
      "name": "GeM Payment Status Tracking Process",
      "description": "Step-by-step guide to track payment status, bill processing, and bank advisory on GeM and PFMS portal.",
      "totalTime": "PT30M",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Login and Navigate",
          "text": "Login to the GeM seller portal and navigate to Dashboard -> Orders -> Contracts."
        },
        {
          "@type": "HowToStep",
          "name": "Check CRAC",
          "text": "Verify if the buyer has generated the CRAC (Consignee Receipt and Acceptance Certificate)."
        },
        {
          "@type": "HowToStep",
          "name": "Access Invoice Bill Status",
          "text": "Go to the view bill tab to inspect current billing stages (e.g. Sent to PFMS, Paid)."
        },
        {
          "@type": "HowToStep",
          "name": "Verify via PFMS Portal",
          "text": "Use the bank account details on PFMS portal to download the digital Bank Advisory and retrieve UTR."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://sahayakai.co.in/posts/gem-payment-status-kaise-check-kare#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "GeM portal par bill status check karne ke main platforms kaunse hain?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Aap GeM Seller Dashboard par 'Orders' -> 'Bill Details' section me ja kar live status dekh sakte hain ya Public Financial Management System (PFMS) official portal se."
          }
        },
        {
          "@type": "Question",
          "name": "Bank Advisory Number kya hota hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bank Advisory Number ek unique serial identification code hai jo PFMS system tab generate karta hai jab payment bank ko transfer kiya jata hai."
          }
        }
      ]
    }
  ]
}
</script>
