'use strict';

const fs = require('fs');
const path = require('path');
const { validateReportPath, ReporterPathViolationError } = require('../guards/pathGuard');
const severityClassifier = require('./severity');

class ReportGenerator {
  /**
   * Generates string outputs for specified format options.
   */
  async build(data, format = 'json') {
    // Standardize issues and counts via Severity Classifier
    const processed = severityClassifier.processResults(data.results || []);

    switch (format) {
      case 'json':
        return this.buildJson(data, processed);

      case 'markdown':
        return this.buildMarkdown(data, processed);

      case 'terminal':
        return this.buildTerminal(data, processed);

      default:
        throw new Error(`Unsupported reporting format: ${format}`);
    }
  }

  buildJson(data, processed) {
    const summary = data.summary || {};

    const output = {
      summary: {
        timestamp: summary.timestamp || new Date().toISOString(),
        overallVerdict: processed.overallVerdict,
        totalEnginesRun: summary.totalEnginesRun || (data.results ? data.results.length : 0),
        executionTimeMs: summary.executionTimeMs || 0,
        severityCounts: processed.severityCounts,
        priorityCounts: processed.priorityCounts
      },
      schemaVersion: data.schemaVersion || '1.0.0',
      engineVersion: data.engineVersion || '1.1.1',
      issues: processed.issues,
      rawResults: data.results
    };

    return JSON.stringify(output, null, 2);
  }

  buildMarkdown(data, processed) {
    const summary = data.summary || {};
    const sev = processed.severityCounts;
    const pri = processed.priorityCounts;

    let md = `# ASTRA ENGINE v1.1.1 — Audit Summary Report\n\n`;
    md += `**Execution Timestamp:** ${summary.timestamp || new Date().toISOString()}\n`;
    md += `**Overall Verdict:** ${processed.overallVerdict === 'FAIL' ? '❌ FAIL' : (processed.overallVerdict === 'WARNING' ? '⚠️ WARNING' : (processed.overallVerdict === 'RECOMMENDATION' ? '💡 RECOMMENDATION' : '✅ PASS'))}\n`;
    md += `**Engine Version:** ${data.engineVersion || '1.1.1'}\n\n`;

    md += `### Summary Dashboard\n\n`;
    md += `| Severity | Count | Priority | Count |\n`;
    md += `| :--- | :--- | :--- | :--- |\n`;
    md += `| PASS | ${sev.PASS} | P0 (Critical) | ${pri.P0} |\n`;
    md += `| RECOMMENDATION | ${sev.RECOMMENDATION} | P1 (High) | ${pri.P1} |\n`;
    md += `| WARNING | ${sev.WARNING} | P2 (Medium) | ${pri.P2} |\n`;
    md += `| FAIL | ${sev.FAIL} | P3 (Editorial) | ${pri.P3} |\n\n`;

    md += `### Standardized Issues List (${processed.issues.length} items)\n\n`;
    if (processed.issues.length === 0) {
      md += `*No issues detected across all active sub-engines.*\n\n`;
    } else {
      md += `| ID | Code | Severity | Priority | Engine | File / Entity | Message | Recommendation |\n`;
      md += `|---|---|---|---|---|---|---|---|\n`;

      for (const issue of processed.issues) {
        const sevIcon = issue.severity === 'FAIL' ? '❌' : (issue.severity === 'WARNING' ? '⚠️' : '💡');
        md += `| \`${issue.id}\` | \`${issue.code}\` | ${sevIcon} ${issue.severity} | ${issue.priority} | \`${issue.engine}\` | \`${issue.file}\` | ${issue.message} | ${issue.recommendation} |\n`;
      }
      md += `\n`;
    }

    return md;
  }

  buildTerminal(data, processed) {
    const summary = data.summary || {};
    const sev = processed.severityCounts;
    const pri = processed.priorityCounts;

    const colors = {
      reset: "\x1b[0m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      red: "\x1b[31m",
      cyan: "\x1b[36m",
      bright: "\x1b[1m"
    };

    let t = `\n${colors.bright}=== ASTRA ENGINE v1.1.1 SCAN AUDIT SUMMARY ===${colors.reset}\n`;
    const vColor = processed.overallVerdict === 'FAIL' ? colors.red : (processed.overallVerdict === 'WARNING' ? colors.yellow : (processed.overallVerdict === 'RECOMMENDATION' ? colors.cyan : colors.green));
    
    t += `Verdict: ${vColor}${colors.bright}${processed.overallVerdict}${colors.reset}\n`;
    t += `Engines Executed: ${summary.totalEnginesRun || (data.results ? data.results.length : 0)}\n`;
    t += `Execution Time: ${summary.executionTimeMs || 0} ms\n\n`;

    t += `${colors.bright}SEVERITY DASHBOARD:${colors.reset}\n`;
    t += `  PASS            : ${colors.green}${sev.PASS}${colors.reset}\n`;
    t += `  RECOMMENDATION  : ${colors.cyan}${sev.RECOMMENDATION}${colors.reset}\n`;
    t += `  WARNING         : ${colors.yellow}${sev.WARNING}${colors.reset}\n`;
    t += `  FAIL            : ${colors.red}${sev.FAIL}${colors.reset}\n\n`;

    t += `${colors.bright}PRIORITY DASHBOARD:${colors.reset}\n`;
    t += `  P0 (Critical)   : ${pri.P0 > 0 ? colors.red + pri.P0 : colors.green + 0}${colors.reset}\n`;
    t += `  P1 (High)       : ${pri.P1 > 0 ? colors.yellow + pri.P1 : colors.green + 0}${colors.reset}\n`;
    t += `  P2 (Medium)     : ${pri.P2 > 0 ? colors.cyan + pri.P2 : colors.green + 0}${colors.reset}\n`;
    t += `  P3 (Editorial)  : ${colors.green}${pri.P3}${colors.reset}\n\n`;

    if (processed.issues.length > 0) {
      t += `${colors.bright}DETAILED ISSUES SUMMARY (${processed.issues.length} items):${colors.reset}\n`;
      for (const issue of processed.issues) {
        const sColor = issue.severity === 'FAIL' ? colors.red : (issue.severity === 'WARNING' ? colors.yellow : colors.cyan);
        t += `  ${sColor}[${issue.severity}] [${issue.priority}] [${issue.code}]${colors.reset} (${issue.file}): ${issue.message}\n`;
        t += `    └─ Rec: ${colors.cyan}${issue.recommendation}${colors.reset}\n`;
      }
    }

    return t;
  }

  /**
   * Write report to a target path.
   * SEC-002: Path guard enforces writes ONLY inside astra-engine/reports/.
   */
  async write(content, outputPath) {
    const resolvedPath = validateReportPath(outputPath);

    try {
      const dir = path.dirname(resolvedPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(resolvedPath, content, 'utf8');
    } catch (e) {
      if (e instanceof ReporterPathViolationError) {
        throw e;
      }
      console.error(`[Reporter Error] Failed to write report file ${resolvedPath}: ${e.message}`);
    }
  }
}

module.exports = new ReportGenerator();
