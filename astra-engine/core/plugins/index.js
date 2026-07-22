'use strict';

const loader = require('./loader');
const registry = require('./registry');
const sandbox = require('./sandbox');
const manifest = require('./manifest');
const { pluginTrustManager, TRUST_LEVELS } = require('./trust');
const signatureVerifier = require('./signature');
const dependencyResolver = require('./dependency');
const versionManager = require('./version');
const pluginTelemetry = require('./telemetry');
const pluginReporter = require('./reporter');

module.exports = {
  pluginLoader: loader,
  pluginRegistry: registry,
  pluginSandbox: sandbox,
  pluginManifestValidator: manifest,
  pluginTrustManager,
  TRUST_LEVELS,
  signatureVerifier,
  dependencyResolver,
  versionManager,
  pluginTelemetry,
  pluginReporter
};
