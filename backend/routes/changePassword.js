const express = require('express')
const router = express.Router()


router.get('/changePassword', (req, res) => {
    res.json({success: 'changePassword Is Working'})
})


module.exports = router
