# ASTRA ENGINE Validation Audit Report

**Execution Timestamp:** Wed Jul 22 2026 15:54:25 GMT+0530 (India Standard Time)
**Verdict:** ⚠️ WARNING

### Audit Summary
| Metric | Count |
| :--- | :--- |
| Engines Executed | 1 |
| Total Errors | 0 |
| Total Warnings | 6 |
| Execution Time | 1126 ms |

### Detailed Results
#### Engine: `registry-validation-engine` (WARNING)
*   **Errors:** 0
*   **Warnings:** 6
*   **Execution Time:** 2 ms

##### Warnings Evidence:
-   **[CATEGORY_MISMATCH]** Registry item "cppp-portal-registration-tender-search" uses category "Government Procurement Hub" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[CATEGORY_MISMATCH]** Registry item "gem-login-kaise-kare" uses category "GeM Account Management" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[CATEGORY_MISMATCH]** Registry item "gem-registration-kaise-kare" uses category "GeM Seller Onboarding" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[CATEGORY_MISMATCH]** Registry item "gem-seller-registration-kaise-kare" uses category "GeM Seller Onboarding" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[CATEGORY_MISMATCH]** Registry item "ireps-railway-tender-bidding-guide" uses category "Government Procurement Hub" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[CATEGORY_MISMATCH]** Registry item "use-ai-summarize-government-tender-pdfs" uses category "Automation" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)

