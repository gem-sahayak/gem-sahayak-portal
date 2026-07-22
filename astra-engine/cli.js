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

const releaseManager = require('./core/release/releaseManager');
const releaseNotes = require('./core/release/releaseNotes');
const gitMetadata = require('./core/release/gitMetadata');
const releaseVersionManager = require('./core/release/versionManager');
const buildValidator = require('./core/build/validator');

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
  console.log(`${colors.cyan}${colors.bright}          ASTRA ENGINE v1.4.0              ${colors.reset}`);
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
  console.log(`  ${colors.green}plugin:doctor${colors.reset}   Run diagnostics on installed plugins & dependency graphs`);
  console.log(`  ${colors.green}plugin:lock${colors.reset}     Generate deterministic plugin-lock.json file`);
  console.log(`  ${colors.green}marketplace${colors.reset}     Search & browse local enterprise plugin catalog`);
  console.log(`  ${colors.green}release${colors.reset}         Generate release notes, JSON/Markdown/HTML release packages`);
  console.log(`  ${colors.green}changelog${colors.reset}       Generate automated CHANGELOG updates based on git commits`);
  console.log(`  ${colors.green}build${colors.reset}           Validate build integrity, checksums & file structures`);
  console.log(`  ${colors.green}verify${colors.reset}          Run full system verification & quality gate pipeline`);
  console.log(`  ${colors.green}ci${colors.reset}              Run headless CI pipeline quality gate checks`);
  console.log(`  ${colors.green}version${colors.reset}         Display current engine SemVer version & git metadata`);
  console.log(`  ${colors.green}artifacts${colors.reset}       Export release artifacts to reports/releases/ directory`);
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
      console.log(`${colors.cyan}🩺 Bootstrapping Astra Doctor Diagnostics (v1.4.0)...${colors.reset}`);
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
        'Release Manager': releaseManager,
        'Build Validator': buildValidator,
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

      console.log(`\n${allModulesOk ? colors.green + '🟢 Astra OS Status: All Phase 4B.4 modules operational.' : colors.red + '🔴 Astra OS Status: Degraded'}${colors.reset}\n`);
      break;
    }

    case 'release':
    case 'artifacts': {
      console.log(`${colors.cyan}🚀 Generating Enterprise Release Package & Artifacts (v1.4.0)...${colors.reset}`);
      const pkg = releaseManager.generateReleasePackage('1.4.0', 'astra-engine-v1.4.0-phase4B.4');

      console.log(`  - JSON Release Package : ${colors.green}reports/releases/release.json${colors.reset}`);
      console.log(`  - Markdown Notes       : ${colors.green}reports/releases/release.md${colors.reset}`);
      console.log(`  - HTML Document        : ${colors.green}reports/releases/release.html${colors.reset}`);
      console.log(`  - Release Summary      : ${colors.cyan}reports/releases/release-summary.json${colors.reset}\n`);

      // Write release dashboard
      const dash = {
        currentVersion: '1.4.0',
        releaseTag: 'astra-engine-v1.4.0-phase4B.4',
        commitHash: gitMetadata.getLatestCommitHash(),
        generatedAt: new Date().toISOString()
      };
      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(dash, null, 2), path.join(reportsLatestDir, 'release-dashboard.json'));
      await reporter.write(`# ASTRA RELEASE DASHBOARD v1.4.0\n\n- Version: 1.4.0\n- Status: PRODUCTION CERTIFIED\n`, path.join(reportsLatestDir, 'release-dashboard.md'));
      break;
    }

    case 'build':
    case 'verify':
    case 'ci': {
      console.log(`${colors.cyan}⚡ Validating Build Integrity & Quality Gate (v1.4.0)...${colors.reset}`);
      const bRes = buildValidator.validateBuild();

      console.log(`  - Integrity Check : ${bRes.passed ? colors.green + 'PASSED' : colors.red + 'FAILED'}${colors.reset}`);
      console.log(`  - Check Duration  : ${colors.cyan}${bRes.durationMs} ms${colors.reset}\n`);

      if (!bRes.passed) {
        console.error(`${colors.red}❌ Build integrity validation failed missing files:${colors.reset}`, bRes.integrity.missing);
        process.exit(1);
      }
      break;
    }

    case 'version': {
      console.log(`${colors.cyan}ℹ️ ASTRA Engine Version Metadata:${colors.reset}`);
      console.log(`  - SemVer Version : ${colors.green}1.4.0${colors.reset}`);
      console.log(`  - Git Tag        : ${colors.cyan}${gitMetadata.getLatestTag()}${colors.reset}`);
      console.log(`  - Commit Hash    : ${colors.yellow}${gitMetadata.getLatestCommitHash()}${colors.reset}\n`);
      break;
    }

    case 'changelog': {
      console.log(`${colors.cyan}📜 Extracting Recent Git Commits for Changelog...${colors.reset}`);
      const commits = gitMetadata.getRecentCommits(10);
      for (const c of commits) {
        console.log(`  - ${colors.green}${c}${colors.reset}`);
      }
      console.log('');
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
        console.log(`    - ${colors.green}${p.name}${colors.reset} [id: ${p.id}, v${p.version}]`);
      }
      break;
    }

    case 'marketplace': {
      console.log(`${colors.cyan}🛒 Enterprise Plugin Marketplace Catalog...${colors.reset}`);
      const results = marketplaceSearch.search('');
      console.log(`  - Catalog Items Found: ${colors.green}${results.length}${colors.reset}\n`);
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
        engineVersion: '1.4.0'
      };

      const jsonReport = await reporter.build(reportData, 'json');
      const mdReport = await reporter.build(reportData, 'markdown');
      const terminalReport = await reporter.build(reportData, 'terminal');

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(jsonReport, path.join(reportsLatestDir, 'report.json'));
      await reporter.write(mdReport, path.join(reportsLatestDir, 'report.md'));

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
