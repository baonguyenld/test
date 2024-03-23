const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Accounts = new Schema({
    username: {type : String},
    password: {type : String},
},{collection: "Accounts"}); 

module.exports = mongoose.model("Accounts", Accounts);