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


class Square extends Shape {
  constructor(sideLength){
    super("square",4,sideLength || 5);
  }
  calcArea(){
    console.log(`Area of ${this.name}: ${this.sideLength * this.sideLength}`);
  }
}


let square1 = new Square(12);
square1.calcArea();
square1.calcPerimeter();