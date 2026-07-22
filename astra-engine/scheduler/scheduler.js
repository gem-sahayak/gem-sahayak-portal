'use strict';

const jobRegistry = require('./jobs');
const recurringJobs = require('./recurringJobs');
const schedulerMetrics = require('./schedulerMetrics');

class SchedulerEngine {
  constructor() {
    this.manifest = {
      name: 'Autonomous Scheduler Engine',
      version: '1.9.0',
      description: 'Manages cron jobs, timers, recurring execution schedules, and scheduler metrics'
    };
  }

  scheduleJob(name, cronExpr) {
    schedulerMetrics.recordSchedule();
    return recurringJobs.addRecurringJob(name, cronExpr);
  }

  getJobs() {
    return jobRegistry.listJobs();
  }
}

module.exports = SchedulerEngine;
