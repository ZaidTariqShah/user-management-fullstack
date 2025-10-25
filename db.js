const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

//load configuration file
// dotenv.config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.connectionString);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
