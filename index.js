const express = require("express");
const PORT = 5000;

const app = express();

app.get("/", (req, res) => {
  console.log(req.url);
  res.end("Home page is coming!");
});

app.get("/text", (req, res) => {
  console.log(req.url);
  res.end("Hello Text Server!");
});

app.get("/html", (req, res) => {
  console.log(req.url);
  res.end("<h1>Hello Html Server!</h1>");
});

app.listen(PORT, (error) => {
  if (error) return console.log(error);
  console.log(`Server is listening on port ${PORT}`);
});
