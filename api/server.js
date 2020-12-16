const express = require("express"); 
const helmet = require("helmet"); 
const cors = require("cors"); 

const AuthRouter = require("./auth/auth-router"); 
const UserRouter = require("./users/users-router"); 

const server = express(); 

server.use(express.json()); 
server.use(helmet()); 
server.use(cors()); 

server.use("/api/auth", AuthRouter); 
server.use("/api", UserRouter); 


module.exports = server; 