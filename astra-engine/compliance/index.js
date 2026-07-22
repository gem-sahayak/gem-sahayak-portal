'use strict';

const eligibilityEngine = require('./eligibilityEngine');
const qualificationMatrix = require('./qualificationMatrix');
const documentMatrix = require('./documentMatrix');
const riskCompliance = require('./riskCompliance');
const complianceHistory = require('./complianceHistory');
const complianceMetrics = require('./complianceMetrics');

module.exports = {
  eligibilityEngine,
  qualificationMatrix,
  documentMatrix,
  riskCompliance,
  complianceHistory,
  complianceMetrics
};
