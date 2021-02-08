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

const generateContributes = contributersText => {
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

    ## Installation

    ${projectData.install}

    ## Usage

    ${projectData.usage}

    ${generateContributes(projectData.contributers)}

    ## License

    ${projectData.licenses.join(', ')}

    `
}