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
const { knowledgeEngine } = require('./engines/knowledge');
const { studioWorkspace } = require('./studio');
const { dashboardEngine } = require('./dashboard');
const { explorerEngine } = require('./graphExplorer');
const { workflowEngine, workflowRunner, workflowHistory, workflowMetrics, workflowScheduler } = require('./workflow');
const { ruleEngine, ruleRegistry, ruleMetrics } = require('./rules');
const { recommendationEngine, decisionMetrics } = require('./decision');
const { eventBus, eventQueue, eventMetrics } = require('./events');
const { schedulerEngine, schedulerMetrics } = require('./scheduler');
const recommendationsModel = require('./recommendations');
const reporter = require('./core/reporter');

const fingerprintManager = require('./core/fingerprint');
const incrementalScanner = require('./core/incremental');
const { cacheManager } = require('./core/cache');
const { telemetry } = require('./core/telemetry');
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

const releaseManager = require('./core/release/releaseManager');
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
  console.log(`${colors.cyan}${colors.bright}          ASTRA ENGINE v1.9.0              ${colors.reset}`);
  console.log(`${colors.cyan}    Repository Guardian & Engineering OS     ${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}===========================================${colors.reset}\n`);
}

function printHelp() {
  console.log(`${colors.bright}Usage:${colors.reset} node cli.js <command> [options]\n`);
  console.log(`${colors.bright}Commands:${colors.reset}`);
  console.log(`  ${colors.green}doctor${colors.reset}          Verify system environment, configurations & workspace schemas`);
  console.log(`  ${colors.green}workflow${colors.reset}        Run Autonomous Workflow Intelligence Engine (--run, --history, --rules, --recommend)`);
  console.log(`  ${colors.green}graph${colors.reset}           Run Enterprise Visual Knowledge Graph Explorer`);
  console.log(`  ${colors.green}dashboard${colors.reset}       Launch Enterprise Intelligence Dashboard`);
  console.log(`  ${colors.green}studio${colors.reset}          Launch ASTRA Studio Visual AI Workspace`);
  console.log(`  ${colors.green}knowledge${colors.reset}       Run Enterprise Knowledge Intelligence RAG Engine`);
  console.log(`  ${colors.green}optimize${colors.reset}        Run AI Content Optimization Platform`);
  console.log(`  ${colors.green}semantic${colors.reset}        Run Semantic SEO Intelligence Engine`);
  console.log(`  ${colors.green}review${colors.reset}          Run AI Review Engine semantic audit`);
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
      console.log(`${colors.cyan}🩺 Bootstrapping Astra Doctor Diagnostics (v1.9.0)...${colors.reset}`);
      console.log(`  - Engine Config Version: ${colors.green}${config.engineVersion}${colors.reset}`);
      console.log(`  - Schema Version: ${colors.green}${config.schemaVersion}${colors.reset}`);
      console.log(`  - Import Guard Active: ${colors.green}${isGuardActive()}${colors.reset}`);

      const modules = {
        'Config Loader': configLoader,
        'State Manager': stateManager,
        'Filesystem Scanner': require('./core/filesystem'),
        'Workflow Intelligence Engine': workflowEngine,
        'Rule Engine': ruleEngine,
        'Decision Intelligence': recommendationEngine,
        'Event Bus Engine': eventBus,
        'Autonomous Scheduler': schedulerEngine,
        'Recommendation Models': recommendationsModel,
        'Visual Knowledge Graph Explorer': explorerEngine,
        'Enterprise Intelligence Dashboard': dashboardEngine,
        'ASTRA Studio Foundation': studioWorkspace,
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

      console.log(`\n${allModulesOk ? colors.green + '🟢 Astra OS Status: All Phase 6A modules operational.' : colors.red + '🔴 Astra OS Status: Degraded'}${colors.reset}\n`);
      break;
    }

    case 'workflow': {
      console.log(`${colors.cyan}⚡ Running Enterprise Autonomous Workflow Intelligence Engine (v1.9.0)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      await workflowEngine.init({ config, state, logger: console });
      const wfRes = await workflowEngine.run(state);

      const allRecs = recommendationsModel.getAllRecommendations(state);
      const rankedRecs = recommendationEngine.processRecommendations(allRecs);
      const ruleRes = ruleEngine.evaluateRules({ errorCount: 0 });

      console.log(`  - Active Workflows       : ${colors.green}${wfRes.activeWorkflows.length}${colors.reset}`);
      console.log(`  - Rules Evaluated        : ${colors.green}${ruleRes.evaluatedCount}${colors.reset}`);
      console.log(`  - Recommendations Ranked : ${colors.green}${rankedRecs.length}${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(wfRes, null, 2), path.join(reportsLatestDir, 'workflow-report.json'));
      await reporter.write(JSON.stringify(workflowHistory.getHistory(), null, 2), path.join(reportsLatestDir, 'workflow-history.json'));
      await reporter.write(JSON.stringify(workflowMetrics.getMetrics(), null, 2), path.join(reportsLatestDir, 'workflow-metrics.json'));
      await reporter.write(JSON.stringify(ruleRes, null, 2), path.join(reportsLatestDir, 'rule-report.json'));
      await reporter.write(JSON.stringify(rankedRecs, null, 2), path.join(reportsLatestDir, 'decision-report.json'));
      await reporter.write(JSON.stringify(eventMetrics.getMetrics(), null, 2), path.join(reportsLatestDir, 'event-report.json'));
      await reporter.write(JSON.stringify(schedulerMetrics.getMetrics(), null, 2), path.join(reportsLatestDir, 'scheduler-report.json'));
      await reporter.write(JSON.stringify(allRecs, null, 2), path.join(reportsLatestDir, 'recommendation-report.json'));

      console.log(`  - Workflow Report Exporter : ${colors.cyan}reports/latest/workflow-report.json${colors.reset}`);
      console.log(`  - Decision Report Exporter : ${colors.cyan}reports/latest/decision-report.json${colors.reset}\n`);
      break;
    }

    case 'graph': {
      console.log(`${colors.cyan}🕸️ Running Enterprise Visual Knowledge Graph Explorer (v1.9.0)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      await explorerEngine.init({ config, state, logger: console });
      const graphRes = await explorerEngine.run(state);
      console.log(`  - Visual Nodes Generated : ${colors.green}${graphRes.summary.totalNodes}${colors.reset}\n`);
      break;
    }

    case 'dashboard': {
      console.log(`${colors.cyan}📊 Rendering Enterprise Intelligence Dashboard (v1.9.0)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      await dashboardEngine.init({ config, state, logger: console });
      const dashRes = await dashboardEngine.run(state);
      console.log(`  - Overall System Health : ${colors.green}${dashRes.overview.overallHealth}${colors.reset}\n`);
      break;
    }

    case 'studio': {
      console.log(`${colors.cyan}🎨 Launching ASTRA Studio Visual AI Workspace (v1.9.0)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      const reportsDir = path.join(__dirname, 'reports');
      const studioRes = await studioWorkspace.run(state, reportsDir);
      console.log(`  - Active Workspace Project : ${colors.green}${studioRes.activeProject.name}${colors.reset}\n`);
      break;
    }

    case 'knowledge': {
      console.log(`${colors.cyan}🧠 Running Enterprise Knowledge Intelligence RAG Engine (v1.9.0)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      await knowledgeEngine.init({ config, state, logger: console });
      const knwRes = await knowledgeEngine.run(state);
      console.log(`  - Vector Store Size : ${colors.green}${knwRes.summary.vectorStoreSize} embeddings${colors.reset}\n`);
      break;
    }

    case 'version': {
      console.log(`${colors.cyan}ℹ️ ASTRA Engine Version Metadata:${colors.reset}`);
      console.log(`  - SemVer Version : ${colors.green}1.9.0${colors.reset}\n`);
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
