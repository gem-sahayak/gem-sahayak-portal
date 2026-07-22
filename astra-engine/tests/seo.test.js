'use strict';

const titleValidator = require('../core/validators/title.validator');
const descriptionValidator = require('../core/validators/description.validator');
const canonicalValidator = require('../core/validators/canonical.validator');
const linksValidator = require('../core/validators/links.validator');

async function runSeoTests() {
  console.log('=== RUNNING SEO ENGINE UNIT & FIXTURE TESTS ===');

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

  // Fixtures: Clean & Broken Metadata
  const cleanArticles = [
    {
      slug: 'udyam-registration-guide',
      title: 'Complete Udyam Registration Guide 2026 for MSMEs',
      summary: 'Learn step-by-step how to register Udyam certificate on GeM portal to claim turnover exemptions and EMD waivers legally.',
      canonical: 'https://sahayakai.co.in/knowledge/gem-registration/udyam-registration-guide',
      category: 'gem-registration',
      relatedArticles: ['emd-exemption-rules'],
      relatedTools: ['eligibility-checker']
    },
    {
      slug: 'emd-exemption-rules',
      title: 'GeM Portal EMD Exemption Rules & Policy Handbook',
      summary: 'Complete breakdown of Earnest Money Deposit exemptions, NSIC certificates, micro enterprise benefits, and GFR rules.',
      canonical: 'https://sahayakai.co.in/knowledge/compliance-policy/emd-exemption-rules',
      category: 'compliance-policy',
      relatedArticles: ['udyam-registration-guide'],
      relatedTools: ['eligibility-checker']
    }
  ];

  const brokenArticles = [
    {
      slug: 'broken-article-1',
      title: 'Short', // short title
      summary: '', // missing description
      canonical: 'https://external-domain.com/bad-canonical',
      category: 'invalid-cat',
      relatedArticles: ['non-existent-article-slug'] // broken link
    },
    {
      slug: 'broken-article-2',
      title: 'Short', // duplicate title
      summary: 'Short desc', // short description
      canonical: 'https://external-domain.com/bad-canonical', // duplicate canonical
      category: 'invalid-cat'
    }
  ];

  // 1. Title Validator Tests
  const cleanTitleRes = titleValidator.validate(cleanArticles);
  assert(cleanTitleRes.errors.length === 0, 'Clean articles title validation has 0 errors');

  const brokenTitleRes = titleValidator.validate(brokenArticles);
  assert(brokenTitleRes.warnings.some(w => w.code === 'SHORT_TITLE'), 'Detects SHORT_TITLE warning on short titles');
  assert(brokenTitleRes.errors.some(e => e.code === 'DUPLICATE_TITLE'), 'Detects DUPLICATE_TITLE error on duplicate titles');

  // 2. Description Validator Tests
  const cleanDescRes = descriptionValidator.validate(cleanArticles);
  assert(cleanDescRes.errors.length === 0, 'Clean articles description validation has 0 errors');

  const brokenDescRes = descriptionValidator.validate(brokenArticles);
  assert(brokenDescRes.errors.some(e => e.code === 'MISSING_DESCRIPTION'), 'Detects MISSING_DESCRIPTION error when summary is empty');

  // 3. Canonical Validator Tests
  const cleanCanonicalRes = canonicalValidator.validate(cleanArticles);
  assert(cleanCanonicalRes.errors.length === 0, 'Clean articles canonical validation has 0 errors');

  const brokenCanonicalRes = canonicalValidator.validate(brokenArticles);
  assert(brokenCanonicalRes.errors.some(e => e.code === 'DUPLICATE_CANONICAL'), 'Detects DUPLICATE_CANONICAL error when canonical is shared');

  // 4. Links Validator Tests
  const cleanLinksRes = linksValidator.validate(cleanArticles, ['eligibility-checker']);
  assert(cleanLinksRes.errors.length === 0, 'Clean articles internal links validation has 0 errors');

  const brokenLinksRes = linksValidator.validate(brokenArticles, ['eligibility-checker']);
  assert(brokenLinksRes.errors.some(e => e.code === 'BROKEN_INTERNAL_ARTICLE_LINK'), 'Detects BROKEN_INTERNAL_ARTICLE_LINK error when target slug does not exist');

  console.log(`\nSEO Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runSeoTests().catch(err => {
  console.error('SEO Test Error:', err);
  process.exit(1);
});
