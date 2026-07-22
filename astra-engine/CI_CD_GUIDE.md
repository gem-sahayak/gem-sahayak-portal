# ASTRA ENGINE CI/CD PIPELINE GUIDE

**Version:** 1.4.0  

---

## 1. GitHub Actions Workflows

- **Quality Gate Pipeline:** `.github/workflows/astra-ci.yml`
  - Runs on every `push` and `pull_request` to `main`, `master`, and `phase*` branches.
  - Executes unit test suites, doctor diagnostics, and validation sub-engines.
  - Uploads audit reports as build artifacts (`astra-audit-reports`).
  - Fails build on `FAIL` verdict or `P0` critical issues.

- **Automated Release Pipeline:** `.github/workflows/astra-release.yml`
  - Triggers on tag pushes matching `astra-engine-v*`.
  - Runs release manager and exports release packages to `reports/releases/`.
  - Uploads `release.json`, `release.md`, `release.html`, `release-summary.json` as release artifacts (`astra-release-package`).
