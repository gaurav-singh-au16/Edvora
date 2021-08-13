const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) throw err
    console.log('MongoDb DataBase Connected')
})

const authRoute = require('./routes/auth')

app.use('', authRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log('Server Started @ 5000')
})

