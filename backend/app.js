const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const { DATABASE } = process.env

mongoose.connect(DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err) => {
    if (err) throw err
    console.log('MongoDB DataBase Connected')
})

const loginRoute = require('./routes/login')
const registerRoute = require('./routes/register')
const changePasswordRoute = require('./routes/changePassword')

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('', loginRoute)
app.use('', registerRoute)
app.use('', changePasswordRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log('Server Started @ 5000')
})

