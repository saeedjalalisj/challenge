const fs = require('fs');
const chance = require('chance').Chance();

function createObject() {
  return {
    id: chance.string(),
    name: chance.name(),
    date: chance.date(),
    data: {
      id: chance.integer({ min: 0 }),
    },
    platform: chance.string(),
  };
}

async function createFile(size) {
  const wstream = fs.createWriteStream('./data.json');
  wstream.write('[ \n');
  for (let i = 0; i <= size; i += 1) {
    if (!wstream.write(`${JSON.stringify(createObject())} , \n`)) {
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => wstream.once('drain', resolve));
    }
    wstream.write(`${JSON.stringify(createObject())} , \n`);
  }
  wstream.write(']');
  wstream.end(() => console.log('finished!'));
}

module.exports = {
  createFile,
};
