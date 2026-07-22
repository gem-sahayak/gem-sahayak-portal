'use strict';

const crypto = require('crypto');

/**
 * ASTRA Engine v1.1.1 — Severity & Priority Framework
 * 
 * Standardizes issue taxonomy, severities (PASS, RECOMMENDATION, WARNING, FAIL),
 * priorities (P0, P1, P2, P3), and actionable recommendations.
 */

const CODE_MAPPING = {
  // Registry Engine Codes
  'REGISTRY_MISMATCH': { code: 'REG001', severity: 'FAIL', priority: 'P0', rec: 'Ensure all markdown posts are registered in src/content/registry.ts' },
  'UNAPPROVED_CATEGORY': { code: 'REG002', severity: 'RECOMMENDATION', priority: 'P2', rec: 'Add category to REGISTRY_CATEGORIES or remap article to approved taxonomy' },
  
  // SEO Engine Codes
  'MISSING_TITLE': { code: 'SEO001', severity: 'FAIL', priority: 'P0', rec: 'Add a non-empty <title> or title property to frontmatter' },
  'SHORT_TITLE': { code: 'SEO002', severity: 'RECOMMENDATION', priority: 'P3', rec: 'Expand title to at least 15 characters for better search visibility' },
  'LONG_TITLE': { code: 'SEO003', severity: 'RECOMMENDATION', priority: 'P2', rec: 'Shorten title to <= 70 characters to avoid SERP truncation' },
  'DUPLICATE_TITLE': { code: 'SEO004', severity: 'FAIL', priority: 'P0', rec: 'Ensure all page titles are unique across the portal' },
  
  'MISSING_DESCRIPTION': { code: 'SEO005', severity: 'FAIL', priority: 'P0', rec: 'Provide a non-empty summary / meta description for search snippets' },
  'SHORT_DESCRIPTION': { code: 'SEO006', severity: 'RECOMMENDATION', priority: 'P3', rec: 'Expand description to >= 50 characters to provide meaningful context' },
  'LONG_DESCRIPTION': { code: 'SEO007', severity: 'RECOMMENDATION', priority: 'P2', rec: 'Trim description to <= 160 characters to fit search snippet boundaries' },
  'DUPLICATE_DESCRIPTION': { code: 'SEO008', severity: 'RECOMMENDATION', priority: 'P2', rec: 'Craft unique meta descriptions for each article page' },
  
  'EXTERNAL_CANONICAL_DOMAIN': { code: 'SEO009', severity: 'WARNING', priority: 'P1', rec: 'Verify canonical URL points to official portal domain' },
  'DUPLICATE_CANONICAL': { code: 'SEO010', severity: 'FAIL', priority: 'P0', rec: 'Fix duplicate canonical URL to avoid indexing conflicts' },
  
  'BROKEN_INTERNAL_ARTICLE_LINK': { code: 'SEO011', severity: 'WARNING', priority: 'P1', rec: 'Fix broken relatedArticle reference to point to a valid registered slug' },
  'BROKEN_INTERNAL_TOOL_LINK': { code: 'SEO012', severity: 'RECOMMENDATION', priority: 'P2', rec: 'Register missing tool in REGISTRY_TOOLS or fix target tool slug' },
  'HEADING_HIERARCHY_JUMP': { code: 'SEO013', severity: 'RECOMMENDATION', priority: 'P3', rec: 'Adjust heading levels sequentially without skipping levels (e.g. H1 -> H2)' },
  'MULTIPLE_H1_HEADINGS': { code: 'SEO014', severity: 'RECOMMENDATION', priority: 'P3', rec: 'Use exactly one main H1 heading per page' },
  'EMPTY_CATEGORY_HUB': { code: 'SEO015', severity: 'RECOMMENDATION', priority: 'P2', rec: 'Add spoke articles to populate this category hub' },

  // Knowledge Graph Engine Codes
  'ORPHAN_ARTICLE_NODE': { code: 'GRAPH001', severity: 'RECOMMENDATION', priority: 'P3', rec: 'Link this article from category hub or related articles to build inbound context' },
  'ORPHAN_TOOL_NODE': { code: 'GRAPH002', severity: 'RECOMMENDATION', priority: 'P2', rec: 'Add inbound links from relevant articles to this tool' },
  'DEAD_END_NODE': { code: 'GRAPH003', severity: 'RECOMMENDATION', priority: 'P3', rec: 'Add relatedArticles or relatedTools links to prevent dead-end navigation' },
  'SELF_LOOP_DETECTED': { code: 'GRAPH004', severity: 'FAIL', priority: 'P0', rec: 'Remove self-referential internal link from article' },
  'ISOLATED_NODE_CLUSTER': { code: 'GRAPH005', severity: 'WARNING', priority: 'P1', rec: 'Connect isolated article node to the main Knowledge Graph' },
  'INVALID_ENTITY_SCHEMA': { code: 'GRAPH006', severity: 'WARNING', priority: 'P1', rec: 'Provide required Entity and Category fields' },
  'UNRESOLVED_PARENT_ENTITY': { code: 'GRAPH007', severity: 'WARNING', priority: 'P1', rec: 'Ensure parent entity exists in knowledge graph index' },
  'UNRESOLVED_CHILD_ENTITY': { code: 'GRAPH008', severity: 'WARNING', priority: 'P1', rec: 'Ensure child entity references valid nodes' }
};

class SeverityClassifier {
  /**
   * Normalize raw error/warning items into standard Issue Objects.
   */
  classifyIssue(rawIssue, defaultEngine = 'core') {
    const rawCode = rawIssue.code || 'UNKNOWN';
    const mapped = CODE_MAPPING[rawCode] || {
      code: rawCode,
      severity: rawIssue.severity || 'WARNING',
      priority: rawIssue.priority || 'P2',
      rec: 'Review issue evidence and resolve finding'
    };

    const file = rawIssue.file || 'unknown';
    const entity = rawIssue.evidence?.slug || rawIssue.evidence?.node || rawIssue.evidence?.entityName || 'global';
    const message = rawIssue.message || 'Issue detected';

    // Hash for deterministic issue ID
    const hashContent = `${defaultEngine}:${mapped.code}:${file}:${entity}:${message}`;
    const id = 'ISS-' + crypto.createHash('sha256').update(hashContent).digest('hex').substring(0, 10);

    return {
      id,
      engine: defaultEngine,
      validator: rawIssue.validator || `${mapped.code.toLowerCase()}.validator`,
      severity: mapped.severity,
      priority: mapped.priority,
      code: mapped.code,
      rawCode,
      file,
      entity,
      message,
      recommendation: mapped.rec,
      evidence: rawIssue.evidence || {}
    };
  }

  /**
   * Process results from all engine runs and aggregate counts.
   */
  processResults(engineResults) {
    const issues = [];

    for (const res of engineResults) {
      const engineName = res.engineName || 'unknown-engine';

      if (Array.isArray(res.errors)) {
        for (const err of res.errors) {
          issues.push(this.classifyIssue(err, engineName));
        }
      }

      if (Array.isArray(res.warnings)) {
        for (const wrn of res.warnings) {
          issues.push(this.classifyIssue(wrn, engineName));
        }
      }
    }

    // Aggregate counts
    const severityCounts = { PASS: 0, RECOMMENDATION: 0, WARNING: 0, FAIL: 0 };
    const priorityCounts = { P0: 0, P1: 0, P2: 0, P3: 0 };

    for (const issue of issues) {
      if (severityCounts[issue.severity] !== undefined) {
        severityCounts[issue.severity]++;
      }
      if (priorityCounts[issue.priority] !== undefined) {
        priorityCounts[issue.priority]++;
      }
    }

    // Determine overall verdict
    let overallVerdict = 'PASS';
    if (severityCounts.FAIL > 0) {
      overallVerdict = 'FAIL';
    } else if (severityCounts.WARNING > 0) {
      overallVerdict = 'WARNING';
    } else if (severityCounts.RECOMMENDATION > 0) {
      overallVerdict = 'RECOMMENDATION';
    }

    return {
      issues,
      severityCounts,
      priorityCounts,
      overallVerdict
    };
  }
}

module.exports = new SeverityClassifier();
