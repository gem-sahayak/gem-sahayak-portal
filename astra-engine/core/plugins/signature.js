'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class PluginSignatureVerifier {
  calculateChecksum(filePath) {
    try {
      if (!fs.existsSync(filePath)) return null;
      const buffer = fs.readFileSync(filePath);
      return crypto.createHash('sha256').update(buffer).digest('hex');
    } catch (e) {
      return null;
    }
  }

  verifyChecksum(filePath, expectedChecksum) {
    if (!expectedChecksum) return true; // No checksum requirement specified
    const calculated = this.calculateChecksum(filePath);
    return calculated === expectedChecksum;
  }

  verifySignature(pluginDir) {
    const sigPath = path.join(pluginDir, 'signature.sig');
    const pemPath = path.join(pluginDir, 'publisher.pem');
    const indexFsPath = path.join(pluginDir, 'index.js');

    if (!fs.existsSync(sigPath) || !fs.existsSync(pemPath) || !fs.existsSync(indexFsPath)) {
      return { verified: false, reason: 'Missing signature, PEM key, or entry index.js' };
    }

    try {
      const indexContent = fs.readFileSync(indexFsPath);
      const signature = fs.readFileSync(sigPath);
      const publicKey = fs.readFileSync(pemPath, 'utf8');

      const verifier = crypto.createVerify('SHA256');
      verifier.update(indexContent);
      const verified = verifier.verify(publicKey, signature);

      return {
        verified,
        reason: verified ? 'Signature valid' : 'Signature verification failed'
      };
    } catch (e) {
      return { verified: false, reason: `Signature error: ${e.message}` };
    }
  }
}

module.exports = new PluginSignatureVerifier();
