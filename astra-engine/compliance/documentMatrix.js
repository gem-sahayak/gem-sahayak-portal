'use strict';

class DocumentMatrix {
  mapDocuments() {
    return [
      { docType: 'PAN_CARD', status: 'VERIFIED', source: 'REGISTRY' },
      { docType: 'GST_RETURN', status: 'VERIFIED', source: 'REGISTRY' }
    ];
  }
}

module.exports = new DocumentMatrix();
