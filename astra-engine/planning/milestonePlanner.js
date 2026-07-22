'use strict';

class MilestonePlanner {
  getMilestones() {
    return [
      { id: 'm1', name: 'Filesystem Verification', status: 'ACHIEVED' },
      { id: 'm2', name: 'SEO & Knowledge Graph Synced', status: 'ACHIEVED' }
    ];
  }
}

module.exports = new MilestonePlanner();
