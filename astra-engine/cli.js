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
const {
  pluginLoader,
  pluginRegistry,
  pluginManifestValidator,
  pluginTrustManager,
  signatureVerifier,
  dependencyResolver,
  versionManager,
  pluginReporter
} = require('./core/plugins');

const { marketplaceCatalog, marketplaceSearch, marketplaceInstaller } = require('./core/plugins/marketplace');
const pluginLockfile = require('./core/plugins/lockfile');
const sdkManager = require('./sdk/cliManager');

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
  console.log(`${colors.cyan}${colors.bright}          ASTRA ENGINE v1.3.2              ${colors.reset}`);
  console.log(`${colors.cyan}    Repository Guardian & Engineering OS     ${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}===========================================${colors.reset}\n`);
}

function printHelp() {
  console.log(`${colors.bright}Usage:${colors.reset} node cli.js <command> [options]\n`);
  console.log(`${colors.bright}Commands:${colors.reset}`);
  console.log(`  ${colors.green}doctor${colors.reset}          Verify system environment, configurations & workspace schemas`);
  console.log(`  ${colors.green}scan${colors.reset}            Run default integrity & validation check sequences`);
  console.log(`  ${colors.green}registry${colors.reset}        Verify sync consistency between registry.ts & content files`);
  console.log(`  ${colors.green}seo${colors.reset}             Run SEO audit validations (titles, descriptions, canonicals, links)`);
  console.log(`  ${colors.green}graph${colors.reset}           Verify connections & node hierarchies in knowledge graph`);
  console.log(`  ${colors.green}validate${colors.reset}        Run complete suite of active validation sub-engines (registry, seo, graph)`);
  console.log(`  ${colors.green}fingerprint${colors.reset}     Generate composite SHA256 workspace fingerprints & database export`);
  console.log(`  ${colors.green}incremental${colors.reset}     Perform delta scan comparing workspace files against fingerprint database`);
  console.log(`  ${colors.green}cache${colors.reset}           Inspect memory & snapshot cache efficiency metrics`);
  console.log(`  ${colors.green}telemetry${colors.reset}       Export system execution runtimes, throughput & memory telemetry`);
  console.log(`  ${colors.green}plugins${colors.reset}         Discover & inspect external read-only plugin packages`);
  console.log(`  ${colors.green}plugin:list${colors.reset}     List active registered plugins, granted permissions & hooks`);
  console.log(`  ${colors.green}plugin:info${colors.reset}     Display detailed plugin manifest, trust level & permissions`);
  console.log(`  ${colors.green}plugin:verify${colors.reset}   Verify plugin signature, public PEM key & SHA256 checksums`);
  console.log(`  ${colors.green}plugin:doctor${colors.reset}   Run diagnostics on installed plugins & dependency graphs`);
  console.log(`  ${colors.green}plugin:lock${colors.reset}     Generate deterministic plugin-lock.json file`);
  console.log(`  ${colors.green}marketplace${colors.reset}     Search & browse local enterprise plugin catalog`);
  console.log(`  ${colors.green}sdk:init${colors.reset}        Initialize ASTRA Plugin SDK Developer Workspace`);
  console.log(`  ${colors.green}sdk:create${colors.reset}      Scaffold new read-only plugin package from template`);
  console.log(`  ${colors.green}sdk:lint${colors.reset}        Validate plugin manifest, entry files & documentation`);
  console.log(`  ${colors.green}sdk:package${colors.reset}     Bundle plugin into portable .apkg package archive`);
  console.log(`  ${colors.green}sdk:test${colors.reset}        Run test suite on target plugin package`);
  console.log(`  ${colors.green}help${colors.reset}            Show this help message\n`);
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
      console.log(`${colors.cyan}🩺 Bootstrapping Astra Doctor Diagnostics (v1.3.2)...${colors.reset}`);
      console.log(`  - Engine Config Version: ${colors.green}${config.engineVersion}${colors.reset}`);
      console.log(`  - Schema Version: ${colors.green}${config.schemaVersion}${colors.reset}`);
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
        'Plugin Loader': pluginLoader,
        'Plugin Registry': pluginRegistry,
        'Plugin Sandbox': require('./core/plugins/sandbox'),
        'Plugin Manifest Validator': pluginManifestValidator,
        'Plugin Trust Manager': pluginTrustManager,
        'Plugin Signature Verifier': signatureVerifier,
        'Plugin Dependency Resolver': dependencyResolver,
        'Plugin Version Manager': versionManager,
        'Plugin Lockfile Manager': pluginLockfile,
        'Plugin Marketplace Manager': require('./core/plugins/marketplace'),
        'Plugin Packager': require('./core/plugins/package'),
        'Plugin SDK Manager': sdkManager,
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

      console.log(`\n${allModulesOk ? colors.green + '🟢 Astra OS Status: All Phase 4B.3 modules operational.' : colors.red + '🔴 Astra OS Status: Degraded'}${colors.reset}\n`);
      break;
    }

    case 'plugins':
    case 'plugin:list': {
      console.log(`${colors.cyan}🔌 Discovering & Listing ASTRA Read-Only Plugins...${colors.reset}`);
      const discovered = pluginLoader.discoverPlugins();
      for (const disc of discovered) { try { pluginLoader.loadPluginFromDir(disc.folder); } catch (e) {} }

      const list = pluginRegistry.list();
      console.log(`  - Registered Plugins: ${colors.green}${list.length}${colors.reset}\n`);

      for (const p of list) {
        const record = pluginRegistry.find(p.id);
        const trust = record.manifest.trustLevel || 'UNSIGNED';
        console.log(`    - ${colors.green}${p.name}${colors.reset} [id: ${p.id}, v${p.version}]`);
        console.log(`      Trust Level: ${colors.cyan}${trust}${colors.reset}`);
        console.log(`      Permissions: ${colors.yellow}${p.permissions.join(', ')}${colors.reset}`);
        console.log(`      Hooks: ${colors.cyan}${p.hooks.join(', ')}${colors.reset}\n`);
      }
      break;
    }

    case 'plugin:info': {
      const pluginId = args[1] || 'sample-auditor';
      const discovered = pluginLoader.discoverPlugins();
      for (const disc of discovered) { try { pluginLoader.loadPluginFromDir(disc.folder); } catch (e) {} }

      const record = pluginRegistry.find(pluginId);
      if (!record) {
        console.log(`${colors.red}❌ Plugin "${pluginId}" not found.${colors.reset}\n`);
        process.exit(1);
      }

      console.log(`${colors.cyan}ℹ️ Plugin Metadata Info: ${colors.green}${record.name}${colors.reset}`);
      console.log(`  - ID                   : ${record.id}`);
      console.log(`  - Version              : v${record.version}`);
      console.log(`  - Trust Level          : ${record.manifest.trustLevel || 'UNSIGNED'}`);
      console.log(`  - Granted Permissions  : ${record.manifest.permissions.join(', ')}`);
      console.log(`  - Subscribed Hooks     : ${record.manifest.hooks.join(', ')}\n`);
      break;
    }

    case 'plugin:verify': {
      const targetDir = args[1] || path.join(__dirname, 'plugins/sample-plugin');
      console.log(`${colors.cyan}🔒 Verifying Plugin Signatures & Checksums: ${targetDir}${colors.reset}`);
      const sigRes = signatureVerifier.verifySignature(targetDir);
      console.log(`  ${sigRes.verified ? colors.green + '✅ VERIFIED' : colors.yellow + '⚠️ UNSIGNED / UNVERIFIED'}: ${sigRes.reason}${colors.reset}\n`);
      break;
    }

    case 'plugin:doctor':
    case 'sdk:doctor': {
      console.log(`${colors.cyan}🩺 Running Plugin Dependency & Health Diagnostics...${colors.reset}`);
      const discovered = pluginLoader.discoverPlugins();
      for (const disc of discovered) { try { pluginLoader.loadPluginFromDir(disc.folder); } catch (e) {} }

      const depRes = dependencyResolver.resolveExecutionOrder(pluginRegistry.plugins);
      console.log(`  - Active Plugins Analyzed   : ${colors.green}${pluginRegistry.list().length}${colors.reset}`);
      console.log(`  - Execution Order Calculated: ${colors.cyan}${depRes.order.join(' -> ') || 'None'}${colors.reset}`);
      console.log(`  ${depRes.valid ? colors.green + '✅ HEALTHY: Zero dependency conflicts!' : colors.red + '❌ ERROR: ' + depRes.errors.join(', ')}${colors.reset}\n`);
      break;
    }

    case 'plugin:lock': {
      console.log(`${colors.cyan}🔒 Generating Plugin Lockfile (plugin-lock.json)...${colors.reset}`);
      const lockData = pluginLockfile.generateLockfile();
      console.log(`  - Lockfile Exported: ${colors.green}reports/cache/plugin-lock.json${colors.reset}`);
      console.log(`  - Locked Plugins   : ${colors.cyan}${Object.keys(lockData.plugins).length}${colors.reset}\n`);
      break;
    }

    case 'marketplace': {
      const q = args[1] || '';
      console.log(`${colors.cyan}🛒 Enterprise Plugin Marketplace Catalog (Query: "${q}")...${colors.reset}`);
      const results = marketplaceSearch.search(q);
      console.log(`  - Catalog Items Found: ${colors.green}${results.length}${colors.reset}\n`);

      for (const r of results) {
        console.log(`    - ${colors.green}${r.name}${colors.reset} [id: ${r.id}, v${r.version}]`);
        console.log(`      Trust Level: ${colors.cyan}${r.trustLevel}${colors.reset}`);
        console.log(`      Description: ${r.description}\n`);
      }

      // Write marketplace report
      const mpReport = { timestamp: new Date().toISOString(), totalAvailable: results.length, catalog: results };
      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(mpReport, null, 2), path.join(reportsLatestDir, 'plugin-marketplace.json'));
      break;
    }

    case 'sdk:init': {
      console.log(`${colors.cyan}🛠️ Initializing Plugin SDK Developer Environment...${colors.reset}`);
      const info = sdkManager.initSdk();
      console.log(`  - SDK Version         : ${colors.green}${info.sdkVersion}${colors.reset}`);
      console.log(`  - Available Templates : ${colors.cyan}${info.templatesAvailable.join(', ')}${colors.reset}\n`);
      break;
    }

    case 'sdk:create': {
      const name = args[1] || 'My New Plugin';
      console.log(`${colors.cyan}📦 Scaffolding New Read-Only Plugin: "${name}"...${colors.reset}`);
      const res = sdkManager.createPlugin(name);
      console.log(`  ${colors.green}✅ Plugin scaffolded successfully at: ${res.targetDir}${colors.reset}\n`);
      break;
    }

    case 'sdk:lint': {
      const targetDir = args[1] || path.join(__dirname, 'plugins/sample-plugin');
      console.log(`${colors.cyan}🧹 Linting Plugin Package: ${targetDir}${colors.reset}`);
      const lintRes = sdkManager.lintPlugin(targetDir);
      console.log(`  ${lintRes.valid ? colors.green + '✅ LINT PASSED: Manifest and entry files compliant!' : colors.red + '❌ LINT ERRORS: ' + lintRes.errors.join(', ')}${colors.reset}\n`);
      break;
    }

    case 'sdk:package':
    case 'sdk:build': {
      const targetDir = args[1] || path.join(__dirname, 'plugins/sample-plugin');
      console.log(`${colors.cyan}📦 Packaging Plugin into .apkg Archive: ${targetDir}${colors.reset}`);
      const pkgRes = sdkManager.packagePlugin(targetDir);
      console.log(`  - Archive Exported : ${colors.green}${pkgRes.targetPath}${colors.reset}`);
      console.log(`  - SHA256 Checksum  : ${colors.cyan}${pkgRes.checksum}${colors.reset}\n`);
      break;
    }

    case 'sdk:test': {
      const targetDir = args[1] || path.join(__dirname, 'plugins/sample-plugin');
      console.log(`${colors.cyan}🧪 Testing Plugin Package: ${targetDir}${colors.reset}`);
      const testRes = sdkManager.testPlugin(targetDir);
      console.log(`  ${colors.green}✅ TESTS PASSED: Plugin "${testRes.pluginId}" loaded and validated cleanly!${colors.reset}\n`);
      break;
    }

    case 'fingerprint': {
      console.log(`${colors.cyan}🔑 Generating SHA256 Workspace Fingerprints...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      const res = fingerprintManager.generateWorkspaceFingerprint(state);
      console.log(`  - Composite Fingerprint : ${colors.green}${res.compositeFingerprint}${colors.reset}\n`);
      break;
    }

    case 'incremental': {
      console.log(`${colors.cyan}🔄 Running Incremental Delta Scan...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      const incRes = incrementalScanner.scanIncremental(state);
      console.log(`  - Total Files          : ${colors.green}${incRes.comparison.stats.totalFiles}${colors.reset}\n`);
      break;
    }

    case 'cache': {
      console.log(`${colors.cyan}💾 Inspecting Cache Layer Efficiency...${colors.reset}`);
      const stats = cacheManager.getAllStats();
      console.log(`  - State Snapshot Cache   : ${colors.green}${stats.state.size} entries${colors.reset}\n`);
      break;
    }

    case 'telemetry': {
      console.log(`${colors.cyan}📊 System Execution & Memory Telemetry...${colors.reset}`);
      telemetry.stopTimer('total_cli_execution');
      const snap = telemetry.getSnapshot();
      console.log(`  - Heap Usage Used       : ${colors.green}${snap.memory.heapUsedMB} MB${colors.reset}\n`);
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
      if (command === 'registry' || command === 'scan') enginesToRun.push(registryEngine);
      else if (command === 'seo') enginesToRun.push(seoEngine);
      else if (command === 'graph') enginesToRun.push(graphEngine);
      else if (command === 'validate') enginesToRun.push(registryEngine, seoEngine, graphEngine);

      const results = [];
      for (const engine of enginesToRun) {
        try {
          await engine.init({ config, state, logger: console });
          const res = await engine.run(state);
          results.push(res);
        } catch (err) {
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
        engineVersion: '1.3.2'
      };

      const jsonReport = await reporter.build(reportData, 'json');
      const mdReport = await reporter.build(reportData, 'markdown');
      const terminalReport = await reporter.build(reportData, 'terminal');

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(jsonReport, path.join(reportsLatestDir, 'report.json'));
      await reporter.write(mdReport, path.join(reportsLatestDir, 'report.md'));

      // Export Plugin & Lockfile Reports
      const plugJson = pluginReporter.buildJsonReport();
      const plugMd = pluginReporter.buildMarkdownReport();
      await reporter.write(JSON.stringify(plugJson, null, 2), path.join(reportsLatestDir, 'plugin-report.json'));
      await reporter.write(plugMd, path.join(reportsLatestDir, 'plugin-report.md'));
      pluginLockfile.generateLockfile();

      console.log(terminalReport);

      if (overallVerdict === 'FAIL') process.exit(1);
      else process.exit(0);
      break;
    }

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
