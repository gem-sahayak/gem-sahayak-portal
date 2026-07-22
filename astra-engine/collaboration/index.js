'use strict';

const taskNegotiation = require('./taskNegotiation');
const consensusEngine = require('./consensusEngine');
const conflictResolution = require('./conflictResolution');
const sharedPlanning = require('./sharedPlanning');
const sharedReasoning = require('./sharedReasoning');
const agentVoting = require('./agentVoting');
const collaborationMetrics = require('./collaborationMetrics');

module.exports = {
  taskNegotiation,
  consensusEngine,
  conflictResolution,
  sharedPlanning,
  sharedReasoning,
  agentVoting,
  collaborationMetrics
};
