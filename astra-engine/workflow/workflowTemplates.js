'use strict';

class WorkflowTemplates {
  getTemplates() {
    return [
      {
        id: 'wf-full-repo-audit',
        name: 'Full Repository SEO & Knowledge Audit',
        steps: ['scan', 'seo', 'graph', 'review', 'semantic', 'optimize', 'knowledge', 'dashboard']
      },
      {
        id: 'wf-content-optimization',
        name: 'Content Optimization & Internal Link Plan',
        steps: ['seo', 'semantic', 'optimize']
      }
    ];
  }
}

module.exports = new WorkflowTemplates();
