/**Implement a class named Airport:

Constructor attributes:
name (String)
code (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
The default string description of the class should return the airport code (example below). */

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== "string") {
      throw TypeError("Name must be a string");
    }

    this._name = newName;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== "string") {
      throw TypeError("Code must be a string");
    }

    this._code = newCode;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
