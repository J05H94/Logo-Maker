class Shape{
    constructor(shape, shapeColor, text, textColor){
        this.shape = shape;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    output() {
        console.log("Generated logo.svg")
    }
    printMetaData() {
        console.log(`This should have ${this.textColor} '${this.text}' text on a ${shapeColor} ${this.shape}.`);
    }
}

class Circle extends Shape {
    constructor(shape, shapeColor, text, textColor) {
      super(shape, shapeColor, text, textColor);
    }
    render(){
        return (`<svg id="circle" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        <text x="50%" y="50%" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`)
    }
}

class Triangle extends Shape {
    constructor(shape, shapeColor, text, textColor) {
      super(shape, shapeColor, text, textColor);
    }
    render(){
        return (`<svg id="triangle" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points = "100 30, 200 200, 0 200" x="150" y="125" fill="${this.shapeColor}" />
        <text x="33%" y="77%" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`)
    }
}

class Square extends Shape {
    constructor(shape, shapeColor, text, textColor) {
      super(shape, shapeColor, text, textColor);
    }
    render(){
        return (`<svg id="square" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="50" y="20" width="150" height="150" fill="${this.shapeColor}" />
        <text x="40%" y="50%" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`)
    }
}

function shapes(shape, shapeColor, text, textColor) {
    if(shape == "circle"){
        const circle = new Circle(shape, shapeColor, text, textColor)
        return circle.render()
    }
    else if(shape == "triangle"){
        const triangle = new Triangle(shape, shapeColor, text, textColor)
        return triangle.render()
    }
    else if(shape == "square"){
        const square = new Square(shape, shapeColor, text, textColor)
        return square.render()
    }
    else {
        return false;
    }
}

module.exports = shapes;