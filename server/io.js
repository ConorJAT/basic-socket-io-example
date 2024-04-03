const http = require('http');
const { Server } = require('socket.io');

let io;

const handleChatMessage = (msg) => {
    console.log(`Unknown user says: ${msg}`);
};

const socketSetup = (app) => {
    const server = http.createServer(app);
    io = new Server(server);

    io.on('connection', (socket) => {
        console.log('An unknown user has connected.');

        socket.on('disconnect', () => {
            console.log('An unknown user has disconnected.');
        });

        socket.on('chat message', handleChatMessage);
    });

    return server;
};

module.exports = socketSetup;