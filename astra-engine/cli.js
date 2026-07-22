#!/usr/bin/env node
'use strict';

const path = require('path');
const fs = require('fs');

// SEC-003: Activate production import guard BEFORE any other local requires
const { activateGuard, isGuardActive } = require('./core/guards/importGuard');
activateGuard();

const configLoader = require('./core/config');
const stateManager = require('./core/state');
const scanner = require('./core/scanner');
const registryEngine = require('./engines/registry');
const seoEngine = require('./engines/seo');
const graphEngine = require('./engines/graph');
const reporter = require('./core/reporter');

const fingerprintManager = require('./core/fingerprint');
const incrementalScanner = require('./core/incremental');
const { cacheManager } = require('./core/cache');
const { telemetry } = require('./core/telemetry');
const { eventBus, EVENT_TYPES } = require('./core/events');

const colors = {
  reset: "\x1b[0m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  bright: "\x1b[1m"
};

function printBanner() {
  console.log(`\n${colors.cyan}${colors.bright}===========================================${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}          ASTRA ENGINE v1.2.0              ${colors.reset}`);
  console.log(`${colors.cyan}    Repository Guardian & Engineering OS     ${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}===========================================${colors.reset}\n`);
}

function printHelp() {
  console.log(`${colors.bright}Usage:${colors.reset} node cli.js <command> [options]\n`);
  console.log(`${colors.bright}Commands:${colors.reset}`);
  console.log(`  ${colors.green}doctor${colors.reset}        Verify system environment, configurations & workspace schemas`);
  console.log(`  ${colors.green}scan${colors.reset}          Run default integrity & validation check sequences`);
  console.log(`  ${colors.green}registry${colors.reset}      Verify sync consistency between registry.ts & content files`);
  console.log(`  ${colors.green}seo${colors.reset}           Run SEO audit validations (titles, descriptions, canonicals, links)`);
  console.log(`  ${colors.green}graph${colors.reset}         Verify connections & node hierarchies in knowledge graph`);
  console.log(`  ${colors.green}validate${colors.reset}      Run complete suite of active validation sub-engines (registry, seo, graph)`);
  console.log(`  ${colors.green}fingerprint${colors.reset}   Generate composite SHA256 workspace fingerprints & database export`);
  console.log(`  ${colors.green}incremental${colors.reset}   Perform delta scan comparing workspace files against fingerprint database`);
  console.log(`  ${colors.green}cache${colors.reset}         Inspect memory & snapshot cache efficiency metrics`);
  console.log(`  ${colors.green}telemetry${colors.reset}     Export system execution runtimes, throughput & memory telemetry`);
  console.log(`  ${colors.green}integrity${colors.reset}     Validate base project file structures & imports sanity`);
  console.log(`  ${colors.green}geo${colors.reset}           Verify target regional mappings consistency`);
  console.log(`  ${colors.green}extension${colors.reset}     Inspect Chrome Extension manifest profiles & APIs integrations`);
  console.log(`  ${colors.green}report${colors.reset}        Export audit summaries in multiple custom formats`);
  console.log(`  ${colors.green}deploy${colors.reset}        Run validation gatekeeper checking workflows`);
  console.log(`  ${colors.green}history${colors.reset}       Display historical health telemetry trends over time`);
  console.log(`  ${colors.green}help${colors.reset}          Show this help message\n`);
  console.log(`${colors.bright}Options:${colors.reset}`);
  console.log(`  ${colors.green}-h, --help${colors.reset}    Show this help message\n`);
  console.log(`${colors.bright}Examples:${colors.reset}`);
  console.log(`  node cli.js doctor          Check system health`);
  console.log(`  node cli.js fingerprint     Generate SHA256 fingerprint database`);
  console.log(`  node cli.js incremental     Run delta scan comparison`);
  console.log(`  node cli.js telemetry       Display system telemetry\n`);
}

async function runCli() {
  printBanner();
  telemetry.startTimer('total_cli_execution');

  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('-h') || args.includes('--help') || args[0] === 'help') {
    printHelp();
    process.exit(0);
  }

  const command = args[0].toLowerCase();

  let config;
  try {
    config = configLoader.load();
  } catch (e) {
    console.log(`${colors.red}${colors.bright}❌ CRITICAL: Configuration Loader Failed!${colors.reset}`);
    process.exit(1);
  }

  const rootDir = path.resolve(__dirname, '..');

  switch (command) {
    case 'doctor': {
      console.log(`${colors.cyan}🩺 Bootstrapping Astra Doctor Diagnostics (v1.2.0)...${colors.reset}`);
      console.log(`  - Engine Config Version: ${colors.green}${config.engineVersion}${colors.reset}`);
      console.log(`  - Schema Version: ${colors.green}${config.schemaVersion}${colors.reset}`);
      console.log(`  - Exclusions Mapped: ${colors.green}${config.exclusions.join(', ')}${colors.reset}`);
      console.log(`  - Import Guard Active: ${colors.green}${isGuardActive()}${colors.reset}`);

      const modules = {
        'Config Loader': configLoader,
        'State Manager': stateManager,
        'Filesystem Scanner': require('./core/filesystem'),
        'Markdown Parser': require('./core/parser/markdown'),
        'TS Parser': require('./core/parser/typescript'),
        'Reporter': reporter,
        'Registry Engine': registryEngine,
        'SEO Engine': seoEngine,
        'Knowledge Graph Engine': graphEngine,
        'Fingerprint Manager': fingerprintManager,
        'Incremental Scanner': incrementalScanner,
        'Event Bus': eventBus,
        'Cache Layer': cacheManager,
        'Telemetry Engine': telemetry,
        'Path Guard': require('./core/guards/pathGuard'),
        'Import Guard': require('./core/guards/importGuard'),
      };

      console.log(`\n  ${colors.bright}Module Health:${colors.reset}`);
      let allModulesOk = true;
      for (const [name, mod] of Object.entries(modules)) {
        if (mod) {
          console.log(`    ✅ ${name}: ${colors.green}loaded${colors.reset}`);
        } else {
          console.log(`    ❌ ${name}: ${colors.red}MISSING${colors.reset}`);
          allModulesOk = false;
        }
      }

      console.log(`\n${allModulesOk ? colors.green + '🟢 Astra OS Status: All Phase 4A modules operational.' : colors.red + '🔴 Astra OS Status: Degraded'}${colors.reset}\n`);
      break;
    }

    case 'fingerprint': {
      console.log(`${colors.cyan}🔑 Generating SHA256 Workspace Fingerprints...${colors.reset}`);
      eventBus.publish(EVENT_TYPES.SCAN_STARTED, { command: 'fingerprint' });

      const state = await scanner.runScanner(rootDir, config);
      for (const [relPath, fileObj] of state.filesystem.files.entries()) {
        fingerprintManager.fingerprintFile(relPath, fileObj.absolutePath);
      }

      const res = fingerprintManager.generateWorkspaceFingerprint(state);
      eventBus.publish(EVENT_TYPES.CACHE_UPDATED, { type: 'fingerprint', composite: res.compositeFingerprint });

      const outputData = {
        summary: {
          timestamp: new Date().toISOString(),
          compositeFingerprint: res.compositeFingerprint,
          fileCount: res.fileCount,
          registryHash: res.registryHash,
          graphHash: res.graphHash
        },
        databasePath: 'reports/cache/fingerprint-db.json'
      };

      const jsonStr = JSON.stringify(outputData, null, 2);
      const reportsDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(jsonStr, path.join(reportsDir, 'fingerprints.json'));

      console.log(`  - Composite Fingerprint : ${colors.green}${res.compositeFingerprint}${colors.reset}`);
      console.log(`  - Files Fingerprinted   : ${colors.green}${res.fileCount}${colors.reset}`);
      console.log(`  - Fingerprint DB Export : ${colors.cyan}reports/cache/fingerprint-db.json${colors.reset}\n`);
      break;
    }

    case 'incremental': {
      console.log(`${colors.cyan}🔄 Running Incremental Delta Scan...${colors.reset}`);
      eventBus.publish(EVENT_TYPES.SCAN_STARTED, { command: 'incremental' });

      const state = await scanner.runScanner(rootDir, config);
      const incRes = incrementalScanner.scanIncremental(state);

      const reportsDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(incRes, null, 2), path.join(reportsDir, 'incremental-report.json'));

      const s = incRes.comparison.stats;
      console.log(`  - Total Files          : ${colors.green}${s.totalFiles}${colors.reset}`);
      console.log(`  - Unchanged (Hit)      : ${colors.green}${s.unchangedCount}${colors.reset}`);
      console.log(`  - Added Files          : ${colors.yellow}${s.addedCount}${colors.reset}`);
      console.log(`  - Modified Files       : ${colors.yellow}${s.modifiedCount}${colors.reset}`);
      console.log(`  - Deleted Files        : ${colors.red}${s.deletedCount}${colors.reset}`);
      console.log(`  - Fingerprint Hit Rate : ${colors.cyan}${s.fingerprintHitRatePct}%${colors.reset}`);
      console.log(`  - Incremental Saved %  : ${colors.cyan}${s.incrementalSavedPct}%${colors.reset}\n`);
      break;
    }

    case 'cache': {
      console.log(`${colors.cyan}💾 Inspecting Cache Layer Efficiency...${colors.reset}`);
      const stats = cacheManager.getAllStats();
      const reportsDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(stats, null, 2), path.join(reportsDir, 'cache-report.json'));

      console.log(`  - State Snapshot Cache   : ${colors.green}${stats.state.size} entries (${stats.state.hitRatePct}% hit rate)${colors.reset}`);
      console.log(`  - Registry Cache         : ${colors.green}${stats.registry.size} entries (${stats.registry.hitRatePct}% hit rate)${colors.reset}`);
      console.log(`  - Graph Topology Cache   : ${colors.green}${stats.graph.size} entries (${stats.graph.hitRatePct}% hit rate)${colors.reset}\n`);
      break;
    }

    case 'telemetry': {
      console.log(`${colors.cyan}📊 System Execution & Memory Telemetry...${colors.reset}`);
      telemetry.stopTimer('total_cli_execution');
      const snap = telemetry.getSnapshot();

      const reportsDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(snap, null, 2), path.join(reportsDir, 'telemetry.json'));

      console.log(`  - Heap Usage Used       : ${colors.green}${snap.memory.heapUsedMB} MB${colors.reset}`);
      console.log(`  - RSS Memory Peak       : ${colors.green}${snap.memory.rssMB} MB${colors.reset}`);
      console.log(`  - Execution Runtime     : ${colors.green}${snap.executionTimeMs} ms${colors.reset}\n`);
      break;
    }

    case 'scan':
    case 'registry':
    case 'seo':
    case 'graph':
    case 'validate': {
      console.log(`${colors.cyan}🔍 Scanning repository structural tree...${colors.reset}`);
      const startTime = Date.now();

      let state;
      try {
        state = await scanner.runScanner(rootDir, config);
      } catch (err) {
        console.error(`${colors.red}❌ Filesystem scan failed:${colors.reset}`, err.message);
        process.exit(1);
      }

      const enginesToRun = [];
      if (command === 'registry' || command === 'scan') {
        enginesToRun.push(registryEngine);
      } else if (command === 'seo') {
        enginesToRun.push(seoEngine);
      } else if (command === 'graph') {
        enginesToRun.push(graphEngine);
      } else if (command === 'validate') {
        enginesToRun.push(registryEngine, seoEngine, graphEngine);
      }

      const results = [];
      for (const engine of enginesToRun) {
        eventBus.publish(EVENT_TYPES.ENGINE_STARTED, { engine: engine.manifest.name });
        try {
          await engine.init({ config, state, logger: console });
          const res = await engine.run(state);
          results.push(res);
          eventBus.publish(EVENT_TYPES.ENGINE_COMPLETED, { engine: engine.manifest.name, verdict: res.verdict });
        } catch (err) {
          eventBus.publish(EVENT_TYPES.VALIDATION_FAILED, { engine: engine.manifest.name, error: err.message });
          console.error(`${colors.red}❌ Engine execution crash [${engine.manifest.name}]:${colors.reset}`, err.message);
          process.exit(1);
        }
      }

      let totalErrors = 0;
      let totalWarnings = 0;
      for (const r of results) {
        totalErrors += r.errors.length;
        totalWarnings += r.warnings.length;
      }

      const totalTime = Date.now() - startTime;
      const overallVerdict = totalErrors > 0 ? 'FAIL' : (totalWarnings > 0 ? 'WARNING' : 'PASS');

      const reportData = {
        summary: {
          timestamp: new Date(),
          overallVerdict,
          totalEnginesRun: results.length,
          totalErrors,
          totalWarnings,
          executionTimeMs: totalTime
        },
        results,
        schemaVersion: config.schemaVersion,
        engineVersion: '1.2.0'
      };

      const jsonReport = await reporter.build(reportData, 'json');
      const mdReport = await reporter.build(reportData, 'markdown');
      const terminalReport = await reporter.build(reportData, 'terminal');

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(jsonReport, path.join(reportsLatestDir, 'report.json'));
      await reporter.write(mdReport, path.join(reportsLatestDir, 'report.md'));

      console.log(terminalReport);

      eventBus.publish(EVENT_TYPES.REPORT_GENERATED, { verdict: overallVerdict });

      if (overallVerdict === 'FAIL') {
        process.exit(1);
      } else {
        process.exit(0);
      }
      break;
    }

    case 'integrity':
    case 'geo':
    case 'extension':
    case 'report':
    case 'deploy':
    case 'history':
      console.log(`${colors.yellow}🚧 Command "${command}" is reserved for Phase X...${colors.reset}`);
      break;

    default:
      console.log(`${colors.red}❌ Unknown command: "${command}"${colors.reset}\n`);
      printHelp();
      process.exit(1);
  }
}

runCli().catch((err) => {
  console.error(`${colors.red}Fatal execution error in CLI runtime:${colors.reset}`, err);
  process.exit(1);
});
