'use strict';

class AuditTrail {
  constructor() {
    this.trail = [];
  }

  recordAudit(action, actor = 'ASTRA Engine') {
    this.trail.push({
      action,
      actor,
      timestamp: new Date().toISOString()
    });
  }

  getTrail() {
    return this.trail;
  }
}

module.exports = new AuditTrail();
