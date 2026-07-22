'use strict';

class RelationshipReasoner {
  reasonOverRelationships() {
    return { shortestPathFound: true, pathLength: 3 };
  }
}

module.exports = new RelationshipReasoner();
