const generateTOC = projectData => {
    if (projectData.confirmTOC === true) {
        return `

        ### Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [Credits](#credits)
        * [License](#license)
        
        `
    }
} 

const generateContributes = projectData => {
    if (confirmContributers === true) {
        console.log(projectData.contributers)
        return `
        
        ## Credits
        ${contributers}
        `
    }
}


module.exports = projectData => {
    console.log(projectData)

    const {}

    return `
    # ${projectTitle}
    By ${githubName}
    ## Description 
    ${description}
    ${generateTOC}
    ## Installation
    ${projectData.install}
    ## Usage
    ${projectData.usage}
    ${generateContributes}
    ## License
    ${license.join(', ')}

    `
}