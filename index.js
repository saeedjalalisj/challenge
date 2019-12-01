const { createDb } = require('./clickhouse');

createDb().catch((e) => { throw new Error(e); });
