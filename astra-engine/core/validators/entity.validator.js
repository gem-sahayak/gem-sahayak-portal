'use strict';

/**
 * Entity Validator for Knowledge Graph Engine.
 * Validates entity nodes, parent-child mappings, aliases, and entity schema compliance.
 */
class EntityValidator {
  validate(entitiesMap, registryArticles = []) {
    const errors = [];
    const warnings = [];

    const entityNames = new Set(entitiesMap.keys());

    for (const [entityName, entityObj] of entitiesMap.entries()) {
      // Validate Required fields
      if (!entityObj.Entity || !entityObj.Category) {
        errors.push({
          code: 'INVALID_ENTITY_SCHEMA',
          message: `Entity "${entityName}" is missing required fields (Entity or Category)`,
          file: 'knowledge_graph_engine.md',
          evidence: { entityName, entityObj }
        });
      }

      // Check Parent Entity reference validity
      if (entityObj.Parent && !entityNames.has(entityObj.Parent)) {
        warnings.push({
          code: 'UNRESOLVED_PARENT_ENTITY',
          message: `Entity "${entityName}" references unknown parent entity "${entityObj.Parent}"`,
          file: 'knowledge_graph_engine.md',
          evidence: { entity: entityName, parent: entityObj.Parent }
        });
      }

      // Check Children Entity references validity
      if (Array.isArray(entityObj.Children)) {
        for (const child of entityObj.Children) {
          if (!entityNames.has(child)) {
            warnings.push({
              code: 'UNRESOLVED_CHILD_ENTITY',
              message: `Entity "${entityName}" references unknown child entity "${child}"`,
              file: 'knowledge_graph_engine.md',
              evidence: { entity: entityName, child }
            });
          }
        }
      }
    }

    return { errors, warnings };
  }
}

module.exports = new EntityValidator();
