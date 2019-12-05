const fs = require('fs');
const { chanceFactory } = require('./utils');

async function createCsvFile(size) {
  console.log('create file -> start');
  const writeStream = fs.createWriteStream('data.csv');
  for (let i = 0; i <= size; i += 1) {
    const fakeObj = chanceFactory();
    const isCanWrite = writeStream.write(
      `${fakeObj.id}, ${fakeObj.name}, ${fakeObj.date}, [${fakeObj.data.id}], ${fakeObj.platform}\n`,
    );
    if (!isCanWrite) {
      await new Promise((resolve) => writeStream.once('drain', resolve));
    }
  }
  writeStream.end(() => console.log('file created!'));
}

module.exports = {
  createCsvFile,
};
