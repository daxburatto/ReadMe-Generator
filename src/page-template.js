const generateContributers = projectData => {
    if (projectData.confirmContributers === true) {
        return `
        
        ## Credits
        ${projectData.contributers}
        `
    }
}


module.exports = projectData => {
console.log(projectData)

const {contributers} = projectData

return `
# ${projectData.projectTitle}

By ${projectData.githubName}

## Description 

${projectData.description}

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)   

### Installation

${projectData.install}

### Usage

${projectData.usage}

### Credits

${generateContributes(contributers)}

### License

${projectData.licenses.join(', ')}

`
}