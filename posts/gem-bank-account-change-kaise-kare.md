---
title: "GeM Bank Account Change Kaise Kare? IFSC & PFMS Verification Steps"
summary: "GeM portal par bank account details aur IFSC code change karne ka step-by-step tarika. PFMS validation, cancelled cheque upload aur payment gateway integration ka details."
date: "2026-07-20"
updatedDate: "2026-07-20"
author: "SahayakAI Editorial Team"
category: "compliance-policy"
layout: "ClusterArticle"
reviewer: "Procurement Desk"
version: "1.0"
readingTime: "11 mins"
sources:
  - "https://gem.gov.in"
  - "https://pfms.nic.in"
cta: "Try Free Verification Tools"
keyTakeaways:
  - "New bank account details add karne par validation PFMS portal se online complete hoti hai, jisme 24-72 business hours lag sakte hain."
  - "New account verify karne ke liye company name aur account number printed wala cancelled cheque ya bank certificate upload karna mandatory hai."
  - "Bidding ke dauran bank change karne se bachein kyunki PFMS validation pending hone par transaction functionality temp lock ho sakti hai."
faqs:
  - q: "GeM portal par bank verification me kitna samay lagta hai?"
    a: "GeM bank details change karne ke baad PFMS verification standard rules ke anusaar 24 se 72 hours me complete ho jati hai."
  - q: "Kya bank change hone par dynamic caution money profile block hoti hai?"
    a: "Haan, jab tak PFMS verification pending rehta hai tab tak new transactions temporary hold par chali jati hain."
relatedTools:
  - "bank-ifsc-validator"
  - "pfms-status-checker"
relatedArticles:
  - "gem-profile-update-kaise-kare"
  - "gem-epbg-bank-guarantee-rules-refund"
  - "fees-explained"
related_entities: ['PFMS', 'IFSC Verification', 'Bank Cheque', 'GeM Payment']
related_articles: ['gem-profile-update-kaise-kare', 'gem-epbg-bank-guarantee-rules-refund', 'fees-explained']
user_journey_stage: 'Profile'
intent: 'HowTo'
difficulty: 'Intermediate'
---

<div class="hero-badge-container">
  <span class="badge category-badge">GeM Profile Management</span>
  <span class="badge verified-badge">✓ Verified 2026</span>
  <span class="badge time-badge">⏱️ 11 min read</span>
  <span class="badge difficulty-badge">📊 Difficulty: Intermediate</span>
  <span class="badge update-badge">📅 Updated: July 2026</span>
</div>

# GeM Bank Account Change Kaise Kare? (Updating bank IFSC details, PFMS verification, payment gateway integration)

Government e-Marketplace (GeM Portal) par har seller ko payments aur transactions smooth chalane ke liye ek validated Bank Account link karna zaroori hota hai. Agar aapne apna bank account badla hai, bank merge hone se aapka **IFSC Code** change ho gaya hai, ya business name mismatch ki vajah se transaction issues aa rahe hain, toh aapko GeM profile me bank details update karne honge. 

GeM portal par bank account badalne ka process automatic aur online hai, lekin isme **PFMS (Public Financial Management System)** verification involved hota hai. Is guide me hum aapko step-by-step batayenge ki kaise bina kisi galti ke aap GeM par apna Bank Account details update kar sakte hain.

---

<div class="quick-answer-box">
  <h3>⚡ Quick Answer: GeM Bank Change Process Summary</h3>
  <table>
    <tr>
      <td><strong>Problem</strong></td>
      <td>IFSC merge, bank change ya payment hold errors ke chalte portal par account badalna.</td>
    </tr>
    <tr>
      <td><strong>Core Process</strong></td>
      <td>GeM Profile > Bank Details section me naye details fill karein, printed cancelled cheque scan upload karein aur PFMS validation trigger karein.</td>
    </tr>
    <tr>
      <td><strong>Verification Time</strong></td>
      <td>PFMS dashboard verification me 24 se 72 hours (business days) ka time lagta hai.</td>
    </tr>
    <tr>
      <td><strong>Mandatory Document</strong></td>
      <td>Cancelled Cheque (jispe Account Holder Name, A/C number aur IFSC printed ho) ya Bank Passbook Front Page.</td>
    </tr>
    <tr>
      <td><strong>Caution Money Impact</strong></td>
      <td>Naya bank verified hote hi payment gateway interface se caution money portal updates sync karne honge.</td>
    </tr>
  </table>
</div>

---

## ⚡ At a Glance Dashboard

| Parameter | Details & Requirements |
|---|---|
| **Process Time** | 24 - 72 Business Hours (PFMS verification time) |
| **Difficulty Level** | Intermediate (Profile Lock & verification checks) |
| **Security Verification** | Aadhaar OTP / DSC validation mandatory |
| **Integrations** | PFMS Portal Validation & Bank Merchant Payment Gateway |
| **Mandatory Document File Size** | Under 2MB (PDF or JPEG format only) |
| **Recommended Free Tool** | Verification delay avoid karne ke liye **SahayakAI IFSC Validator** use karein. |

---

## 📌 Table of Contents
1. [Introduction](#introduction)
2. [Who Should Read This Guide](#who-should-read-this-guide)
3. [Prerequisites](#prerequisites)
4. [Required Documents Checklist](#required-documents-checklist)
5. [Eligibility Criteria Table](#eligibility-criteria-table)
6. [Step-by-Step Guide for Bank Change](#step-by-step-guide-for-bank-change)
7. [Decision Tree: PFMS Status Outcomes](#decision-tree-pfms-status-outcomes)
8. [Warning Callout Box](#warning-callout-box)
9. [Comparison Table: Old manual system vs New PFMS Online system](#comparison-table-old-manual-system-vs-new-pfms-online-system)
10. [AI Search / RAG Target Block](#ai-search--rag-target-block)
11. [Structured FAQs (15 Detailed Q&As)](#structured-faqs-15-detailed-qas)
12. [Related Knowledge Articles](#related-knowledge-articles)
13. [Your Next Knowledge Journey](#your-next-knowledge-journey)
14. [SahayakAI Tools CTA Block](#sahayakai-tools-cta-block)
15. [Official Reference Links](#official-reference-links)
16. [Platform Disclaimer](#platform-disclaimer)

---

## Introduction

GeM portal par primary seller profile setup karte waqt hum jo bank account link karte hain, usi se hamara **Caution Money Deposit** manage hota hai aur portal payments process hote hain. Kai baar banks ke merge hone (jaise Syndicate Bank to Canara Bank, ya Oriental Bank of Commerce to PNB) ki vajah se **IFSC code** invalid ho jata hai. Aisi sthiti me GeM par payout rukne ke chances hote hain. Sahi samay par bank details ko edit karna, correct documents scan karke verify karwana aur Public Financial Management System (PFMS) ke rules ke mutabik account validate karwana zaroori hai.

---

## Who Should Read This Guide

* **GeM Primary Sellers / Proprietors:** Jo apna payout account badalna chahte hain.
* **Finance Officers / Accounts Team:** Jo sarkari payment integration aur bank guarantees/caution money manage karte hain.
* **Sellers Affected by Bank Mergers:** Jinke banks merge ho chuke hain aur IFSC code update karna compulsory ho gaya hai.

---

## Prerequisites

Bina kisi failure ke bank update complete karne ke liye niche likhi requirements poori honi chahiye:
1. **Primary Seller Credentials:** GeM portal ka valid User ID aur Password.
2. **Linked Mobile & Email ID:** Aadhaar-linked registered mobile number (OTP authentication ke liye).
3. **New Bank Details:** Sahi IFSC Code, Account Number, Branch Name aur Account Type.
4. **Active Internet Banking:** Agar payment gateway par micro-deposit check karna pade.

---

## Required Documents Checklist

* [ ] **Cancelled Cheque Copy:** Cheque par company/firm ka name, account number aur new IFSC code clear printed hona chahiye. (Handwritten ya temporary check book nahi chalegi).
* [ ] **Bank Passbook/Account Statement:** Agar cheque par firm name printed nahi hai, toh bank branch manager dwara stamped aur signed bank statement/passbook front page scan upload karein.
* [ ] **Entity PAN Card:** Proprietorship ke case me individual PAN, baaki sabhi firms ke liye business/entity PAN.

---

## Eligibility Criteria Table

| Entity Type | Eligible Account Type | Document Requirement | Name Match Requirement |
| :--- | :--- | :--- | :--- |
| **Proprietorship** | Savings or Current Account | Self Name / Trade Name Cheque | PAN & Aadhaar name matching |
| **Partnership/LLP** | Current Account Only | Partnership Name Cheque | Registered Partnership PAN Name |
| **Private Limited / Ltd** | Current Account Only | Company Name Printed Cheque | Company PAN Name |
| **PSU / Government Dept** | Current Account / Treasury A/C | Authorized Signatory Cheque | Entity Registration Name |

---

## Step-by-Step Guide for Bank Change

Aap niche diye steps ko follow karke GeM account details badal sakte hain:



### Detailed Execution Steps:

#### Step 1: Login to GeM Portal
Sabse pehle [gem.gov.in](https://gem.gov.in) par jayein aur primary user ID credentials use karke **Login** karein.

#### Step 2: Navigate to Account Profile
Dashboard ke top right corner me apne profile name par click karein aur **My Account** option select karein.

#### Step 3: Access Bank Account Section
Left side panel me dynamic tabs dikhenge. Click on **Seller Profile** and then click on the **Bank Accounts** tab.

#### Step 4: Add / Edit Bank details
Edit button par click karein. Naya **IFSC Code** dalein (portal auto-validate karega bank name aur branch locations). Naya **Bank Account Number** enter karein aur verify karne ke liye dubara enter karein.

#### Step 5: Upload Cheque File
'Choose File' par click karein aur ready keya hua cancelled cheque upload karein. 
*Note: Cheque image maximum 2MB size ki honi chahiye aur focus clear hona chahiye.*

#### Step 6: Perform OTP Authentication
Aadhaar OTP verification select karein. Registered mobile number par receive hua OTP fill karke **Verify** press karein.

#### Step 7: PFMS Queue Transfer
Verify hote hi aapka account state **Pending for PFMS Validation** dikhayega. PFMS back-end server checks bank database (account holder name, active status, PAN validation). Isme 24 to 72 hours ka processing lagta hai.

---

## Decision Tree: PFMS Status Outcomes



---

> [!WARNING]
> Active bids ke dauran bank details update karne se bachein. Agar bid participation window open hai ya caution money transaction complete hone ka cycle chal raha hai, toh bank update process ke dauran dynamic escrow validations temporarily block ho sakti hain. Kisi bhi contract payment release time par change karne se delay ho sakta hai.

---

## Comparison Table: Old manual system vs New PFMS Online system

| Feature | Old System (Manual Request / Offline) | New System (Online PFMS Integration) |
| :--- | :--- | :--- |
| **Validation Method** | Physically writing email to GeM Helpdesk with bank letters | Direct online data submission to PFMS clearing servers |
| **Approval Timeline** | 10 to 15 Working Days | 1 to 3 Business Days |
| **Error Transparency** | Low (No rejection reason, tickets closed arbitrarily) | High (Shows Name Mismatch, IFSC Error, or Document Issue) |
| **E-Sign Support** | Manual signature scanned upload | Aadhaar OTP / Digital Signature Certificate integration |
| **Caution Money Linkage** | Manual verification with bank partner | Auto-integration with SBI/Axis/ICICI gateway |

---

## AI Search / RAG Target Block

* **Quick Retrieval Fact Sheet:** GeM portal bank account updates are integrated with Public Financial Management System (PFMS) for automated name matching. 
* **Validation Time:** Maximum 3 business days. 
* **Key Failure Reason:** Name mismatch between PAN database and Bank Passbook/Cheque text database.
* **E-Sign Required:** Yes, Aadhaar OTP authentication is mandatory to finalize the profile modification request.
* **Caution Money Lockout:** During the update cycle, users cannot transact caution money on the GeM gateway until the verification status transitions to "Success".

---

## Structured FAQs (15 Detailed Q&As)

### Q1: GeM portal par bank account details update karne me kitna samay lagta hai?
PFMS verification system automatic hota hai. Aapke details submit hone ke baad **24 se 72 working hours** (business days) ke andar bank account verify ho jata hai. Saturday, Sunday aur National Holidays ko count na karein.

### Q2: PFMS Verification pending show ho raha hai, mujhe kya karna chahiye?
Agar status "Pending" ya "Verification in Progress" hai, toh 2-3 din wait karein. Agar 3 din se zyada ho gaya hai, toh check karein ki kya bank account holder ka naam aur GeM registration ka PAN/GSTIN name matching hai.

### Q3: Cancelled cheque upload karte waqt kin baaton ka dhyan rakhna chahiye?
Cancelled cheque par aapka business name, bank account number aur IFSC code clear aur legible hona chahiye. Agar cheque par naam printed nahi hai, toh bank passbook ka first page ya certified bank statement upload karein. File size 2MB se kam aur format PDF/JPEG hona chahiye.

### Q4: Kya hum ek se zyada bank account GeM profile me add kar sakte hain?
GeM portal par primary transactions ke liye ek hi primary bank account active reh sakta hai. Halanki, secondary purposes ya specific payments ke liye dashboard par support options rehte hain, lekin main payment disbursement primary bank account me hi hota hai.

### Q5: Bank merge hone ki wajah se IFSC code badal gaya hai, isko kaise update karein?
Sabse pehle GeM profile -> Bank Accounts section me jayein. Purane account ko edit karke naya IFSC code aur account number enter karein, naya cancelled cheque upload karein aur PFMS validation process dobara trigger karein.

### Q6: PFMS validation fail kyu hota hai?
Aamtaur par validation fail hone ke teen bade reasons hain:
* Cheque copy clear nahi hona ya signature verification mismatch.
* Bank Account holder name aur PAN card register database me spelling mismatch hona.
* Bank account active status me na hona (dormant/closed).

### Q7: Bank account change status "Rejected" aane par kya karein?
Rejection reason ko seller dashboard par check karein. Correct bank documents aur sahi IFSC code ke sath details ko re-enter karein aur e-sign/OTP verify karke dubara submit karein.

### Q8: Kya bank account change process ke dauran main bids me participate kar sakta hoon?
Bids me participate kiya ja sakta hai, lekin caution money add/modify karne me samasya ho sakti hai jab tak bank status verify na ho jaye. Isliye bidding phase ke dauran bank details update karne se bachein.

### Q9: Caution money account aur Primary payout account alag-alag ho sakte hain?
Haan, caution money account aap kisi bhi designated bank (SBI, ICICI, HDFC, Axis, etc.) ke sath open kar sakte hain jo GeM integration support karta hai. Lekin, default billing payout direct primary bank account me transfer hota hai.

### Q10: IFSC search feature portal par kaam nahi kar raha hai, manually kaise dalein?
Agar search feature work nahi kar raha, toh valid 11-digit IFSC numeric-alphabetical format me fill karein. Check karein ki fifth character '0' (zero) hai ya nahi.

### Q11: Bank verification ke liye e-sign ya DSC mandatory hai kya?
Bank account update details verify karne ke liye primary user ke Aadhaar OTP ya DSC (Digital Signature Certificate) ke zariye authenticate karna mandatory hai.

### Q12: Payment Gateway integration status "Pending for Approval" kya hai?
Bank side integration jab chal raha hota hai, tab portal merchant gateway status pending dikhata hai. 24 hours ke baad bank confirmation aate hi yeh dynamic gateway active ho jata hai.

### Q13: Kya savings account use kar sakte hain ya current account zaroori hai?
Proprietorship firms savings account use kar sakti hain agar woh unke business PAN ke sath mapped hai. Lekin Private Limited, Partnership ya LLP business entities ke liye current account hi mandatory hai.

### Q14: PFMS verification fee kitni hoti hai?
GeM portal par bank validation ya PFMS verification ke liye koi fee nahi lagti, yeh service bilkul free hai.

### Q15: Bank update hone ke baad pehle se chal rahe purchase orders ka payment kis account me aayega?
Jo purchase orders bank update hone se pehle issue hue the aur jinki CRAC (Consignee Receipt and Acceptance Certificate) generate ho chuki hai, unka payment purane mapped account me hi ja sakta hai. Naye order placements new bank account me link hote hain.

---

## Related Knowledge Articles

* **[GeM Profile Update Kaise Kare](/posts/gem-profile-update-kaise-kare):** Details on updating PAN, GSTIN, and organizational structure.
* **[GeM ePBG Bank Guarantee Rules & Refund Process](/posts/gem-epbg-bank-guarantee-rules-refund):** Rules on bank guarantees and online SFMS verification.
* **[GeM Bidding Fees Explained](/posts/fees-explained):** Breakdown of caution money structure and transactional charges.

---

## Your Next Knowledge Journey

<div class="knowledge-journey-container">
  <div class="journey-step previous-step">
    <span class="journey-label">Previous Step</span>
    <strong><a href="/posts/gem-profile-update-kaise-kare">Profile Update Guide</a></strong>
  </div>
  <div class="journey-arrow">↓</div>
  <div class="journey-step current-step">
    <span class="journey-label">Current Guide</span>
    <strong>Bank Account Change</strong>
  </div>
  <div class="journey-arrow">↓</div>
  <div class="journey-step next-step">
    <span class="journey-label">Next Step</span>
    <strong><a href="/posts/gem-epbg-bank-guarantee-rules-refund">ePBG Submission Rules</a></strong>
  </div>
</div>

---

## SahayakAI Tools CTA Block

<div class="extension-cta-box">
  <h3>🧩 Automate Your Procurement Verifications</h3>
  <p>Apne bank details update karne se pehle correct bank branch branch detail track karne ke liye hamare free <strong>SahayakAI Bank Verification Assistant</strong> ka upayog karein aur PFMS validation issues ko skip karein.</p>
</div>

---

## Official Reference Links

* **Government e Marketplace Official Portal:** [gem.gov.in](https://gem.gov.in)
* **Public Financial Management System Official Link:** [pfms.nic.in](https://pfms.nic.in)
* **Reserve Bank of India IFSC Search Database:** [rbi.org.in](https://rbi.org.in)

---

## Platform Disclaimer

Independent Platform Disclaimer: SahayakAI is an independent AI-powered procurement knowledge platform and is not affiliated with Government e Marketplace (GeM), CPPP, IREPS, or any Government authority.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://sahayakai.co.in/posts/gem-bank-account-change-kaise-kare#article",
      "headline": "GeM Bank Account Change Kaise Kare? IFSC & PFMS Verification Steps",
      "description": "GeM portal par bank account details aur IFSC code change karne ka step-by-step tarika. PFMS validation, cancelled cheque upload aur payment gateway integration ka details.",
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
      "@id": "https://sahayakai.co.in/posts/gem-bank-account-change-kaise-kare#howto",
      "name": "GeM Bank Account Change Process",
      "description": "Step-by-step guide to change and update bank account details on Government e Marketplace portal.",
      "totalTime": "PT48H",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Login to GeM Account",
          "text": "Navigate to gem.gov.in and login to your seller profile using primary user credentials."
        },
        {
          "@type": "HowToStep",
          "name": "Access Bank Details",
          "text": "Go to Seller Profile dashboard, click on the Bank Accounts section."
        },
        {
          "@type": "HowToStep",
          "name": "Enter Details and Upload Cheque",
          "text": "Type the new IFSC Code and Account number. Upload a scan of your cancelled cheque under 2MB size."
        },
        {
          "@type": "HowToStep",
          "name": "OTP Verification and PFMS Queue",
          "text": "Complete Aadhaar OTP verification to submit details for automated PFMS status check."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://sahayakai.co.in/posts/gem-bank-account-change-kaise-kare#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "GeM portal par bank account details update karne me kitna samay lagta hai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "PFMS verification system automatic hota hai. Aapke details submit hone ke baad 24 se 72 working hours (business days) ke andar bank account verify ho jata hai."
          }
        },
        {
          "@type": "Question",
          "name": "PFMS Verification pending show ho raha hai, mujhe kya karna chahiye?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Agar status Pending hai toh 2-3 din wait karein. Uske baad bank name aur PAN card/GSTIN validation check karein."
          }
        }
      ]
    }
  ]
}
</script>
