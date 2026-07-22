'use strict';

class BidDependencies {
  analyzeDependencies() {
    return { requiredCertificates: ['UDYAM_REGISTRATION', 'GST_CERTIFICATE', 'OEM_AUTHORIZATION'] };
  }
}

module.exports = new BidDependencies();
