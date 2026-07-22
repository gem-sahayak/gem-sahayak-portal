# ASTRA Engine — Compliance Engine Guide (v1.14.0)

**Document Type:** Permanent Engineering Record  
**Version:** `1.14.0`  
**Phase:** `8A`  
**Last Verified:** `2026-07-22T23:16:30+05:30`  
**Certification Status:** `VERIFIED`  

---

## 1. Purpose

The Compliance Engine performs offline qualification verification, maps required compliance documents (PAN, GST, Udyam), evaluates seller eligibility status, and classifies compliance risk levels without dynamic network authentication.

---

## 2. Scope

- **Included:** Qualification matrix building, document verification mapping, risk classification (`LOW_RISK`, `MEDIUM_RISK`, `HIGH_RISK`), compliance history logging.
- **Excluded:** Live government GSTIN verification, PAN API validation calls, online document downloading.

---

## 3. Directory Structure

```
astra-engine/compliance/
├── index.js                  (Barrel Export)
├── eligibilityEngine.js      (Main Eligibility Reviewer)
├── qualificationMatrix.js    (Turnover & Experience Matrix)
├── documentMatrix.js         (Document Status Mapper)
├── riskCompliance.js         (Risk Level Assessor)
├── complianceHistory.js      (Audit Trail Logger)
└── complianceMetrics.js      (Compliance Metrics Tracker)
```

---

## 4. Reports & CLI

- **CLI Command:** `node cli.js compliance`
- **Location:** `astra-engine/reports/latest/compliance-report.json`
- **Schema:** `{ eligible: Boolean, exemptionStatus: String, qualification: Object, documents: Array, risk: Object }`.

---

## 5. Testing & Benchmarks

- **Test File:** `astra-engine/tests/compliance.test.js`
- **Assertions Passed:** 11 / 11 | **Skipped:** 0 | **Coverage:** `NOT MEASURED`
- **Benchmark Workload:** 500,000 document validation iterations in `tests/benchmark-procurement.test.js`.

---

## 6. Known Limitations

1. Document verification assumes valid data inputs in offline environment; live portal verification requires external API integration.

---

## 7. Version History

| Version | Date | Changes | Status |
|---|---|---|---|
| 1.14.0 | 2026-07-22 | Phase 8A Compliance Engine Created | `VERIFIED` |

**Last Verified:** `2026-07-22T23:16:30+05:30`  
**Certification Status:** `VERIFIED`
