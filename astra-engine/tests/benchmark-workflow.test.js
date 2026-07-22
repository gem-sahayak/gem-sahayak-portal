'use strict';

const workflowRunner = require('../workflow/workflowRunner');
const ruleCompiler = require('../rules/ruleCompiler');
const expressionEvaluator = require('../rules/expressionEvaluator');
const publisher = require('../events/publish');

async function runWorkflowBenchmark() {
  console.log('=== RUNNING WORKFLOW INTELLIGENCE STRESS BENCHMARK (1,000 WORKFLOWS, 10,000 RULES, 100,000 EVENTS SCALE) ===\n');

  const t0 = Date.now();

  // 1. Run 1,000 workflows
  for (let i = 1; i <= 1000; i++) {
    await workflowRunner.runWorkflow({ id: `wf-${i}`, steps: ['stepA', 'stepB'] });
  }

  // 2. Evaluate 10,000 rules
  const context = { score: 95, errors: 0 };
  for (let i = 1; i <= 10000; i++) {
    const compiled = ruleCompiler.compile({ id: `r-${i}`, condition: 'score > 80', action: 'PASS' });
    expressionEvaluator.evaluate(compiled.parsedCondition, context);
  }

  // 3. Publish 100,000 events
  for (let i = 1; i <= 100000; i++) {
    publisher.publish('BENCHMARK_EVENT', { id: i });
  }

  const durationMs = Date.now() - t0;

  console.log(`  - Workflows Executed : 1,000 items`);
  console.log(`  - Rules Evaluated    : 10,000 items`);
  console.log(`  - Events Processed   : 100,000 items`);
  console.log(`  - Execution Time     : ${durationMs} ms (Target: < 1000 ms)\n`);

  if (durationMs >= 1000) {
    console.error(`❌ STRESS BENCHMARK FAILED: Took ${durationMs} ms (Limit: 1000 ms)`);
    process.exit(1);
  }

  console.log('✅ WORKFLOW INTELLIGENCE STRESS BENCHMARK PASSED UNDER 1000 MS!\n');
}

runWorkflowBenchmark().catch(err => {
  console.error('Workflow Benchmark Error:', err);
  process.exit(1);
});
