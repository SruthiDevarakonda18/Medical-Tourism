const mongoose = require("mongoose");
require("dotenv").config();
const DB_URL = process.env.LOCAL_DB_URL;

//connect mongoose to db
const getConnection = () => {
  mongoose.connect(DB_URL)
    .then(() => {
      console.log("db connection success");
    })
    .catch((err) => console.log("error in db connect", err));
};

module.exports = getConnection;
