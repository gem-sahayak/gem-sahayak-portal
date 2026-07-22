'use strict';

const catalogManager = require('../core/plugins/marketplace/catalog');
const searchManager = require('../core/plugins/marketplace/search');
const installer = require('../core/plugins/marketplace/install');

async function runMarketplaceTests() {
  console.log('=== RUNNING PLUGIN MARKETPLACE UNIT TESTS ===');

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

  const catalog = catalogManager.getCatalog();
  assert(catalog.length >= 2, 'Catalog contains pre-populated enterprise plugins');

  const searchRes = searchManager.search('SEO');
  assert(searchRes.length >= 1, 'Marketplace search finds plugins by query keyword');

  // Test catalog installation
  const rec = installer.installPlugin('official-seo-optimizer');
  assert(rec.id === 'official-seo-optimizer', 'Installs plugin from marketplace catalog');

  // Clean up
  installer.uninstallPlugin('official-seo-optimizer');

  console.log(`\nMarketplace Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runMarketplaceTests().catch(err => {
  console.error('Marketplace Test Error:', err);
  process.exit(1);
});
