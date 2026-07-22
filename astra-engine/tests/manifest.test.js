'use strict';

const manifestValidator = require('../core/plugins/manifest');

async function runManifestTests() {
  console.log('=== RUNNING PLUGIN MANIFEST VALIDATOR UNIT TESTS ===');

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

  const validManifest = {
    id: 'valid-plugin',
    name: 'Valid Plugin',
    version: '1.0.0',
    engineVersion: '1.3.0',
    description: 'Test plugin',
    permissions: ['READ_STATE', 'READ_REPORTS'],
    hooks: ['afterScan', 'afterReport']
  };

  const resValid = manifestValidator.validateManifest(validManifest);
  assert(resValid.valid === true, 'Valid manifest passes validation');

  const invalidManifest = {
    id: 'INVALID_ID_UPPERCASE',
    name: 'Invalid Plugin',
    version: '1.0.0',
    engineVersion: '1.3.0',
    permissions: ['UNAUTHORIZED_WRITE_PERM'],
    hooks: ['unsupportedHook']
  };

  const resInvalid = manifestValidator.validateManifest(invalidManifest);
  assert(resInvalid.valid === false, 'Invalid manifest fails validation');
  assert(resInvalid.errors.length >= 2, 'Manifest validator returns explicit error array');

  console.log(`\nPlugin Manifest Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runManifestTests().catch(err => {
  console.error('Manifest Test Error:', err);
  process.exit(1);
});
