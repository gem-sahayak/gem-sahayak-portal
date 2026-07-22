'use strict';

const ReasoningEngine = require('./reasoningEngine');
const reasoningSession = require('./reasoningSession');
const ReasoningContext = require('./reasoningContext');
const ReasoningGraph = require('./reasoningGraph');
const reasoningHistory = require('./reasoningHistory');
const factEngine = require('./factEngine');
const assumptionEngine = require('./assumptionEngine');
const constraintEngine = require('./constraintEngine');
const evidenceCollector = require('./evidenceCollector');
const confidenceModel = require('./confidenceModel');
const reasoningMetrics = require('./reasoningMetrics');

const defaultEngine = new ReasoningEngine();

module.exports = {
  reasoningEngine: defaultEngine,
  ReasoningEngine,
  reasoningSession,
  ReasoningContext,
  ReasoningGraph,
  reasoningHistory,
  factEngine,
  assumptionEngine,
  constraintEngine,
  evidenceCollector,
  confidenceModel,
  reasoningMetrics
};
