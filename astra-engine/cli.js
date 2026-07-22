#!/usr/bin/env node

const path = require('path');
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
  console.log(`${colors.cyan}${colors.bright}          ASTRA ENGINE v1.0.0              ${colors.reset}`);
  console.log(`${colors.cyan}    Repository Guardian & Engineering OS     ${colors.reset}`);
  console.log(`${colors.cyan}${colors.bright}===========================================${colors.reset}\n`);
}

function printHelp() {
  console.log(`${colors.bright}Usage:${colors.reset} astra <command> [options]\n`);
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
  console.log(`  ${colors.green}history${colors.reset}       Display historical health telemetry trends over time\n`);
}

async function runCli() {
  printBanner();
  
  const args = process.argv.slice(2);
  if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
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

  switch (command) {
    case 'doctor':
      console.log(`${colors.cyan}🩺 Bootstrapping Astra Doctor Diagnostics...${colors.reset}`);
      console.log(`  - Engine Config Version: ${colors.green}${config.engineVersion}${colors.reset}`);
      console.log(`  - Exclusions Mapped: ${colors.green}${config.exclusions.join(', ')}${colors.reset}`);
      console.log(`  - Options Verbosities: ${colors.green}${config.options.verbosity}${colors.reset}`);
      console.log(`\n${colors.green}🟢 Astra OS Status: Configured and Ready.${colors.reset}\n`);
      break;

    case 'scan':
    case 'integrity':
    case 'seo':
    case 'geo':
    case 'registry':
    case 'graph':
    case 'extension':
    case 'report':
    case 'deploy':
    case 'history':
      console.log(`${colors.yellow}🚧 Command "${command}" is under phase implementation bootstrap...${colors.reset}`);
      console.log(`${colors.cyan}State initialized successfully. Initial scan snapshot timestamp: ${colors.green}${stateManager.getStateSnapshot().timestamp.toISOString()}${colors.reset}`);
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
