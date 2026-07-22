# ASTRA Engine Architecture — v1.14.0 (Phase 8A Enterprise Procurement Intelligence Platform)

**Document Type:** Permanent Engineering Record  
**Version:** `1.14.0`  
**Phase:** `8A`  
**Last Verified:** `2026-07-22T23:17:45+05:30`  
**Certification Status:** `VERIFIED`  

---

## Architecture Diagram

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.14.0 CLI Router]
├── PROCUREMENT_GUIDE.md           [NEW Procurement Guide]
├── BID_GUIDE.md                   [NEW Bid Guide]
├── CATALOG_GUIDE.md               [NEW Catalog Guide]
├── COMPLIANCE_GUIDE.md            [NEW Compliance Guide]
├── PRICING_GUIDE.md               [NEW Pricing Guide]
├── SUPPLIER_GUIDE.md              [NEW Supplier Guide]
├── MARKET_GUIDE.md                [NEW Market Guide]
├── PHASE8A_COMPLETE.md            [NEW Phase 8A Report]
├── ARCHITECTURE_v1.14.0.md        [NEW Architecture Diagram]
├── procurement/                   [NEW Phase 8A Procurement Engine]
│   ├── index.js
│   ├── procurementEngine.js
│   ├── procurementRegistry.js
│   ├── procurementContext.js
│   ├── procurementLifecycle.js
│   └── procurementMetrics.js
├── bidIntelligence/               [NEW Phase 8A Bid Intelligence]
│   ├── index.js
│   ├── bidAnalyzer.js
│   ├── bidClassifier.js
│   ├── bidComplexity.js
│   ├── bidTimeline.js
│   ├── bidDependencies.js
│   └── bidMetrics.js
├── catalogIntelligence/           [NEW Phase 8A Catalog Intelligence]
│   ├── index.js
│   ├── catalogAnalyzer.js
│   ├── catalogHealth.js
│   ├── catalogCoverage.js
│   ├── catalogComparison.js
│   └── catalogMetrics.js
├── compliance/                    [NEW Phase 8A Compliance Engine]
│   ├── index.js
│   ├── eligibilityEngine.js
│   ├── qualificationMatrix.js
│   ├── documentMatrix.js
│   ├── riskCompliance.js
│   ├── complianceHistory.js
│   └── complianceMetrics.js
├── pricing/                       [NEW Phase 8A Pricing Intelligence]
│   ├── index.js
│   ├── pricingAnalyzer.js
│   ├── priceVariance.js
│   ├── competitivePosition.js
│   ├── pricingBenchmark.js
│   └── pricingMetrics.js
├── supplier/                      [NEW Phase 8A Supplier Intelligence]
│   ├── index.js
│   ├── supplierProfile.js
│   ├── supplierHistory.js
│   ├── supplierCapability.js
│   ├── supplierRisk.js
│   └── supplierMetrics.js
├── market/                        [NEW Phase 8A Market Intelligence]
│   ├── index.js
│   ├── marketTrends.js
│   ├── categoryInsights.js
│   ├── competitionMap.js
│   ├── procurementCalendar.js
│   └── marketMetrics.js
├── reports/
│   └── latest/
│       ├── procurement-report.json    [NEW]
│       ├── bid-analysis.json          [NEW]
│       ├── catalog-analysis.json      [NEW]
│       ├── compliance-report.json     [NEW]
│       ├── pricing-report.json        [NEW]
│       ├── supplier-report.json       [NEW]
│       ├── market-report.json         [NEW]
│       ├── competition-report.json    [NEW]
│       └── procurement-dashboard.json [NEW]
└── tests/                         [155 Test Suites]
    ├── procurement.test.js            [NEW]
    ├── bid.test.js                    [NEW]
    ├── catalog.test.js                [NEW]
    ├── compliance.test.js             [NEW]
    ├── pricing.test.js                [NEW]
    ├── supplier.test.js               [NEW]
    ├── market.test.js                 [NEW]
    ├── competition.test.js            [NEW]
    └── benchmark-procurement.test.js  [NEW]
```
