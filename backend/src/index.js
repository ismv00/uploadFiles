require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "temp", "uploads"))
);
app.use(require("./routes"));

app.listen(3000);
