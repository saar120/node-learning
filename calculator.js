const yargs = require("yargs");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  description: "add",
  handler: function (argv) {
    console.log(argv._[1] + argv._[2]);
  },
});
yargs.command({
  command: "sub",
  description: "subtract",
  handler: function (argv) {
    console.log(argv._[1] - argv._[2]);
  },
});
yargs.command({
  command: "mult",
  description: "multiply",
  handler: function (argv) {
    console.log(argv._[1] * argv._[2]);
  },
});
yargs.command({
  command: "pow",
  description: "power",
  handler: function (argv) {
    console.log(argv._[1] ** 2);
  },
});

yargs.parse();
