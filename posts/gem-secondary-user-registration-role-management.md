---
title: 'GeM Secondary User Registration & Role Management'
summary: 'Learn how to securely delegate GeM portal tasks using Secondary User Registration. Understand role management, access control, and best practices for teams handling government procurement in 2026.'
date: '2026-07-28'
author: 'SahayakAI Team'
category: 'gem-registration'
---

# GeM Secondary User Registration & Role Management

As your business scales on the Government e-Marketplace (GeM), managing the portal solo becomes impractical. From monitoring daily bids and uploading catalogs to generating invoices and responding to incidents, the workload demands a team. However, sharing your master login credentials is a massive security risk and violates standard digital compliance.

The solution in the GeM v4 ecosystem is **Secondary User Registration**. This feature allows the Primary Seller (the account owner) to create sub-accounts with restricted, role-based access for employees. In this guide, we cover the complete process of setting up and managing secondary users in 2026.

## Why Use Secondary Users?

Relying on a single login creates bottlenecks and security vulnerabilities. Implementing role-based access offers:
- **Security:** Prevents unauthorized access to sensitive financial data (like bank details and PAN).
- **Efficiency:** Allows parallel processing. One user can upload catalogs while another participates in bids.
- **Accountability:** Every action on the portal is tracked and linked to the specific secondary user's ID, providing a clear audit trail.

> 📖 **GFR Rule Reference:** Adhering to strict IT security protocols, government platforms require clear audit trails for all financial and contractual actions. Utilizing secondary users aligns with these enterprise security standards.

## Understanding GeM Roles

Before creating a user, you must understand the specific roles available on the portal. GeM utilizes Principle of Least Privilege, meaning you should only give access necessary for the user's specific job.

| Role Name | Access Level | Ideal For |
|-----------|--------------|-----------|
| **Catalog Manager** | Can upload, edit, and manage product/service catalogs. Cannot bid or accept orders. | Data entry staff, inventory managers |
| **Bid Participant** | Can search, view, and participate in Bids and Reverse Auctions. Cannot alter catalogs. | Sales team, tender executives |
| **Order Manager** | Can view orders, generate invoices, update dispatch details, and track CRAC. | Logistics, billing, and fulfillment teams |
| **Incident Manager**| Can view, raise, and respond to incidents and show cause notices. | Legal or compliance officers |

## Step-by-Step Checklist for Creating a Secondary User

Follow this process to add a new secondary user securely.

**Step 1: Login as Primary User**
Log into the GeM portal using the master credentials (the ID linked to the company PAN).

**Step 2: Navigate to User Management**
Go to `My Account` and select `Secondary User Management` from the dashboard menu.

**Step 3: Initiate User Creation**
Click on `Add New Secondary User`. You will need the employee's official details.

**Step 4: Enter Details and Aadhaar Validation**
Input the employee's Name, official Email ID, and Mobile Number. 
*Crucial Step:* GeM requires Aadhaar-based e-KYC for all secondary users to ensure traceability. Enter the employee's Aadhaar number and validate via the OTP sent to their Aadhaar-linked mobile number.

**Step 5: Assign Roles**
Select the specific role(s) from the dropdown list (e.g., Catalog Manager). You can assign multiple roles to a single user if necessary.

**Step 6: Activation**
Once submitted, an activation link is sent to the employee's official email address. They must click the link and set their password to activate the account.

> ⚠️ **Critical Warning:** Never assign full administrative rights to a secondary user unless absolutely necessary. If a secondary user commits an infraction (e.g., uploading counterfeit catalogs), the GeM administration will penalize the Primary Account.

## Best Practices for Role Management

To maintain a secure and efficient GeM operation, implement these best practices:
1. **Immediate Deactivation upon Exit:** The moment an employee resigns or is terminated, immediately revoke their access in the 'Secondary User Management' tab. 
2. **Regular Audits:** Monthly review the list of active secondary users. Ensure their assigned roles still match their current job responsibilities.
3. **Official Emails Only:** Always use company domain emails (`name@yourcompany.com`) for secondary users, avoiding generic Gmail or Yahoo accounts.

## Realistic Scenario: Managing a High-Volume Tender Desk

**Context:** Your company wins multiple high-value IT hardware contracts monthly and needs a streamlined workflow.
**Implementation:**
- You (Primary User) retain control over profile settings and bank accounts.
- You assign **User A** (Sales Lead) the *Bid Participant* role to hunt and apply for upcoming tenders.
- You assign **User B** (Warehouse Manager) the *Catalog Manager* and *Order Manager* roles to update stock and process dispatches.
- You assign **User C** (Accountant) the *Order Manager* role specifically for generating e-invoices and tracking PFMS payments.

**Outcome:** Your GeM operations run concurrently without any single team member having unsafe access to the entire business profile.

## Frequently Asked Questions (FAQs)

**Q1: Is there a limit to how many secondary users I can create?**
*Answer:* As of the 2026 GeM policy, there is no strict limit on the number of secondary users, but it is advised to keep the list lean for security purposes.

**Q2: Can a secondary user change the company's bank account details?**
*Answer:* No. Core profile settings, including PAN validation and Bank Account modifications, are strictly restricted to the Primary User.

**Q3: What happens if a secondary user's Aadhaar is not linked to a mobile number?**
*Answer:* The Aadhaar validation will fail. The employee must visit an Aadhaar Seva Kendra to update their mobile number before they can be registered on GeM.

**Q4: Can one Aadhaar be used for secondary user registration across multiple companies?**
*Answer:* Yes, an individual can act as a secondary user for different primary sellers, provided the respective primary sellers authorize them.

## Key Takeaways

- Secondary User Registration is essential for securely scaling your operations on GeM.
- Utilize Role-Based Access Control to restrict employees to only the functions they need (Bidding, Cataloging, Orders).
- Aadhaar e-KYC is mandatory for all secondary users to ensure accountability.
- The Primary Account holder is ultimately responsible for all actions taken by secondary users.

To learn more about optimizing your team's workflow on GeM, explore our resources at [https://sahayakai.co.in/knowledge/](https://sahayakai.co.in/knowledge/).
