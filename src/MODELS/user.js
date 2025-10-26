const mongoose = require('mongoose');

const Userschema = new mongoose.Schema(
    {
        firstname : {
            type: String,
        },
        lastname : {
            type: String,
        },
        email : {
            type: String,
        },  
        password : {
            type: String,
        },
        age : {
            type: Number,
        },  
        gender : {
            type: String,
        },
    }
);

// creating a model
const UserModel = mongoose.model("user",Userschema);

module.exports = UserModel;

