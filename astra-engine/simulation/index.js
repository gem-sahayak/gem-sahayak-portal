'use strict';

const SimulationEngine = require('./simulationEngine');
const scenarioRunner = require('./scenarioRunner');
const sandboxRuntime = require('./sandboxRuntime');
const virtualExecutor = require('./virtualExecutor');
const executionReplay = require('./executionReplay');
const executionTimeline = require('./executionTimeline');
const executionHistory = require('./executionHistory');
const simulationMetrics = require('./simulationMetrics');
const simulationValidator = require('./simulationValidator');
const simulationSerializer = require('./simulationSerializer');

const defaultEngine = new SimulationEngine();

module.exports = {
  simulationEngine: defaultEngine,
  SimulationEngine,
  scenarioRunner,
  sandboxRuntime,
  virtualExecutor,
  executionReplay,
  executionTimeline,
  executionHistory,
  simulationMetrics,
  simulationValidator,
  simulationSerializer
};
