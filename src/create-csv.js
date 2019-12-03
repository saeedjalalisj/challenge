const fs = require('fs');
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

async function createFile(size) {
  const wstream = fs.createWriteStream('data.csv');
  for (let i = size; i >= 0; i -= 1) {
    const fakeObj = createObject();
    if (!wstream.write(`${fakeObj.id}, ${fakeObj.name}, ${fakeObj.date}, [${fakeObj.data.id}], ${fakeObj.platform}\n`)) {
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => wstream.once('drain', resolve));
    }
    wstream.write(`${fakeObj.id}, ${fakeObj.name}, ${fakeObj.date}, [${fakeObj.data.id}], ${fakeObj.platform}\n`);
    // last item of json don't need comma
  }
  wstream.end(() => console.log('finished!'));
}

module.exports = {
  createFile,
};
