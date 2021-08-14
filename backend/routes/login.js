const express = require('express')
const router = express.Router()
const UserModel = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { SECERET_KEY } = process.env


router.get('/login', (req, res) => {
    res.json({success: 'Login Is Working'})
})

router.post('/login', async(req, res) => {
    try {

        const { email, password } = req.body
    
        if (!(email && password)) {
          res.status(400).send("All input is required")
        }

        const user = await UserModel.findOne({ email })
    
        if (user && (await bcrypt.compare(password, user.password))) {
          
            const token = jwt.sign(
                { user_id: user._id, email },
                SECERET_KEY,
                {expiresIn: "2h"})
    
          
            user.token = token;
    
            res.status(200).json(user);
        }else{

            res.status(400).send("Invalid Credentials")
        }

    } catch (err) {
        console.log(err);
    }
})
module.exports = router
