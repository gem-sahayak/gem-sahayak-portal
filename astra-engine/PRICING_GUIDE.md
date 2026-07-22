# ASTRA Engine — Pricing Intelligence Guide (v1.14.0)

**Document Type:** Permanent Engineering Record  
**Version:** `1.14.0`  
**Phase:** `8A`  
**Last Verified:** `2026-07-22T23:16:45+05:30`  
**Certification Status:** `VERIFIED`  

---

## 1. Purpose

The Pricing Intelligence Engine evaluates price variance percentages, determines seller competitive positioning against market ranges, computes statistical benchmarks (mean, median, stdDev, z-score, linear regression trend slope), and outputs strategic pricing recommendations.

---

## 2. Scope

- **Included:** Variance calculation, market percentile scoring, statistical pricing benchmarks, pricing metrics.
- **Excluded:** Automated bid pricing submission, dynamic repricing bots, live market web scraping.

---

## 3. Directory Structure

```
astra-engine/pricing/
├── index.js                  (Barrel Export)
├── pricingAnalyzer.js        (Main Pricing Orchestrator)
├── priceVariance.js          (Variance Percentage Calculator)
├── competitivePosition.js    (Percentile & Deviation Analyzer)
├── pricingBenchmark.js       (Statistical Benchmark Engine)
└── pricingMetrics.js         (Pricing Session Metrics)
```

---

## 4. Reports & CLI

- **CLI Command:** `node cli.js pricing`
- **Location:** `astra-engine/reports/latest/pricing-report.json`
- **Schema:** `{ variance: Object, position: Object, benchmark: Object, metrics: Object }`.

---

## 5. Testing & Benchmarks

- **Test File:** `astra-engine/tests/pricing.test.js`
- **Assertions Passed:** 12 / 12 | **Skipped:** 0 | **Coverage:** `NOT MEASURED`
- **Benchmark Workload:** 100,000 price variance calculations & 10,000 statistical benchmarks in `tests/benchmark-procurement.test.js`.

---

## 6. Known Limitations

1. Linear regression trend calculation requires minimum 2 historical data points to establish slope direction.

---

## 7. Version History

| Version | Date | Changes | Status |
|---|---|---|---|
| 1.14.0 | 2026-07-22 | Phase 8A Pricing Intelligence Engine Created | `VERIFIED` |

**Last Verified:** `2026-07-22T23:16:45+05:30`  
**Certification Status:** `VERIFIED`
