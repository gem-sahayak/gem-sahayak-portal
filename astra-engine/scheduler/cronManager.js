'use strict';

class CronManager {
  parseCron(expr = '* * * * *') {
    const parts = expr.split(/\s+/);
    return {
      minute: parts[0] || '*',
      hour: parts[1] || '*',
      dayOfMonth: parts[2] || '*',
      month: parts[3] || '*',
      dayOfWeek: parts[4] || '*'
    };
  }
}

module.exports = new CronManager();
