const ClickHouse = require('@apla/clickhouse');
const fs = require('fs');
const util = require('util');
const stream = require('stream');

const pipeline = util.promisify(stream.pipeline);

const clickHouse = new ClickHouse({ host: 'localhost' });

async function createDb() {
  await clickHouse.querying('CREATE DATABASE IF NOT EXISTS my_database');
  await clickHouse
    .querying('CREATE TABLE IF NOT EXISTS my_database.event (id String, name String, date Date, data Nested (id UInt32), platform String) ENGINE = MergeTree(date, (id, date), 8192)');
}

async function insertToDb() {
  const readStream = fs.createReadStream('data.csv');
  const clickHouseStream = clickHouse.query('INSERT INTO my_database.event FORMAT CSV');
  await pipeline(readStream, clickHouseStream);
}

module.exports = {
  createDb,
  insertToDb,
};
