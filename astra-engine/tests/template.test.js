'use strict';

const path = require('path');
const fs = require('fs');

async function runTemplateTests() {
  console.log('=== RUNNING PLUGIN TEMPLATE UNIT TESTS ===');

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

  const tmplDir = path.join(__dirname, '../sdk/templates/audit-plugin');
  assert(fs.existsSync(path.join(tmplDir, 'plugin.json')), 'Template includes plugin.json manifest');
  assert(fs.existsSync(path.join(tmplDir, 'index.js')), 'Template includes index.js entry point');
  assert(fs.existsSync(path.join(tmplDir, 'README.md')), 'Template includes README.md documentation');

  console.log(`\nTemplate Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runTemplateTests().catch(err => {
  console.error('Template Test Error:', err);
  process.exit(1);
});
