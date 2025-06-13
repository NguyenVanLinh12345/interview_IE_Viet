require('dotenv').config();
const PORT = process.env.PORT || 3001;

const express = require('express');
const cors = require('cors');

// Import routers
const indexRoutes = require('./routes/index');
const ownerRoutes = require('./routes/owner');
const employeeRoutes = require('./routes/employee');

const app = express();
const http = require('http').Server(app);

app.use(express.json());
app.use(cors());
app.use('/', indexRoutes);
app.use('/api/owner', ownerRoutes);
app.use('/api/employee', employeeRoutes);

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    console.log(socket.data)
    
    socket.on('disconnect', () => {
        console.log('🔥: A user disconnected');
    });

    socket.on('message', (data) => {
        console.log(data)
        socketIO.emit('test', {'bye': 'hello'})
    });

    socket.on('join room', (data) => {
        console.log('join room', data)
    });
});


http.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
