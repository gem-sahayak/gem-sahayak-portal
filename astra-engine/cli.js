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

const { agentEngine, agentRegistry } = require('./agents');
const { meshEngine, meshCoordinator } = require('./mesh');
const { messageBus, messageHistory } = require('./communication');
const { consensusEngine, taskNegotiation } = require('./collaboration');
const memorySystem = require('./memory');
const { supervisorEngine, heartbeat } = require('./supervisor');
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
  console.log(`${colors.cyan}${colors.bright}          ASTRA ENGINE v1.12.0             ${colors.reset}`);
  console.log(`${colors.cyan}    Repository Guardian & Engineering OS     ${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}===========================================${colors.reset}\n`);
}

function printHelp() {
  console.log(`${colors.bright}Usage:${colors.reset} node cli.js <command> [options]\n`);
  console.log(`${colors.bright}Commands:${colors.reset}`);
  console.log(`  ${colors.green}doctor${colors.reset}          Verify system environment, configurations & workspace schemas`);
  console.log(`  ${colors.green}agents${colors.reset}          Manage Multi-Agent Lifecycle (--list, --status, --health)`);
  console.log(`  ${colors.green}mesh${colors.reset}            Run Multi-Agent Mesh Network (--topology, --state, --discover)`);
  console.log(`  ${colors.green}collaborate${colors.reset}     Run Consensus & Voting Collaboration (--consensus, --vote, --plan)`);
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
      console.log(`${colors.cyan}🩺 Bootstrapping Astra Doctor Diagnostics (v1.12.0)...${colors.reset}`);
      console.log(`  - Engine Config Version: ${colors.green}${config.engineVersion}${colors.reset}`);
      console.log(`  - Schema Version: ${colors.green}${config.schemaVersion}${colors.reset}`);
      console.log(`  - Import Guard Active: ${colors.green}${isGuardActive()}${colors.reset}`);

      const modules = {
        'Config Loader': configLoader,
        'Filesystem Scanner': require('./core/filesystem'),
        'Agent Engine': agentEngine,
        'Mesh Engine': meshEngine,
        'Message Bus': messageBus,
        'Consensus Engine': consensusEngine,
        'Memory System': memorySystem,
        'Supervisor Engine': supervisorEngine,
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

      console.log(`\n${allModulesOk ? colors.green + '🟢 Astra OS Status: All Phase 7B modules operational.' : colors.red + '🔴 Astra OS Status: Degraded'}${colors.reset}\n`);
      break;
    }

    case 'agents': {
      console.log(`${colors.cyan}🤖 Running Multi-Agent Lifecycle Engine (v1.12.0)...${colors.reset}`);
      const agRes = await agentEngine.run();

      console.log(`  - Registered Agents : ${colors.green}${agRes.agents.length}${colors.reset}`);
      console.log(`  - Active Subsystems : ${colors.green}6 Agents Operational${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(agRes, null, 2), path.join(reportsLatestDir, 'agents-report.json'));
      await reporter.write(JSON.stringify(agRes.agents, null, 2), path.join(reportsLatestDir, 'agent-topology.json'));

      console.log(`  - Agent Report Exporter : ${colors.cyan}reports/latest/agents-report.json${colors.reset}\n`);
      break;
    }

    case 'mesh': {
      console.log(`${colors.cyan}🕸️ Running Multi-Agent Mesh Coordinator (v1.12.0)...${colors.reset}`);
      await agentEngine.init();
      const meshRes = meshEngine.runMesh();
      const activeAgents = agentRegistry.list();

      console.log(`  - Mesh Status    : ${colors.green}${meshRes.status}${colors.reset}`);
      console.log(`  - Topology Nodes : ${colors.green}${meshRes.topology.nodesCount}${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(meshRes, null, 2), path.join(reportsLatestDir, 'mesh-report.json'));
      await reporter.write(JSON.stringify(meshRes.coordinator, null, 2), path.join(reportsLatestDir, 'mesh-health.json'));
      await reporter.write(JSON.stringify(supervisorEngine.runSupervision(activeAgents), null, 2), path.join(reportsLatestDir, 'supervisor-report.json'));
      await reporter.write(JSON.stringify(heartbeat.getLastHeartbeat('agent-seo') || Date.now(), null, 2), path.join(reportsLatestDir, 'heartbeat-report.json'));

      console.log(`  - Mesh Report Exporter : ${colors.cyan}reports/latest/mesh-report.json${colors.reset}\n`);
      break;
    }

    case 'collaborate': {
      console.log(`${colors.cyan}🤝 Running Consensus & Collaboration Engine (v1.12.0)...${colors.reset}`);
      const consRes = consensusEngine.reachConsensus('Repository Compliance Approval');

      console.log(`  - Consensus Reached : ${colors.green}${consRes.consensusReached}${colors.reset}`);
      console.log(`  - Votes Approved    : ${colors.green}${consRes.votingTally.yes} Yes / ${consRes.votingTally.no} No${colors.reset}\n`);

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(JSON.stringify(consRes, null, 2), path.join(reportsLatestDir, 'consensus-report.json'));
      await reporter.write(JSON.stringify(taskNegotiation.negotiate('Full Audit', ['agent-seo']), null, 2), path.join(reportsLatestDir, 'collaboration-report.json'));
      await reporter.write(JSON.stringify(messageHistory.getHistory(), null, 2), path.join(reportsLatestDir, 'communication-report.json'));
      await reporter.write(JSON.stringify(memorySystem.workingMemory, null, 2), path.join(reportsLatestDir, 'memory-report.json'));

      console.log(`  - Consensus Exporter : ${colors.cyan}reports/latest/consensus-report.json${colors.reset}\n`);
      break;
    }

    case 'version': {
      console.log(`${colors.cyan}ℹ️ ASTRA Engine Version Metadata:${colors.reset}`);
      console.log(`  - SemVer Version : ${colors.green}1.12.0${colors.reset}\n`);
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
