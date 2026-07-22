const fs = require('fs');
const path = require('path');

class ReportGenerator {
  /**
   * Generates string outputs for specified format options.
   */
  async build(data, format = 'json') {
    switch (format) {
      case 'json':
        return JSON.stringify(data, null, 2);

      case 'markdown':
        return this.buildMarkdown(data);

      case 'terminal':
        return this.buildTerminal(data);

      default:
        throw new Error(`Unsupported reporting format: ${format}`);
    }
  }

  buildMarkdown(data) {
    const summary = data.summary;
    let md = `# ASTRA ENGINE Validation Audit Report\n\n`;
    md += `**Execution Timestamp:** ${summary.timestamp}\n`;
    md += `**Verdict:** ${summary.overallVerdict === 'FAIL' ? '❌ FAIL' : (summary.overallVerdict === 'WARNING' ? '⚠️ WARNING' : '✅ PASS')}\n\n`;
    
    md += `### Audit Summary\n`;
    md += `| Metric | Count |\n`;
    md += `| :--- | :--- |\n`;
    md += `| Engines Executed | ${summary.totalEnginesRun} |\n`;
    md += `| Total Errors | ${summary.totalErrors} |\n`;
    md += `| Total Warnings | ${summary.totalWarnings} |\n`;
    md += `| Execution Time | ${summary.executionTimeMs} ms |\n\n`;

    md += `### Detailed Results\n`;
    for (const res of data.results) {
      md += `#### Engine: \`${res.engineName}\` (${res.verdict})\n`;
      md += `*   **Errors:** ${res.errors.length}\n`;
      md += `*   **Warnings:** ${res.warnings.length}\n`;
      md += `*   **Execution Time:** ${res.executionTimeMs} ms\n\n`;

      if (res.errors.length > 0) {
        md += `##### Errors Evidence:\n`;
        res.errors.forEach(err => {
          md += `-   **[${err.code}]** ${err.message} (File: \`${err.file || 'N/A'}\`)\n`;
        });
        md += `\n`;
      }

      if (res.warnings.length > 0) {
        md += `##### Warnings Evidence:\n`;
        res.warnings.forEach(wrn => {
          md += `-   **[${wrn.code}]** ${wrn.message} (File: \`${wrn.file || 'N/A'}\`)\n`;
        });
        md += `\n`;
      }
    }
    return md;
  }

  buildTerminal(data) {
    const summary = data.summary;
    const colors = {
      reset: "\x1b[0m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      red: "\x1b[31m",
      cyan: "\x1b[36m",
      bright: "\x1b[1m"
    };

    let t = `\n${colors.bright}=== ASTRA ENGINE SCAN AUDIT SUMMARY ===${colors.reset}\n`;
    const vColor = summary.overallVerdict === 'FAIL' ? colors.red : (summary.overallVerdict === 'WARNING' ? colors.yellow : colors.green);
    t += `Verdict: ${vColor}${colors.bright}${summary.overallVerdict}${colors.reset}\n`;
    t += `Engines Executed: ${summary.totalEnginesRun}\n`;
    t += `Total Errors: ${colors.red}${summary.totalErrors}${colors.reset}\n`;
    t += `Total Warnings: ${colors.yellow}${summary.totalWarnings}${colors.reset}\n`;
    t += `Execution Time: ${summary.executionTimeMs} ms\n\n`;

    for (const res of data.results) {
      const resColor = res.verdict === 'FAIL' ? colors.red : (res.verdict === 'WARNING' ? colors.yellow : colors.green);
      t += `➔ Engine: ${colors.cyan}${res.engineName}${colors.reset} [${resColor}${res.verdict}${colors.reset}] (${res.executionTimeMs} ms)\n`;
      
      if (res.errors.length > 0) {
        res.errors.forEach(err => {
          t += `    ${colors.red}● Error [${err.code}]${colors.reset}: ${err.message}\n`;
          if (err.file) t += `      File: ${err.file}\n`;
        });
      }
      
      if (res.warnings.length > 0) {
        res.warnings.forEach(wrn => {
          t += `    ${colors.yellow}▲ Warning [${wrn.code}]${colors.reset}: ${wrn.message}\n`;
          if (wrn.file) t += `      File: ${wrn.file}\n`;
        });
      }
    }
    return t;
  }

  /**
   * Helper utility to write report logs to target folder.
   */
  async write(content, outputPath) {
    try {
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(outputPath, content, 'utf8');
    } catch (e) {
      console.error(`[Reporter Error] Failed to write report file ${outputPath}: ${e.message}`);
    }
  }
}

module.exports = new ReportGenerator();
