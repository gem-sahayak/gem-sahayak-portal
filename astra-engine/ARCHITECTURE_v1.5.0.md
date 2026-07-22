# ASTRA ENGINE ARCHITECTURE — v1.5.0 (Phase 4C.1 AI Review Engine)

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.5.0 CLI Router]
├── PHASE4C1_COMPLETE.md           [NEW Phase 4C.1 Report]
├── ARCHITECTURE_v1.5.0.md         [NEW Architecture Diagram]
├── contracts/
│   ├── Review.ts                  [NEW]
│   ├── ReviewIssue.ts             [NEW]
│   └── ReviewScore.ts             [NEW]
├── schemas/
│   └── review.schema.json         [NEW]
├── engines/
│   ├── review/                    [NEW Phase 4C.1 AI Review Engine]
│   │   ├── index.js
│   │   ├── promptBuilder.js
│   │   ├── reasoning.js
│   │   ├── scoring.js
│   │   ├── recommendation.js
│   │   ├── reviewEngine.js
│   │   └── adapters/              [Provider Abstraction Adapters]
│   │       ├── baseAdapter.js
│   │       └── mockAdapter.js
├── reports/
│   └── latest/
│       ├── review-report.json     [NEW]
│       └── review-report.md       [NEW]
└── tests/                         [43 Test Suites]
    ├── review.test.js             [NEW]
    ├── review-score.test.js       [NEW]
    ├── review-recommendation.test.js [NEW]
    └── review-engine.test.js      [NEW]
```
