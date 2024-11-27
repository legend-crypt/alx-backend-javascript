const { spawn } = require('node:child_process');


(function () {
	const childProcess = spawn('wc', ['-w']);  // Word count command

// Pipe data to the child process's stdin
process.stdin.pipe(childProcess.stdin);

childProcess.stdout.on('data', (data) => {
  console.log(`Word count: ${data}`);
});
})();