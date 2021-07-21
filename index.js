// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "money",
        name: "How much Money is it?"
    },
    {
        type: "input",
        message: "Skill",
        name: "What is the skill?"
    },
    {
        type: "input",
        message: "job",
        name: "What is the Job Title?"
    },
    {
        type: "input",
        message: "test",
        name: "How do you test the link?"
    },
    {
        type: "input",
        message: "age",
        name: "What is your age?"
    },
    {
        type: "input",
        message: "install",
        name: "How do you install?"
    },
    {
        type: "input",
        message: "contact",
        name: "How do you Contact People?"
    },
    {
        type: "input",
        message: "name",
        name: "What is Your name?"
    },
    {
        type: "input",
        message: "title",
        name: "What is the title of your App?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();