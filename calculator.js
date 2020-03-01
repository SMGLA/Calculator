//jshint esversion: 6
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req,res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var bmiResult = Math.round((weight/(height*height)*10)) / 10;
  console.log(weight);
  console.log(height);
  console.log(bmiResult);
  res.send("Your BMI is " + bmiResult);
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
