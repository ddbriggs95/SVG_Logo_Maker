const {Circle, Square, Triangle} = require("./shapes.js")

//tests for properties and rendering for Square shape
describe('Square Tests', () => {
    test('will return correct properties of the square', () => {
        const shape = new Square('red', 'XXX', 'blue');
        //console.log(shape)
        expect(shape).toEqual({ shapeColor: 'red', text: 'XXX', textColor: 'blue' })
    })
    test('will return the correct render for the square', () => {
        const shape = new Square('yellow', 'DDD', 'black');
        const text = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="yellow"/>
        <text x="100" y="100" font-size="70" text-anchor="middle" fill="black">DDD</text>
        </svg>`;
        //console.log(shape.render())
        expect(shape.render()).toEqual(text);
    })

})
//tests for properties and rendering for Circle shape
describe('Circle Tests', () => {
    test('will return correct properties of the circle', () => {
        const shape = new Circle('blue', 'OOO', 'white');
        expect(shape).toEqual({ shapeColor: 'blue', text: 'OOO', textColor: 'white'})
    })
    test('will return the correct render for the circle', () => {
        const shape = new Circle('black', 'FFF', 'purple');
        console.log(shape.render());
        const text = `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="black"/>
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="purple">FFF</text>
        </svg>`
        expect(shape.render()).toEqual(text);
    })

})
//tests for properties and rendering for Triangle shape
describe('Triangle Tests', () => {
    test('will return correct properties of the triangle', () => {
        const shape = new Triangle('yellow', 'PPP', 'white');
        expect(shape).toEqual({ shapeColor: 'yellow', text: 'PPP', textColor: 'white'})
    })
    test('will return the correct render for the triangle', () => {
        const shape = new Triangle('purple', 'AAA', 'black')
        console.log(shape.render());
        const text = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100, 15 200, 200 0, 200" fill="purple"/>
        <text x="100" y="185" font-size="70" text-anchor="middle" fill="black">AAA</text>
        </svg>`;
        expect(shape.render()).toEqual(text);
    })

})