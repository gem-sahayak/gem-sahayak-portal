'use strict';

const overviewDashboard = require('./overviewDashboard');
const seoDashboard = require('./seoDashboard');
const reviewDashboard = require('./reviewDashboard');
const semanticDashboard = require('./semanticDashboard');
const optimizerDashboard = require('./optimizerDashboard');
const knowledgeDashboard = require('./knowledgeDashboard');
const healthDashboard = require('./healthDashboard');
const performanceDashboard = require('./performanceDashboard');
const telemetryDashboard = require('./telemetryDashboard');

/**
 * Main Enterprise Intelligence Dashboard Engine.
 * Aggregates all dashboard view models.
 */
class DashboardEngine {
  constructor() {
    this.manifest = {
      name: 'Enterprise Intelligence Dashboard',
      version: '1.7.1',
      description: 'Read-only interactive visualization dashboard for SEO, AI Review, Optimizer, Knowledge RAG & Telemetry'
    };
  }

  async init(ctx = {}) {
    // Initialization
  }

  async run(state = {}) {
    const overview = overviewDashboard.renderOverview(state);
    const seo = seoDashboard.renderSeo(state);
    const review = reviewDashboard.renderReview(state);
    const semantic = semanticDashboard.renderSemantic(state);
    const optimizer = optimizerDashboard.renderOptimizer(state);
    const knowledge = knowledgeDashboard.renderKnowledge(state);
    const health = healthDashboard.renderHealth();
    const performance = performanceDashboard.renderPerformance();
    const telemetry = telemetryDashboard.renderTelemetry();

    return {
      manifest: this.manifest,
      verdict: 'PASS',
      overview,
      seo,
      review,
      semantic,
      optimizer,
      knowledge,
      health,
      performance,
      telemetry
    };
  }
}

module.exports = DashboardEngine;
