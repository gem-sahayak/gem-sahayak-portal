# ASTRA ENGINE ARCHITECTURE — v1.2.0 (Phase 4A Platform Infrastructure)

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.2.0 CLI Router]
├── contracts/                     [TypeScript Interfaces]
│   ├── Engine.ts
│   ├── Scanner.ts
│   ├── Validator.ts
│   ├── Reporter.ts
│   ├── State.ts
│   └── Event.ts                   [ACTIVATED Phase 4A]
├── core/
│   ├── cache/                     [NEW Phase 4A Cache Layer]
│   │   ├── index.js
│   │   ├── memoryCache.js
│   │   └── snapshotCache.js
│   ├── config/
│   ├── events/                    [NEW Phase 4A Event Bus]
│   │   ├── bus.js
│   │   └── index.js
│   ├── filesystem/
│   ├── fingerprint/               [NEW Phase 4A Fingerprint DB]
│   │   ├── database.js
│   │   ├── hash.js
│   │   └── index.js
│   ├── guards/
│   │   ├── importGuard.js         [Security Guard]
│   │   └── pathGuard.js           [Security Guard]
│   ├── graph/                     [Phase 3 Graph Topology]
│   ├── incremental/               [NEW Phase 4A Incremental Scanner]
│   │   ├── comparer.js
│   │   └── index.js
│   ├── parser/
│   ├── reporter/                  [Phase 3.1 Severity Framework]
│   │   ├── index.js
│   │   └── severity.js
│   ├── scanner/
│   ├── state/
│   ├── telemetry/                 [NEW Phase 4A Telemetry Engine]
│   │   ├── index.js
│   │   └── metrics.js
│   └── validators/                [7 Phase 3 Validators]
├── engines/
│   ├── registry/                  [Phase 2 Engine]
│   ├── seo/                       [Phase 3 SEO Engine]
│   └── graph/                     [Phase 3 Knowledge Graph Engine]
├── schemas/
├── policies/
├── reports/
│   ├── cache/                     [NEW Phase 4A Cache Storage]
│   │   └── fingerprint-db.json
│   └── latest/                    [Reports Export]
│       ├── report.json
│       ├── report.md
│       ├── fingerprints.json      [NEW Phase 4A Report]
│       ├── incremental-report.json[NEW Phase 4A Report]
│       ├── cache-report.json      [NEW Phase 4A Report]
│       └── telemetry.json         [NEW Phase 4A Report]
└── tests/                         [Unit & Benchmark Test Suite]
    ├── fingerprint.test.js        [NEW Phase 4A Test]
    ├── incremental.test.js        [NEW Phase 4A Test]
    ├── eventbus.test.js           [NEW Phase 4A Test]
    ├── cache.test.js              [NEW Phase 4A Test]
    ├── telemetry.test.js          [NEW Phase 4A Test]
    └── stress4a.test.js           [NEW Phase 4A Stress Test]
```
