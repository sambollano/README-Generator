// TODO: Create a function that returns a license badge based on which license is passed in

const { generate } = require("rxjs")

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = "None") {
    return `${license}`
  }
  else {"None"}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license = "None") {
    return `${license}`
  }
  else {"None"}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(No_license) {
  return `${renderLicenseBadge(No.license)}
  ${renderLicenseLink(No.license_link)}     
` 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Title
   ${data.title}

   # Contents
   - money
   - skill
   - job
   - test
   - age
   - install
   - contact
   - name
   - title
`;
}

module.exports - generateMarkdown;