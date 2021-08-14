const express = require('express')
const router = express.Router()
const auth = require("../middleware/auth")

router.get("/welcome", auth, (req, res) => {
    
    res.status(200).send("welcome!!!");
    
});

module.exports = router