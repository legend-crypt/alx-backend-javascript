const { parse } = require('csv-parse/sync'); // Changed to sync parsing
const fs = require('node:fs/promises');

const countStudents = async (fileName) => {
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
    process.stdout.write(`Number of Students: ${total_students} \n`);
    for (const [key, value] of Object.entries(all_records)) {
      process.stdout.write(
        `Number of students in ${key}: ${value.length}. List: ${value.join(
          ', '
        )}\n`
      );
    }
    return {
      totalStudents: total_students,
      students: all_records,
    };
  } catch (err) {
    console.error(err);
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
