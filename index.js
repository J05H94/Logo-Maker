const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const fs = require('fs');
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: "What shape would you like the logo to be: ",
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "Where color would you like the shape to be: ",
    },
    {
        type: 'input',
        name: 'text',
        message: "What text would you like the logo to have: ",
        validate: (text) =>
            text.length <= 3 || "The logo text must be 3 or less characters",
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Where color would you like the text to be: ",
    },
];

inquirer.prompt(questions)
.then((answers) => {
    console.log('Answers: ', answers);
    fs.writeFile('logo.svg', shapes(answers.shape, answers.shapeColor, answers.text, answers.textColor), (err) =>
        err ? console.error(err) : console.log('Generated logo.svg')
    );
});
