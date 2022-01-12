const express = require("express");

const app = express();

app.get("/numbers", (req, res) => {
  res.send("Success using get");
});
app.post("/numbers", (req, res) => {
  res.send("Success using post");
});
app.delete("/numbers", (req, res) => {
  res.send("Success using delete");
});
app.put("/numbers", (req, res) => {
  res.send("Success using Put");
});

app.listen(3000, () => {
  console.log("Server is up");
});
