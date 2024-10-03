// Import required modules
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create an instance of Express
const app = express();
const server = http.createServer(app);
const io = socketIo(server); // Initialize Socket.IO

// Handle client connections
io.on('connection', (socket) => {
    console.log('New client connected');

    // Emit an event to the client
    socket.emit('studentUpdated', { message: 'Student data updated' });

    // Handle disconnections
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

// Serve the app at port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Socket.IO server running on port ${PORT}`);
});
