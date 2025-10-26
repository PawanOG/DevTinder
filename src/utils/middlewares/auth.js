//writing an admin authorizatio
// 


const adminAuth = (req, res, next) => {
    token = "xyz";
    const AuthToken = "xyz";
    if (!AuthToken) {

        res.status(401).send("unauthorized");

    }
    else {
    }
    next();
    // res.send("from admin route");
}


const userAuth = (req , res , next) => {
    toke = "abc";
    const token = "abc";
    if(!token){
        res.stats(401).send("unauthorized");
    }
    else{
        next();
    }
}

module.exports = { adminAuth,userAuth};
