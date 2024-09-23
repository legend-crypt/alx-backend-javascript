export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this !== Building && this.evacuationWarningMessage === undefined) {
      throw Error(
        "Class extending Building must override evacuationWarningMessage"
      );
    }
  }
  evacuationWarningMessage() {
    throw Error('Method "evacuationWarningMessage" must be implemented');
  }

  get sqft() {
    return this._sqft;
  }
  set sqft(sqft) {
    this._sqft = sqft;
  }
}
