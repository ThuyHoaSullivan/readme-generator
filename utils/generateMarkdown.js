// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (!license || license === "None") return ""; 
//   const badges = {
//   MIT: "![MIT License](https://img.shields.io/badge/license-MIT-green)",
//   GPL: "![GPL License](https://img.shields.io/badge/license-GPL-blue)",
//   Apache: "![Apache License](https://img.shields.io/badge/license-Apache-blue)"
//   };
// return badges[license] || "";
// }


// // TODO: Create a function that returns the license link
// function renderLicenseLink(license) {
//   if (!license || license === "None") return "";
//   const links = {
//     MIT: "[MIT License](https://opensource.org/licenses/MIT)",
//     GPL: "[GPL License](https://www.gnu.org/licenses/gpl-3.0)",
//     Apache: "[Apache License](https://www.apache.org/licenses/LICENSE-2.0)"
//   };
//   return links[license] || "";
// }
// // If there is no license, return an empty string

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (!license || license === "None") return "";
//   return `## License  
// This project is licensed under the ${license} License.  
// For more details, visit ${renderLicenseLink(license)}.`;

// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
//   ${renderLicenseBadge(data.license)}

// ## Table of Contents
// - [Description](#description)
// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [Questions](#questions)

// ## Description
// ${data.description}

// ## Installation
// ${data.installation}

// ## Usage
// ${data.usage}

// ${renderLicenseSection(data.license)}

// ## Contributing
// ${data.contributing}

// ## Tests
// ${data.tests}

// ## Questions
// If you have any questions, reach out at **${data.email}**.  
// GitHub: [${data.github}](https://github.com/${data.github})

// `;
// }

// export default generateMarkdown;

function renderLicenseBadge(license) {
  if (!license || license === "None") return ""; 
  const badges = {
      MIT: "![MIT License](https://img.shields.io/badge/license-MIT-green)",
      GPL: "![GPL License](https://img.shields.io/badge/license-GPL-blue)",
      Apache: "![Apache License](https://img.shields.io/badge/license-Apache-blue)"
  };
  return badges[license] || "";
}

function renderLicenseLink(license) {
  if (!license || license === "None") return ""; 
  const links = {
      MIT: "[MIT License](https://opensource.org/licenses/MIT)",
      GPL: "[GPL License](https://www.gnu.org/licenses/gpl-3.0)",
      Apache: "[Apache License](https://www.apache.org/licenses/LICENSE-2.0)"
  };
  return links[license] || "";
}

function renderLicenseSection(license) {
  if (!license || license === "None") return ""; 
  return `## License  
This project is licensed under the ${license} License.  
For more details, visit ${renderLicenseLink(license)}.`;
}

function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, reach out at **${data.email}**.  
GitHub: [${data.github}](https://github.com/${data.github})
  `;
}

export default generateMarkdown;
