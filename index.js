const server = require("./api/server.js"); 
const dotenv = require("dotenv"); 

dotenv.config(); 

const port = process.env.PORT || 4000; 

server.listen(port, () => console.log(`Listening on port ${port}`)); 