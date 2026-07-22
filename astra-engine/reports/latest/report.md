# ASTRA ENGINE Validation Audit Report

**Execution Timestamp:** Wed Jul 22 2026 17:35:55 GMT+0530 (India Standard Time)
**Verdict:** ⚠️ WARNING

### Audit Summary
| Metric | Count |
| :--- | :--- |
| Engines Executed | 3 |
| Total Errors | 0 |
| Total Warnings | 124 |
| Execution Time | 431 ms |

### Detailed Results
#### Engine: `registry-validation-engine` (WARNING)
*   **Errors:** 0
*   **Warnings:** 6
*   **Execution Time:** 1 ms

##### Warnings Evidence:
-   **[CATEGORY_MISMATCH]** Registry item "cppp-portal-registration-tender-search" uses category "Government Procurement Hub" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[CATEGORY_MISMATCH]** Registry item "gem-login-kaise-kare" uses category "GeM Account Management" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[CATEGORY_MISMATCH]** Registry item "gem-registration-kaise-kare" uses category "GeM Seller Onboarding" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[CATEGORY_MISMATCH]** Registry item "gem-seller-registration-kaise-kare" uses category "GeM Seller Onboarding" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[CATEGORY_MISMATCH]** Registry item "ireps-railway-tender-bidding-guide" uses category "Government Procurement Hub" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[CATEGORY_MISMATCH]** Registry item "use-ai-summarize-government-tender-pdfs" uses category "Automation" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)

#### Engine: `seo-validation-engine` (WARNING)
*   **Errors:** 0
*   **Warnings:** 95
*   **Execution Time:** 5 ms

##### Warnings Evidence:
-   **[LONG_TITLE]** Article "cppp-portal-registration-tender-search" title exceeds recommended search length (76 chars, recommended <= 70) (File: `posts/cppp-portal-registration-tender-search.md`)
-   **[LONG_TITLE]** Article "gem-boq-excel-sheet-upload-errors" title exceeds recommended search length (84 chars, recommended <= 70) (File: `posts/gem-boq-excel-sheet-upload-errors.md`)
-   **[LONG_TITLE]** Article "gem-catalog-rejected-reasons" title exceeds recommended search length (72 chars, recommended <= 70) (File: `posts/gem-catalog-rejected-reasons.md`)
-   **[LONG_TITLE]** Article "gem-catalogue-upload-kaise-kare" title exceeds recommended search length (94 chars, recommended <= 70) (File: `posts/gem-catalogue-upload-kaise-kare.md`)
-   **[LONG_TITLE]** Article "gem-company-profile-edit-kaise-kare" title exceeds recommended search length (88 chars, recommended <= 70) (File: `posts/gem-company-profile-edit-kaise-kare.md`)
-   **[LONG_TITLE]** Article "gem-consignee-receipt-process" title exceeds recommended search length (71 chars, recommended <= 70) (File: `posts/gem-consignee-receipt-process.md`)
-   **[LONG_TITLE]** Article "gem-custom-bid-specifications-rules" title exceeds recommended search length (87 chars, recommended <= 70) (File: `posts/gem-custom-bid-specifications-rules.md`)
-   **[LONG_TITLE]** Article "gem-email-mobile-number-change" title exceeds recommended search length (85 chars, recommended <= 70) (File: `posts/gem-email-mobile-number-change.md`)
-   **[LONG_TITLE]** Article "gem-epbg-bank-guarantee-rules-refund" title exceeds recommended search length (73 chars, recommended <= 70) (File: `posts/gem-epbg-bank-guarantee-rules-refund.md`)
-   **[LONG_TITLE]** Article "gem-invoice-generate-kaise-kare" title exceeds recommended search length (79 chars, recommended <= 70) (File: `posts/gem-invoice-generate-kaise-kare.md`)
-   **[LONG_TITLE]** Article "gem-joint-venture-consortium-bidding" title exceeds recommended search length (72 chars, recommended <= 70) (File: `posts/gem-joint-venture-consortium-bidding.md`)
-   **[LONG_TITLE]** Article "gem-l1-price-matching-counter-offer" title exceeds recommended search length (80 chars, recommended <= 70) (File: `posts/gem-l1-price-matching-counter-offer.md`)
-   **[LONG_TITLE]** Article "gem-order-cancel-rules" title exceeds recommended search length (76 chars, recommended <= 70) (File: `posts/gem-order-cancel-rules.md`)
-   **[LONG_TITLE]** Article "gem-payment-status-kaise-check-kare" title exceeds recommended search length (74 chars, recommended <= 70) (File: `posts/gem-payment-status-kaise-check-kare.md`)
-   **[LONG_TITLE]** Article "gem-product-approval-time" title exceeds recommended search length (84 chars, recommended <= 70) (File: `posts/gem-product-approval-time.md`)
-   **[LONG_TITLE]** Article "gem-profile-update-kaise-kare" title exceeds recommended search length (114 chars, recommended <= 70) (File: `posts/gem-profile-update-kaise-kare.md`)
-   **[LONG_TITLE]** Article "gem-return-replacement-rules" title exceeds recommended search length (75 chars, recommended <= 70) (File: `posts/gem-return-replacement-rules.md`)
-   **[LONG_TITLE]** Article "gem-reverse-auction-complete-guide" title exceeds recommended search length (77 chars, recommended <= 70) (File: `posts/gem-reverse-auction-complete-guide.md`)
-   **[LONG_TITLE]** Article "gem-seller-rating-improve-kaise-kare" title exceeds recommended search length (75 chars, recommended <= 70) (File: `posts/gem-seller-rating-improve-kaise-kare.md`)
-   **[LONG_TITLE]** Article "gem-service-contract-bidding-rules" title exceeds recommended search length (87 chars, recommended <= 70) (File: `posts/gem-service-contract-bidding-rules.md`)
-   **[LONG_TITLE]** Article "gem-tender-search-guide" title exceeds recommended search length (80 chars, recommended <= 70) (File: `posts/gem-tender-search-guide.md`)
-   **[LONG_TITLE]** Article "gem-warranty-claim-process" title exceeds recommended search length (82 chars, recommended <= 70) (File: `posts/gem-warranty-claim-process.md`)
-   **[LONG_TITLE]** Article "ireps-railway-tender-bidding-guide" title exceeds recommended search length (79 chars, recommended <= 70) (File: `posts/ireps-railway-tender-bidding-guide.md`)
-   **[LONG_TITLE]** Article "what-is-emd-in-gem" title exceeds recommended search length (74 chars, recommended <= 70) (File: `posts/what-is-emd-in-gem.md`)
-   **[SHORT_DESCRIPTION]** Article "bid-participation-rules" has a short description (42 chars, recommended >= 50) (File: `posts/bid-participation-rules.md`)
-   **[SHORT_DESCRIPTION]** Article "bid-splitting-rules" has a short description (38 chars, recommended >= 50) (File: `posts/bid-splitting-rules.md`)
-   **[SHORT_DESCRIPTION]** Article "common-errors" has a short description (32 chars, recommended >= 50) (File: `posts/common-errors.md`)
-   **[SHORT_DESCRIPTION]** Article "cpv-code-guide" has a short description (33 chars, recommended >= 50) (File: `posts/cpv-code-guide.md`)
-   **[SHORT_DESCRIPTION]** Article "daily-tender-monitoring" has a short description (42 chars, recommended >= 50) (File: `posts/daily-tender-monitoring.md`)
-   **[SHORT_DESCRIPTION]** Article "documents-required" has a short description (37 chars, recommended >= 50) (File: `posts/documents-required.md`)
-   **[SHORT_DESCRIPTION]** Article "earnest-money-deposit" has a short description (40 chars, recommended >= 50) (File: `posts/earnest-money-deposit.md`)
-   **[SHORT_DESCRIPTION]** Article "faqs" has a short description (23 chars, recommended >= 50) (File: `posts/faqs.md`)
-   **[SHORT_DESCRIPTION]** Article "fees-explained" has a short description (33 chars, recommended >= 50) (File: `posts/fees-explained.md`)
-   **[LONG_DESCRIPTION]** Article "gem-bank-account-change-kaise-kare" description exceeds recommended search length (171 chars, recommended <= 160) (File: `posts/gem-bank-account-change-kaise-kare.md`)
-   **[SHORT_DESCRIPTION]** Article "gem-bidding-fees" has a short description (35 chars, recommended >= 50) (File: `posts/gem-bidding-fees.md`)
-   **[SHORT_DESCRIPTION]** Article "gem-bidding-rules-handbook" has a short description (45 chars, recommended >= 50) (File: `posts/gem-bidding-rules-handbook.md`)
-   **[LONG_DESCRIPTION]** Article "gem-boq-excel-sheet-upload-errors" description exceeds recommended search length (226 chars, recommended <= 160) (File: `posts/gem-boq-excel-sheet-upload-errors.md`)
-   **[LONG_DESCRIPTION]** Article "gem-catalog-rejected-reasons" description exceeds recommended search length (182 chars, recommended <= 160) (File: `posts/gem-catalog-rejected-reasons.md`)
-   **[LONG_DESCRIPTION]** Article "gem-catalogue-upload-kaise-kare" description exceeds recommended search length (233 chars, recommended <= 160) (File: `posts/gem-catalogue-upload-kaise-kare.md`)
-   **[SHORT_DESCRIPTION]** Article "gem-category-search" has a short description (38 chars, recommended >= 50) (File: `posts/gem-category-search.md`)
-   **[LONG_DESCRIPTION]** Article "gem-company-profile-edit-kaise-kare" description exceeds recommended search length (173 chars, recommended <= 160) (File: `posts/gem-company-profile-edit-kaise-kare.md`)
-   **[LONG_DESCRIPTION]** Article "gem-consignee-receipt-process" description exceeds recommended search length (232 chars, recommended <= 160) (File: `posts/gem-consignee-receipt-process.md`)
-   **[LONG_DESCRIPTION]** Article "gem-crac-kaise-generate-hota-hai" description exceeds recommended search length (171 chars, recommended <= 160) (File: `posts/gem-crac-kaise-generate-hota-hai.md`)
-   **[LONG_DESCRIPTION]** Article "gem-custom-bid-specifications-rules" description exceeds recommended search length (217 chars, recommended <= 160) (File: `posts/gem-custom-bid-specifications-rules.md`)
-   **[LONG_DESCRIPTION]** Article "gem-email-mobile-number-change" description exceeds recommended search length (219 chars, recommended <= 160) (File: `posts/gem-email-mobile-number-change.md`)
-   **[LONG_DESCRIPTION]** Article "gem-incident-management-show-cause-reply" description exceeds recommended search length (164 chars, recommended <= 160) (File: `posts/gem-incident-management-show-cause-reply.md`)
-   **[LONG_DESCRIPTION]** Article "gem-l1-price-matching-counter-offer" description exceeds recommended search length (178 chars, recommended <= 160) (File: `posts/gem-l1-price-matching-counter-offer.md`)
-   **[SHORT_DESCRIPTION]** Article "gem-login-kaise-kare" has a short description (25 chars, recommended >= 50) (File: `posts/gem-login-kaise-kare.md`)
-   **[LONG_DESCRIPTION]** Article "gem-order-accept-kaise-kare" description exceeds recommended search length (188 chars, recommended <= 160) (File: `posts/gem-order-accept-kaise-kare.md`)
-   **[LONG_DESCRIPTION]** Article "gem-order-cancel-rules" description exceeds recommended search length (189 chars, recommended <= 160) (File: `posts/gem-order-cancel-rules.md`)
-   **[LONG_DESCRIPTION]** Article "gem-payment-kab-milta-hai" description exceeds recommended search length (200 chars, recommended <= 160) (File: `posts/gem-payment-kab-milta-hai.md`)
-   **[LONG_DESCRIPTION]** Article "gem-payment-status-kaise-check-kare" description exceeds recommended search length (183 chars, recommended <= 160) (File: `posts/gem-payment-status-kaise-check-kare.md`)
-   **[LONG_DESCRIPTION]** Article "gem-product-approval-time" description exceeds recommended search length (183 chars, recommended <= 160) (File: `posts/gem-product-approval-time.md`)
-   **[SHORT_DESCRIPTION]** Article "gem-registration-kaise-kare" has a short description (46 chars, recommended >= 50) (File: `posts/gem-registration-kaise-kare.md`)
-   **[LONG_DESCRIPTION]** Article "gem-return-replacement-rules" description exceeds recommended search length (170 chars, recommended <= 160) (File: `posts/gem-return-replacement-rules.md`)
-   **[SHORT_DESCRIPTION]** Article "gem-search-filters-explained" has a short description (47 chars, recommended >= 50) (File: `posts/gem-search-filters-explained.md`)
-   **[LONG_DESCRIPTION]** Article "gem-seller-dashboard-kaise-use-kare" description exceeds recommended search length (164 chars, recommended <= 160) (File: `posts/gem-seller-dashboard-kaise-use-kare.md`)
-   **[LONG_DESCRIPTION]** Article "gem-seller-performance-dashboard" description exceeds recommended search length (171 chars, recommended <= 160) (File: `posts/gem-seller-performance-dashboard.md`)
-   **[LONG_DESCRIPTION]** Article "gem-seller-rating-improve-kaise-kare" description exceeds recommended search length (184 chars, recommended <= 160) (File: `posts/gem-seller-rating-improve-kaise-kare.md`)
-   **[SHORT_DESCRIPTION]** Article "gem-seller-registration-kaise-kare" has a short description (29 chars, recommended >= 50) (File: `posts/gem-seller-registration-kaise-kare.md`)
-   **[SHORT_DESCRIPTION]** Article "gem-tender-search-guide" has a short description (42 chars, recommended >= 50) (File: `posts/gem-tender-search-guide.md`)
-   **[LONG_DESCRIPTION]** Article "gem-warranty-claim-process" description exceeds recommended search length (178 chars, recommended <= 160) (File: `posts/gem-warranty-claim-process.md`)
-   **[LONG_DESCRIPTION]** Article "ireps-railway-tender-bidding-guide" description exceeds recommended search length (172 chars, recommended <= 160) (File: `posts/ireps-railway-tender-bidding-guide.md`)
-   **[SHORT_DESCRIPTION]** Article "keyword-search-tips" has a short description (38 chars, recommended >= 50) (File: `posts/keyword-search-tips.md`)
-   **[SHORT_DESCRIPTION]** Article "manufacturers-registration" has a short description (45 chars, recommended >= 50) (File: `posts/manufacturers-registration.md`)
-   **[SHORT_DESCRIPTION]** Article "ministry-department-search" has a short description (45 chars, recommended >= 50) (File: `posts/ministry-department-search.md`)
-   **[SHORT_DESCRIPTION]** Article "msme-registration" has a short description (36 chars, recommended >= 50) (File: `posts/msme-registration.md`)
-   **[SHORT_DESCRIPTION]** Article "profile-completion" has a short description (37 chars, recommended >= 50) (File: `posts/profile-completion.md`)
-   **[SHORT_DESCRIPTION]** Article "representation-writing" has a short description (41 chars, recommended >= 50) (File: `posts/representation-writing.md`)
-   **[SHORT_DESCRIPTION]** Article "restrictive-specifications" has a short description (45 chars, recommended >= 50) (File: `posts/restrictive-specifications.md`)
-   **[SHORT_DESCRIPTION]** Article "reverse-auction-rules" has a short description (40 chars, recommended >= 50) (File: `posts/reverse-auction-rules.md`)
-   **[SHORT_DESCRIPTION]** Article "saved-search-and-alerts" has a short description (42 chars, recommended >= 50) (File: `posts/saved-search-and-alerts.md`)
-   **[SHORT_DESCRIPTION]** Article "single-bid-compliance" has a short description (40 chars, recommended >= 50) (File: `posts/single-bid-compliance.md`)
-   **[LONG_DESCRIPTION]** Article "state-procurement-up-tenders-gem-comparison" description exceeds recommended search length (184 chars, recommended <= 160) (File: `posts/state-procurement-up-tenders-gem-comparison.md`)
-   **[SHORT_DESCRIPTION]** Article "state-wise-tender-search" has a short description (43 chars, recommended >= 50) (File: `posts/state-wise-tender-search.md`)
-   **[SHORT_DESCRIPTION]** Article "tender-evaluation-stages" has a short description (43 chars, recommended >= 50) (File: `posts/tender-evaluation-stages.md`)
-   **[SHORT_DESCRIPTION]** Article "timeframe" has a short description (28 chars, recommended >= 50) (File: `posts/timeframe.md`)
-   **[SHORT_DESCRIPTION]** Article "traders-registration" has a short description (39 chars, recommended >= 50) (File: `posts/traders-registration.md`)
-   **[LONG_DESCRIPTION]** Article "what-is-emd-in-gem" description exceeds recommended search length (174 chars, recommended <= 160) (File: `posts/what-is-emd-in-gem.md`)
-   **[BROKEN_INTERNAL_TOOL_LINK]** Article "gem-bid-participation-fees-guide" references unregistered tool "emd-calculator" (File: `posts/gem-bid-participation-fees-guide.md`)
-   **[BROKEN_INTERNAL_TOOL_LINK]** Article "gem-buyer-seller-dispute-resolution-guide" references unregistered tool "dispute-drafter" (File: `posts/gem-buyer-seller-dispute-resolution-guide.md`)
-   **[BROKEN_INTERNAL_TOOL_LINK]** Article "gem-contract-performance-security-guide" references unregistered tool "epbg-checker" (File: `posts/gem-contract-performance-security-guide.md`)
-   **[BROKEN_INTERNAL_TOOL_LINK]** Article "gem-contract-termination-rules" references unregistered tool "incident-tracker" (File: `posts/gem-contract-termination-rules.md`)
-   **[BROKEN_INTERNAL_TOOL_LINK]** Article "gem-inspection-acceptance-guide" references unregistered tool "quality-checklist" (File: `posts/gem-inspection-acceptance-guide.md`)
-   **[BROKEN_INTERNAL_TOOL_LINK]** Article "gem-liquidated-damages-rules" references unregistered tool "ld-calculator" (File: `posts/gem-liquidated-damages-rules.md`)
-   **[BROKEN_INTERNAL_TOOL_LINK]** Article "gem-order-fulfillment-guide" references unregistered tool "delivery-timeline-calculator" (File: `posts/gem-order-fulfillment-guide.md`)
-   **[BROKEN_INTERNAL_TOOL_LINK]** Article "gem-payment-cycle-complete-guide" references unregistered tool "payment-tracker" (File: `posts/gem-payment-cycle-complete-guide.md`)
-   **[BROKEN_INTERNAL_TOOL_LINK]** Article "gem-reverse-auction-complete-guide" references unregistered tool "auction-calculator" (File: `posts/gem-reverse-auction-complete-guide.md`)
-   **[BROKEN_INTERNAL_TOOL_LINK]** Article "gem-seller-rating-performance-guide" references unregistered tool "rating-simulator" (File: `posts/gem-seller-rating-performance-guide.md`)
-   **[UNAPPROVED_CATEGORY]** Article "cppp-portal-registration-tender-search" uses category "Government Procurement Hub" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[UNAPPROVED_CATEGORY]** Article "gem-login-kaise-kare" uses category "GeM Account Management" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[UNAPPROVED_CATEGORY]** Article "gem-registration-kaise-kare" uses category "GeM Seller Onboarding" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[UNAPPROVED_CATEGORY]** Article "gem-seller-registration-kaise-kare" uses category "GeM Seller Onboarding" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[UNAPPROVED_CATEGORY]** Article "ireps-railway-tender-bidding-guide" uses category "Government Procurement Hub" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)
-   **[UNAPPROVED_CATEGORY]** Article "use-ai-summarize-government-tender-pdfs" uses category "Automation" which is not defined in REGISTRY_CATEGORIES (File: `src/content/registry.ts`)

#### Engine: `knowledge-graph-engine` (WARNING)
*   **Errors:** 0
*   **Warnings:** 23
*   **Execution Time:** 3 ms

##### Warnings Evidence:
-   **[ORPHAN_TOOL_NODE]** Tool "clarification-generator" has 0 inbound article links in the Knowledge Graph (File: `src/content/registry.ts`)
-   **[ORPHAN_ARTICLE_NODE]** Article "cppp-portal-registration-tender-search" has 0 inbound links in the Knowledge Graph (Orphan Node) (File: `src/content/registry.ts`)
-   **[ORPHAN_ARTICLE_NODE]** Article "gem-login-kaise-kare" has 0 inbound links in the Knowledge Graph (Orphan Node) (File: `src/content/registry.ts`)
-   **[ORPHAN_ARTICLE_NODE]** Article "gem-registration-kaise-kare" has 0 inbound links in the Knowledge Graph (Orphan Node) (File: `src/content/registry.ts`)
-   **[ORPHAN_ARTICLE_NODE]** Article "gem-seller-registration-kaise-kare" has 0 inbound links in the Knowledge Graph (Orphan Node) (File: `src/content/registry.ts`)
-   **[ORPHAN_ARTICLE_NODE]** Article "ireps-railway-tender-bidding-guide" has 0 inbound links in the Knowledge Graph (Orphan Node) (File: `src/content/registry.ts`)
-   **[ORPHAN_ARTICLE_NODE]** Article "use-ai-summarize-government-tender-pdfs" has 0 inbound links in the Knowledge Graph (Orphan Node) (File: `src/content/registry.ts`)
-   **[DEAD_END_NODE]** Article "gem-reverse-auction-complete-guide" has 0 outbound internal links (File: `src/content/registry.ts`)
-   **[DEAD_END_NODE]** Article "gem-bid-participation-fees-guide" has 0 outbound internal links (File: `src/content/registry.ts`)
-   **[DEAD_END_NODE]** Article "gem-contract-performance-security-guide" has 0 outbound internal links (File: `src/content/registry.ts`)
-   **[DEAD_END_NODE]** Article "gem-payment-cycle-complete-guide" has 0 outbound internal links (File: `src/content/registry.ts`)
-   **[DEAD_END_NODE]** Article "gem-order-fulfillment-guide" has 0 outbound internal links (File: `src/content/registry.ts`)
-   **[DEAD_END_NODE]** Article "gem-inspection-acceptance-guide" has 0 outbound internal links (File: `src/content/registry.ts`)
-   **[DEAD_END_NODE]** Article "gem-liquidated-damages-rules" has 0 outbound internal links (File: `src/content/registry.ts`)
-   **[DEAD_END_NODE]** Article "gem-contract-termination-rules" has 0 outbound internal links (File: `src/content/registry.ts`)
-   **[DEAD_END_NODE]** Article "gem-seller-rating-performance-guide" has 0 outbound internal links (File: `src/content/registry.ts`)
-   **[DEAD_END_NODE]** Article "gem-buyer-seller-dispute-resolution-guide" has 0 outbound internal links (File: `src/content/registry.ts`)
-   **[UNRESOLVED_PARENT_ENTITY]** Entity "cppp-portal-registration-tender-search" references unknown parent entity "government-procurement-hub" (File: `knowledge_graph_engine.md`)
-   **[UNRESOLVED_PARENT_ENTITY]** Entity "gem-login-kaise-kare" references unknown parent entity "gem-account-management" (File: `knowledge_graph_engine.md`)
-   **[UNRESOLVED_PARENT_ENTITY]** Entity "gem-registration-kaise-kare" references unknown parent entity "gem-seller-onboarding" (File: `knowledge_graph_engine.md`)
-   **[UNRESOLVED_PARENT_ENTITY]** Entity "gem-seller-registration-kaise-kare" references unknown parent entity "gem-seller-onboarding" (File: `knowledge_graph_engine.md`)
-   **[UNRESOLVED_PARENT_ENTITY]** Entity "ireps-railway-tender-bidding-guide" references unknown parent entity "government-procurement-hub" (File: `knowledge_graph_engine.md`)
-   **[UNRESOLVED_PARENT_ENTITY]** Entity "use-ai-summarize-government-tender-pdfs" references unknown parent entity "automation" (File: `knowledge_graph_engine.md`)

