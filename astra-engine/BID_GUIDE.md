# ASTRA Engine — Bid Intelligence Engine Guide (v1.14.0)

**Document Type:** Permanent Engineering Record  
**Version:** `1.14.0`  
**Phase:** `8A`  
**Last Verified:** `2026-07-22T23:16:00+05:30`  
**Certification Status:** `VERIFIED`  

---

## 1. Purpose

The Bid Intelligence Engine analyzes bid document structures, classifies tender types, scores parameter complexity, projects submission timelines, and maps required compliance dependencies in read-only mode.

---

## 2. Scope

- **Included:** Bid classification, complexity scoring (0–100), key timeline milestone extraction, document dependency mapping, analysis metrics.
- **Excluded:** Automated bid creation, tender document auto-filling, real-time submission to procurement portals.

---

## 3. Architecture

### Layer Diagram
```
+-------------------------------------------------------------+
| CLI Layer (node cli.js bid)                                 |
+-------------------------------------------------------------+
                              |
                              v
+-------------------------------------------------------------+
| Bid Analyzer (bidAnalyzer.js)                               |
+-------------------------------------------------------------+
       |             |               |                |
       v             v               v                v
+------------+ +--------------+ +----------+ +---------------+
| Classifier | | Complexity   | | Timeline | | Dependencies  |
| (bidClass- | | (bidComplex- | | (bidTime-| | (bidDependen- |
| ifier.js)  | | ity.js)      | | line.js) | | cies.js)      |
+------------+ +--------------+ +----------+ +---------------+
```

---

## 4. Directory Structure

```
astra-engine/bidIntelligence/
├── index.js                  (Barrel Export)
├── bidAnalyzer.js            (Main Orchestrator)
├── bidClassifier.js          (Category & Type Classifier)
├── bidComplexity.js          (Complexity Scorer)
├── bidTimeline.js            (Milestone Timeline Builder)
├── bidDependencies.js        (Document Requirement Mapper)
└── bidMetrics.js             (Metrics Tracker)
```

---

## 5. Data Flow & Inputs/Outputs

- **Inputs:** `bidData` object `{ bidId, category, turnoverRequired, emdRequired }`.
- **Outputs:** `{ classification, complexity, timeline, dependencies, metrics }`.

---

## 6. Reports

- **Generator:** `cli.js` (lines 186–198)
- **Trigger:** Command `node cli.js bid`
- **Location:** `astra-engine/reports/latest/bid-analysis.json`
- **Schema:** JSON object containing classification, complexity, timeline, and dependencies.
- **Consumer:** SahayakAI Bid Assistant, Compliance Desk.

---

## 7. CLI Command

- **Purpose:** Analyze bid parameters and export bid intelligence report.
- **Syntax:** `node cli.js bid`
- **Output:** Terminal summary banner and JSON report written to disk.

---

## 8. Testing & Benchmarks

- **Test File:** `astra-engine/tests/bid.test.js`
- **Assertions Passed:** 10 / 10 | **Skipped:** 0 | **Coverage:** `NOT MEASURED`
- **Benchmark Workload:** 50,000 bid complexity scoring operations in `tests/benchmark-procurement.test.js`.

---

## 9. Known Limitations

1. Milestone timeline generation uses structured defaults when raw unstructured tender PDF text is unparsed.

---

## 10. Version History

| Version | Date | Changes | Status |
|---|---|---|---|
| 1.14.0 | 2026-07-22 | Phase 8A Bid Intelligence Engine Implemented | `VERIFIED` |

**Last Verified:** `2026-07-22T23:16:00+05:30`  
**Certification Status:** `VERIFIED`
