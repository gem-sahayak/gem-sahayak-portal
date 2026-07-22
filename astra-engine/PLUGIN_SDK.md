# ASTRA ENGINE PLUGIN SDK GUIDE

**Version:** 1.3.2  
**Target:** Read-Only Enterprise Developers  

---

## 1. Overview
The ASTRA Plugin SDK enables external developers to write isolated, read-only extensions to analyze ASTRA Engine state snapshots, SEO metadata, Knowledge Graph topologies, and validation reports without modifying core engine logic.

---

## 2. Security Boundaries & Read-Only Policy
- **Observer-Only:** Plugins cannot mutate production code (`/app`, `/src`, `/posts`, `/public`, `/extension`).
- **Zero Write Permissions:** Context snapshots passed to plugins are deeply frozen via `deepFreeze()`. Attempted mutations fail silently or throw runtime errors.
- **Forbidden Execution:** 0 `eval()`, 0 `new Function()`, 0 `vm`, 0 `child_process`.

---

## 3. SDK CLI Commands

```bash
# Initialize SDK Environment
node cli.js sdk:init

# Scaffold New Read-Only Plugin
node cli.js sdk:create "My Audit Plugin"

# Lint Plugin Manifest & Code Structure
node cli.js sdk:lint plugins/my-audit-plugin

# Bundle Plugin into .apkg Archive
node cli.js sdk:package plugins/my-audit-plugin

# Test Plugin Package Lifecycle Hooks
node cli.js sdk:test plugins/my-audit-plugin
```

---

## 4. Supported Lifecycle Hooks

- `beforeScan` — Fires before workspace filesystem scan.
- `beforeRegistry` — Fires before registry synchronization validation.
- `beforeSEO` — Fires before SEO Engine metadata audit.
- `beforeGraph` — Fires before Knowledge Graph topology audit.
- `afterGraph` — Fires after graph analysis.
- `beforeReport` — Fires before report generation.
- `afterReport` — Fires after Markdown/JSON reports are written.
- `afterScan` — Fires at completion of scan sequence.

---

## 5. Granted Read Permissions

- `READ_STATE` — Access `context.stateSnapshot`
- `READ_REGISTRY` — Access `context.registrySnapshot`
- `READ_GRAPH` — Access `context.graphSnapshot`
- `READ_REPORTS` — Access `context.reportsSnapshot`
- `READ_RESULTS` — Access `context.resultsSnapshot`
