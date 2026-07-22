'use strict';

const SemanticEngine = require('./semanticEngine');
const entityAnalyzer = require('./entityAnalyzer');
const intentAnalyzer = require('./intentAnalyzer');
const similarityEngine = require('./similarity');
const cannibalizationDetector = require('./cannibalization');
const clusterEngine = require('./clusterEngine');
const topicalAuthorityCalculator = require('./topicalAuthority');

const defaultEngine = new SemanticEngine();

module.exports = {
  semanticEngine: defaultEngine,
  SemanticEngine,
  entityAnalyzer,
  intentAnalyzer,
  similarityEngine,
  cannibalizationDetector,
  clusterEngine,
  topicalAuthorityCalculator
};
