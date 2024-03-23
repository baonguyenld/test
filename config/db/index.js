const mongoose = require("mongoose");

function connect() {
    try {
        mongoose.connect("mongodb+srv://root:123@cluster0.x40o4en.mongodb.net/caycanh?retryWrites=true&w=majority&appName=Cluster0")
        console.log("successfully");
    } catch (error) {
        console.log("fail");
    }
    
}
module.exports ={connect};