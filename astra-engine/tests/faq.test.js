'use strict';

const faqGeneratorEngine = require('../engines/optimizer/faqGenerator');

async function runFaqTests() {
  console.log('=== RUNNING FAQ GENERATOR ENGINE UNIT TESTS ===');

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

  const faqs = faqGeneratorEngine.generateFaqs({ slug: 'udyam-error' });
  assert(faqs.length === 3, 'Generates 3 categorized FAQs (Beginner, Transactional, Advanced)');

  console.log(`\nFAQ Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runFaqTests().catch(err => {
  console.error('FAQ Test Error:', err);
  process.exit(1);
});
