const router = require("express").Router(); 

const Users = require("./users-model"); 

const verifyToken = require("../../middlewares/verifyToken"); 

router.get("/users", verifyToken,  async (req, res) => {
    try {

        const users = await Users.getAll(); 

        res.status(200).send(users); 
    }
    catch(e){
        res.status(500).send(e.message); 
    }
})


module.exports = router; 