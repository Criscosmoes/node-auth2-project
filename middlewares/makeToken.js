const jwt = require("jsonwebtoken"); 
const dotenv = require("dotenv"); 

dotenv.config(); 


module.exports = (user) => {
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: "900s",
  };
  return jwt.sign(payload, process.env.JWT_SECRET, options);
};
