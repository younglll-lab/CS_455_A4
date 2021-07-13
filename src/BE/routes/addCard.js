const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

router.post("/", (req, res) => {
    Card.find({ id: req.body.id })
    .then((obj) => {
      const newMsg = new Card({
        _id: new mongoose.Types.ObjectId(),
        id: req.body.id,
        name: req.body.name,
        url: req.body.url,
        description: req.body.description,
      });

      newMsg
        .save()
        .then((result) => {
          console.log(">> successfully save newMsg : ", result);
          res.status(201).send(result);
        })
        .catch((error) => {
          console.log(">> fail to save newMsg : ", error);
        });
    })
    .catch((error) => {
      res.status(409).send({ All: Message.find(), error: error });
    });
});
module.exports = router;
