const chance = require('chance').Chance();

/**
 * function to create fake object
 * @returns {{date: string, data: {id: *}, name: *, id: *, platform: *}}
 */
function chanceFactory() {
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

/**
 *
 * @param fn pass function to check excution time
 * @param params pass fn argument
 * @returns {Promise<void>}
 */
async function benchmark(fn, ...params) {
  const start = new Date();
  const hrstart = process.hrtime();
  await fn(...params);
  const end = new Date() - start;
  const hrend = process.hrtime(hrstart);
  console.info(`Execution time -> ${fn.name} : %dms`, end);
  console.info(`Execution time -> ${fn.name} (hr) %ds  %dms`, hrend[0], hrend[1] / 1000000);
}

module.exports = {
  chanceFactory,
  benchmark,
};
