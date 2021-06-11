//import mongoose from node modules
const mongoose = require("mongoose");

// create a schema for User
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {type: String},
  pwd: String,
  tel: String,
  spetialite:String,
  role:String
});
const user = mongoose.model("User", userSchema);
module.exports = user;
