require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

// In-memory storage
let users = [];
let messages = [];

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

// Register User
app.post('/register', (req, res) => {
  const { name, phone } = req.body;
  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  if (users.find(user => user.phone === phone)) {
    return res.status(400).json({ error: "Phone number already registered" });
  }

  const newUser = { id: users.length + 1, name, phone };
  users.push(newUser);
  res.status(201).json({ message: "User registered successfully" });
});

// Login User
app.post('/login', (req, res) => {
  const { phone } = req.body;
  const user = users.find(user => user.phone === phone);
  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }

  const token = jwt.sign({ id: user.id, phone: user.phone }, JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token, user });
});

// WebSocket for Real-Time Chat
io.on('connection', (socket) => {
  console.log('New client connected');

  // Send chat history to new user
  socket.emit('chatHistory', messages);

  // Broadcast new messages
  socket.on('sendMessage', (data) => {
    const message = { 
      user: data.user, 
      text: data.text, 
      time: new Date().toLocaleTimeString() 
    };
    messages.push(message);
    io.emit('receiveMessage', message);
  });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
