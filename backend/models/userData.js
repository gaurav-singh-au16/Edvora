const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: true,
        unique: true
    },
    body: { 
        type: String,
        required: true 
    },
    timestamp: { 
        type: Date,
        default: Date.now
    },
    edited:{
        type: Date
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    }

});

module.exports = mongoose.model("userData", userDataSchema)