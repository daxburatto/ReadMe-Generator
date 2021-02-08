const generateTOC = projectData => {
    if (!projectData.confirmTOC) {
        return ''
    }
    return `

    ### Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
        
    `
} 

const generateContributes = projectData => {
    if (projectData.confirmContributers === true) {
        console.log(projectData.contributers)
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