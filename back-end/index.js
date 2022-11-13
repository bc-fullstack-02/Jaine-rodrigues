const path = require("path");
const fs = require("fs");
const express = require("express");
const { Router } = require("express");
const app = express();

//app.use(express.static(path.join(__dirname, "static")));

app.get("/", function (req, res, next)  {
  console.log('first reg');
  next()
});

app.get("/", function (req, res, next)  {
    console.log('Second reg');
    next()
  });

app.listen(3000);
