'use strict';

class BidComplexity {
  scoreComplexity(bidData = {}) {
    return { score: 45, level: 'MEDIUM', parameters: ['EMD_REQUIRED', 'TURNOVER_SLAB_50L'] };
  }
}

module.exports = new BidComplexity();
