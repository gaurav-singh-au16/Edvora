const express = require('express')
const router = express.Router()
const auth = require("../middleware/auth")
const UserModel = require('../models/users')

router.get("/welcome", auth, async(req, res) => {
    try {
        
        const email = req.user.email
        const user = await UserModel.findOne({ email })
        
        if (req.user.email === user.email && req.user.password === user.password){

            res.status(200).send("welcome!!!")
        }else{
            res.status(200).send("Password Changed, Again Login")
        }
    } catch (err) {
        console.log(err)
    }
    
});

module.exports = router

// $2a$10$3XIgG6TRl4w8.0zL/YpiFOnqIjGEl5O2APzwV1gB3BJ1Qvgl5uA.6