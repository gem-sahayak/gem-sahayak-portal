'use strict';

class WorkspaceTwin {
  createTwin() {
    return {
      type: 'WORKSPACE_TWIN',
      workspaceDir: 'gem-sahayak-portal',
      importGuardActive: true,
      pathGuardActive: true
    };
  }
}

module.exports = new WorkspaceTwin();
