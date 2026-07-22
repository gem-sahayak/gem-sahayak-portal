'use strict';

class EntityTwin {
  createTwin() {
    return {
      type: 'ENTITY_TWIN',
      entityDensity: 7,
      clusters: 5
    };
  }
}

module.exports = new EntityTwin();
