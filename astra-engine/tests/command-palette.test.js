'use strict';

const commandPalette = require('../studio/commandPalette');

async function runCommandPaletteTests() {
  console.log('=== RUNNING COMMAND PALETTE UNIT TESTS ===');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  const results = commandPalette.searchCommands('SEO');
  assert(results.length >= 1, 'Filters commands matching "SEO" query');
  assert(results[0].name.includes('SEO'), 'Matched command contains "SEO" in title');

  console.log(`\nCommand Palette Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runCommandPaletteTests().catch(err => {
  console.error('Command Palette Test Error:', err);
  process.exit(1);
});
