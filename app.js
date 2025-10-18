//creating a server using express

//installing express

const express = require('express');

const app = express();



///request handlers for /hello and /test


app.use("/hello",(req,res) => {
    res.send('Hello World');
} )


app.use("/test" ,(req, res) => { 
    res.send("hello 2");
})

//listenining to 7777

app.listen(7777, () => { 

    console.log('Server is running on port 3000');
});

