'use strict';

class ReleaseVersionManager {
  bumpVersion(currentVersion = '1.3.2', type = 'minor') {
    const parts = currentVersion.split('.').map(Number);
    let [major, minor, patch] = parts;

    if (type === 'major') {
      major += 1;
      minor = 0;
      patch = 0;
    } else if (type === 'minor') {
      minor += 1;
      patch = 0;
    } else if (type === 'patch') {
      patch += 1;
    }

    return `${major}.${minor}.${patch}`;
  }
}

module.exports = new ReleaseVersionManager();
