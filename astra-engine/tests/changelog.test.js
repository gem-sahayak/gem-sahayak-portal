'use strict';

const releaseNotes = require('../core/release/releaseNotes');

async function runChangelogTests() {
  console.log('=== RUNNING CHANGELOG AUTOMATION UNIT TESTS ===');

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

  const notes = releaseNotes.generateNotes('1.4.0', 'astra-engine-v1.4.0-phase4B.4', ['c1 - Commit 1']);
  assert(notes.includes('# ASTRA ENGINE RELEASE NOTES — v1.4.0'), 'Includes formatted release title');
  assert(notes.includes('### Added'), 'Categorizes changes into Added section');

  console.log(`\nChangelog Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runChangelogTests().catch(err => {
  console.error('Changelog Test Error:', err);
  process.exit(1);
});
