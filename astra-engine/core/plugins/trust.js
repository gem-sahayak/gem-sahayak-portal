'use strict';

const TRUST_LEVELS = {
  OFFICIAL: 'OFFICIAL',
  VERIFIED: 'VERIFIED',
  COMMUNITY: 'COMMUNITY',
  UNSIGNED: 'UNSIGNED',
  BLOCKED: 'BLOCKED'
};

class PluginTrustManager {
  /**
   * Resolves the trust level of a plugin based on manifest and verification metadata.
   */
  getTrustLevel(manifest, signatureValid = false) {
    if (!manifest) return TRUST_LEVELS.BLOCKED;
    if (manifest.trustLevel === TRUST_LEVELS.BLOCKED) return TRUST_LEVELS.BLOCKED;

    if (manifest.publisher === 'ASTRA Core Team' && signatureValid) {
      return TRUST_LEVELS.OFFICIAL;
    }

    if (signatureValid) {
      return TRUST_LEVELS.VERIFIED;
    }

    if (manifest.author && manifest.publisher) {
      return TRUST_LEVELS.COMMUNITY;
    }

    return TRUST_LEVELS.UNSIGNED;
  }

  isExecutionAllowed(trustLevel) {
    return trustLevel !== TRUST_LEVELS.BLOCKED;
  }
}

module.exports = {
  pluginTrustManager: new PluginTrustManager(),
  TRUST_LEVELS
};
