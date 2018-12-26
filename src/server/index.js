/*jshint esversion: 6 */
const express = require('express');
const app = express()
const server = require('http').Server(app);
const io = module.exports.io = require('socket.io')(app);

const PORT = process.env.PORT || 3231;

const SocketManager = require('./SocketManager');
app.use( express.static(__dirname + '/../../build') );
io.on('connection', SocketManager);

app.listen(PORT, ()=>{
    console.log("Connected to port:" + PORT);
});