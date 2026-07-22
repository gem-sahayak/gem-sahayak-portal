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
  console.log(`${colors.cyan}${colors.bright}          ASTRA ENGINE v1.1.0              ${colors.reset}`);
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
  console.log(`  node cli.js registry        Validate registry sync`);
  console.log(`  node cli.js seo             Run SEO engine audit`);
  console.log(`  node cli.js graph           Validate knowledge graph topology`);
  console.log(`  node cli.js validate        Run all Phase 3 engines\n`);
}

async function runCli() {
  printBanner();

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
      console.log(`${colors.cyan}🩺 Bootstrapping Astra Doctor Diagnostics...${colors.reset}`);
      console.log(`  - Engine Config Version: ${colors.green}${config.engineVersion}${colors.reset}`);
      console.log(`  - Schema Version: ${colors.green}${config.schemaVersion}${colors.reset}`);
      console.log(`  - Exclusions Mapped: ${colors.green}${config.exclusions.join(', ')}${colors.reset}`);
      console.log(`  - Verbosity: ${colors.green}${config.options.verbosity}${colors.reset}`);
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
        'Knowledge Graph Builder': require('./core/graph'),
        'Title Validator': require('./core/validators/title.validator'),
        'Description Validator': require('./core/validators/description.validator'),
        'Canonical Validator': require('./core/validators/canonical.validator'),
        'Links Validator': require('./core/validators/links.validator'),
        'Registry Validator': require('./core/validators/registry.validator'),
        'Entity Validator': require('./core/validators/entity.validator'),
        'Graph Validator': require('./core/validators/graph.validator'),
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

      const contractFiles = ['Engine.ts', 'Scanner.ts', 'Validator.ts', 'Reporter.ts', 'State.ts', 'Event.ts'];
      const contractsDir = path.join(__dirname, 'contracts');
      console.log(`\n  ${colors.bright}Contracts:${colors.reset}`);
      for (const cf of contractFiles) {
        const exists = fs.existsSync(path.join(contractsDir, cf));
        console.log(`    ${exists ? '✅' : '❌'} ${cf}: ${exists ? colors.green + 'present' : colors.red + 'MISSING'}${colors.reset}`);
        if (!exists) allModulesOk = false;
      }

      console.log(`\n  ${colors.bright}State Manager:${colors.reset}`);
      try {
        const snap = stateManager.getStateSnapshot();
        const isFrozen = Object.isFrozen(snap);
        console.log(`    ✅ State Snapshot: ${colors.green}available${colors.reset}`);
        console.log(`    ${isFrozen ? '✅' : '❌'} Object.isFrozen: ${isFrozen ? colors.green + 'true' : colors.red + 'false'}${colors.reset}`);
        if (!isFrozen) allModulesOk = false;
      } catch (e) {
        console.log(`    ❌ State Snapshot: ${colors.red}FAILED — ${e.message}${colors.reset}`);
        allModulesOk = false;
      }

      if (allModulesOk) {
        console.log(`\n${colors.green}🟢 Astra OS Status: All systems operational.${colors.reset}\n`);
      } else {
        console.log(`\n${colors.red}🔴 Astra OS Status: Degraded — see failures above.${colors.reset}\n`);
        process.exit(1);
      }
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

      console.log(`  - Total Inventory Files Indexed: ${colors.green}${state.filesystem.files.size}${colors.reset}`);
      console.log(`  - Markdown Content Files Found: ${colors.green}${state.metadataMap.size}${colors.reset}`);
      console.log(`  - Registry Articles Configured: ${colors.green}${state.parsedRegistry.articles.length}${colors.reset}`);

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
        console.log(`\n${colors.cyan}⚡ Running ${engine.manifest.name}...${colors.reset}`);
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
        engineVersion: '1.1.0'
      };

      const jsonReport = await reporter.build(reportData, 'json');
      const mdReport = await reporter.build(reportData, 'markdown');
      const terminalReport = await reporter.build(reportData, 'terminal');

      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(jsonReport, path.join(reportsLatestDir, 'report.json'));
      await reporter.write(mdReport, path.join(reportsLatestDir, 'report.md'));

      console.log(terminalReport);

      console.log(`\n${colors.bright}=== SUMMARY VERDICT ===${colors.reset}`);
      console.log(`Engines Executed : ${colors.green}${results.length}${colors.reset}`);
      console.log(`Total Errors     : ${totalErrors > 0 ? colors.red + totalErrors : colors.green + 0}${colors.reset}`);
      console.log(`Total Warnings   : ${totalWarnings > 0 ? colors.yellow + totalWarnings : colors.green + 0}${colors.reset}`);
      console.log(`Overall Verdict  : ${overallVerdict === 'FAIL' ? colors.red + 'FAIL' : (overallVerdict === 'WARNING' ? colors.yellow + 'WARNING' : colors.green + 'PASS')}${colors.reset}`);

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
