'use strict';

class ExecutionAnimationVisualizer {
  renderAnimation() {
    return { type: 'EXECUTION_ANIMATION', frameCount: 10, fps: 30 };
  }
}

module.exports = new ExecutionAnimationVisualizer();
