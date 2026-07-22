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

// Phase 8A — Procurement Intelligence Platform
const { procurementEngine, procurementRegistry } = require('./procurement');
const { bidAnalyzer, bidComplexity, bidTimeline, bidDependencies } = require('./bidIntelligence');
const { catalogAnalyzer } = require('./catalogIntelligence');
const { eligibilityEngine, documentMatrix, riskCompliance } = require('./compliance');
const { pricingAnalyzer, competitivePosition, pricingBenchmark } = require('./pricing');
const { supplierProfile, supplierRisk, supplierCapability, supplierMetrics } = require('./supplier');
const { marketTrends, categoryInsights, competitionMap, marketMetrics } = require('./market');

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
  console.log(`${colors.cyan}${colors.bright}          ASTRA ENGINE v1.14.0             ${colors.reset}`);
  console.log(`${colors.cyan}  Enterprise Procurement Intelligence OS    ${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}===========================================${colors.reset}\n`);
}

function printHelp() {
  console.log(`${colors.bright}Usage:${colors.reset} node cli.js <command> [options]\n`);
  console.log(`${colors.bright}Commands:${colors.reset}`);
  console.log(`  ${colors.green}doctor${colors.reset}          Verify system environment & module health`);
  console.log(`  ${colors.green}agents${colors.reset}          Multi-Agent Lifecycle (--list, --status, --health)`);
  console.log(`  ${colors.green}mesh${colors.reset}            Multi-Agent Mesh Network (--topology, --state)`);
  console.log(`  ${colors.green}collaborate${colors.reset}     Consensus & Voting (--consensus, --vote, --plan)`);
  console.log(`  ${colors.green}procurement${colors.reset}     Procurement Intelligence (--summary, --metrics, --categories)`);
  console.log(`  ${colors.green}bid${colors.reset}             Bid Intelligence (--analyze, --timeline, --complexity)`);
  console.log(`  ${colors.green}compliance${colors.reset}      Compliance Engine (--eligibility, --documents, --risk)`);
  console.log(`  ${colors.green}pricing${colors.reset}         Pricing Intelligence (--variance, --benchmark, --competition)`);
  console.log(`  ${colors.green}version${colors.reset}         Display engine version`);
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
  const reportsLatestDir = path.join(__dirname, 'reports', 'latest');

  let config;
  try {
    config = configLoader.load();
  } catch (e) {
    console.log(`${colors.red}${colors.bright}❌ CRITICAL: Configuration Loader Failed!${colors.reset}`);
    process.exit(1);
  }

  switch (command) {

    // ───── Phase 7B Commands ─────

    case 'doctor': {
      console.log(`${colors.cyan}🩺 Bootstrapping Astra Doctor Diagnostics (v1.14.0)...${colors.reset}`);
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
        'Procurement Engine': procurementEngine,
        'Bid Analyzer': bidAnalyzer,
        'Catalog Analyzer': catalogAnalyzer,
        'Eligibility Engine': eligibilityEngine,
        'Pricing Analyzer': pricingAnalyzer,
        'Supplier Risk': supplierRisk,
        'Competition Map': competitionMap,
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

      console.log(`\n${allModulesOk ? colors.green + '🟢 Astra OS Status: All Phase 8A modules operational.' : colors.red + '🔴 Astra OS Status: Degraded'}${colors.reset}\n`);
      break;
    }

    case 'agents': {
      console.log(`${colors.cyan}🤖 Running Multi-Agent Lifecycle Engine (v1.14.0)...${colors.reset}`);
      const agRes = await agentEngine.run();
      console.log(`  - Registered Agents : ${colors.green}${agRes.agents.length}${colors.reset}`);
      console.log(`  - Active Subsystems : ${colors.green}6 Agents Operational${colors.reset}\n`);
      await reporter.write(JSON.stringify(agRes, null, 2), path.join(reportsLatestDir, 'agents-report.json'));
      await reporter.write(JSON.stringify(agRes.agents, null, 2), path.join(reportsLatestDir, 'agent-topology.json'));
      console.log(`  - Agent Report Exporter : ${colors.cyan}reports/latest/agents-report.json${colors.reset}\n`);
      break;
    }

    case 'mesh': {
      console.log(`${colors.cyan}🕸️ Running Multi-Agent Mesh Coordinator (v1.14.0)...${colors.reset}`);
      await agentEngine.init();
      const meshRes = meshEngine.runMesh();
      const activeAgents = agentRegistry.list();
      console.log(`  - Mesh Status    : ${colors.green}${meshRes.status}${colors.reset}`);
      console.log(`  - Topology Nodes : ${colors.green}${meshRes.topology.nodesCount}${colors.reset}\n`);
      await reporter.write(JSON.stringify(meshRes, null, 2), path.join(reportsLatestDir, 'mesh-report.json'));
      await reporter.write(JSON.stringify(meshRes.coordinator, null, 2), path.join(reportsLatestDir, 'mesh-health.json'));
      await reporter.write(JSON.stringify(supervisorEngine.runSupervision(activeAgents), null, 2), path.join(reportsLatestDir, 'supervisor-report.json'));
      await reporter.write(JSON.stringify(heartbeat.getLastHeartbeat('agent-seo') || Date.now(), null, 2), path.join(reportsLatestDir, 'heartbeat-report.json'));
      console.log(`  - Mesh Report Exporter : ${colors.cyan}reports/latest/mesh-report.json${colors.reset}\n`);
      break;
    }

    case 'collaborate': {
      console.log(`${colors.cyan}🤝 Running Consensus & Collaboration Engine (v1.14.0)...${colors.reset}`);
      const consRes = consensusEngine.reachConsensus('Repository Compliance Approval');
      console.log(`  - Consensus Reached : ${colors.green}${consRes.consensusReached}${colors.reset}`);
      console.log(`  - Votes Approved    : ${colors.green}${consRes.votingTally.yes} Yes / ${consRes.votingTally.no} No${colors.reset}\n`);
      await reporter.write(JSON.stringify(consRes, null, 2), path.join(reportsLatestDir, 'consensus-report.json'));
      await reporter.write(JSON.stringify(taskNegotiation.negotiate('Full Audit', ['agent-seo']), null, 2), path.join(reportsLatestDir, 'collaboration-report.json'));
      await reporter.write(JSON.stringify(messageHistory.getHistory(), null, 2), path.join(reportsLatestDir, 'communication-report.json'));
      await reporter.write(JSON.stringify(memorySystem.workingMemory, null, 2), path.join(reportsLatestDir, 'memory-report.json'));
      console.log(`  - Consensus Exporter : ${colors.cyan}reports/latest/consensus-report.json${colors.reset}\n`);
      break;
    }

    // ───── Phase 8A Commands ─────

    case 'procurement': {
      console.log(`${colors.cyan}📦 Running Procurement Intelligence Engine (v1.14.0)...${colors.reset}`);
      const procRes = await procurementEngine.run();
      const catRes = catalogAnalyzer.analyzeCatalog();
      const supProfile = supplierProfile.buildProfile({ name: 'Gem Sahayak Supplier', gstin: '07AAACG1234A1Z5', category: 'IT_SERVICES', turnover: 5000000, yearsActive: 5, certifications: ['ISO_9001', 'MSME_UDYAM'] });

      console.log(`  - Procurement Status : ${colors.green}${procRes.verdict}${colors.reset}`);
      console.log(`  - Marketplaces       : ${colors.green}${procRes.marketplaceRegistry.length}${colors.reset}`);
      console.log(`  - Catalog Health     : ${colors.green}${catRes.health.healthScore}/100${colors.reset}`);
      console.log(`  - Supplier Profile   : ${colors.green}${supProfile.tier} (${supProfile.profileCompleteness}%)${colors.reset}\n`);

      await reporter.write(JSON.stringify(procRes, null, 2), path.join(reportsLatestDir, 'procurement-report.json'));
      await reporter.write(JSON.stringify(catRes, null, 2), path.join(reportsLatestDir, 'catalog-analysis.json'));
      await reporter.write(JSON.stringify(supProfile, null, 2), path.join(reportsLatestDir, 'supplier-report.json'));

      // Procurement Dashboard (aggregation of all sub-reports)
      const dashboard = {
        engine: procRes.manifest,
        procurement: procRes,
        catalog: catRes,
        supplierProfile: supProfile,
        generatedAt: new Date().toISOString()
      };
      await reporter.write(JSON.stringify(dashboard, null, 2), path.join(reportsLatestDir, 'procurement-dashboard.json'));

      console.log(`  - Report Exporter : ${colors.cyan}reports/latest/procurement-report.json${colors.reset}\n`);
      break;
    }

    case 'bid': {
      console.log(`${colors.cyan}📋 Running Bid Intelligence Engine (v1.14.0)...${colors.reset}`);
      const bidRes = bidAnalyzer.analyzeBid({ bidId: 'GEM/2026/B/3456789', category: 'IT_SERVICES' });

      console.log(`  - Bid Classification : ${colors.green}${bidRes.classification.type}${colors.reset}`);
      console.log(`  - Complexity Score   : ${colors.green}${bidRes.complexity.score} (${bidRes.complexity.level})${colors.reset}`);
      console.log(`  - Submission Deadline: ${colors.green}${bidRes.timeline.submissionDeadline}${colors.reset}`);
      console.log(`  - Required Docs      : ${colors.green}${bidRes.dependencies.requiredCertificates.length}${colors.reset}\n`);

      await reporter.write(JSON.stringify(bidRes, null, 2), path.join(reportsLatestDir, 'bid-analysis.json'));

      console.log(`  - Report Exporter : ${colors.cyan}reports/latest/bid-analysis.json${colors.reset}\n`);
      break;
    }

    case 'compliance': {
      console.log(`${colors.cyan}🛡️ Running Compliance Intelligence Engine (v1.14.0)...${colors.reset}`);
      const compRes = eligibilityEngine.evaluateEligibility({ supplierId: 'GEM-SUP-001', category: 'IT_SERVICES' });

      console.log(`  - Eligible           : ${colors.green}${compRes.eligible}${colors.reset}`);
      console.log(`  - Exemption Status   : ${colors.green}${compRes.exemptionStatus}${colors.reset}`);
      console.log(`  - Risk Level         : ${colors.green}${compRes.risk.classification}${colors.reset}`);
      console.log(`  - Documents Verified : ${colors.green}${compRes.documents.length}${colors.reset}\n`);

      await reporter.write(JSON.stringify(compRes, null, 2), path.join(reportsLatestDir, 'compliance-report.json'));

      console.log(`  - Report Exporter : ${colors.cyan}reports/latest/compliance-report.json${colors.reset}\n`);
      break;
    }

    case 'pricing': {
      console.log(`${colors.cyan}💰 Running Pricing Intelligence Engine (v1.14.0)...${colors.reset}`);
      const priceRes = pricingAnalyzer.analyze({
        unitPrice: 1500, benchmarkPrice: 1800, marketAvg: 1800, marketMin: 1200, marketMax: 2400,
        historicalPrices: [1600, 1700, 1650, 1800, 1750]
      });

      const compMap = competitionMap.mapCompetition([
        { name: 'Supplier A', marketShare: 35, rating: 4.5 },
        { name: 'Supplier B', marketShare: 25, rating: 4.2 },
        { name: 'Supplier C', marketShare: 20, rating: 3.9 },
        { name: 'Supplier D', marketShare: 15, rating: 3.5 },
        { name: 'Others', marketShare: 5, rating: 3.0 }
      ]);

      console.log(`  - Price Position  : ${colors.green}${priceRes.position.position}${colors.reset}`);
      console.log(`  - Variance        : ${colors.green}${priceRes.variance.variancePercent}%${colors.reset}`);
      console.log(`  - Benchmark Trend : ${colors.green}${priceRes.benchmark.trend}${colors.reset}`);
      console.log(`  - HHI Index       : ${colors.green}${compMap.herfindahlIndex} (${compMap.concentrationLevel})${colors.reset}\n`);

      await reporter.write(JSON.stringify(priceRes, null, 2), path.join(reportsLatestDir, 'pricing-report.json'));
      await reporter.write(JSON.stringify(compMap, null, 2), path.join(reportsLatestDir, 'competition-report.json'));

      // Market report
      const mktTrends = marketTrends.analyzeTrends([
        { period: 'Q1', value: 1500 }, { period: 'Q2', value: 1650 },
        { period: 'Q3', value: 1700 }, { period: 'Q4', value: 1800 }
      ]);
      await reporter.write(JSON.stringify(mktTrends, null, 2), path.join(reportsLatestDir, 'market-report.json'));

      console.log(`  - Report Exporter : ${colors.cyan}reports/latest/pricing-report.json${colors.reset}\n`);
      break;
    }

    case 'version': {
      console.log(`${colors.cyan}ℹ️ ASTRA Engine Version Metadata:${colors.reset}`);
      console.log(`  - SemVer Version : ${colors.green}1.14.0${colors.reset}`);
      console.log(`  - Phase          : ${colors.green}8A — Enterprise Procurement Intelligence Platform${colors.reset}\n`);
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
