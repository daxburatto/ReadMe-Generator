const inquirer = require('inquirer')
// const generatePage = require('./src/page-template')

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter your name')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true
                } else {
                    console.log('Please enter your Github Username')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your Project Name? (Required)',
            validate: projectInput => {
                if (projectInput) {
                    return true 
                } else {
                    console.log('Please enter your Project Name')
                    return false
                }
            }
        },
    ])
}