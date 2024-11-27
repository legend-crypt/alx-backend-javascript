const fs = require('fs');
const { parse } = require('csv-parse/sync'); // Note the '/sync' here

function countStudents(fileName) {
  const all_records = {};
  let total_students = 0;

  try {
    // Read the entire file synchronously
    const fileContent = fs.readFileSync(fileName, 'utf8');

    // Parse the CSV content synchronously
    const records = parse(fileContent, { delimiter: ',', from_line: 2 });

    // Process the records
    for (const row of records) {
      const key = row[row.length - 1];
      if (!all_records[key]) {
        all_records[key] = [];
      }
      all_records[key].push(row[0]);
      total_students += 1;
    }

    // Log the results
    console.log(`Number of Students: ${total_students}`);
    Object.entries(all_records).forEach(([key, value]) => {
      console.log(
        `Number of students in ${key}: ${value.length}. List: ${value.join(
          ', '
        )}`
      );
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
