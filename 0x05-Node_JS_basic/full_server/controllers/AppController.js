/**
 * Controller class for handling application routes.
 */
class AppController {
  /**
   * Handles the request for the home page.
   *
   * @param {Object} req - The request object.
   * @param {Object} res - The response object.
   * @returns {void}
   */
  static getHomePage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
