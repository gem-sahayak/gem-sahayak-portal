'use strict';

const path = require('path');
const pluginTelemetry = require('./telemetry');
const pluginRegistry = require('./registry');

class PluginReporter {
  buildJsonReport() {
    const registryList = pluginRegistry.list();
    const telemetrySnap = pluginTelemetry.getSnapshot();

    return {
      reportType: 'ASTRA_PLUGIN_REPORT',
      engineVersion: '1.3.1',
      generatedAt: new Date().toISOString(),
      summary: {
        totalPluginsRegistered: registryList.length,
        enabledPlugins: registryList.filter(p => p.enabled).length,
        disabledPlugins: registryList.filter(p => !p.enabled).length
      },
      plugins: registryList,
      telemetry: telemetrySnap
    };
  }

  buildMarkdownReport() {
    const json = this.buildJsonReport();
    const lines = [];

    lines.push(`# ASTRA ENGINE v1.3.1 — PLUGIN AUDIT REPORT`);
    lines.push(`**Generated At:** ${json.generatedAt}`);
    lines.push(`**Registered Plugins:** ${json.summary.totalPluginsRegistered}`);
    lines.push(`**Active (Enabled):** ${json.summary.enabledPlugins}\n`);

    lines.push(`## Registered Plugins Table\n`);
    lines.push(`| Plugin ID | Name | Version | Status | Granted Permissions | Hooks |`);
    lines.push(`|---|---|---|---|---|---|`);

    for (const p of json.plugins) {
      lines.push(`| \`${p.id}\` | ${p.name} | \`v${p.version}\` | ${p.enabled ? 'ENABLED' : 'DISABLED'} | ${p.permissions.join(', ')} | ${p.hooks.join(', ')} |`);
    }

    lines.push(`\n## Plugin Telemetry Summary\n`);
    lines.push(`| Plugin ID | Calls | Success % | Avg Time (ms) | Timeouts | Errors |`);
    lines.push(`|---|---|---|---|---|---|`);

    for (const t of json.telemetry.telemetry) {
      lines.push(`| \`${t.pluginId}\` | ${t.totalCalls} | ${t.successRatePct}% | ${t.avgTimeMs} ms | ${t.timeoutCalls} | ${t.errorCalls} |`);
    }

    return lines.join('\n');
  }
}

module.exports = new PluginReporter();
