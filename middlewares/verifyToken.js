const jwt = require("jsonwebtoken"); 
const dotenv = require("dotenv");

dotenv.config(); 

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization; 
    
        if(!token) return res.status(401).json("Must be authorized to access this!"); 

        const verify = jwt.verify(token, process.env.JWT_SECRET); 

        if(verify){
            next(); 
        }
        else {
            res.status(401).json("Invalid Token");
        }
    }
    catch(e){
        res.status(500).send(e.message); 
    }
}