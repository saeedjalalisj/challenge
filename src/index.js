const { createDb } = require('./clickhouse');
const { createFile } = require('./create-json');

createDb().catch((e) => { throw new Error(e); });

createFile(1e7);
