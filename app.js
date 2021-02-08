const fs = require('fs')
const inquirer = require('inquirer')
const generatePage = require('./src/page-template')

const mockData = {
    githubName: 'Dax',
    github: 'Daxhub',
    email: 'dax@email.com',
    projectTitle: 'Daxs Project',
    description: 'Duis consectetur nunc nunc. Morbi finibus non sapien pharetra.Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus',
    comfirmTOC: 'true',
    confirmContributers: 'true',
    contributers: 'Me, Myself, I',
    howToContribute: 'Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus',
    install: 'just download it 4head',
    usage: 'Whatever you want it to be',
    licenses: ['MIT', 'The Unlicensed']
}

const promptUser = projectData => {
    return inquirer.prompt([
        {
            // Username
            type: 'input',
            name: 'githubName',
            message: 'What is your Github Username? (Required)',
            validate: githubNameInput => {
                if (githubNameInput) {
                    return true
                } else {
                    console.log('Please enter your Github Username')
                    return false
                }
            }
        },
        {
            // GitHub URL
            type: 'input',
            name: 'github',
            message: 'What is your GitHub url? (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true
                } else {
                    console.log('Please enter your GitHub link')
                    return false
                }
            }
        },
        {
            // Email of User
            type: 'input',
            name: 'email',
            message: 'What is your email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log('Please enter your email')
                    return false
                }
            }
        },
        {
            // Name of the project
            type: 'input',
            name: 'projectTitle',
            message: 'What is the name of your project? (Required)',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true
                } else {
                    console.log('Please enter a Project Name')
                    return false
                }
            }
        },
        {
            // description
            type: 'input',
            name: 'description',
            message: 'Enter a description of your Project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true
                } else {
                    console.log('Please enter a description of your project')
                    return false
                }
            }
        },
        {
            // prompt table of contents (true, false)
            type: 'confirm',
            name: 'confirmTOC',
            message: 'Would you like to include a Table of Contents?',
            default: true
        },
        {
            // prompt contributers (true, false)
            type: 'confirm',
            name: 'confirmContributers',
            message: 'Would you like to include any contributers?',
            default: true
        },
        {
            // If true then who contributed?
            type: 'input',
            name: 'contributers',
            message: 'Enter any other contributers to your project',
            when: ({ confirmContributers }) => confirmContributers
        },
        {
            // How to contribute to the project
            type: 'input',
            name: 'howToContribute',
            message: 'Enter some instructions for users wishing to contribute to your project (Required)',
            validate: howToContributeInput => {
                if (howToContributeInput) {
                    return true
                } else {
                    console.log('Please enter contribution information')
                    return false
                }
            }
        },
        {
            // Installation - What steps are there to install project
            type: 'input',
            name: 'install',
            message: 'Enter steps for users trying to download your project',
            validate: installInput => {
                if (installInput) {
                    return true
                } else {
                    console.log('Enter steps for installation')
                    return false
                }
            }
        },
        {
            // Usage of project
            type: 'input',
            name: 'usage',
            message: 'What is the usage of this project for a user?',
            validate: usageInput => {
                if (usageInput) {
                    return true
                } else {
                    console.log('What is the usage of your project?')
                    return false
                }
            }
        },
        {
            // License on project (MIT, GNU)
            type: 'checkbox',
            name: 'licenses',
            message: 'What license is your project using?',
            choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'Mozilla Public 2.0', 
    'Apache 2.0', 'Boost 1.0', 'The Unlicense']
        },
    ])
}


promptUser()
    .then(projectData => {
        return generatePage(mockData)
   })
   .catch(err => {
       console.log(err)
   })