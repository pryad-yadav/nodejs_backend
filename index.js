const express = require("express");

const app = express();
const port = 4000;
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/login", (req, res) => {
  res.send("<h1>Welcome</h1>");
});
app.get("/logout", (req, res) => {
  res.send("<h1>Logout</h1>");
});
app.listen(port, () => {
  console.log("Linstening on port " + port);
});
