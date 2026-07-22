'use strict';

const decisionTrace = require('./decisionTrace');
const reasoningTrace = require('./reasoningTrace');
const evidenceTrace = require('./evidenceTrace');
const dependencyTrace = require('./dependencyTrace');
const timelineTrace = require('./timelineTrace');
const auditTrail = require('./auditTrail');
const explainabilityMetrics = require('./explainabilityMetrics');

class ExplanationEngine {
  explainRecommendation(recId = 'rec-1') {
    explainabilityMetrics.recordExplanation();
    auditTrail.recordAudit(`Explain recommendation ${recId}`);

    return {
      recId,
      decision: decisionTrace.traceDecision(recId),
      reasoning: reasoningTrace.traceReasoning(),
      evidence: evidenceTrace.traceEvidence(),
      dependency: dependencyTrace.traceDependencies(),
      timeline: timelineTrace.traceTimeline(),
      audit: auditTrail.getTrail()
    };
  }
}

module.exports = new ExplanationEngine();
