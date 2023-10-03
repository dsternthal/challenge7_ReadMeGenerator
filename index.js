// TODO: Include packages needed for this application

//importing using require
const generateMarkdown=require("./utils/generateMarkdown")
const fs=require("fs")
const inquirer=require("inquirer")
/*
WHEN I am prompted for information about my application repository
WHEN I enter my project title
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
WHEN I choose a license for my application from a list of options
WHEN I enter my GitHub username
WHEN I enter my email address
WHEN I click on the links in the Table of Contents
 */

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        message:"What is the project title?",
        name:"title"
    },
    {
        type:"editor",
        message:"Please describe your project here:",
        name:"description"
    },
    {
        type:"list",
        message:"Please select the license used from the following:",
        choices:["MIT", "IBM", "Apache", "No License"],
        name: "license"
    },
    {
        type:"input",
        message:"What is your Github Username?",
        name: "username"
    },
    {
        type:"input",
        message:"What is your email?",
        name: "email"
    },
    {
        type:"input",
        message:"Who worked on this project?",
        name:"contributors"
    },
    {
        type:"input",
        message:"How do you install this program?",
        name:"installation"
    },
    {
        type:"input",
        message:"What is the purpose of this project?",
        name:"usage"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,generateMarkdown(data), err=>{
        if(err) throw err
        console.log("success!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data=>{
        writeToFile("./output/README.md",data)
    })
}

// Function call to initialize app
init();
