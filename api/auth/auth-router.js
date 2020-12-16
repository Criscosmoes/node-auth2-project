const router = require("express").Router(); 
const bcryptjs = require("bcryptjs"); 
const Users = require("../users/users-model"); 

const checkPayload = require("../../middlewares/checkPayload");
const checkIfUserTaken = require("../../middlewares/checkIfUserTaken"); 
const checkifUserExist = require("../../middlewares/checkIfUserExists"); 
const makeToken = require("../../middlewares/makeToken"); 



router.post("/register", [checkPayload, checkIfUserTaken], async (req, res) => {

    try {

        const user = req.body; 
        const rounds = process.env.BCRYPT_ROUNDS || 8; 

        const hashedPassword = bcryptjs.hashSync(user.password, rounds);

        const newUser = await Users.add({username: req.body.username, password: hashedPassword}); 
        res.status(200).send(newUser)

    }
    catch(e){
        res.status(500).send(e.message); 
    }
})

router.post("/login", [checkPayload, checkifUserExist], async (req, res) => {

    try {
        const user = req.user; // user we have in database; 

        if(bcryptjs.compareSync(req.body.password, user.password)){
            const token = makeToken(user); 

            return res.status(200).json(`Welcome back, ${user.username} here is your token ${token}`)
        }

    
        return res.status(400).json("Wrong credentials"); 
        
    }
    catch(e){
        res.status(500).send(e.message); 
    }
})



module.exports = router; 