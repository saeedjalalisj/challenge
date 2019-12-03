const ClickHouse = require('@apla/clickhouse');

const clickHouse = new ClickHouse({ host: 'localhost' });

async function createDb() {
  await clickHouse.querying('CREATE DATABASE IF NOT EXISTS my_db');
  await clickHouse
    .querying('CREATE TABLE IF NOT EXISTS my_db.event (id String, name String, date Date, data Nested (id UInt32), platform String) ENGINE = MergeTree(date, (id, date), 8192)');
}

module.exports = {
  createDb,
  clickHouse,
};
