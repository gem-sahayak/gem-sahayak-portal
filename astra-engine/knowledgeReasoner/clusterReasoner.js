'use strict';

class ClusterReasoner {
  reasonOverClusters() {
    return { activeClusters: 5, healthiestCluster: 'compliance-policy' };
  }
}

module.exports = new ClusterReasoner();
