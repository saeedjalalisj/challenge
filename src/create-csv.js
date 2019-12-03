const fs = require('fs');
const { createObject } = require('./utils');

async function createCsvFile(size) {
  console.log('starting create file');
  const writeStream = fs.createWriteStream('data.csv');
  for (let i = 0; i <= size; i += 1) {
    const fakeObj = createObject();
    const isCanWrite = writeStream.write(`${fakeObj.id}, ${fakeObj.name}, ${fakeObj.date}, [${fakeObj.data.id}], ${fakeObj.platform}\n`);
    if (!isCanWrite) {
      // eslint-disable-next-line no-await-in-loop
      await new Promise((resolve) => writeStream.once('drain', resolve));
    }
    // last item of json don't need comma
  }
  writeStream.end(() => console.log('file created!'));
}

module.exports = {
  createCsvFile,
};
