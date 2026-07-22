# ASTRA ENTERPRISE PLUGIN MARKETPLACE

**Version:** 1.3.2  

---

## 1. Overview
The ASTRA Plugin Marketplace provides a curated catalog of enterprise read-only extensions.

---

## 2. Trust Levels
- `OFFICIAL`: Signed by ASTRA Core Team (`publisher: ASTRA Core Team`).
- `VERIFIED`: Valid crypto signature verified via `publisher.pem`.
- `COMMUNITY`: Published by community authors without core crypto signature.
- `UNSIGNED`: Package missing signature metadata.
- `BLOCKED`: Explicitly blocked by administrator policy.

---

## 3. Marketplace CLI Commands

```bash
# Search Catalog
node cli.js marketplace "SEO"

# List Registered Plugins & Trust Levels
node cli.js plugin:list

# Verify Plugin Checksums & Signatures
node cli.js plugin:verify plugins/sample-plugin

# Run Plugin Dependency & Health Diagnostics
node cli.js plugin:doctor
```
