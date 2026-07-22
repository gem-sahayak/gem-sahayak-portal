'use strict';

/**
 * Issue Cards Widget.
 */
class IssueCardsWidget {
  renderIssues(issues = []) {
    return issues.map(i => ({
      id: i.id || 'ISSUE-01',
      severity: i.severity || 'WARNING',
      message: i.message || i.description,
      recommendation: i.recommendation
    }));
  }
}

module.exports = new IssueCardsWidget();
