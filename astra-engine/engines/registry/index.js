'use strict';

const fs = require('fs');
const path = require('path');
const policyConfig = require('../../policies/registry.policy.json');
const registrySchema = require('../../schemas/registry.schema.json');

class RegistryEngine {
  constructor() {
    this.manifest = {
      name: "registry-validation-engine",
      version: "1.0.0",
      owner: "Astra Core",
      capabilities: ["registry-sync", "category-check", "file-integrity"],
      dependencies: []
    };
  }

  async init(context) {
    this.context = context;
  }

  /**
   * Validates target registry arrays against raw parsed files state snapshot.
   */
  async run(state) {
    const startTime = Date.now();
    const errors = [];
    const warnings = [];

    const registryArticles = state.parsedRegistry.articles || [];
    const registryCategories = state.parsedRegistry.categories || [];
    
    // Create lookup sets
    const registrySlugs = new Set(registryArticles.map(art => art.slug));
    const allowedCategories = new Set(registryCategories.map(cat => cat.slug));

    // Discover markdown files in /posts directory
    const markdownFiles = [];
    for (const [relPath, fileObj] of state.filesystem.files.entries()) {
      if (relPath.startsWith('posts/') && fileObj.extension === '.md') {
        const parsedData = state.metadataMap.get(relPath);
        if (parsedData) {
          markdownFiles.push({
            relativePath: relPath,
            slug: parsedData.slug || path.basename(relPath, '.md'),
            category: parsedData.category,
            title: parsedData.title,
            author: parsedData.frontmatter.author
          });
        }
      }
    }

    const postSlugs = new Set(markdownFiles.map(post => post.slug));

    // Check 0: Duplicate slugs within registry.ts
    const seenSlugs = new Set();
    for (const art of registryArticles) {
      if (seenSlugs.has(art.slug)) {
        errors.push({
          code: "DUPLICATE_REGISTRY_SLUG",
          message: `Registry.ts defines article slug "${art.slug}" multiple times. Duplicate entries will break static build generation.`,
          file: `src/content/registry.ts`,
          evidence: { slug: art.slug }
        });
      }
      seenSlugs.add(art.slug);
    }

    // Check 1: Post file exists but missing registry entry in registry.ts
    for (const post of markdownFiles) {
      if (!registrySlugs.has(post.slug)) {
        errors.push({
          code: "REGISTRY_MISSING_ENTRY",
          message: `Post file "${post.relativePath}" has slug "${post.slug}" but is missing in registry.ts`,
          file: post.relativePath,
          evidence: { slug: post.slug }
        });
      }
    }

    // Check 2: Registry entry exists but missing raw post file
    for (const art of registryArticles) {
      if (!postSlugs.has(art.slug)) {
        errors.push({
          code: "FILE_MISSING_FOR_REGISTRY",
          message: `Registry.ts defines article slug "${art.slug}" but corresponding markdown file "posts/${art.slug}.md" was not found in directory`,
          file: `src/content/registry.ts`,
          evidence: { slug: art.slug }
        });
      }
    }

    // Check 3: Schema field validation rules & category checks
    for (const art of registryArticles) {
      // Validate schema keys exist
      for (const field of registrySchema.required) {
        if (!art[field]) {
          errors.push({
            code: "SCHEMA_FIELD_MISSING",
            message: `Registry item "${art.slug}" is missing required schema field "${field}"`,
            file: `src/content/registry.ts`,
            evidence: { slug: art.slug, missingField: field }
          });
        }
      }

      // Category match validation policy
      if (policyConfig.requireCategoryMatch && art.category) {
        const cleanedCategory = art.category.toLowerCase().replace(/\s+/g, '-');
        if (!allowedCategories.has(cleanedCategory)) {
          warnings.push({
            code: "CATEGORY_MISMATCH",
            message: `Registry item "${art.slug}" uses category "${art.category}" which is not defined in REGISTRY_CATEGORIES`,
            file: `src/content/registry.ts`,
            evidence: { slug: art.slug, category: art.category }
          });
        }
      }

      // Check author validation policy
      if (art.author && !policyConfig.allowedAuthors.includes(art.author)) {
        warnings.push({
          code: "UNAUTHORIZED_AUTHOR",
          message: `Registry item "${art.slug}" has author "${art.author}" which does not match allowed policy list`,
          file: `src/content/registry.ts`,
          evidence: { slug: art.slug, author: art.author }
        });
      }
    }

    const executionTimeMs = Date.now() - startTime;
    const verdict = errors.length > 0 ? "FAIL" : (warnings.length > 0 ? "WARNING" : "PASS");

    return {
      engineName: this.manifest.name,
      verdict,
      errors,
      warnings,
      executionTimeMs
    };
  }
}

module.exports = new RegistryEngine();
