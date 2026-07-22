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

const { reasoningEngine, reasoningSession } = require('./reasoning');
const { plannerEngine } = require('./planning');
const { strategyEngine } = require('./strategy');
const { explanationEngine, auditTrail } = require('./explainability');
const scenarioPlanning = require('./scenarioPlanning');
const knowledgeReasoner = require('./knowledgeReasoner');
const reporter = require('./core/reporter');

const { telemetry } = require('./core/telemetry');

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
  console.log(`${colors.cyan}${colors.bright}          ASTRA ENGINE v1.11.0             ${colors.reset}`);
  console.log(`${colors.cyan}    Repository Guardian & Engineering OS     ${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}===========================================${colors.reset}\n`);
}

function printHelp() {
  console.log(`${colors.bright}Usage:${colors.reset} node cli.js <command> [options]\n`);
  console.log(`${colors.bright}Commands:${colors.reset}`);
  console.log(`  ${colors.green}doctor${colors.reset}          Verify system environment, configurations & workspace schemas`);
  console.log(`  ${colors.green}reason${colors.reset}          Run Autonomous Reasoning Engine (--analyze, --trace, --facts)`);
  console.log(`  ${colors.green}plan${colors.reset}            Run Master Execution Planner (--generate, --compare, --timeline)`);
  console.log(`  ${colors.green}strategy${colors.reset}        Run Strategy Engine (--compare, --fallback, --parallel)`);
  console.log(`  ${colors.green}scenario${colors.reset}        Run Scenario Planning Engine (--whatif, --compare, --impact)`);
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
      console.log(`${colors.cyan}🩺 Bootstrapping Astra Doctor Diagnostics (v1.11.0)...${colors.reset}`);
      console.log(`  - Engine Config Version: ${colors.green}${config.engineVersion}${colors.reset}`);
      console.log(`  - Schema Version: ${colors.green}${config.schemaVersion}${colors.reset}`);
      console.log(`  - Import Guard Active: ${colors.green}${isGuardActive()}${colors.reset}`);

      const modules = {
        'Config Loader': configLoader,
        'Filesystem Scanner': require('./core/filesystem'),
        'Reasoning Engine': reasoningEngine,
        'Planner Engine': plannerEngine,
        'Strategy Engine': strategyEngine,
        'Explanation Engine': explanationEngine,
        'Scenario Planning': scenarioPlanning,
        'Knowledge Reasoner': knowledgeReasoner,
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

      console.log(`\n${allModulesOk ? colors.green + '🟢 Astra OS Status: All Phase 7A modules operational.' : colors.red + '🔴 Astra OS Status: Degraded'}${colors.reset}\n`);
      break;
    }

    case 'reason': {
      console.log(`${colors.cyan}🧠 Running Autonomous Reasoning Engine (v1.11.0)...${colors.reset}`);
      const state = await scanner.runScanner(rootDir, config);
      await reasoningEngine.init({ config, state, logger: console });
      const rsnRes = await reasoningEngine.run(state);

      console.log(`  - Verified Facts     : ${colors.green}${rsnRes.session.facts.length}${colors.reset}`);
      console.log(`  - Evaluated Constraints : ${colors.green}${rsnRes.session.constraints.length}${colors.reset}`);
      console.log(`  - Confidence Score   : ${colors.green}${Math.round(rsnRes.session.confidenceScore * 100)} %${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(rsnRes, null, 2), path.join(reportsLatestDir, 'reasoning-report.json'));
      await reporter.write(JSON.stringify(explanationEngine.explainRecommendation('rec-1'), null, 2), path.join(reportsLatestDir, 'reasoning-trace.json'));
      await reporter.write(JSON.stringify(auditTrail.getTrail(), null, 2), path.join(reportsLatestDir, 'audit-trail.json'));
      await reporter.write(JSON.stringify({ confidenceScore: rsnRes.session.confidenceScore }, null, 2), path.join(reportsLatestDir, 'confidence-report.json'));

      console.log(`  - Reasoning Report Exporter : ${colors.cyan}reports/latest/reasoning-report.json${colors.reset}\n`);
      break;
    }

    case 'plan': {
      console.log(`${colors.cyan}📋 Running Master Execution Planner (v1.11.0)...${colors.reset}`);
      const planRes = plannerEngine.createMasterPlan();

      console.log(`  - Master Goal       : ${colors.green}${planRes.goals[0].title}${colors.reset}`);
      console.log(`  - Planned Milestones: ${colors.green}${planRes.milestones.length}${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(planRes, null, 2), path.join(reportsLatestDir, 'planning-report.json'));
      await reporter.write(JSON.stringify(planRes.execution, null, 2), path.join(reportsLatestDir, 'execution-plan.json'));
      console.log(`  - Planning Report Exporter : ${colors.cyan}reports/latest/planning-report.json${colors.reset}\n`);
      break;
    }

    case 'strategy': {
      console.log(`${colors.cyan}🎯 Running Strategy Engine (v1.11.0)...${colors.reset}`);
      const stratRes = strategyEngine.evaluateStrategies();

      console.log(`  - Recommended Strategy : ${colors.green}${stratRes.recommended.name}${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(stratRes, null, 2), path.join(reportsLatestDir, 'strategy-report.json'));
      await reporter.write(JSON.stringify(stratRes.recommended, null, 2), path.join(reportsLatestDir, 'strategy-comparison.json'));
      console.log(`  - Strategy Report Exporter : ${colors.cyan}reports/latest/strategy-report.json${colors.reset}\n`);
      break;
    }

    case 'scenario': {
      console.log(`${colors.cyan}🔮 Running Scenario Planning Engine (v1.11.0)...${colors.reset}`);
      const scens = scenarioPlanning.scenarioGenerator.generateScenarios();
      const comp = scenarioPlanning.comparisonEngine.compareScenarios(scens);
      const impact = scenarioPlanning.impactEstimator.estimateImpact();

      console.log(`  - Recommended Scenario : ${colors.green}${comp.bestScenario.name}${colors.reset}`);
      console.log(`  - Latency Reduction   : ${colors.green}${impact.latencyReductionPercent} %${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(comp, null, 2), path.join(reportsLatestDir, 'scenario-report.json'));
      await reporter.write(JSON.stringify(impact, null, 2), path.join(reportsLatestDir, 'impact-analysis.json'));
      await reporter.write(JSON.stringify(knowledgeReasoner.graphReasoner.reasonOverGraph(), null, 2), path.join(reportsLatestDir, 'knowledge-reasoning.json'));
      console.log(`  - Scenario Report Exporter : ${colors.cyan}reports/latest/scenario-report.json${colors.reset}\n`);
      break;
    }

    case 'version': {
      console.log(`${colors.cyan}ℹ️ ASTRA Engine Version Metadata:${colors.reset}`);
      console.log(`  - SemVer Version : ${colors.green}1.11.0${colors.reset}\n`);
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
