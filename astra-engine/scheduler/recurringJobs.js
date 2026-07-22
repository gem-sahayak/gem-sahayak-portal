'use strict';

const jobRegistry = require('./jobs');

class RecurringJobs {
  addRecurringJob(name, cronExpr, handler) {
    const job = {
      id: `rec-${Math.random().toString(36).substring(2, 8)}`,
      name,
      cronExpr,
      type: 'RECURRING',
      nextRun: new Date(Date.now() + 3600000).toISOString()
    };
    jobRegistry.registerJob(job);
    return job;
  }
}

module.exports = new RecurringJobs();
