const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


const licenses = ['Apache', 'MIT', 'GPL', 'None'];


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your applications title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the purpose of the app:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your app?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Include examples of app in use:',
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'List your collaborators, if any:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License:',
        choices: licenses,
    },
    {
        type: 'input',
        name: 'tests',
        message: 'how to run the application tests? Instructions:',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email address?',
    },
];


function writeToFile(data) {
    const filename = "README.md";
    fs.writeFile(filename, data, (err) =>
        err ? console.log(err) : console.log(filename + " created!")
        );
};


function init() {

    inquirer.prompt(questions)
    .then (answers => writeToFile(generateMarkdown(answers)))
};


init();