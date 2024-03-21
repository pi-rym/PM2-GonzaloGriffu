require("dotenv").config();
const mongoose = require("mongoose");

const { URI } = process.env;

const dbConnection = async () => {
  await mongoose.connect(URI);
};

module.exports = dbConnection;
