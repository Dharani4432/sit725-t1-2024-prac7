var express = require('express');
var app = express();
let http = require('http');
const server = http.createServer(app);
const { connectDatabase } = require('./dbconnection');
let router = require('./routers/routers');

const socketIo = require('socket.io');
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('a client is connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);


const PORT = process.env.PORT || 5501;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
