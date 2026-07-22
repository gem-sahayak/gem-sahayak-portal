# ASTRA ENGINE ARCHITECTURE — v1.4.0 (Phase 4B.4 Enterprise DevOps Platform)

```
.github/
└── workflows/                     [NEW Phase 4B.4 Workflows]
    ├── astra-ci.yml               [CI Quality Gate]
    └── astra-release.yml          [Release Automation]

astra-engine/
├── astra.config.json
├── cli.js                         [UPDATED v1.4.0 CLI Router]
├── DEVOPS_GUIDE.md                [NEW DevOps Guide]
├── CI_CD_GUIDE.md                 [NEW CI/CD Guide]
├── PLUGIN_SDK.md
├── PLUGIN_MARKETPLACE.md
├── contracts/
├── core/
│   ├── build/                     [NEW Phase 4B.4 Build Verification]
│   │   ├── checksum.js
│   │   ├── integrity.js
│   │   └── validator.js
│   ├── release/                   [NEW Phase 4B.4 Release Automation]
│   │   ├── gitMetadata.js
│   │   ├── releaseManager.js
│   │   ├── releaseNotes.js
│   │   └── versionManager.js
│   ├── plugins/
│   ├── cache/
│   ├── events/
│   ├── fingerprint/
│   ├── guards/
│   ├── incremental/
│   ├── telemetry/
│   ├── graph/
│   ├── parser/
│   ├── reporter/
│   ├── scanner/
│   └── state/
├── engines/
├── plugins/
├── schemas/
├── reports/
│   ├── cache/
│   ├── latest/
│   └── releases/                  [NEW Phase 4B.4 Release Artifacts]
│       ├── release.json
│       ├── release.md
│       ├── release.html
│       └── release-summary.json
└── tests/                         [39 Test Suites]
```
