const { createDb, insertToDb, streamQuery } = require('./clickhouse');
const { createCsvFile } = require('./create-csv');
const { benchmark } = require('./utils');

(async function run() {
  try {
    await createDb();
    await benchmark(createCsvFile, 1e7);
    await benchmark(insertToDb);
    streamQuery('SELECT * FROM my_database.event LIMIT 1000000');
  } catch (e) {
    throw new Error(e);
  }
}());
