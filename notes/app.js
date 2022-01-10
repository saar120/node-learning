const getNotes = require("./notes.js");
const chalk = require("chalk");

console.clear();
console.log(getNotes());

console.log(chalk.bold.inverse.green("Success"));
