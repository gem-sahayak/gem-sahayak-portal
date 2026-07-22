'use strict';

class JobRegistry {
  constructor() {
    this.jobs = new Map();
  }

  registerJob(job) {
    this.jobs.set(job.id, job);
  }

  listJobs() {
    return Array.from(this.jobs.values());
  }
}

module.exports = new JobRegistry();
