const ClickHouse = require('@apla/clickhouse');

const clickHouse = new ClickHouse({ host: 'localhost' });

module.exports = {
  clickHouse,
};
