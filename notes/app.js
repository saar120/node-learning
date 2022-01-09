const getNotes = require("./notes.js");
const chalk = require("chalk");

console.log(getNotes());

console.log(chalk.bold.green("Success"));
