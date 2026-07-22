'use strict';

const path = require('path');
const fs = require('fs');
const { pluginPackager, packageValidator } = require('../core/plugins/package');

async function runPackageTests() {
  console.log('=== RUNNING PLUGIN PACKAGE (.APKG) UNIT TESTS ===');

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

  const sampleDir = path.join(__dirname, '../plugins/sample-plugin');
  const targetApkg = path.join(__dirname, '../reports/latest/sample-test.apkg');

  const pkgRes = pluginPackager.packagePlugin(sampleDir, targetApkg);
  assert(fs.existsSync(pkgRes.targetPath), 'Bundles plugin into .apkg package archive file');
  assert(typeof pkgRes.checksum === 'string', 'Generates SHA256 checksum for packaged archive');

  console.log(`\nPackage Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runPackageTests().catch(err => {
  console.error('Package Test Error:', err);
  process.exit(1);
});
