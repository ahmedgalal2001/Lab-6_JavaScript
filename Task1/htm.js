class Shape {
  constructor(name, sides, sideLength) {
    this.name = name || "square";
    // the number of sides
    this.sides = sides || 4;
    //the length of side
    this.sideLength = sideLength || 5;
  }
  calcPerimeter() {
    const perimeter = this.sides * this.sideLength;
    console.log(`Perimeter of ${this.name}: ${perimeter}`);
  }
}
const square = new Shape("Square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("Triangle", 3, 3);
triangle.calcPerimeter();