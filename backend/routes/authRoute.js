const express = require("express");
const UserModel = require("../models/userModel");
const authRoute = express.Router();

authRoute.post("/login", (req, res) => {
  console.log(req.body);
  if (!req.body.email || !req.body.password) {
    res
      .status(409)
      .send(`Required field: ${!req.body.email ? "email" : "password"}`);
  }
  UserModel.findOne(req.body)
    .then((data) => {
      console.log(data + "-------");
      if (!data) {
        res.status(215).send("Bad credentials");
        return; 
      }
      res.status(200).send(data);
    })
    .catch((error) => {
      res.status(415).send(error);
    });
});

module.exports = authRoute;
