// Create shape class with constructor

class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    setColor(color) {
        this.color = color;
     }
     setText(text) {
        this.text = text;
     }
     setTextColor(textColor) {
        this.textColor = textColor;
     }

}
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }
    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`
    }
}
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                 <rect width="200" height="200" fill="${this.shapeColor}"/>
                 <text x="100" y="100" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                 </svg>`
    }

}
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                 <polygon points="100, 15 200, 200 0, 200" fill="${this.shapeColor}"/>
                 <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
                </svg>`
    }
}

module.exports = {Circle, Square, Triangle};
