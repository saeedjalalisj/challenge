const chance = require('chance').Chance();

function createObject() {
  return {
    id: chance.integer({ min: 0 }),
    name: chance.name(),
    date: new Date().toISOString().split('T')[0],
    data: {
      id: chance.integer({ min: 0 }),
    },
    platform: chance.word(),
  };
}

module.exports = {
  createObject,
};
