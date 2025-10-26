//creating a server using express

//installing express

require('./src/config/database')

const express = require('express');
const app = express();
const { adminAuth } = require("./src/utils/middlewares/auth");
const { userAuth } = require("./src/utils/middlewares/auth");
const connectDB = require("./src/config/database");
const User = require("./src/MODELS/user");


// middlewsare that uses json data  and convert into js
app.use(express.json());



app.post("/signup", async (req, res) => {

    const user = new User(req.body);

    await user.save();
   try{
    res.send("User signed up successfully");
   }
   catch(err){
    res.status(500).send("Error signing up user");
   }
});

connectDB()
    .then(() => {
        console.log("Database connected successfully");

        app.listen(7777, () => {
            connectDB,

                console.log('Server is running on port 7777');
        });



    })
    .catch((err) => {
        console.log("Database connection failed");

    });


