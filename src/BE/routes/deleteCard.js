const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

router.delete("/", (req, res) => {
  Card.findOneAndDelete({ id: req.body.id })
    .then(() => {
      // return updated documents after deleting
      res.status(200).send(req.body.id);
    })
    .catch((error) => {
      console.log(">> cannot DELETE card :", error);
      res.send(error);
    });
});

module.exports = router;
