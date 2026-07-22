'use strict';

const ExplorerEngine = require('./explorerEngine');
const graphBuilder = require('./graphBuilder');
const nodeFactory = require('./nodeFactory');
const edgeFactory = require('./edgeFactory');
const entityExplorer = require('./entityExplorer');
const keywordExplorer = require('./keywordExplorer');
const documentExplorer = require('./documentExplorer');
const clusterExplorer = require('./clusterExplorer');
const pluginExplorer = require('./pluginExplorer');
const dependencyExplorer = require('./dependencyExplorer');
const relationshipExplorer = require('./relationshipExplorer');
const filtersEngine = require('./filters');
const searchEngine = require('./search');
const graphSerializer = require('./graphSerializer');
const graphMetrics = require('./graphMetrics');

const defaultExplorer = new ExplorerEngine();

module.exports = {
  explorerEngine: defaultExplorer,
  ExplorerEngine,
  graphBuilder,
  nodeFactory,
  edgeFactory,
  entityExplorer,
  keywordExplorer,
  documentExplorer,
  clusterExplorer,
  pluginExplorer,
  dependencyExplorer,
  relationshipExplorer,
  filtersEngine,
  searchEngine,
  graphSerializer,
  graphMetrics
};
