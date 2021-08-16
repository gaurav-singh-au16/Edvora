const express = require('express')
const router = express.Router()
const UserModel = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { SECERET_KEY } = process.env


router.get('/register', (req, res) => {
    res.json({success: 'register Is Working'})
})

router.post('/register', async(req, res) => {
    
    
    try {
        const { name, email, password } = req.body

        if (!(email && password && name)) {
        res.status(400).send("All input is required")
        }

        const oldUser = await UserModel.findOne({ email })

        if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const user = await UserModel.create({
            name,
            email: email.toLowerCase(),
            password: encryptedPassword,
        })

        const token = jwt.sign(
            { user_id: user._id, email, encryptedPassword }, 
            SECERET_KEY,
            {expiresIn: "2h",})
        
        user.token = token
        res.cookie('auth', token)

        res.status(201).json(user);

    } catch (err) {
        console.log(err);
    }
})



module.exports = router
