const { createServer } = require('http');

const hostname = 'localhost';
const port = 1245;
const app = createServer((req, res) => {
  res.end('Hello Holberton School!');
});

app.listen(port, hostname, () => {});
module.exports = app;
