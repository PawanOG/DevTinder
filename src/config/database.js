const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://PawanOG:Forgotten%40785@cluster0.pwzxakr.mongodb.net/devtinder");

};


    module.exports = connectDB;
