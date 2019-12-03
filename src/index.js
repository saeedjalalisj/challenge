const { createDb, insertToDb } = require('./clickhouse');
const { createCsvFile } = require('./create-csv');
const { benchmark } = require('./utils');

(async function run() {
  try {
    await createDb();
    await benchmark(createCsvFile, 1e7);
    await benchmark(insertToDb);
  } catch (e) {
    throw new Error(e);
  }
}());
