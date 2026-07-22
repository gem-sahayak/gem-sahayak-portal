# ASTRA Engine — Market Intelligence Guide (v1.14.0)

**Document Type:** Permanent Engineering Record  
**Version:** `1.14.0`  
**Phase:** `8A`  
**Last Verified:** `2026-07-22T23:17:15+05:30`  
**Certification Status:** `VERIFIED`  

---

## 1. Purpose

The Market Intelligence Engine analyzes market trends via linear regression slope and volatility coefficient of variation, generates category insights, maps competitive market concentration using Herfindahl-Hirschman Index (HHI), and manages procurement deadline calendars.

---

## 2. Scope

- **Included:** Linear regression trend slope, category competition level (`LOW`, `MEDIUM`, `HIGH`), HHI market concentration calculation, procurement event scheduling.
- **Excluded:** External stock market trading, financial news scraping, automated bidding calendar triggers.

---

## 3. Directory Structure

```
astra-engine/market/
├── index.js                  (Barrel Export)
├── marketTrends.js           (Linear Regression & Volatility)
├── categoryInsights.js       (Category Competition Assessor)
├── competitionMap.js         (Herfindahl-Hirschman Index - HHI)
├── procurementCalendar.js    (Procurement Event Manager)
└── marketMetrics.js          (Market Metrics Tracker)
```

---

## 4. Reports & CLI

- **CLI Command:** `node cli.js pricing` (Exports market trends to `reports/latest/market-report.json` and HHI to `reports/latest/competition-report.json`)
- **Location:** `astra-engine/reports/latest/market-report.json`, `competition-report.json`
- **Schema:** HHI Object: `{ totalCompetitors, herfindahlIndex, concentrationLevel, topPlayer }`.

---

## 5. Testing & Benchmarks

- **Test Files:** `astra-engine/tests/market.test.js` & `tests/competition.test.js`
- **Assertions Passed:** 20 / 20 (12 in market, 8 in competition) | **Skipped:** 0 | **Coverage:** `NOT MEASURED`
- **Benchmark Workload:** 10,000 competition HHI calculations in `tests/benchmark-procurement.test.js`.

---

## 6. Known Limitations

1. HHI market share total must sum to 100% across inputs for exact economic concentration scale.

---

## 7. Version History

| Version | Date | Changes | Status |
|---|---|---|---|
| 1.14.0 | 2026-07-22 | Phase 8A Market Intelligence Engine Created | `VERIFIED` |

**Last Verified:** `2026-07-22T23:17:15+05:30`  
**Certification Status:** `VERIFIED`
