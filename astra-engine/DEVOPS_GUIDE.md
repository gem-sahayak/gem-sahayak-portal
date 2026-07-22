# ASTRA ENGINE ENTERPRISE DEVOPS GUIDE

**Version:** 1.4.0  

---

## 1. Overview
The ASTRA Enterprise DevOps layer provides automated build verification, release packaging, git metadata extraction, and quality gate assertions for continuous integration and automated deployment pipelines.

---

## 2. DevOps CLI Commands

```bash
# Validate Core Build Integrity (<500ms)
node cli.js build

# Generate Release Notes, JSON, Markdown, HTML Packages
node cli.js release

# View Version Metadata & Git Commit Hashes
node cli.js version

# Run Quality Gate Verification
node cli.js verify

# Extract Recent Git Commit Logs
node cli.js changelog
```
