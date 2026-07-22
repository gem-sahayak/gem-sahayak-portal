# ASTRA ENGINE ARCHITECTURE — v1.3.2 (Phase 4B.3 Ecosystem)

```
astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.3.2 CLI Router]
├── PLUGIN_SDK.md                  [NEW Phase 4B.3 SDK Guide]
├── PLUGIN_MARKETPLACE.md          [NEW Phase 4B.3 Marketplace Guide]
├── contracts/                     [Plugin SDK Contracts]
├── core/
│   ├── plugins/                   [Phase 4B.3 Developer Platform Primitives]
│   │   ├── index.js
│   │   ├── loader.js
│   │   ├── manifest.js
│   │   ├── registry.js
│   │   ├── sandbox.js
│   │   ├── trust.js
│   │   ├── signature.js
│   │   ├── dependency.js
│   │   ├── version.js
│   │   ├── lockfile.js            [NEW Phase 4B.3 Lockfile Manager]
│   │   ├── limits.js              [NEW Phase 4B.3 Resource Limits]
│   │   ├── marketplace/           [NEW Phase 4B.3 Marketplace Catalog & Search]
│   │   │   ├── catalog.js
│   │   │   ├── search.js
│   │   │   ├── install.js
│   │   │   └── index.js
│   │   └── package/               [NEW Phase 4B.3 .apkg Packager & Validator]
│   │       ├── validator.js
│   │       ├── packager.js
│   │       └── index.js
├── sdk/                           [NEW Phase 4B.3 SDK Tooling]
│   ├── cliManager.js
│   └── templates/
│       └── audit-plugin/
├── schemas/
│   └── plugin.schema.json         [Phase 4B.2 Schema]
└── tests/                         [32 Unit & Benchmark Test Suites]
```
