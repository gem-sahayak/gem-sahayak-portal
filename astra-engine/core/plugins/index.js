'use strict';

const loader = require('./loader');
const registry = require('./registry');
const sandbox = require('./sandbox');
const manifest = require('./manifest');

module.exports = {
  pluginLoader: loader,
  pluginRegistry: registry,
  pluginSandbox: sandbox,
  pluginManifestValidator: manifest
};
