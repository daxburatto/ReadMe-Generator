const Choice = require("inquirer/lib/objects/choice")



function licenseBadge(license) {
    let choose = ''

    if (license === 'MIT') {
        choose = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]MIT)`
        return choose
    }
    if (license === 'GNU AGPLv3') {
        choose = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]`
        return choose
    }
    if (license === 'GNU GPLv3') {
        choose = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
        return choose
    }
    if (license === 'Mozilla Public 2.0') {
        choose = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`
        return choose
    }
    if (license === 'Apache 2.0') {
        choose = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
        return choose
    }
    if (license === 'Boost 1.0') {
        choose = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]`
        return choose
    }
    if (license === 'The Unlicense') {
        choose = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`
        return choose
    }
    if (license === 'None') {
        choose = ''
        return choose
    }
}

module.exports = data => {
    console.log(data)
return `
# ${data.projectTitle}

By ${data.githubName}

${licenseBadge(data.license)}

## Description

${data.description}

### Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

### Installation

${data.install}

### Usage

${data.usage}

### Credits

### License

${data.licenses.join(', ')}
`
}