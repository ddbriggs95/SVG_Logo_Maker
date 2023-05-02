//Add packages dependency connection
const inquirer = require('inquirer');
const fs = require('fs');


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
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        message: "What color would you like your shape to be? Please enter a color keyword or a hexidecimal number",
        name: 'shapeColor'
    }

]
.then((responses) => {
    if(responses.text.length > 3) {
        console.log("Must be no more than 3 characters");
    }
    else {
        fs.writeFile("logo.svg", responses);
    }

});





//function to initalize app
function init () {
    inquirer.prompt(questions).then((responses) => {
        console.log("creating logo");
    });
};

//function to call initialize app
init();