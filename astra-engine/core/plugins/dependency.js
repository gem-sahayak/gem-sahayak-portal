'use strict';

class PluginDependencyResolver {
  /**
   * Performs O(V+E) topological sort and validates dependency requirements across plugins.
   */
  resolveExecutionOrder(pluginsMap) {
    const sorted = [];
    const visited = new Set();
    const visiting = new Set();
    const errors = [];

    const pluginIds = Array.from(pluginsMap.keys());

    function visit(id, ancestorStack = []) {
      if (visiting.has(id)) {
        errors.push(`Circular dependency detected: ${[...ancestorStack, id].join(' -> ')}`);
        return;
      }

      if (!visited.has(id)) {
        visiting.add(id);
        const record = pluginsMap.get(id);

        if (record && record.manifest) {
          const deps = record.manifest.dependencies || {};
          for (const depId of Object.keys(deps)) {
            if (!pluginsMap.has(depId)) {
              errors.push(`Plugin "${id}" missing required dependency "${depId}"`);
            } else {
              visit(depId, [...ancestorStack, id]);
            }
          }
        }

        visiting.delete(id);
        visited.add(id);
        sorted.push(id);
      }
    }

    for (const id of pluginIds) {
      if (!visited.has(id)) {
        visit(id);
      }
    }

    return {
      order: sorted,
      valid: errors.length === 0,
      errors
    };
  }
}

module.exports = new PluginDependencyResolver();
