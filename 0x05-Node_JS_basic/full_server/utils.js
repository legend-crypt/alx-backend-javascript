const { parse } = require('csv-parse/sync'); // Changed to sync parsing
const fs = require('node:fs/promises');

const readDatabase = async (fileName = '../database.csv') => {
  const all_records = {};
  let total_students = 0;

  try {
    const fileContent = await fs.readFile(fileName, { encoding: 'utf8' });
    const records = parse(fileContent, { delimiter: ',', columns: true });

    // Process the records
    for (const row of records) {
      const key = row.field; // Assuming 'field' is the column name for the field of study
      if (!all_records[key]) {
        all_records[key] = [];
      }
      all_records[key].push(row.firstname); // Assuming 'firstname' is the column for student names
      total_students += 1;
    }
    // Log the results
    return all_records;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = readDatabase;
