// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', name: 'title', message: 'What is the title of your project?'},
    {type: 'input', name: 'description', message: 'Write a short description of your project:'},
    {type: 'input', name: 'installation', message: 'How do you install this project?'},
    {type: 'input', name: 'usage', message: 'Provide instructions on how to use this project:'},
    {type: 'input', name: 'contributing', message: 'How can others contribute to this project?'},
    {type: 'input', name: 'tests', message: 'What are the test instructions?'},
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want to use?',
        choices: ['MIT', 'GPL', 'Apache', 'None']
    },
    {type: 'input', name: 'github', message: 'Enter your GitHub username:'},
    { type: 'input', name: 'email', message: 'Enter your email address:' }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
    console.log(`Successfully created ${fileName}`);
}

function init() {
    console.log("Starting the prompt...");  // Debugging statement

    inquirer.prompt(questions).then((answers) => {
        console.log("Answers captured:", answers);  // Check if answers are being captured
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    }).catch((err) => {
        console.error("Error occurred during the prompt:", err);  // Catch any errors
    });
}

// Start the application
init();

