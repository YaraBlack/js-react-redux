// Class name starts with a capital letter
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() {
    return this.height * this.width;
  }
}

// Inheritance

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width); // calls parent's constructor. place on the first line of constructor
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, color: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, "Hello World", "red");

console.log(div.calcArea());
div.showMyProps();

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());
