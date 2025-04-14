// Filename: server.mjs (or set "type": "module" in package.json)

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Handling __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use(express.static(join(__dirname, 'public')));

// MongoDB connection
const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Database connected ✅');
  } catch (error) {
    console.log('Database error: ', error);
  }
};

// Message schema and model
const messageSchema = new mongoose.Schema({
  name: String,
  message: String,
});
const Message = mongoose.model('Message', messageSchema);

// Save message function
const saveMessage = async ({ name, message }) => {
  try {
    await Message.create({ name, message });
    console.log('Message synced');
  } catch (error) {
    console.log('DB Error', error);
  }
};

// Users store
const users = {};

// Socket.io connection handler
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  socket.on('setUsername', (name) => {
    users[socket.id] = name;
    console.log(`${users[socket.id]} connected`);
    socket.broadcast.emit('joinMessage', `${users[socket.id]} joined`);
    socket.emit('joinMessage', 'You joined');
  });

  // Add the rest of your socket logic here
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
  await connectToDb();
  console.log(`Server running on http://localhost:${PORT} 🚀`);
});

/*
  # Socket Programming
    - Websockets: The WebSocket API makes it possible to open a two-way interactive communication session between the user's browser and a server
      - Reference: https://www.researchgate.net/publication/338553959/figure/fig3/AS:846875599044609@1578922285085/Web-socket-architecture.ppm
    - Socket.io: JavaScript library
      - Server
        - io.on('connection', (socket) => {}): Client connections
        - socket.on('disconnect', () => {}): Client disconnections
        - socket.emit('event2', message): Send a custom event from the server to a sender client
        - socket.broadcast.emit('event2', message): Send a custom event from the server to all clients except the sender
        - io.emit('event2', message): Send a custom event from the server to all the clients
        - socket.on('event1', () => {}): Handle custom event from the client
      - Client
        - const socket = io(): Initiate a client connection
        - socket.emit('event1', message): Send a custom event from the client to the server
        - socket.on('event2', message): Handle custom event from the server

      - Concepts
        - Client to Server
        - Server to Client
        - Client to Server to All Clients

      - NPM: https://www.npmjs.com/package/socket.io
      - Reference Doc: 
        - https://socket.io/
        - https://www.geeksforgeeks.org/introduction-to-sockets-io-in-node-js/
*/