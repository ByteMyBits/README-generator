const inquirer = require('./.gitignore/node_modules/inquirer');
const fs = require('fs');

const badges = {

    "Apache 2.0 License": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "BSD 3-Clause License": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "BSD 2-Clause License": "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "Creative Commons: Attribution 4.0 International": "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by/4.0/)",
    "Creative Commons: Attribution-ShareAlike 4.0 International": "[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-sa/4.0/)",
    "Creative Commons: Attribution-NonCommercial 4.0 International": "[!License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc/4.0/)",
    "Creative Commons: Attribution-NoDerivates 4.0 International": "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC%20BY--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nd/4.0/)",
    "Creative Commons: Attribution-NonCommmercial-ShareAlike 4.0 International": "[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-sa/4.0/)",
    "Creative Commons: Attribution-NonCommercial-NoDerivatives 4.0 International": "[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](http://creativecommons.org/licenses/by-nc-nd/4.0/)",
    "Eclipse Public License 1.0": "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "GNU GPL v3": "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)",
    "GNU GPL v2": "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://img.shields.io/badge/License-GPL%20v2-blue.svg)",
    "GNU AGPL v3": "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)",
    "GNU LGPL v3": "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](http://www.gnu.org/licenses/lgpl-3.0)",
    "GNU FDL v1.3": "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](http://www.gnu.org/licenses/fdl-1.3)",
    "IBM Public License Version 1.0": "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    "The MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Mozilla Public License 2.0": "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "The zlib/libpng License": "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"

}

inquirer
    .prompt([

        {
            type: "input",
            message: "What is the name of your project?",
            name: "name"
        },
        {
            type: "input",
            message: "Describe your project:",
            name: "description"
        },
        {
            type: "input",
            message: "What are the installation instructions?",
            name: "installation"
        },
        {
            type: "input",
            message: "What is the usage information?",
            name: "usage"
        },
        {
            type: "input",
            message: "Please enter the GitHub handles of any collaborators (all on one line and separated by commas e.g. user-1, user-2, user-3)",
            name: "collabs"
        },
        {
            type: "input",
            message: "What are the contribution guidelines?",
            name: "contribution"
        },
        {
            type: "input",
            message: "Are there any test instructions?",
            name: "test"
        },
        {
            type: "list",
            message: "Choose a license for your application:",
            name: "license",
            choices: [
                "Apache 2.0 License",
                "BSD 3-Clause License",
                "BSD 2-Clause License",
                "Creative Commons: Attribution 4.0 International",
                "Creative Commons: Attribution-ShareAlike 4.0 International",
                "Creative Commons: Attribution-NonCommercial 4.0 International",
                "Creative Commons: Attribution-NoDerivates 4.0 International",
                "Creative Commons: Attribution-NonCommmercial-ShareAlike 4.0 International",
                "Creative Commons: Attribution-NonCommercial-NoDerivatives 4.0 International",
                "Eclipse Public License 1.0",
                "GNU GPL v3",
                "GNU GPL v2",
                "GNU AGPL v3",
                "GNU LGPL v3",
                "GNU FDL v1.3",
                "IBM Public License Version 1.0",
                "The MIT License",
                "Mozilla Public License 2.0",
                "The zlib/libpng License"
            ]
        },
        {
            type: "input",
            message: "What is your GitHub handle?",
            name: "github"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        }
    ])
    .then(answers => {

        let name = answers.name;
        let description = answers.description;
        let installation = answers.installation;
        let usage = answers.usage;
        let collabs = answers.collabs;
        let contribution = answers.contribution;
        let test = answers.test;
        let license = answers.license;
        let github = answers.github;
        let email = answers.email;

        let README =
            `# **${name}**
${badges[license]}
        
## Description
${description}

## Table of contents

* [Installation](#installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${installation}

## Usage
${usage}

## License
This project is covered under ${license}.

Click on the badge at the top of this README to learn more.

## Contributing
${listCollaborators(collabs)}

${contribution}

## Tests
${test}

## Questions
You can find me on GitHub [@${github}](https://github.com/${github}).

If you have any further questions, please [contact me](mailto:${email}).`


        fs.writeFile('README.md', README, (err) =>
            err ? console.error(err) : console.log('Successfully saved to README.md!')
        );

    })
    .catch(error => {
        console.log("Something went wrong --> " + error)
    });

function listCollaborators(collabs) {
    if (collabs.length > 0) {
        let collabs2 = collabs.replace(/\s+/g, '')
        let collabsArray = collabs2.split(',');
        let stringToReturn = "";

        for (let i = 0; i < collabsArray.length; i++) {
            stringToReturn += `[@${collabsArray[i]}](https://github.com/${collabsArray[i]})\n\n`;
        }
        return stringToReturn;
    }
    else return "No other contributors.";
}






// Trying to get the index from the answer given for the badge choice.
// There doesn't seem to be an easy way to do this...
