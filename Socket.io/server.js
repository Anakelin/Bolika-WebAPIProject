const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 4000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
    /*let window1 = window.open("http://localhost:4000/?", "", "width=700, height=1080");
    /*let window2 = window.open("http://localhost:4000/?", "", "width=700, height=1080");
    //window1 = window.open(__dirname + '/public/index.html', "_blank", "width=700, height=1080");
    //window2 = window.open(__dirname + '/public/index.html', "_blank", "width=700, height=1080");
    */

});

app.use(express.static('public'));

//server console msg

let playerID = []
let playerCount = 0

io.on('connection', (socket) => {

    if (playerCount < 2) {
        playerID[playerCount] = socket.id
        playerCount++;
        console.log('a user connected');
        console.log('player count : '+playerCount);
        

        if (playerID[0] == socket.id) {
            socket.emit('loadPage', (playerID))
        } else {
            socket.emit('loadPageReverse', (playerID))
        }

        socket.on('playerskill', (move) => {
            //console.log('usata mossa ' + move.skill)
            console.log('danno ' + move.dmg)
            console.log('costo ' + move.cost)
            socket.broadcast.emit('enemyskill', move)
        })
        
        socket.on('disconnect', () => {
            playerCount--;
            console.log('user disconnected');
            console.log('player count : '+playerCount);
        });
    }
});

server.listen(port, () => {
    console.log('Server Started');
});