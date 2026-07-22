# ASTRA Engine — Catalog Intelligence Guide (v1.14.0)

**Document Type:** Permanent Engineering Record  
**Version:** `1.14.0`  
**Phase:** `8A`  
**Last Verified:** `2026-07-22T23:16:15+05:30`  
**Certification Status:** `VERIFIED`  

---

## 1. Purpose

The Catalog Intelligence Engine evaluates product catalog completeness, assesses specification health scores (0–100), measures category coverage, and verifies multi-catalog specification parity without mutating catalog data.

---

## 2. Scope

- **Included:** Health score assessment, covered vs missing category breakdown, parity comparison across product catalogs.
- **Excluded:** Direct editing of GeM portal product listings, uploading images, dynamic brand approval requests.

---

## 3. Directory Structure

```
astra-engine/catalogIntelligence/
├── index.js                  (Barrel Export)
├── catalogAnalyzer.js        (Main Orchestrator)
├── catalogHealth.js          (Health Scorer)
├── catalogCoverage.js        (Category Coverage Assessor)
├── catalogComparison.js      (Parity Comparison Engine)
└── catalogMetrics.js         (Audit Metrics Tracker)
```

---

## 4. Reports

- **Generator:** `cli.js` (lines 164–184)
- **Location:** `astra-engine/reports/latest/catalog-analysis.json`
- **Schema:** JSON object containing `health`, `coverage`, and `metrics`.

---

## 5. Testing & Benchmarks

- **Test File:** `astra-engine/tests/catalog.test.js`
- **Assertions Passed:** 5 / 5 | **Skipped:** 0 | **Coverage:** `NOT MEASURED`

---

## 6. Known Limitations

1. Comparison engine checks key-value parity deterministically but requires explicit target catalog objects.

---

## 7. Version History

| Version | Date | Changes | Status |
|---|---|---|---|
| 1.14.0 | 2026-07-22 | Phase 8A Catalog Intelligence Engine Created | `VERIFIED` |

**Last Verified:** `2026-07-22T23:16:15+05:30`  
**Certification Status:** `VERIFIED`
