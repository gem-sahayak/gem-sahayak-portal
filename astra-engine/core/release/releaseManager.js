'use strict';

const fs = require('fs');
const path = require('path');
const gitMetadata = require('./gitMetadata');
const releaseNotes = require('./releaseNotes');
const versionManager = require('./versionManager');
const { validateReportPath } = require('../guards/pathGuard');

const RELEASES_DIR = path.resolve(__dirname, '../../reports/releases');

class ReleaseManager {
  generateReleasePackage(version = '1.4.0', tag = 'astra-engine-v1.4.0-phase4B.4') {
    const commitHash = gitMetadata.getLatestCommitHash();
    const commits = gitMetadata.getRecentCommits(10);
    const mdNotes = releaseNotes.generateNotes(version, tag, commits);

    const jsonRelease = {
      releaseVersion: version,
      releaseTag: tag,
      commitHash,
      generatedAt: new Date().toISOString(),
      commits,
      notes: mdNotes
    };

    const htmlRelease = `<!DOCTYPE html><html><head><title>ASTRA Release v${version}</title></head><body><pre>${mdNotes}</pre></body></html>`;

    const jsonPath = validateReportPath(path.join(RELEASES_DIR, 'release.json'));
    const mdPath = validateReportPath(path.join(RELEASES_DIR, 'release.md'));
    const htmlPath = validateReportPath(path.join(RELEASES_DIR, 'release.html'));
    const summaryPath = validateReportPath(path.join(RELEASES_DIR, 'release-summary.json'));

    const dir = path.dirname(jsonPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    fs.writeFileSync(jsonPath, JSON.stringify(jsonRelease, null, 2), 'utf8');
    fs.writeFileSync(mdPath, mdNotes, 'utf8');
    fs.writeFileSync(htmlPath, htmlRelease, 'utf8');
    fs.writeFileSync(summaryPath, JSON.stringify({ version, tag, commitHash, status: 'SUCCESS' }, null, 2), 'utf8');

    return { jsonPath, mdPath, htmlPath, summaryPath };
  }
}

module.exports = new ReleaseManager();
