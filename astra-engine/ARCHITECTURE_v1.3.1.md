# ASTRA ENGINE ARCHITECTURE — v1.3.1 (Phase 4B.2 Developer Platform Integration)

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.3.1 CLI Router]
├── contracts/                     [TypeScript Interfaces]
│   ├── Engine.ts
│   ├── Scanner.ts
│   ├── Validator.ts
│   ├── Reporter.ts
│   ├── State.ts
│   ├── Event.ts
│   ├── Plugin.ts
│   ├── PluginContext.ts
│   ├── PluginResult.ts
│   └── PluginLifecycle.ts         [EXTENDED Phase 4B.2 Lifecycle]
├── core/
│   ├── cache/                     [Phase 4A Cache Layer]
│   ├── events/                    [Phase 4A Event Bus]
│   ├── fingerprint/               [Phase 4A Fingerprint DB]
│   ├── guards/                    [Security Guards]
│   ├── incremental/               [Phase 4A Incremental Scanner]
│   ├── plugins/                   [Phase 4B.2 Developer Platform Primitives]
│   │   ├── index.js
│   │   ├── loader.js              [Hook Execution Pipeline, Timeout & Crash Isolation]
│   │   ├── manifest.js            [Manifest v2 Validator]
│   │   ├── registry.js            [Runtime Plugin Registry]
│   │   ├── sandbox.js             [Context Sandbox & Immutability]
│   │   ├── trust.js               [NEW Phase 4B.2 Trust Framework]
│   │   ├── signature.js           [NEW Phase 4B.2 Signature Verifier]
│   │   ├── dependency.js          [NEW Phase 4B.2 Dependency Resolver]
│   │   ├── version.js             [NEW Phase 4B.2 Version Manager]
│   │   ├── telemetry.js           [NEW Phase 4B.2 Plugin Telemetry]
│   │   └── reporter.js            [NEW Phase 4B.2 Plugin Reporter]
│   ├── telemetry/                 [Phase 4A System Telemetry]
│   ├── graph/                     [Phase 3 Graph Topology]
│   ├── parser/
│   ├── reporter/                  [Phase 3.1 Severity Framework]
│   ├── scanner/
│   └── state/
├── engines/
│   ├── registry/                  [Phase 2 Engine]
│   ├── seo/                       [Phase 3 SEO Engine]
│   └── graph/                     [Phase 3 Knowledge Graph Engine]
├── plugins/                       [Plugin Packages]
│   └── sample-plugin/
├── schemas/
│   ├── plugin.schema.json         [UPDATED Phase 4B.2 Manifest v2 Schema]
│   ├── metadata.schema.json
│   ├── entity.schema.json
│   └── registry.schema.json
├── reports/
│   ├── cache/
│   └── latest/                    [Exports report.json, report.md, plugin-report.json, plugin-report.md]
└── tests/                         [Unit & Integration Test Suite]
    ├── plugin-signature.test.js   [NEW Phase 4B.2 Test]
    ├── plugin-dependency.test.js  [NEW Phase 4B.2 Test]
    ├── plugin-version.test.js     [NEW Phase 4B.2 Test]
    ├── plugin-timeout.test.js     [NEW Phase 4B.2 Test]
    ├── plugin-crash.test.js       [NEW Phase 4B.2 Test]
    ├── plugin-order.test.js       [NEW Phase 4B.2 Test]
    ├── plugin-telemetry.test.js   [NEW Phase 4B.2 Test]
    ├── plugin-trust.test.js       [NEW Phase 4B.2 Test]
    ├── plugin-doctor.test.js      [NEW Phase 4B.2 Test]
    ├── manifest.test.js           [Phase 4B.1 Test]
    ├── permission.test.js         [Phase 4B.1 Test]
    ├── registry4b.test.js         [Phase 4B.1 Test]
    ├── loader.test.js             [Phase 4B.1 Test]
    ├── plugin.test.js             [Phase 4B.1 Test]
    ├── fingerprint.test.js        [Phase 4A Test]
    ├── incremental.test.js        [Phase 4A Test]
    ├── eventbus.test.js           [Phase 4A Test]
    ├── cache.test.js              [Phase 4A Test]
    ├── telemetry.test.js          [Phase 4A Test]
    └── stress4a.test.js           [Phase 4A Stress Test]
```
