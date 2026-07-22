'use strict';

class ReleaseNotesGenerator {
  generateNotes(version = '1.4.0', tag = 'astra-engine-v1.4.0-phase4B.4', commits = []) {
    const lines = [];

    lines.push(`# ASTRA ENGINE RELEASE NOTES — v${version}`);
    lines.push(`**Release Tag:** \`${tag}\``);
    lines.push(`**Release Date:** ${new Date().toISOString().split('T')[0]}`);
    lines.push(`**Engine Version:** \`${version}\`\n`);

    lines.push(`## 🚀 Key Highlights & New Capabilities`);
    lines.push(`- **Enterprise DevOps Platform (Phase 4B.4):** Automated GitHub Actions CI/CD pipelines, release note automation, changelog generation, build verification, and artifact package exporter.`);
    lines.push(`- **100% Backward Compatibility:** Zero breaking changes to Phase 1-4B primitives.\n`);

    lines.push(`## 📜 Categorized Changes`);
    lines.push(`### Added`);
    lines.push(`- GitHub Actions CI Quality Gate (\`.github/workflows/astra-ci.yml\`).`);
    lines.push(`- GitHub Actions Automated Release Pipeline (\`.github/workflows/astra-release.yml\`).`);
    lines.push(`- Release Automation Engine (\`core/release/\`).`);
    lines.push(`- Build Verification Engine (\`core/build/\`).`);
    lines.push(`- DevOps CLI commands: \`release\`, \`changelog\`, \`build\`, \`verify\`, \`ci\`, \`version\`, \`artifacts\`.\n`);

    lines.push(`### Security`);
    lines.push(`- Preserved strict Observer-Only read-only boundaries.`);
    lines.push(`- PathGuard and ImportGuard active across all DevOps pipelines.\n`);

    lines.push(`## 📝 Commit Logs`);
    for (const c of commits) {
      lines.push(`- \`${c}\``);
    }

    return lines.join('\n');
  }
}

module.exports = new ReleaseNotesGenerator();
