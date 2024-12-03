const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const hostname = 'localhost';
const port = 1245;
const fileName = process.argv[2];
const app = createServer(async (req, res) => {
  const url = req.url;
  switch (url) {
    case '/students':
      res.write('This is the list of our students\n');
      try {
        const records = await countStudents(fileName);
        const students = records.students;
        res.write(`Number of students: ${records.totalStudents}\n`);
        for (const [key, value] of Object.entries(students)) {
          res.write(
            `Number of students in: ${key} ${value.length}. List: ${value.join(
              ', '
            )}\n`
          );
        }
        res.end();
      } catch (err) {
        console.log(err);
      }
      break;
    case '/':
      res.end('Hello Holberton School! \n');
      break;
  }
});

app.listen(port, hostname);
module.exports = app;
