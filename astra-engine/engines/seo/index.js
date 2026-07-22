'use strict';

const titleValidator = require('../../core/validators/title.validator');
const descriptionValidator = require('../../core/validators/description.validator');
const canonicalValidator = require('../../core/validators/canonical.validator');
const linksValidator = require('../../core/validators/links.validator');
const registryValidator = require('../../core/validators/registry.validator');

class SeoEngine {
  constructor() {
    this.manifest = {
      name: 'seo-validation-engine',
      version: '1.1.0',
      owner: 'Astra SEO Core',
      capabilities: [
        'metadata-validation',
        'title-check',
        'description-check',
        'canonical-check',
        'link-quality',
        'heading-hierarchy',
        'registry-consistency'
      ],
      dependencies: []
    };
  }

  async init(context) {
    this.context = context;
  }

  async run(state) {
    const startTime = Date.now();
    const errors = [];
    const warnings = [];

    const registryArticles = state.parsedRegistry.articles || [];
    const registryCategories = state.parsedRegistry.categories || [];
    const registryTools = state.parsedRegistry.tools || [];

    // Compile article records merging registry metadata and markdown file parsed data
    const compiledArticles = [];

    for (const [relPath, fileObj] of state.filesystem.files.entries()) {
      if (relPath.startsWith('posts/') && fileObj.extension === '.md') {
        const mdData = state.metadataMap.get(relPath);
        const slug = mdData?.slug || relPath.replace('posts/', '').replace('.md', '');
        const regArt = registryArticles.find(a => a.slug === slug);

        compiledArticles.push({
          slug,
          file: relPath,
          title: regArt?.title || mdData?.title || '',
          summary: regArt?.summary || mdData?.description || '',
          category: regArt?.category || mdData?.category || '',
          date: regArt?.date || mdData?.date || '',
          readingTime: regArt?.readingTime || mdData?.readingTime || '',
          canonical: regArt?.canonical || mdData?.canonical || '',
          headings: mdData?.headings || [],
          relatedArticles: regArt?.relatedArticles || mdData?.frontmatter?.relatedArticles || [],
          relatedTools: regArt?.relatedTools || mdData?.frontmatter?.relatedTools || [],
          frontmatter: mdData?.frontmatter || {}
        });
      }
    }

    // 1. Title Validation
    const titleRes = titleValidator.validate(compiledArticles);
    errors.push(...titleRes.errors);
    warnings.push(...titleRes.warnings);

    // 2. Description Validation
    const descRes = descriptionValidator.validate(compiledArticles);
    errors.push(...descRes.errors);
    warnings.push(...descRes.warnings);

    // 3. Canonical Validation
    const canonicalRes = canonicalValidator.validate(compiledArticles);
    errors.push(...canonicalRes.errors);
    warnings.push(...canonicalRes.warnings);

    // 4. Links & Heading Hierarchy Validation
    const linksRes = linksValidator.validate(compiledArticles, registryTools);
    errors.push(...linksRes.errors);
    warnings.push(...linksRes.warnings);

    // 5. Registry Category Consistency
    const regRes = registryValidator.validate(state.parsedRegistry);
    errors.push(...regRes.errors);
    warnings.push(...regRes.warnings);

    const executionTimeMs = Date.now() - startTime;
    const verdict = errors.length > 0 ? 'FAIL' : (warnings.length > 0 ? 'WARNING' : 'PASS');

    return {
      engineName: this.manifest.name,
      verdict,
      errors,
      warnings,
      executionTimeMs
    };
  }
}

module.exports = new SeoEngine();
