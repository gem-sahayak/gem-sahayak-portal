'use strict';

class BidClassifier {
  classifyBid(bidData = {}) {
    return { type: 'CUSTOM_BID_SERVICE', category: 'IT_CONSULTING', layout: 'L1_EVALUATION' };
  }
}

module.exports = new BidClassifier();
