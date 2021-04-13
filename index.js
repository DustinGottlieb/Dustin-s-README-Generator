const fs = require("fs");
const inquirer = require("inquirer");

const questions = [];

inquirer.prompt([{
            type: "input",
            message: "Enter project name:",
            name: "readmeTitle"
        },
        {
            type: "input",
            message: "Enter project description:",
            name: "Description"
        },
        {
            type: "input",
            message: "Enter installation instructions:",
            name: "instructions"
        },
        {
            type: "input",
            message: "Enter usage information:",
            name: "projectUsage"
        },
        {
            type: "input",
            message: "Who are the contributors of this project:",
            name: "projectContribution"
        },
        {
            type: "input",
            message: "Enter test instructions:",
            name: "tests"
        },
        // {
        //     type: "list",
        //     message: "Choose License",
        //     choices: [
        //         "???",
        //         "???"
        //     ],
        //     name: "License"
        // },
        {
            type: "input",
            message: "Enter GitHub username:",
            name: "GitHub"
        },
        {

            type: "input",
            message: "Enter email address:",
            name: "Email",
        }
    ])
    .then((res) => {
        console.log("Creating your README File..")
        writeToFile(res);
    })
    .catch((err) => {
        console.log(err);
    })


function writeToFile(input) {
    let readmeTitle;
    let readmeDescription;
    const descriptionHead = "## Description";
    let tableOfContents;
    const tocHead = "## Table of Contents";
    let readmeUsage;
    const usageHead = "## Usage";
    let readmeContribution;
    const contributionHead = "## Contribution";
    let readmeTest;
    const testingHead = "## Tests";
    // let readmeLicence = input.license;
    // const licenseHead = "## License";
    let readmeQuestions;
    const questionsHead = "## Questions";
    let completeREADME = [];

    if (input.readmeTitle == '') {
        readmeTitle = '# TITLE';
    } else {
        readmeTitle = `# ${input.readmeTitle}`;
    }
    completeREADME.push(readmeTitle);

    // let badge = `![](https://img.shields.io/badge/license-${readmeLicence.replace(/ /g, "%20")}-blue?style=flat-square)`;
    // completeREADME.push(badge);

    if (input.Description == '') {
        readmeDescription = `${descriptionHead}\n Enter project description here.`;
    } else {
        readmeDescription = `${descriptionHead}\n${input.Description}`;
    }
    completeREADME.push(readmeDescription);

    tableOfContents = `${tocHead}\n* [Installation](#installation)\n* [Usage](#usage)\n* [Contribution](#contribution)\n* [Tests](#tests)\n* [License](#license)\n* [Questions](#questions)\n`;
    completeREADME.push(tableOfContents);

    if (input.projectUsage == '') {
        readmeUsage = `\n${usageHead}\n Enter project usage here.`;
    } else {
        readmeUsage = `\n${usageHead}\n${input.projectUsage}`;
    }
    completeREADME.push(readmeUsage);

    if (input.projectContribution == '') {
        readmeContribution = `\n${contributionHead}\n Enter project contriburtion information here.`;
    } else {
        readmeContribution = `\n${contributionHead}\n${input.projectContribution}`;
    }
    completeREADME.push(readmeContribution);

    if (input.tests == '') {
        readmeTest = `\n${testingHead}\n Enter project testing information here.`;
    } else {
        readmeTest = `\n${testingHead}\n${input.tests}`;
    }
    completeREADME.push(readmeTest);


    //License info
    // readmeLicence = `\n${licenseHead}\nThis project is convered under the ${input.license}.`;
    // completeREADME.push(readmeLicence);

    readmeQuestions = `\n${questionsHead}\nFor questions about this project, please see my GitHub at [${input.GitHub}](https://github.com/${input.GitHub}), or reach out by email at ${input.Email}.`;
    completeREADME.push(readmeQuestions);

    const README = completeREADME.join('\n');

    fs.writeFile("./README.md", README, (err) => {
        if (err) {
            throw err;
        } else {
            console.log("README file successfully created!");
        }
    });
}