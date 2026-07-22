'use strict';

/**
 * Report Cards Widget.
 */
class ReportCardsWidget {
  renderSummary(reportsCount = 44) {
    return {
      totalReports: reportsCount,
      latestReportTimestamp: new Date().toISOString(),
      reportsFormat: 'JSON / Markdown'
    };
  }
}

module.exports = new ReportCardsWidget();
