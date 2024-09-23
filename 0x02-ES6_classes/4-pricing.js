import Currency from "./3-currency.js";

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }
  get currency() {
    return this._currency;
  }
  set amount(amount) {
    if (typeof amount === "number") this._amount = amount;
    else {
      throw TypeError("amount must be a number");
    }
  }
  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    } else {
      throw TypeError("currency must be an instance of Currency");
    }
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }
  static convertPrice(amount, conversionRate) {
    if (typeof amount === "number" && typeof conversionRate === "number")
      return amount * conversionRate;
    else {
      throw TypeError("amount and convertRate must be a number");
    }
  }
}
