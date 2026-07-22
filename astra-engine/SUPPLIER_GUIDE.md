# ASTRA Engine — Supplier Intelligence Guide (v1.14.0)

**Document Type:** Permanent Engineering Record  
**Version:** `1.14.0`  
**Phase:** `8A`  
**Last Verified:** `2026-07-22T23:17:00+05:30`  
**Certification Status:** `VERIFIED`  

---

## 1. Purpose

The Supplier Intelligence Engine builds supplier profiles, measures profile completeness percentages, tiering (`GOLD`, `SILVER`, `BRONZE`), tracks lifecycle events, calculates 4-dimension operational capability scores, and evaluates risk levels (`LOW`, `MEDIUM`, `HIGH`, `CRITICAL`).

---

## 2. Scope

- **Included:** Profile completeness scoring, lifecycle history logging, capability scoring, risk factor identification.
- **Excluded:** Vendor assessment fee payment, background checking via third-party agencies.

---

## 3. Directory Structure

```
astra-engine/supplier/
├── index.js                  (Barrel Export)
├── supplierProfile.js        (Profile Builder & Completeness)
├── supplierHistory.js        (Event History Logger)
├── supplierCapability.js     (Capability Assessor)
├── supplierRisk.js           (Deterministic Risk Evaluator)
└── supplierMetrics.js        (Supplier Metrics Tracker)
```

---

## 4. Reports & CLI

- **CLI Command:** `node cli.js procurement` (Exports supplier profile to `reports/latest/supplier-report.json`)
- **Location:** `astra-engine/reports/latest/supplier-report.json`
- **Schema:** JSON object containing `profileCompleteness`, `tier`, `missingFields`, `fieldsProvided`.

---

## 5. Testing & Benchmarks

- **Test File:** `astra-engine/tests/supplier.test.js`
- **Assertions Passed:** 12 / 12 | **Skipped:** 0 | **Coverage:** `NOT MEASURED`
- **Benchmark Workload:** 100,000 supplier risk evaluation iterations in `tests/benchmark-procurement.test.js`.

---

## 6. Known Limitations

1. Risk evaluation relies on reported order cancellation, late delivery, and complaint rates.

---

## 7. Version History

| Version | Date | Changes | Status |
|---|---|---|---|
| 1.14.0 | 2026-07-22 | Phase 8A Supplier Intelligence Engine Created | `VERIFIED` |

**Last Verified:** `2026-07-22T23:17:00+05:30`  
**Certification Status:** `VERIFIED`
