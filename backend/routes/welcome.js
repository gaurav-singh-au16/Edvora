const express = require('express')
const router = express.Router()
const auth = require("../middleware/auth")
const UserModel = require('../models/users')
const UserDataModel = require('../models/userData')

// router.get("/welcome", auth, async(req, res) => {
//     try {
        
//         const email = req.user.email
//         const user = await UserModel.findOne({ email })
        
//         if (req.user.email === user.email && req.user.password === user.password){

//             res.status(200).send("welcome!!!")
//         }else{
//             res.status(200).send("Password Changed, Again Login")
//         }
//     } catch (err) {
//         console.log(err)
//     }
    
// });
router.post("/addPost", auth, async(req, res) => {
    try {
        
        const email = req.user.email
        const user = await UserModel.findOne({ email })
        const { username, body } = req.body
        
        if (req.user.email === user.email && req.user.password === user.password){

            const user = await UserDataModel.create({
                username,
                body,
                timestamp,
                edited: null || Date(),
                userID: req.user._id
            })
            res.status(200).send("Data Successfully Posted")
        }else{
            res.status(200).send("Password Changed, Again Login")
        }
    } catch (err) {
        console.log(err)
    }
    
});

router.put("/updatePost", auth, async(req, res) => {
    try {
        
        const email = req.user.email
        const user = await UserModel.findOne({ email })
        const { username, body } = req.body
        
        if (req.user.email === user.email && req.user.password === user.password){

            if (username != '' && body != ''){
                const userID = req.user._id
                const user = await UserDataModel.findByIdAndUpdate({userID},{
                    username,
                    body,
                    timestamp,
                    edited: null || Date()
                })
            }else{
                res.status(401).send("Please Enter Data First")
            }
        }else{
            res.status(200).send("Password Changed, Again Login")
        }
    } catch (err) {
        console.log(err)
    }
    
});
router.delete("/deletePost", auth, async(req, res) => {
    try {
        
        const email = req.user.email
        const user = await UserModel.findOne({ email })
        
        if (req.user.email === user.email && req.user.password === user.password){

            const userID = req.user._id
            findUser = await UserDataModel.findOne({userID})

            const _id = findUser._id
            await UserDataModel.deleteOne({_id})

            res.status(200).send("Successfully Deleted the Data")

        }else{
            res.status(200).send("Password Changed, Again Login")
        }
    } catch (err) {
        console.log(err)
    }
    
});

module.exports = router

// $2a$10$3XIgG6TRl4w8.0zL/YpiFOnqIjGEl5O2APzwV1gB3BJ1Qvgl5uA.6