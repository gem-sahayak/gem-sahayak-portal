'use strict';

const contentOptimizer = require('./contentOptimizer');
const internalLinkingEngine = require('./internalLinking');
const anchorTextGenerator = require('./anchorGenerator');
const topicExpansionEngine = require('./topicExpansion');
const faqGeneratorEngine = require('./faqGenerator');
const entityExpansionEngine = require('./entityExpansion');
const headingOptimizerEngine = require('./headingOptimizer');
const contentGapEngine = require('./contentGap');
const priorityPlannerEngine = require('./priorityPlanner');
const recommendationAggregator = require('./recommendation');

class OptimizerEngine {
  constructor() {
    this.manifest = {
      name: 'AI Content Optimization Platform',
      version: '1.5.2',
      description: 'Intelligent recommendation layer for content completeness, internal linking, topic expansion & SEO roadmaps'
    };
  }

  async init(ctx = {}) {
    // Initialization
  }

  async run(state) {
    const articles = state.parsedRegistry?.articles || [];

    const optResults = [];
    const anchors = [];
    const topicExpansions = [];
    const faqSuggestions = [];
    const entityExpansions = [];
    const headingReports = [];
    const contentGaps = [];
    const issues = [];

    for (const a of articles) {
      const optRes = contentOptimizer.optimizeArticle(a);
      optResults.push(optRes);

      const ancRes = anchorTextGenerator.generateAnchors(a.slug, a.title);
      anchors.push(...ancRes);

      const topRes = topicExpansionEngine.generateTopicExpansions(a);
      topicExpansions.push(topRes);

      const faqRes = faqGeneratorEngine.generateFaqs(a);
      faqSuggestions.push(...faqRes);

      const entRes = entityExpansionEngine.generateEntityExpansions(a);
      entityExpansions.push(entRes);

      const headRes = headingOptimizerEngine.evaluateHeadings(a);
      headingReports.push(headRes);

      const gapRes = contentGapEngine.calculateGaps(a);
      contentGaps.push(gapRes);

      if (optRes.missingElements.length > 0) {
        issues.push({
          id: 'OPT-' + Math.random().toString(36).substring(2, 8),
          engine: 'optimizer-engine',
          type: 'CONTENT_GAP',
          severity: 'RECOMMENDATION',
          priority: 'HIGH',
          confidence: 0.94,
          articleSlug: a.slug,
          message: `Article is missing structural elements: ${optRes.missingElements.join(', ')}`,
          recommendation: optRes.recommendation
        });
      }
    }

    const internalLinks = internalLinkingEngine.generateLinkRecommendations(articles);
    const suggestions = recommendationAggregator.aggregate(optResults, internalLinks, entityExpansions);
    const roadmap = priorityPlannerEngine.buildRoadmap(suggestions);

    let sumScore = 0;
    for (const r of optResults) sumScore += r.score;
    const overallOptimizationScore = optResults.length > 0 ? Math.round(sumScore / optResults.length) : 100;

    return {
      manifest: this.manifest,
      verdict: issues.length > 0 ? 'WARNING' : 'PASS',
      errors: [],
      warnings: issues,
      scores: {
        overallOptimizationScore,
        evaluatedAt: new Date().toISOString()
      },
      summary: {
        overallOptimizationScore,
        totalArticlesAnalyzed: articles.length,
        totalSuggestionsGenerated: suggestions.length
      },
      issues,
      suggestions,
      internalLinks,
      anchors,
      topicExpansions,
      faqSuggestions,
      entityExpansions,
      headingReports,
      contentGaps,
      roadmap
    };
  }
}

module.exports = OptimizerEngine;
