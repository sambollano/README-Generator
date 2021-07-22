// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

var util = require('util');
var path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is You're Name?",
        name: "Samantha"
    },
    {
        type: "input",
        message: "What are some skills you have?",
        name: "What is the skill?"
    },
    {
        type: "input",
        message: "What Kind of Job do you have?",
        name: "What is the Job Title?"
    },
    {
        type: "input",
        message: "What's You're Favorite Color?",
        name: "Favorite color?"
    },
    {
        type: "input",
        message: "What is You're Age?",
        name: "What is your age?"
    },
    {
        type: "input",
        message: "What's You're Favorite Animal?",
        name: "Favorite Animal?"
    },
    {
        type: "input",
        message: "What's School do you attend?",
        name: "School Name?"
    },
    {
        type: "input",
        message: "What is You're Favorite Game?",
        name: "Favorite Game?"
    },
    {
        type: "input",
        message: "What is You're Favorite Drink?",
        name: "Favorite Drink?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    const generatedFile = generatemarkdown(response)  
     
     console.log(generatedFile);
    };
    function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err)
                throw new Error(err);
            console.log("Readme is successfully created")
    })
}

// TODO: Create a function to initialize app
function init() {
        inquirer.prompt(questions)
        .then((inquirerResponse) => {   
            console.log("Generated");
        })
        .catch((err) => {
            console.log(err);
        })
      }
// Function call to initialize app
init();