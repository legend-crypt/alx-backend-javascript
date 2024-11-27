const express = require('express');
const app = express();
const countStudents = require('./3-read_file_async');
const fileName = process.argv[2];
const port = 1245;
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  try {
    const records = await countStudents(fileName);
    const { totalStudents, students } = records;
    res.write(`Number of total students: ${totalStudents}`);
    for (const [key, value] of Object.entries(students)) {
      res.write(`Number of student in ${key}. List: ${value.join(', ')} \n`);
    }
    res.end();
  } catch (err) {
    throw err;
  }
});
app.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
module.exports = app;
