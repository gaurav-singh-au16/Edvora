const express = require('express')
const router = express.Router()


router.get('/register', (req, res) => {
    res.json({success: 'register Is Working'})
})


module.exports = router
