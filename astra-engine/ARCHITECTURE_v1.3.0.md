# ASTRA ENGINE ARCHITECTURE — v1.3.0 (Phase 4B.1 Plugin SDK)

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.3.0 CLI Router]
├── contracts/                     [TypeScript Interfaces]
│   ├── Engine.ts
│   ├── Scanner.ts
│   ├── Validator.ts
│   ├── Reporter.ts
│   ├── State.ts
│   ├── Event.ts                   [Phase 4A Interface]
│   ├── Plugin.ts                  [NEW Phase 4B.1 Contract]
│   ├── PluginContext.ts           [NEW Phase 4B.1 Contract]
│   ├── PluginResult.ts            [NEW Phase 4B.1 Contract]
│   └── PluginLifecycle.ts         [NEW Phase 4B.1 Contract]
├── core/
│   ├── cache/                     [Phase 4A Cache Layer]
│   ├── events/                    [Phase 4A Event Bus]
│   ├── fingerprint/               [Phase 4A Fingerprint DB]
│   ├── guards/                    [Security Guards]
│   ├── incremental/               [Phase 4A Incremental Scanner]
│   ├── plugins/                   [NEW Phase 4B.1 Plugin Infrastructure]
│   │   ├── index.js
│   │   ├── loader.js              [Plugin Loader & Hook Pipeline]
│   │   ├── manifest.js            [Manifest Schema Validator]
│   │   ├── registry.js            [Runtime Plugin Registry]
│   │   └── sandbox.js             [Context Sandbox & Deep Freeze]
│   ├── telemetry/                 [Phase 4A Telemetry Engine]
│   ├── graph/                     [Phase 3 Graph Topology]
│   ├── parser/
│   ├── reporter/                  [Phase 3.1 Severity Framework]
│   ├── scanner/
│   ├── state/
│   └── validators/                [7 Phase 3 Validators]
├── engines/
│   ├── registry/                  [Phase 2 Engine]
│   ├── seo/                       [Phase 3 SEO Engine]
│   └── graph/                     [Phase 3 Knowledge Graph Engine]
├── plugins/                       [Plugin Directory]
│   └── sample-plugin/             [Sample Audit Plugin]
│       ├── index.js
│       └── plugin.json
├── schemas/
│   ├── plugin.schema.json         [NEW Phase 4B.1 Plugin Schema]
│   ├── metadata.schema.json
│   ├── entity.schema.json
│   └── registry.schema.json
├── reports/
│   ├── cache/                     [Fingerprint DB Storage]
│   └── latest/                    [Reports Export]
└── tests/                         [Unit & Benchmark Test Suite]
    ├── manifest.test.js           [NEW Phase 4B.1 Test]
    ├── permission.test.js         [NEW Phase 4B.1 Test]
    ├── registry4b.test.js         [NEW Phase 4B.1 Test]
    ├── loader.test.js             [NEW Phase 4B.1 Test]
    ├── plugin.test.js             [NEW Phase 4B.1 Test]
    ├── fingerprint.test.js        [Phase 4A Test]
    ├── incremental.test.js        [Phase 4A Test]
    ├── eventbus.test.js           [Phase 4A Test]
    ├── cache.test.js              [Phase 4A Test]
    ├── telemetry.test.js          [Phase 4A Test]
    └── stress4a.test.js           [Phase 4A Stress Test]
```
