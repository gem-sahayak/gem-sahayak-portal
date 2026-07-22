'use strict';

const agentVoting = require('./agentVoting');
const collaborationMetrics = require('./collaborationMetrics');

class ConsensusEngine {
  reachConsensus(topic, votes = []) {
    collaborationMetrics.recordConsensus();
    const result = agentVoting.tallyVotes(votes.length ? votes : [
      { agentId: 'agent-seo', approve: true },
      { agentId: 'agent-graph', approve: true }
    ]);

    return {
      topic,
      consensusReached: result.approved,
      votingTally: result
    };
  }
}

module.exports = new ConsensusEngine();
