'use strict';

const fs = require('fs');
const path = require('path');

/**
 * ASTRA Engine — Reporter Path Guard
 * 
 * Ensures all report writes are confined to astra-engine/reports/.
 * Any attempt to write outside this directory throws ReporterPathViolationError.
 */

const ASTRA_ENGINE_ROOT = path.resolve(__dirname, '../..');
const ALLOWED_REPORTS_DIR = path.resolve(ASTRA_ENGINE_ROOT, 'reports');

class ReporterPathViolationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ReporterPathViolationError';
  }
}

/**
 * Validates that a target output path resolves to within astra-engine/reports/.
 * Throws ReporterPathViolationError if the path escapes the allowed directory.
 *
 * @param {string} outputPath - The output file path to validate.
 * @returns {string} The resolved absolute path if valid.
 */
function validateReportPath(outputPath) {
  const resolvedPath = path.resolve(outputPath);
  const normalizedResolved = resolvedPath.replace(/\\/g, '/');
  const normalizedAllowed = ALLOWED_REPORTS_DIR.replace(/\\/g, '/');

  if (!normalizedResolved.startsWith(normalizedAllowed + '/') && normalizedResolved !== normalizedAllowed) {
    throw new ReporterPathViolationError(
      `Write blocked: Output path "${outputPath}" resolves to "${resolvedPath}" which is OUTSIDE the allowed directory "${ALLOWED_REPORTS_DIR}". ASTRA reports may only be written to astra-engine/reports/.`
    );
  }

  return resolvedPath;
}

module.exports = {
  validateReportPath,
  ReporterPathViolationError,
  ALLOWED_REPORTS_DIR,
};
