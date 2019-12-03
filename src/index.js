const { createDb, insertToDb } = require('./clickhouse');
const { createCsvFile } = require('./create-csv');

(async function run() {
  try {
    await createDb();
    await createCsvFile(1e7);
    await insertToDb();
  } catch (e) {
    throw new Error(e);
  }
}());
