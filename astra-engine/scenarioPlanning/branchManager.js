'use strict';

class BranchManager {
  createBranch(branchName = 'branch-parallel') {
    return { branchId: `br-${Math.random().toString(36).substring(2, 8)}`, branchName, active: true };
  }
}

module.exports = new BranchManager();
