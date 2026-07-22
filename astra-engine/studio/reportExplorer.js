'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Report Explorer.
 * Auto-discovers reports under reports/latest/, reports/releases/, and reports/cache/.
 */
class ReportExplorer {
  discoverReports(baseReportsDir) {
    const categories = ['latest', 'releases', 'cache'];
    const reportsMap = [];

    for (const cat of categories) {
      const catDir = path.join(baseReportsDir, cat);
      if (fs.existsSync(catDir)) {
        const files = fs.readdirSync(catDir);
        for (const file of files) {
          const filePath = path.join(catDir, file);
          const stat = fs.statSync(filePath);
          if (stat.isFile()) {
            reportsMap.push({
              name: file,
              category: cat,
              path: filePath,
              sizeBytes: stat.size,
              modifiedAt: stat.mtime.toISOString()
            });
          }
        }
      }
    }

    return reportsMap;
  }
}

module.exports = new ReportExplorer();
