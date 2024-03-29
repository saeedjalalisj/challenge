require('dotenv').config();
const { createDb, insertToDb, streamQuery } = require('./clickhouse');
const { createCsvFile } = require('./create-csv');
const { benchmark } = require('./utils');
/**
 * This query calculate each name how many time occur
 * Also calculate percentage of occurrence
 * @type {string}
 */
const sql = `
    SELECT name,
       name_count,
       name_count / (SELECT max(name_count)
					 FROM (
									 SELECT name, count(*) AS name_count
									 FROM my_database.event
									 GROUP BY name
								 )
       ) AS percentage_name
		FROM (
					SELECT name, count(*) AS name_count
					FROM my_database.event
					GROUP BY name
					)
		ORDER BY name_count DESC`;

/**
 * main function of app
 */
(async function run() {
  try {
    await createDb();
    await benchmark(createCsvFile, 1e7);
    await benchmark(insertToDb);
    streamQuery(sql);
  } catch (e) {
    throw new Error(e);
  }
}());
