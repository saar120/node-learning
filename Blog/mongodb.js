//CRUD
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "blogs";

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Unable to connect");
  }

  const db = client.db(databaseName);

  // Add Users

  // db.collection("users").insertMany([
  //   {
  //     name: "Spongebob",
  //     email: "Spongebob@gmail.com",
  //   },
  //   { name: "Patrick", email: "patrick@gmail.com" },
  // ]);

  //Add Posts

  // db.collection("posts").insertMany([
  //   {
  //     title: "bla bla 1",
  //     body: "bla bla bla bla bla bla bla bla bla bla bla bla`",
  //     writer: ObjectId("61e69015262bd4a425c34158"),
  //   },
  //   {
  //     title: "bla bla 2",
  //     body: "bla bla bla bla bla bla bla bla bla bla bla bla`",
  //     writer: ObjectId("61e699a956ce11550fe4a9bf"),
  //   },
  // ]);

  //Add Comments

  // db.collection("posts").updateOne({ title: "bla bla 1" }, { $push: { comments: { body: "wow ! insightful" } } });
});
