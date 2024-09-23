import Building from "./5-building.js";

const b = new Building(100);
console.log(b);
console.log(Object.getPrototypeOf(Building.prototype));
class TestBuilding extends Building {}
try {
  const T = new TestBuilding(200);
} catch (err) {
  console.log(err);
}
