---
title: 'PAN, GST, Aadhaar & Bank Requirements for GeM Registration'
summary: 'A deep dive into the mandatory PAN, GST, Aadhaar, and Bank account requirements for successful GeM seller registration in 2026.'
date: '2026-07-28'
author: 'SahayakAI Team'
category: 'gem-registration'
---

# PAN, GST, Aadhaar & Bank Requirements for GeM Registration

The Government e-Marketplace (GeM) operates on a foundation of trust and transparency. To ensure that only legitimate businesses engage in public procurement, the GeM v4 portal employs rigorous, automated validation checks against central government databases. Understanding the specific requirements for PAN, GST, Aadhaar, and Bank details is crucial for a smooth registration process. This guide breaks down these four pillars of GeM seller registration for 2026.

> 📌 **Important Note:** GeM is an integrated platform. It communicates directly with the UIDAI (Aadhaar), Income Tax Department (PAN), GSTN (GST), and PFMS (Banking) to verify your data instantly. Data accuracy is non-negotiable.

## 1. Aadhaar Requirements: The Key to Identity

Aadhaar is primarily used to authenticate the 'Primary User'—the individual authorized to manage the GeM account on behalf of the business.

### Why is Aadhaar Required?
*   To establish the definitive identity of the person registering the organization.
*   To enable secure e-signing of documents and bids in the future.

### Crucial Aadhaar Prerequisites
1.  **Mobile Linkage:** Your Aadhaar *must* be linked to an active mobile number. GeM sends an OTP to this number for identity verification during step one of registration.
2.  **Name Matching:** The name entered on the GeM portal must exactly match the name on the Aadhaar card.
3.  **Virtual ID (VID):** GeM allows the use of Aadhaar Virtual ID (VID) for enhanced privacy during the registration process.

> ⚠️ **Critical Warning:** If your Aadhaar is not linked to your current mobile number, you cannot use the Aadhaar verification method. You must either update it at an Aadhaar center or use the alternative Personal PAN verification.

## 2. PAN Requirements: Establishing Tax Identity

The Permanent Account Number (PAN) is vital for validating both the Primary User (if Aadhaar is not used) and the business entity itself.

### Personal PAN vs. Business PAN
*   **Proprietorship:** The personal PAN of the proprietor serves as the business PAN.
*   **Companies/Partnerships/LLPs:** The organization must have its own distinct business PAN.

### Key Validation Checks
*   GeM APIs instantly verify the PAN against the Income Tax database.
*   The business name on GeM must perfectly align with the name registered against the business PAN. Discrepancies (e.g., "Tech Solutions" vs. "Tech Solutions Pvt Ltd") will result in validation failure.

## 3. GST Requirements: Ensuring Tax Compliance

Goods and Services Tax (GST) registration is the bedrock of commercial validation on the GeM portal. It confirms that your business is legally recognized and tax-compliant.

### Is GST Mandatory?
Yes, for the vast majority of sellers, an active GSTIN is mandatory. Only a few specific categories (like unregistered artisans under specific schemes) might get exemptions.

### Important GST Considerations for GeM
1.  **Active Status:** Your GSTIN must be 'Active'. Suspended or cancelled GST numbers will block your GeM account.
2.  **Return Filing Compliance:** GeM periodically checks your GST return filing status. Continuous non-filing can lead to your GeM profile being flagged or temporarily suspended.
3.  **Address Sync:** The principal place of business registered on your GSTIN must match the registered address you provide on GeM.

| Document Pillar | Database Checked | Purpose |
| :--- | :--- | :--- |
| **Aadhaar** | UIDAI | Primary User Authentication |
| **PAN** | Income Tax Dept (CBDT) | Entity Tax Validation |
| **GSTIN** | GST Network (GSTN) | Business Legality & Compliance |
| **Bank Account** | PFMS / Bank APIs | Financial Routing & Credibility |

## 4. Bank Account Requirements: Routing Your Payments

A validated bank account is essential for receiving payments from government buyers and for any necessary mandate creations.

### Bank Account Specifications
*   **Account Type:** It is highly recommended (and often mandatory for non-proprietors) to use a Current Account in the name of the business.
*   **Exact Name Match:** The account name must match the business name on your PAN and GST certificates.

### The Validation Process
GeM uses a penny-drop validation method. When you enter your account details (Account Number, IFSC), the system will initiate a micro-transaction (usually Re. 1) to verify that the account is active and the beneficiary name matches the registered business name.

> 📖 **GFR Rule Reference:** Strict validation of bank details and tax credentials ensures adherence to GFR 2017 principles regarding the prevention of fraud and ensuring payments only reach legitimate vendors.

## Frequently Asked Questions (FAQs)

**Q1: Can I use my personal savings account for GeM registration?**
A: If you are a sole proprietor, you might be able to use a personal savings account, though a current account is preferred. For partnerships and companies, a business current account is mandatory.

**Q2: What should I do if my PAN validation fails due to a name mismatch?**
A: You must ensure the name you are entering on GeM exactly matches the Income Tax database. If the IT database has an error, you must correct your PAN card first before proceeding with GeM registration.

**Q3: Can I register on GeM with a provisional GST number?**
A: No, you require a fully active and approved GSTIN to complete your seller profile and start participating in bids.

**Q4: Is it safe to share Aadhaar and PAN details on GeM?**
A: Yes. GeM is a secure government portal. It uses these details only for API-based validation and does not store sensitive biometric data.

**Q5: My bank validation failed even though the details are correct. Why?**
A: This often happens if the bank's server is temporarily down, or if the exact beneficiary name on the account slightly differs from your registered business name. Double-check the exact name with your bank and try again.

## Key Takeaways

*   Aadhaar and PAN are essential for verifying the identity of the person operating the account.
*   An active, compliant GSTIN is the most critical proof of business legitimacy on GeM.
*   Bank account details must be perfectly aligned with business records to pass the automated penny-drop validation.
*   Data consistency across all four pillars (Aadhaar, PAN, GST, Bank) is the secret to a fast, hassle-free registration.
*   Ensure all mobile numbers linked to these documents are active to receive necessary OTPs.

By ensuring your PAN, GST, Aadhaar, and Bank details are accurate and synchronized, you clear the biggest hurdles in the GeM registration process, paving the way for a successful government contracting journey.
