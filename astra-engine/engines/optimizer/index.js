'use strict';

const OptimizerEngine = require('./optimizerEngine');
const contentOptimizer = require('./contentOptimizer');
const internalLinkingEngine = require('./internalLinking');
const anchorTextGenerator = require('./anchorGenerator');
const topicExpansionEngine = require('./topicExpansion');
const faqGeneratorEngine = require('./faqGenerator');
const entityExpansionEngine = require('./entityExpansion');
const headingOptimizerEngine = require('./headingOptimizer');
const contentGapEngine = require('./contentGap');
const priorityPlannerEngine = require('./priorityPlanner');

const defaultEngine = new OptimizerEngine();

module.exports = {
  optimizerEngine: defaultEngine,
  OptimizerEngine,
  contentOptimizer,
  internalLinkingEngine,
  anchorTextGenerator,
  topicExpansionEngine,
  faqGeneratorEngine,
  entityExpansionEngine,
  headingOptimizerEngine,
  contentGapEngine,
  priorityPlannerEngine
};
