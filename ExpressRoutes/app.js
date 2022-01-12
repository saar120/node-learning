const express = require("express");
const data = require("./data");

const app = express();

app.use(express.json());

app.get("/numbers", (req, res) => {
  res.send(data);
});
app.post("/numbers", (req, res) => {
  const num = +req.body.num;
  if (data.includes(num)) {
    res.send("num already included");
    return;
  }
  data.push(num);
  res.send(data);
});
app.delete("/numbers", (req, res) => {
  const num = +req.query.num;
  if (!data.includes(num)) {
    res.send("num not in data");
    return;
  }
  data.splice(data.indexOf(num), 1);
  res.send(data);
});
app.put("/numbers", (req, res) => {
  const numToDelete = +req.query.num;
  const newNum = +req.body.num;
  console.log(newNum);
  data.splice(data.indexOf(numToDelete), 1, newNum);
  res.send(data);
});

app.listen(3000, () => {
  console.log("Server is up");
});
