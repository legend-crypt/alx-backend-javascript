const readDatabase = require('../utils');
class StudentController {
  /**
   * Retrieves and sends a list of all students.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {Promise<void>} - A promise that resolves when the operation is complete.
   * @throws {Error} - If there is an error reading the database.
   */
  static async getAllStudents(req, res) {
    try {
      const query = await readDatabase();
      let response = 'This is the list of our students \n';
      for (const [key, values] of Object.entries(query)) {
        response += `Number of students in ${key}: ${
          values.length
        }. List: ${values.sort().join(', ')}\n`;
      }
      return res.status(200).send(response.trim());
    } catch (e) {
      return res.status(500).send('Cannot load the database');
    }
  }

  /**
   * Retrieves all students by major.
   *
   * @param {Object} req - The request object.
   * @param {Object} req.params - The parameters from the request.
   * @param {string} req.params.major - The major to filter students by (must be 'CS' or 'SWE').
   * @param {Object} res - The response object.
   *
   * @returns {Promise<void>} - A promise that resolves when the operation is complete.
   *
   * @throws {Error} - If the major parameter is not 'CS' or 'SWE'.
   * @throws {Error} - If there is an error reading the database.
   */
  static async getAllStudentsByMajor(req, res) {
    const field = req.params.major;
    if (field !== 'CS' && field !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const query = await readDatabase();
      const queryData = query[field];
      return res.status(200).send(`List: ${queryData.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
      return;
    }
  }
}

module.exports = StudentController;
