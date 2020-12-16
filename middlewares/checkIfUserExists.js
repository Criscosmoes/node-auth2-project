const User = require("../api/users/users-model"); 

module.exports = async (req, res, next) => {

    try {
        const { username } = req.body; 

        const [exists] = await User.findBy({username: username}); 

        if(exists) {
            req.user = exists; 
            return next(); 
        }

        return res.status(400).json("Account does not exist, please register"); 
    }
    catch(e){
        res.status(500).send(e.message); 
    }


}