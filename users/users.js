const yargs = require("yargs");
const { addUser, removeUser, updateUser } = require("./functions");

// add user command

yargs.command({
  command: "add",
  description: "Add a user",
  builder: {
    name: {
      description: "User name",
      type: "string",
      demandOption: true,
    },
    email: {
      description: "User email",
      type: "string",
      demandOption: true,
    },
  },
  handler: (argv) => {
    addUser(argv);
    console.log(argv.name + " added");
  },
});

yargs.command({
  command: "remove",
  description: "Remove a user",
  builder: {
    id: {
      description: "User ID",
      type: "string",
      demandOption: true,
    },
  },
  handler: (argv) => {
    removeUser(argv.id);
    console.log(argv.id + " removed");
  },
});
yargs.command({
  command: "update",
  description: "Update a user",
  builder: {
    id: {
      description: "User ID",
      type: "string",
      demandOption: true,
    },
    name: {
      name: {
        description: "User name",
        type: "string",
      },
      email: {
        description: "User email",
        type: "string",
      },
    },
  },
  handler: (argv) => {
    updateUser(argv);
  },
});

yargs.parse();
