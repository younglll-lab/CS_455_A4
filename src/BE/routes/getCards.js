const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

router.get("/", (req, res) => {
    Card.find({})
    .then((obj) => {
        console.log(">> get all images : "+ obj);
        res.status(200).send(obj);
    })
    .catch((error) => {
      console.log(">> something wrong in get cards in db :", error);
      alert(error);
      res.status(409).send(error);
    });
});

module.exports = router;
