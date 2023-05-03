//Add packages dependency connection
const inquirer = require('inquirer');
const fs = require('fs');

//Import classes for Shapes
const {Circle, Square, Triangle} = require("./lib/shapes");

//function to prompt user to answer questionsm in command line 
const questions = [
    {
        type: 'input',
        message: 'Please enter the text characters you want for your logo',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color would you like your logo text to be? Please enter a color keyword or hexidecimal number.',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'What shape would you like for your logo?',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        message: "What color would you like your shape to be? Please enter a color keyword or a hexidecimal number",
        name: 'shapeColor'
    }

]
// .then((responses) => {
//     if(responses.text.length > 3) {
//         console.log("Must be no more than 3 characters");
//     }
//     else {
//         var content = generateLogo(data);
//         fs.writeFile(fileName, content);
//     }

// });

//function to write to logo.svg file
function writeToFile(fileName, data) {
    var content = generateLogo(data);
    fs.writeFile(fileName, content, function(error) {
        if(error) {
           return console.log(error);
        }

        console.log("Generated logo.svg");
    })
}

//function to choose which logo based on users input
function generateLogo(data) {
    let shape = undefined;
    if(data.shape === "Triangle") {
        shape = new Triangle(data.shapeColor, data.text, data.textColor)
    } else if (data.shape === "Square") {
        shape = new Square(data.shapeColor, data.text, data.textColor)
    } else if (data.shape === "Circle") {
        shape = new Circle(data.shapeColor, data.text, data.textColor)
    }
    return shape.render();
}



//function to initalize app
function init () {
    inquirer.prompt(questions).then(function(data) {
        var fileName = "logo.svg";
        writeToFile(fileName, data);
    });
};

//function to call initialize app
init();