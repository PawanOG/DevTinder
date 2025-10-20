//creating a server using express

//installing express

const express = require('express');

const app = express();



///request handlers for /hello and /test


// app.use("/hello",(req,res) => {
//     res.send('Hello hello hello');
// } )


// app.use("/test" ,(req, res) => { 
//     res.send("hello from server");
// })

//listenining to 7777

app.listen(7777, () => { 

    console.log('Server is running on port 7777');
});

app.use("/user", (req,res) => {
    res.send("general for all users");
})


app.get("/user", (req,res) => {
    res.send("get succesuflly");
})

app.delete("/user", (req,res) => {
    res.send("deleted successfully");
})



