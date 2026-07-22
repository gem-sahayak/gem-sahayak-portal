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
const { reviewEngine } = require('./engines/review');
const { semanticEngine } = require('./engines/semantic');
const { optimizerEngine } = require('./engines/optimizer');
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
  console.log(`${colors.cyan}${colors.bright}          ASTRA ENGINE v1.5.2              ${colors.reset}`);
  console.log(`${colors.cyan}    Repository Guardian & Engineering OS     ${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}===========================================${colors.reset}\n`);
}

function printHelp() {
  console.log(`${colors.bright}Usage:${colors.reset} node cli.js <command> [options]\n`);
  console.log(`${colors.bright}Commands:${colors.reset}`);
  console.log(`  ${colors.green}doctor${colors.reset}          Verify system environment, configurations & workspace schemas`);
  console.log(`  ${colors.green}scan${colors.reset}            Run default integrity & validation check sequences`);
  console.log(`  ${colors.green}registry${colors.reset}        Verify sync consistency between registry.ts & content files`);
  console.log(`  ${colors.green}seo${colors.reset}             Run SEO audit validations`);
  console.log(`  ${colors.green}graph${colors.reset}           Verify connections in knowledge graph`);
  console.log(`  ${colors.green}review${colors.reset}          Run AI Review Engine semantic audit`);
  console.log(`  ${colors.green}semantic${colors.reset}        Run Semantic SEO Intelligence Engine`);
  console.log(`  ${colors.green}optimize${colors.reset}        Run AI Content Optimization Platform (links, anchors, topics, roadmaps)`);
  console.log(`  ${colors.green}validate${colors.reset}        Run complete suite of active validation sub-engines`);
  console.log(`  ${colors.green}fingerprint${colors.reset}     Generate composite SHA256 workspace fingerprints`);
  console.log(`  ${colors.green}incremental${colors.reset}     Perform delta scan comparing workspace files`);
  console.log(`  ${colors.green}cache${colors.reset}           Inspect memory & snapshot cache efficiency metrics`);
  console.log(`  ${colors.green}telemetry${colors.reset}       Export system execution runtimes & memory`);
  console.log(`  ${colors.green}release${colors.reset}         Generate release notes & packages`);
  console.log(`  ${colors.green}build${colors.reset}           Validate build integrity`);
  console.log(`  ${colors.green}version${colors.reset}         Display current engine SemVer version & git metadata`);
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
      console.log(`${colors.cyan}🩺 Bootstrapping Astra Doctor Diagnostics (v1.5.2)...${colors.reset}`);
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
        'AI Review Engine': reviewEngine,
        'Semantic SEO Engine': semanticEngine,
        'AI Content Optimizer Platform': optimizerEngine,
        'Fingerprint Manager': fingerprintManager,
        'Incremental Scanner': incrementalScanner,
        'Event Bus': eventBus,
        'Cache Layer': cacheManager,
        'Telemetry Engine': telemetry,
        'Plugin Loader': pluginLoader,
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

      console.log(`\n${allModulesOk ? colors.green + '🟢 Astra OS Status: All Phase 4C.3 modules operational.' : colors.red + '🔴 Astra OS Status: Degraded'}${colors.reset}\n`);
      break;
    }

    case 'optimize': {
      console.log(`${colors.cyan}🚀 Running AI Content Optimization Platform Audit (v1.5.2)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      await optimizerEngine.init({ config, state, logger: console });
      const optRes = await optimizerEngine.run(state);

      if (args.includes('--links')) {
        console.log(`  - Internal Link Recommendations: ${colors.green}${optRes.internalLinks.length}${colors.reset}`);
        for (const l of optRes.internalLinks) {
          console.log(`    - [${l.sourceSlug}] -> [${l.targetSlug}] (${l.linkType}, Anchor: "${l.anchorSuggestion}")`);
        }
        console.log('');
        process.exit(0);
      }

      if (args.includes('--roadmap')) {
        console.log(`  - Optimization Action Roadmap:${colors.reset}`);
        console.log(`    - Critical Actions : ${colors.red}${optRes.roadmap.summary.criticalCount}${colors.reset}`);
        console.log(`    - High Actions     : ${colors.yellow}${optRes.roadmap.summary.highCount}${colors.reset}`);
        console.log(`    - Medium Actions   : ${colors.cyan}${optRes.roadmap.summary.mediumCount}${colors.reset}`);
        console.log(`    - Low Actions      : ${colors.green}${optRes.roadmap.summary.lowCount}${colors.reset}\n`);
        process.exit(0);
      }

      console.log(`  - Overall Optimization Score : ${colors.green}${optRes.summary.overallOptimizationScore} / 100${colors.reset}`);
      console.log(`  - Total Articles Analyzed     : ${colors.green}${optRes.summary.totalArticlesAnalyzed}${colors.reset}`);
      console.log(`  - Optimization Suggestions   : ${colors.yellow}${optRes.summary.totalSuggestionsGenerated}${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(optRes, null, 2), path.join(reportsLatestDir, 'optimization-report.json'));
      await reporter.write(JSON.stringify(optRes.internalLinks, null, 2), path.join(reportsLatestDir, 'internal-links.json'));
      await reporter.write(JSON.stringify(optRes.anchors, null, 2), path.join(reportsLatestDir, 'anchor-report.json'));
      await reporter.write(JSON.stringify(optRes.contentGaps, null, 2), path.join(reportsLatestDir, 'content-gap.json'));
      await reporter.write(JSON.stringify(optRes.headingReports, null, 2), path.join(reportsLatestDir, 'heading-report.json'));
      await reporter.write(JSON.stringify(optRes.entityExpansions, null, 2), path.join(reportsLatestDir, 'entity-expansion.json'));
      await reporter.write(JSON.stringify(optRes.faqSuggestions, null, 2), path.join(reportsLatestDir, 'faq-recommendations.json'));
      await reporter.write(JSON.stringify(optRes.topicExpansions, null, 2), path.join(reportsLatestDir, 'topic-expansion.json'));
      await reporter.write(JSON.stringify(optRes.roadmap, null, 2), path.join(reportsLatestDir, 'priority-roadmap.json'));

      const mdLines = [];
      mdLines.push(`# ASTRA ENGINE v1.5.2 — AI CONTENT OPTIMIZATION REPORT\n`);
      mdLines.push(`**Overall Optimization Score:** ${optRes.summary.overallOptimizationScore} / 100\n`);
      mdLines.push(`## Top Optimization Suggestions\n`);
      for (const s of optRes.suggestions.slice(0, 10)) {
        mdLines.push(`- **[${s.articleSlug}]** (${s.priority}) ${s.description} [Impact: ${s.estimatedSeoImpact}]`);
      }
      await reporter.write(mdLines.join('\n'), path.join(reportsLatestDir, 'optimization-report.md'));

      console.log(`  - Optimization JSON Exporter  : ${colors.cyan}reports/latest/optimization-report.json${colors.reset}`);
      console.log(`  - Internal Links Exporter    : ${colors.cyan}reports/latest/internal-links.json${colors.reset}`);
      console.log(`  - Priority Roadmap Exporter  : ${colors.cyan}reports/latest/priority-roadmap.json${colors.reset}\n`);
      break;
    }

    case 'semantic': {
      console.log(`${colors.cyan}🌐 Running Semantic SEO Intelligence Engine Audit (v1.5.2)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      await semanticEngine.init({ config, state, logger: console });
      const semRes = await semanticEngine.run(state);
      console.log(`  - Overall Semantic SEO Score : ${colors.green}${semRes.scores.overallScore} / 100${colors.reset}\n`);
      break;
    }

    case 'review': {
      console.log(`${colors.cyan}🤖 Running AI Review Engine Semantic Audit (v1.5.2)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      await reviewEngine.init({ config, state, logger: console });
      const revRes = await reviewEngine.run(state);
      console.log(`  - Overall AI Review Score : ${colors.green}${revRes.scores.overallScore} / 100${colors.reset}\n`);
      break;
    }

    case 'release':
    case 'artifacts': {
      console.log(`${colors.cyan}🚀 Generating Enterprise Release Package & Artifacts (v1.5.2)...${colors.reset}`);
      const pkg = releaseManager.generateReleasePackage('1.5.2', 'astra-engine-v1.5.2-phase4C.3');
      console.log(`  - JSON Release Package : ${colors.green}reports/releases/release.json${colors.reset}\n`);
      break;
    }

    case 'build':
    case 'verify':
    case 'ci': {
      console.log(`${colors.cyan}⚡ Validating Build Integrity & Quality Gate (v1.5.2)...${colors.reset}`);
      const bRes = buildValidator.validateBuild();
      console.log(`  - Integrity Check : ${bRes.passed ? colors.green + 'PASSED' : colors.red + 'FAILED'}${colors.reset}\n`);
      break;
    }

    case 'version': {
      console.log(`${colors.cyan}ℹ️ ASTRA Engine Version Metadata:${colors.reset}`);
      console.log(`  - SemVer Version : ${colors.green}1.5.2${colors.reset}\n`);
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
      else if (command === 'validate') enginesToRun.push(registryEngine, seoEngine, graphEngine, reviewEngine, semanticEngine, optimizerEngine);

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
        engineVersion: '1.5.2'
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
