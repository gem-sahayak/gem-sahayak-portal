# ASTRA ENGINE ARCHITECTURE — v1.5.2 (Phase 4C.3 AI Content Optimization Platform)

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.5.2 CLI Router]
├── PHASE4C3_COMPLETE.md           [NEW Phase 4C.3 Report]
├── ARCHITECTURE_v1.5.2.md         [NEW Architecture Diagram]
├── contracts/
│   ├── OptimizationReport.ts      [NEW]
│   ├── OptimizationIssue.ts       [NEW]
│   ├── OptimizationSuggestion.ts  [NEW]
│   ├── InternalLink.ts            [NEW]
│   ├── AnchorSuggestion.ts        [NEW]
│   ├── TopicSuggestion.ts         [NEW]
│   └── FAQSuggestion.ts           [NEW]
├── schemas/
│   └── optimization.schema.json   [NEW]
├── engines/
│   ├── optimizer/                 [NEW Phase 4C.3 AI Content Optimizer Platform]
│   │   ├── index.js
│   │   ├── optimizerEngine.js
│   │   ├── contentOptimizer.js
│   │   ├── internalLinking.js
│   │   ├── anchorGenerator.js
│   │   ├── topicExpansion.js
│   │   ├── faqGenerator.js
│   │   ├── entityExpansion.js
│   │   ├── headingOptimizer.js
│   │   ├── contentGap.js
│   │   ├── priorityPlanner.js
│   │   └── recommendation.js
├── reports/
│   └── latest/
│       ├── optimization-report.json [NEW]
│       ├── optimization-report.md   [NEW]
│       ├── internal-links.json      [NEW]
│       ├── anchor-report.json       [NEW]
│       ├── content-gap.json         [NEW]
│       ├── heading-report.json      [NEW]
│       ├── entity-expansion.json    [NEW]
│       ├── faq-recommendations.json [NEW]
│       ├── topic-expansion.json     [NEW]
│       └── priority-roadmap.json    [NEW]
└── tests/                         [62 Test Suites]
    ├── optimizer.test.js          [NEW]
    ├── internal-linking.test.js   [NEW]
    ├── anchor.test.js             [NEW]
    ├── topic-expansion.test.js    [NEW]
    ├── entity-expansion.test.js   [NEW]
    ├── content-gap.test.js        [NEW]
    ├── faq.test.js                [NEW]
    ├── headings.test.js           [NEW]
    ├── priority-roadmap.test.js   [NEW]
    └── benchmark-optimizer.test.js [NEW]
```
