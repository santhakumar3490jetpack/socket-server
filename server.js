// // Import required modules
// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');

// // Create an instance of Express
// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server); // Initialize Socket.IO

// // Handle client connections
// io.on('connection', (socket) => {
//     console.log('New client connected');

//     // Emit an event to the client
//     socket.emit('studentUpdated', { message: 'Student data updated' });

//     // Handle disconnections
//     socket.on('disconnect', () => {
//         console.log('Client disconnected');
//     });
// });

// // Serve the app at port 3000
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(`Socket.IO server running on port ${PORT}`);
// });






const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create an instance of Express
const app = express();
const server = http.createServer(app);




const io = require('socket.io')(server, {
    cors: {
        origin: "*", // Allow all origins, restrict as needed
        methods: ["GET", "POST"]
    }
});

// Handle client connections
io.on('connection', (socket) => {
    console.log('New client connected');

    // Emit a 'studentUpdated' event after a delay, or in response to a database update
    setInterval(() => {
        socket.emit('studentUpdated', { message: 'Student data updated at ' + new Date().toISOString() });
    }, 10000); // Emit every 10 seconds

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});






// const io = socketIo(server, {
//     cors: {
//         origin: "*", // Allow all origins, or specify your client URL
//         methods: ["GET", "POST"]
//     }
// });

// // Handle client connections
// io.on('connection', (socket) => {
//     console.log('New client connected');
    
//     // Emit an event to the client
//     socket.emit('studentUpdated', { message: 'Student data updated' });

//     // Optionally, emit the event after some delay for testing
//     setTimeout(() => {
//         socket.emit('studentUpdated', { message: 'Delayed student data update' });
//     }, 2000); 

//     // Handle disconnections
//     socket.on('disconnect', () => {
//         console.log('Client disconnected');
//     });
// });

// // Use the port provided by Render (process.env.PORT)
// const PORT = process.env.PORT || 3000;
// server.listen(PORT, () => {
//     console.log(`Socket.IO server running on port ${PORT}`);
// });

