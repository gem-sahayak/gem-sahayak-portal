'use strict';

class WorkflowValidator {
  validate(workflow) {
    const errors = [];
    if (!workflow.id) errors.push('Workflow missing id');
    if (!workflow.steps || !Array.isArray(workflow.steps)) errors.push('Workflow steps must be an array');
    return {
      valid: errors.length === 0,
      errors
    };
  }
}

module.exports = new WorkflowValidator();
