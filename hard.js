const express = require("express");
const app = express();

const fs = require("fs");
const port = 8080;

// app.use(express.json());

const data = require("./employee.json");
app.get("/", function (req, res) {
  res.json(data);
});
app.get("/:id", function (req, res) {
  const id = req.params.id;
  res.json(data[id]);
});
app.listen(port, () => {
  console.log("it's live on http://localhost/:$%7Bport%7D%60");
});
app.use((req, res) => {
  res.status(404).send("Sorry , wrong ID!");
  //   res.end();
});
