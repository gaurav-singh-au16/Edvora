const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
    res.json({success: 'Login Route Working'})
})

router.post('/login', (req, res) => {
    const name = req.body.name
    const email = req.body.email

    res.json({Name: name, Email : email})
})

module.exports = router
