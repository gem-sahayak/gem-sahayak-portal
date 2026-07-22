'use strict';

class QualificationMatrix {
  buildMatrix() {
    return {
      turnoverRequired: '50L INR',
      experienceYears: 3,
      certifications: ['ISO_9001_2015', 'MSME_UDYAM']
    };
  }
}

module.exports = new QualificationMatrix();
