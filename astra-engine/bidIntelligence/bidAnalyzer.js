'use strict';

const bidClassifier = require('./bidClassifier');
const bidComplexity = require('./bidComplexity');
const bidTimeline = require('./bidTimeline');
const bidDependencies = require('./bidDependencies');
const bidMetrics = require('./bidMetrics');

class BidAnalyzer {
  analyzeBid(bidData = {}) {
    bidMetrics.recordAnalysis();
    const classification = bidClassifier.classifyBid(bidData);
    const complexity = bidComplexity.scoreComplexity(bidData);
    const timeline = bidTimeline.buildTimeline();
    const dependencies = bidDependencies.analyzeDependencies();

    return {
      classification,
      complexity,
      timeline,
      dependencies,
      metrics: bidMetrics.getMetrics()
    };
  }
}

module.exports = new BidAnalyzer();
