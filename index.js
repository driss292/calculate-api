const express = require("express");
const cors = require("cors");
const colors = require("colors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome buddy");
});

app.get("/add/:num1/:num2", (req, res) => {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  let sum = (num1 + num2).toString();
  res.send({
    message: `le résultat de l'addition ${num1} + ${num2} est égale à :`,
    result: sum,
  });
});
app.get("/sub/:num1/:num2", (req, res) => {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  let difference = (num1 - num2).toString();
  res.send({
    message: `le résultat de la soustraction ${num1} - ${num2} est égale à :`,
    result: difference,
  });
});
app.get("/multi/:num1/:num2", (req, res) => {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  let product = (num1 * num2).toString();
  res.send({
    message: `le résultat de la multiplication ${num1} x ${num2} est égale à :`,
    result: product,
  });
});
app.get("/div/:num1/:num2", (req, res) => {
  let num1 = parseInt(req.params.num1);
  let num2 = parseInt(req.params.num2);
  let quotient = (num1 - num2).toString();
  res.send({
    message: `le résultat de la division ${num1} / ${num2} est égale à :`,
    result: quotient,
  });
});

app.get("*", (req, res) => {
  res.send("Page not found");
});

app.listen(3000, () => {
  console.log(colors.rainbow("server OK"));
});
