const express = require('express')
const router = express.Router()


router.get('/login', (req, res) => {
    res.json({success: 'Login Is Working'})
})

router.post('/login', (req, res) => {
    const {name, email, mobile, password} = req.body
    const user = {
        name,
        email,
        mobile,
        password
    }

    console.log(user)
    res.json({Name: name, Email:email, Mobile: mobile, Password:password})
})

module.exports = router
