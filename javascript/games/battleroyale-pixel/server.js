import express from 'express';
import http from 'http';
import socketio from 'socket.io';
import createGame from './public/game.js';

const app = express();
const server = http.createServer(app);
const sockets = socketio(server);

app.use(express.static('public'));

const game = createGame();
game.start();

game.subscribe((command) => {
    console.log(`> Emitting ${command.type}`);
    sockets.emit(command.type, command);
});

sockets.on('connection', (socket) => {
    const playerId = socket.id;
    const playerName = socket.handshake.query.playerName;
    console.log(`> Player connected: ${playerId}`);

    game.addPlayer({ playerId: playerId, playerName: playerName });

    socket.emit('setup', game.state);

    socket.on('disconnect', () => {
        game.removePlayer({ playerId: playerId });
        console.log(`> Player disconnected: ${playerId}`);
    });

    socket.on('move-player', (command) => {
        command.playerId = playerId;
        command.type = 'move-player';
        
        game.movePlayer(command);
    });
})

server.listen(3000, () => {
    console.log(`> Server listening on port: 3000`);
})