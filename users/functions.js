const fs = require("fs");
const uniqid = require("uniqid");

const getUsers = () => {
  try {
    const buffer = fs.readFileSync("users.json");
    return JSON.parse(buffer.toString());
  } catch (err) {
    return [];
  }
};

const writeToFile = (users) => {
  fs.writeFileSync("users.json", JSON.stringify(users));
};

const addUser = ({ email, name }) => {
  const allUsers = getUsers();
  const user = { id: uniqid(), email, name };
  allUsers.push(user);
  writeToFile(allUsers);
};

const removeUser = (id) => {
  const allUsers = getUsers();
  const filteredUsers = allUsers.filter((user) => user.id !== id);
  writeToFile(filteredUsers);
};

const updateUser = ({ id, email, name }) => {
  const allUsers = getUsers();
  const user = allUsers.find((user) => user.id === id);
  if (!user || (!email && !name)) {
    console.log("No user or nothing to update");
    return;
  }
  if (email) {
    user.email = email;
  }
  if (name) {
    user.name = name;
  }
  const updatedUsers = allUsers.filter((user) => user.id !== id);
  updatedUsers.push(user);
  writeToFile(updatedUsers);
  console.log("Updated");
};

module.exports = { addUser, removeUser, updateUser };
