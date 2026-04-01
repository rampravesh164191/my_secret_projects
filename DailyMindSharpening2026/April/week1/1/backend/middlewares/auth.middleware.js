const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) =>{
    let token = req.headers?.authorization?.split(" ")[1];
    console.log(token);
    if(token){
        let decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        if(decoded){
            req.user = decoded.userId;
            console.log(req.user, "is this correct");
            next();
        }else{
            res.status(403).json({message : "Login failed, please login again"})
        }
        console.log("passed through auth middleware")
    }else{
        res.status(400).json({message : "unauthorized"})
    }
}
module.exports = authMiddleware;