# ASTRA ENGINE ARCHITECTURE — v1.7.1 (Phase 5B Enterprise Intelligence Dashboard)

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.7.1 CLI Router]
├── DASHBOARD_GUIDE.md             [NEW Dashboard Guide]
├── PHASE5B_COMPLETE.md            [NEW Phase 5B Report]
├── ARCHITECTURE_v1.7.1.md         [NEW Architecture Diagram]
├── dashboard/                     [NEW Phase 5B Enterprise Intelligence Dashboard]
│   ├── index.js
│   ├── dashboardEngine.js
│   ├── overviewDashboard.js
│   ├── seoDashboard.js
│   ├── reviewDashboard.js
│   ├── semanticDashboard.js
│   ├── optimizerDashboard.js
│   ├── knowledgeDashboard.js
│   ├── healthDashboard.js
│   ├── performanceDashboard.js
│   ├── telemetryDashboard.js
│   ├── charts/
│   │   ├── scoreCharts.js
│   │   ├── trendCharts.js
│   │   ├── entityCharts.js
│   │   └── topologyCharts.js
│   └── widgets/
│       ├── scoreCards.js
│       ├── issueCards.js
│       ├── reportCards.js
│       ├── activityFeed.js
│       ├── projectSummary.js
│       └── benchmarkCards.js
├── reports/
│   └── latest/
│       ├── dashboard-report.json  [NEW]
│       ├── dashboard-report.md    [NEW]
│       ├── dashboard-health.json  [NEW]
│       ├── dashboard-seo.json     [NEW]
│       ├── dashboard-performance.json [NEW]
│       ├── dashboard-telemetry.json   [NEW]
│       └── dashboard-overview.json    [NEW]
└── tests/                         [92 Test Suites]
    ├── dashboard.test.js          [NEW]
    ├── dashboard-overview.test.js [NEW]
    ├── dashboard-seo.test.js      [NEW]
    ├── dashboard-review.test.js   [NEW]
    ├── dashboard-performance.test.js [NEW]
    ├── dashboard-telemetry.test.js   [NEW]
    ├── dashboard-widgets.test.js  [NEW]
    ├── dashboard-charts.test.js   [NEW]
    ├── dashboard-export.test.js   [NEW]
    └── benchmark-dashboard.test.js [NEW]
```
