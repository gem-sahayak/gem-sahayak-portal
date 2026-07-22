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
const { workflowEngine } = require('./workflow');

const { simulationEngine, scenarioRunner, executionHistory, executionTimeline, executionReplay } = require('./simulation');
const { twinRegistry } = require('./digitalTwin');
const { riskAnalyzer } = require('./riskEngine');
const { executionOptimizer } = require('./optimizerEngine');
const { forecastEngine } = require('./forecast');
const visualization = require('./visualization');
const reporter = require('./core/reporter');

const fingerprintManager = require('./core/fingerprint');
const incrementalScanner = require('./core/incremental');
const { cacheManager } = require('./core/cache');
const { telemetry } = require('./core/telemetry');

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
  console.log(`${colors.cyan}${colors.bright}          ASTRA ENGINE v1.10.0             ${colors.reset}`);
  console.log(`${colors.cyan}    Repository Guardian & Engineering OS     ${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}===========================================${colors.reset}\n`);
}

function printHelp() {
  console.log(`${colors.bright}Usage:${colors.reset} node cli.js <command> [options]\n`);
  console.log(`${colors.bright}Commands:${colors.reset}`);
  console.log(`  ${colors.green}doctor${colors.reset}          Verify system environment, configurations & workspace schemas`);
  console.log(`  ${colors.green}simulate${colors.reset}        Run Simulation Intelligence Engine (--dry-run, --timeline, --replay)`);
  console.log(`  ${colors.green}twin${colors.reset}            Generate immutable Digital Twin (--project, --workspace, --graph)`);
  console.log(`  ${colors.green}risk${colors.reset}            Run Predictive Risk Analyzer Engine (--scan, --critical, --dependencies)`);
  console.log(`  ${colors.green}optimize${colors.reset}        Run Execution Strategy Optimizer (--compare, --parallel, --latency)`);
  console.log(`  ${colors.green}forecast${colors.reset}        Run Predictive Capacity & Growth Forecast (--runtime, --memory, --storage)`);
  console.log(`  ${colors.green}workflow${colors.reset}        Run Autonomous Workflow Intelligence Engine`);
  console.log(`  ${colors.green}graph${colors.reset}           Run Enterprise Visual Knowledge Graph Explorer`);
  console.log(`  ${colors.green}dashboard${colors.reset}       Launch Enterprise Intelligence Dashboard`);
  console.log(`  ${colors.green}studio${colors.reset}          Launch ASTRA Studio Visual AI Workspace`);
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
      console.log(`${colors.cyan}🩺 Bootstrapping Astra Doctor Diagnostics (v1.10.0)...${colors.reset}`);
      console.log(`  - Engine Config Version: ${colors.green}${config.engineVersion}${colors.reset}`);
      console.log(`  - Schema Version: ${colors.green}${config.schemaVersion}${colors.reset}`);
      console.log(`  - Import Guard Active: ${colors.green}${isGuardActive()}${colors.reset}`);

      const modules = {
        'Config Loader': configLoader,
        'Filesystem Scanner': require('./core/filesystem'),
        'Simulation Engine': simulationEngine,
        'Digital Twin Registry': twinRegistry,
        'Risk Analyzer': riskAnalyzer,
        'Execution Optimizer': executionOptimizer,
        'Forecast Engine': forecastEngine,
        'Visualization Models': visualization,
        'Workflow Intelligence': workflowEngine,
        'Visual Graph Explorer': explorerEngine,
        'Dashboard Engine': dashboardEngine,
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

      console.log(`\n${allModulesOk ? colors.green + '🟢 Astra OS Status: All Phase 6C modules operational.' : colors.red + '🔴 Astra OS Status: Degraded'}${colors.reset}\n`);
      break;
    }

    case 'simulate': {
      console.log(`${colors.cyan}🎮 Running Simulation Intelligence Engine (v1.10.0)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      await simulationEngine.init({ config, state, logger: console });
      const simRes = await simulationEngine.run(state);

      console.log(`  - Dry Run Status  : ${colors.green}${simRes.dryRun.status}${colors.reset}`);
      console.log(`  - Timeline Events : ${colors.green}${simRes.dryRun.timeline.length}${colors.reset}`);
      console.log(`  - Steps Simulated : ${colors.green}${simRes.metrics.totalStepsSimulated}${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(simRes, null, 2), path.join(reportsLatestDir, 'simulation-report.json'));
      await reporter.write(JSON.stringify(executionHistory.getHistory(), null, 2), path.join(reportsLatestDir, 'simulation-history.json'));
      await reporter.write(JSON.stringify(simRes.dryRun.timeline, null, 2), path.join(reportsLatestDir, 'simulation-timeline.json'));
      await reporter.write(JSON.stringify(executionReplay.replayTimeline(simRes.dryRun.timeline), null, 2), path.join(reportsLatestDir, 'execution-replay.json'));
      await reporter.write(JSON.stringify(visualization.timeline.renderTimeline(simRes.dryRun.timeline), null, 2), path.join(reportsLatestDir, 'timeline-report.json'));

      console.log(`  - Simulation Report Exporter : ${colors.cyan}reports/latest/simulation-report.json${colors.reset}\n`);
      break;
    }

    case 'twin': {
      console.log(`${colors.cyan}♊ Generating Immutable Digital Twin (v1.10.0)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      const twinRes = twinRegistry.generateMasterTwin(state);

      console.log(`  - Digital Twin Status : ${colors.green}SYNCHRONIZED${colors.reset}`);
      console.log(`  - Mirrored Articles  : ${colors.green}${twinRes.project.totalArticles}${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(twinRes, null, 2), path.join(reportsLatestDir, 'digital-twin.json'));
      console.log(`  - Digital Twin Exporter : ${colors.cyan}reports/latest/digital-twin.json${colors.reset}\n`);
      break;
    }

    case 'risk': {
      console.log(`${colors.cyan}🛡️ Running Predictive Risk Analyzer Engine (v1.10.0)...${colors.reset}`);
      const riskRes = riskAnalyzer.runAnalysis();

      console.log(`  - Overall Risk Score  : ${colors.green}${riskRes.overallRiskScore} / 100${colors.reset}`);
      console.log(`  - Classification      : ${colors.green}${riskRes.classification}${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(riskRes, null, 2), path.join(reportsLatestDir, 'risk-analysis.json'));
      console.log(`  - Risk Report Exporter : ${colors.cyan}reports/latest/risk-analysis.json${colors.reset}\n`);
      break;
    }

    case 'optimize': {
      console.log(`${colors.cyan}🚀 Running Execution Strategy Optimizer (v1.10.0)...${colors.reset}`);
      const optRes = executionOptimizer.runOptimizer();

      console.log(`  - Recommended Strategy : ${colors.green}${optRes.recommendedStrategy.name}${colors.reset}`);
      console.log(`  - Estimated Runtime    : ${colors.green}${optRes.recommendedStrategy.estimatedRuntimeMs} ms${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(optRes, null, 2), path.join(reportsLatestDir, 'optimization-report.json'));
      await reporter.write(JSON.stringify(optRes.strategies, null, 2), path.join(reportsLatestDir, 'strategy-comparison.json'));
      console.log(`  - Optimization Exporter : ${colors.cyan}reports/latest/optimization-report.json${colors.reset}\n`);
      break;
    }

    case 'forecast': {
      console.log(`${colors.cyan}📈 Running Capacity & Growth Forecast Engine (v1.10.0)...${colors.reset}`);
      const fcRes = forecastEngine.runForecast();

      console.log(`  - Projected Execution : ${colors.green}${fcRes.runtime.projectedExecutionMs} ms${colors.reset}`);
      console.log(`  - Scale Status        : ${colors.green}${fcRes.scaling.scaleLimitStatus}${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(fcRes, null, 2), path.join(reportsLatestDir, 'forecast-report.json'));
      await reporter.write(JSON.stringify(fcRes.storage, null, 2), path.join(reportsLatestDir, 'resource-forecast.json'));
      console.log(`  - Forecast Exporter : ${colors.cyan}reports/latest/forecast-report.json${colors.reset}\n`);
      break;
    }

    case 'workflow': {
      console.log(`${colors.cyan}⚡ Running Autonomous Workflow Intelligence Engine (v1.10.0)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      await workflowEngine.init({ config, state, logger: console });
      const wfRes = await workflowEngine.run(state);
      console.log(`  - Active Workflows : ${colors.green}${wfRes.activeWorkflows.length}${colors.reset}\n`);
      break;
    }

    case 'graph': {
      console.log(`${colors.cyan}🕸️ Running Enterprise Visual Knowledge Graph Explorer (v1.10.0)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      await explorerEngine.init({ config, state, logger: console });
      const graphRes = await explorerEngine.run(state);
      console.log(`  - Visual Nodes Generated : ${colors.green}${graphRes.summary.totalNodes}${colors.reset}\n`);
      break;
    }

    case 'dashboard': {
      console.log(`${colors.cyan}📊 Rendering Enterprise Intelligence Dashboard (v1.10.0)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      await dashboardEngine.init({ config, state, logger: console });
      const dashRes = await dashboardEngine.run(state);
      console.log(`  - Overall System Health : ${colors.green}${dashRes.overview.overallHealth}${colors.reset}\n`);
      break;
    }

    case 'studio': {
      console.log(`${colors.cyan}🎨 Launching ASTRA Studio Visual AI Workspace (v1.10.0)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      const reportsDir = path.join(__dirname, 'reports');
      const studioRes = await studioWorkspace.run(state, reportsDir);
      console.log(`  - Active Workspace Project : ${colors.green}${studioRes.activeProject.name}${colors.reset}\n`);
      break;
    }

    case 'version': {
      console.log(`${colors.cyan}ℹ️ ASTRA Engine Version Metadata:${colors.reset}`);
      console.log(`  - SemVer Version : ${colors.green}1.10.0${colors.reset}\n`);
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
