const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const UserModel = require('../models/users')
const bcrypt = require('bcryptjs')
const { SECERET_KEY } = process.env


router.post('/changePassword', async(req, res) => {
    try {
        const { email, password, newPassword } = req.body

        if (!(email && password, newPassword)) {
        res.status(400).send("All input is required")
        }

        const user = await UserModel.findOne({ email })
    
        if (user && (await bcrypt.compare(password, user.password))) {
            
            encryptedPassword = await bcrypt.hash(newPassword, 10)
            const changePassword = await UserModel.findByIdAndUpdate(user._id, { password: encryptedPassword })

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
