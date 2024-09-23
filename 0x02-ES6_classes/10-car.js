/**Implement a class named Car:

Constructor attributes:
brand (String)
motor (String)
color (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Add a method named cloneCar. This method should return a new object of the class.
Hint: Symbols in ES6 */

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    if (typeof newBrand !== "string") {
      throw TypeError("Brand must be a string");
    }

    this._brand = newBrand;
  }

  get motor() {
    return this._motor;
  }

  set motor(newMotor) {
    if (typeof newMotor !== "string") {
      throw TypeError("Motor must be a string");
    }

    this._motor = newMotor;
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    if (typeof newColor !== "string") {
      throw TypeError("Color must be a string");
    }

    this._color = newColor;
  }

  cloneCar() {
    return Symbol(this._brand, this._motor, this._color);
  }
}
