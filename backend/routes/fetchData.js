const socket_io = require('socket.io');
var io = socket_io();
const UserDataModel = require('../models/userData');

const changeStream = UserDataModel.watch();

changeStream.on('feedPage', (updatedData) => {
    // console.log(updatedData); 
    io.emit('feedPageChangeData', updatedData)
}); 

io.on('connection', function () {
    console.log('connected');
});

var socket = io;
module.exports = socket;