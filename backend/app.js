const express = require("express");
const bodyParser = require("body-parser");
//middleware for all incoming request
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
config = require("./DB");
let User = require('./Models/User');
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose
  .connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(
    () => {
      console.log("Database is connected");
    },
    (err) => {
      console.log("Can not connect to the database" + err);
    }
  );

//set headers for Cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE,PUT, OPTIONS"
  );
  next();
});

//midleware apply
app.post("/api/user", (req, res, next) => {

  const user = new User({
    email: req.body.email,
    password: req.body.password
  });
  user.save()
    .then(user => {
      res.status(200).json({ 'Member': 'Member has been added successfully' });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = app;
