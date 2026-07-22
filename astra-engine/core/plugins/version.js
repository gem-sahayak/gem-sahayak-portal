'use strict';

class PluginVersionManager {
  parseSemver(versionStr) {
    if (!versionStr || typeof versionStr !== 'string') return null;
    const parts = versionStr.split('.').map(n => parseInt(n, 10));
    if (parts.length !== 3 || parts.some(isNaN)) return null;
    return { major: parts[0], minor: parts[1], patch: parts[2] };
  }

  compareSemver(v1, v2) {
    const s1 = this.parseSemver(v1);
    const s2 = this.parseSemver(v2);

    if (!s1 || !s2) return 0;

    if (s1.major !== s2.major) return s1.major > s2.major ? 1 : -1;
    if (s1.minor !== s2.minor) return s1.minor > s2.minor ? 1 : -1;
    if (s1.patch !== s2.patch) return s1.patch > s2.patch ? 1 : -1;
    return 0;
  }

  validateEngineCompatibility(manifest, currentEngineVersion = '1.3.1') {
    const compat = manifest.engineCompatibility;
    if (!compat) return { compatible: true };

    const errors = [];
    if (compat.minVersion && this.compareSemver(currentEngineVersion, compat.minVersion) < 0) {
      errors.push(`Engine version ${currentEngineVersion} is lower than plugin minVersion ${compat.minVersion}`);
    }

    if (compat.maxVersion && this.compareSemver(currentEngineVersion, compat.maxVersion) > 0) {
      errors.push(`Engine version ${currentEngineVersion} exceeds plugin maxVersion ${compat.maxVersion}`);
    }

    return {
      compatible: errors.length === 0,
      errors
    };
  }
}

module.exports = new PluginVersionManager();
