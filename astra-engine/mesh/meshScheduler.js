'use strict';

class MeshScheduler {
  scheduleTasks(tasks = []) {
    return tasks.map(t => ({ task: t, status: 'SCHEDULED' }));
  }
}

module.exports = new MeshScheduler();
