#!/usr/bin/env node
'use strict';

const path = require('path');

// SEC-003: Activate production import guard BEFORE any other local requires
const { activateGuard } = require('./core/guards/importGuard');
activateGuard();

const configLoader = require('./core/config');
const stateManager = require('./core/state');

// Colors helper for clean terminal outputs
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
  console.log(`${colors.cyan}${colors.bright}          ASTRA ENGINE v1.0.1              ${colors.reset}`);
  console.log(`${colors.cyan}    Repository Guardian & Engineering OS     ${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}===========================================${colors.reset}\n`);
}

function printHelp() {
  console.log(`${colors.bright}Usage:${colors.reset} node cli.js <command> [options]\n`);
  console.log(`${colors.bright}Commands:${colors.reset}`);
  console.log(`  ${colors.green}doctor${colors.reset}        Verify system environment, configurations & workspace schemas`);
  console.log(`  ${colors.green}scan${colors.reset}          Run default integrity & validation check sequences`);
  console.log(`  ${colors.green}integrity${colors.reset}     Validate base project file structures & imports sanity`);
  console.log(`  ${colors.green}seo${colors.reset}           Run SEO audit validations (description lengths, canonicals)`);
  console.log(`  ${colors.green}geo${colors.reset}           Verify target regional mappings consistency`);
  console.log(`  ${colors.green}registry${colors.reset}      Verify sync consistency between registry.ts & content files`);
  console.log(`  ${colors.green}graph${colors.reset}         Verify connections & node hierarchies in knowledge graph`);
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
  console.log(`  node cli.js scan            Full validation scan\n`);
}

const scanner = require('./core/scanner');
const registryEngine = require('./engines/registry');
const reporter = require('./core/reporter');
const fs = require('fs');
const { isGuardActive } = require('./core/guards/importGuard');

async function runCli() {
  printBanner();
  
  const args = process.argv.slice(2);

  // CLI-001: Support help, --help, and -h consistently
  if (args.length === 0 || args.includes('-h') || args.includes('--help') || args[0] === 'help') {
    printHelp();
    process.exit(0);
  }

  const command = args[0].toLowerCase();
  
  // Try loading configuration
  let config;
  try {
    config = configLoader.load();
  } catch (e) {
    console.log(`${colors.red}${colors.bright}❌ CRITICAL: Configuration Loader Failed!${colors.reset}`);
    process.exit(1);
  }

  // Decoupled read-only target workspace directory (parent of astra-engine)
  const rootDir = path.resolve(__dirname, '..');

  switch (command) {
    case 'doctor': {
      console.log(`${colors.cyan}🩺 Bootstrapping Astra Doctor Diagnostics...${colors.reset}`);
      console.log(`  - Engine Config Version: ${colors.green}${config.engineVersion}${colors.reset}`);
      console.log(`  - Schema Version: ${colors.green}${config.schemaVersion}${colors.reset}`);
      console.log(`  - Exclusions Mapped: ${colors.green}${config.exclusions.join(', ')}${colors.reset}`);
      console.log(`  - Verbosity: ${colors.green}${config.options.verbosity}${colors.reset}`);
      console.log(`  - Import Guard Active: ${colors.green}${isGuardActive()}${colors.reset}`);

      // Verify all modules are loadable
      const modules = {
        'Config Loader': configLoader,
        'State Manager': stateManager,
        'Filesystem Scanner': require('./core/filesystem'),
        'Markdown Parser': require('./core/parser/markdown'),
        'TS Parser': require('./core/parser/typescript'),
        'Reporter': reporter,
        'Registry Engine': registryEngine,
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

      // Verify contracts exist
      const contractFiles = ['Engine.ts', 'Scanner.ts', 'Validator.ts', 'Reporter.ts', 'State.ts', 'Event.ts'];
      const contractsDir = path.join(__dirname, 'contracts');
      console.log(`\n  ${colors.bright}Contracts:${colors.reset}`);
      for (const cf of contractFiles) {
        const exists = fs.existsSync(path.join(contractsDir, cf));
        console.log(`    ${exists ? '✅' : '❌'} ${cf}: ${exists ? colors.green + 'present' : colors.red + 'MISSING'}${colors.reset}`);
        if (!exists) allModulesOk = false;
      }

      // State manager health
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
    case 'registry': {
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
      
      console.log(`\n${colors.cyan}⚡ Running Registry Validation sub-engine...${colors.reset}`);
      
      let result;
      try {
        await registryEngine.init({ config, state, logger: console });
        result = await registryEngine.run(state);
      } catch (err) {
        console.error(`${colors.red}❌ Registry validation execution crash:${colors.reset}`, err.message);
        process.exit(1);
      }

      // Compile data summaries
      const totalErrors = result.errors.length;
      const totalWarnings = result.warnings.length;
      const totalTime = Date.now() - startTime;
      
      const overallVerdict = totalErrors > 0 ? 'FAIL' : (totalWarnings > 0 ? 'WARNING' : 'PASS');

      const reportData = {
        summary: {
          timestamp: new Date(),
          overallVerdict,
          totalEnginesRun: 1,
          totalErrors,
          totalWarnings,
          executionTimeMs: totalTime
        },
        results: [result],
        schemaVersion: config.schemaVersion,
        engineVersion: config.engineVersion
      };

      // Generate reports content
      const jsonReport = await reporter.build(reportData, 'json');
      const mdReport = await reporter.build(reportData, 'markdown');
      const terminalReport = await reporter.build(reportData, 'terminal');

      // Write files in reports/latest
      const reportsLatestDir = path.join(__dirname, 'reports', 'latest');
      await reporter.write(jsonReport, path.join(reportsLatestDir, 'report.json'));
      await reporter.write(mdReport, path.join(reportsLatestDir, 'report.md'));

      // Print output logs
      console.log(terminalReport);

      // Print success criteria status
      console.log(`\n${colors.bright}=== SUCCESS CRITERIA CHECK ===${colors.reset}`);
      console.log(`Posts : ${colors.green}${state.metadataMap.size}${colors.reset}`);
      console.log(`Registry : ${colors.green}${state.parsedRegistry.articles.length}${colors.reset}`);
      
      const diffCount = Math.abs(state.metadataMap.size - state.parsedRegistry.articles.length);
      console.log(`Difference : ${colors.yellow}${diffCount}${colors.reset}`);

      if (overallVerdict === 'FAIL') {
        console.log(`\n${colors.red}${colors.bright}Result Status: FAIL${colors.reset}`);
        process.exit(1);
      } else {
        console.log(`\n${colors.green}${colors.bright}Result Status: PASS${colors.reset}`);
        process.exit(0);
      }
      break;
    }

    case 'seo':
    case 'geo':
    case 'graph':
    case 'extension':
    case 'report':
    case 'deploy':
    case 'history':
    case 'integrity':
      console.log(`${colors.yellow}🚧 Command "${command}" belongs to later implementation phases...${colors.reset}`);
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
