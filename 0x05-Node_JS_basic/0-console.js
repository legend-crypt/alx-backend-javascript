/* prints in STDOUT the string argument */

function displayMessage(msg) {
  process.stdout.write(msg + '\n');
}

module.exports = displayMessage;
