'use strict';

const sandboxRuntime = require('./sandboxRuntime');
const virtualExecutor = require('./virtualExecutor');
const executionTimeline = require('./executionTimeline');
const simulationMetrics = require('./simulationMetrics');
const executionHistory = require('./executionHistory');

class ScenarioRunner {
  runDryRun(scenario = { id: 'default-dryrun', steps: ['scan', 'validate', 'audit'] }) {
    const sandbox = sandboxRuntime.createSandbox();
    const results = [];
    let offset = 0;

    for (const step of scenario.steps) {
      const res = virtualExecutor.executeVirtually(step, sandbox);
      offset += 10;
      executionTimeline.recordEvent(offset, `Executed ${step}`, res);
      results.push(res);
    }

    sandboxRuntime.takeSnapshot(sandbox);
    simulationMetrics.recordRun(scenario.steps.length);
    executionHistory.record({ scenarioId: scenario.id, stepCount: scenario.steps.length });

    return {
      scenarioId: scenario.id,
      status: 'DRY_RUN_SUCCESS',
      sandboxId: sandbox.id,
      results,
      timeline: executionTimeline.getTimeline()
    };
  }
}

module.exports = new ScenarioRunner();
