'use strict';

const { schedulerEngine } = require('../scheduler');

async function runSchedulerTests() {
  console.log('=== RUNNING SCHEDULER ENGINE UNIT TESTS ===');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ FAIL: ${message}`);
      failed++;
    }
  }

  const job = schedulerEngine.scheduleJob('Audit Job', '0 0 * * *');
  assert(job.name === 'Audit Job', 'Schedules recurring cron jobs');

  const jobs = schedulerEngine.getJobs();
  assert(jobs.length >= 1, 'Lists active scheduled jobs');

  console.log(`\nScheduler Engine Unit Tests Summary: ${passed} passed, ${failed} failed.\n`);
  if (failed > 0) process.exit(1);
}

runSchedulerTests().catch(err => {
  console.error('Scheduler Engine Test Error:', err);
  process.exit(1);
});
