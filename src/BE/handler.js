const dbURI = 'mongodb+srv://younglll:test123456@assignment4.ysbgi.mongodb.net/assignment4?retryWrites=true&w=majority';

// import the package
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
var cors = require("cors");
require("dotenv/config");

// import routes
const postRoute = require("./routes/addCard");
const getRoute = require("./routes/getCards");
const deleteRoute = require("./routes/deleteCard");

// execute it
const handler = express();
handler.use(cors());
handler.use(express.urlencoded({ extended: true }));
handler.use(express.json());

handler.use("/posts", postRoute);
handler.use("/gets", getRoute);
handler.use("/deletes", deleteRoute);


// connect to mongodb through mongoose
mongoose.connect(
  dbURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  console.log(">> connected to DB!")
);

// How do we start to listening to the server
handler.use(express.static(path.resolve(__dirname, "../../build")));
handler.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../../build", "index.html"));
});

handler.listen(9000);
// comments

  