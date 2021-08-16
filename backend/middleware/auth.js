const jwt = require('jsonwebtoken')
const { SECERET_KEY } = process.env


const verifyToken = (req, res, next) => {
    
    // const token = req.body.token || req.query.token || req.headers["x-access-token"]
    const token = req.headers.cookie.split(' ')[4].split('=')[1]
    
    
    if (!token) {
        return res.status(403).send("A token is required for authentication")
    }
    try {
        const decoded = jwt.verify(token, SECERET_KEY);
        req.user = decoded
        
    } catch (err) {

        return res.status(401).send("Invalid Token")
    }
    return next()
};

module.exports = verifyToken