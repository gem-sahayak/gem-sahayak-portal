'use strict';

const factEngine = require('./factEngine');
const assumptionEngine = require('./assumptionEngine');
const constraintEngine = require('./constraintEngine');
const evidenceCollector = require('./evidenceCollector');
const confidenceModel = require('./confidenceModel');
const ReasoningGraph = require('./reasoningGraph');

class ReasoningSession {
  startSession(state = {}) {
    const facts = factEngine.collectFacts(state);
    const assumptions = assumptionEngine.getAssumptions();
    const constraints = constraintEngine.evaluateConstraints();
    const evidence = evidenceCollector.collectEvidence();
    const confidence = confidenceModel.calculateScore(evidence);

    const graph = new ReasoningGraph();
    facts.forEach(f => graph.addNode(f.id, 'FACT', f.value));
    constraints.forEach(c => graph.addNode(c.id, 'CONSTRAINT', c.name));

    return {
      facts,
      assumptions,
      constraints,
      evidence,
      confidenceScore: confidence,
      graphData: graph.getGraph()
    };
  }
}

module.exports = new ReasoningSession();
