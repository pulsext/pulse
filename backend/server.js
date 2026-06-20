require('dotenv').config()
const express = require('express')
const cors = require('cors')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIO(server, {
  cors: {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    credentials: true
  }
})

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'Pulse Backend is running',
    timestamp: new Date().toISOString()
  })
})

app.get('/api/version', (req, res) => {
  res.json({ version: '1.0.0' })
})

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Pulse Backend API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth',
      users: '/api/users',
      posts: '/api/posts',
      comments: '/api/comments',
      notifications: '/api/notifications'
    }
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Socket.IO connection
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id)

  socket.on('join-room', (roomId) => {
    socket.join(roomId)
    console.log(`User ${socket.id} joined room ${roomId}`)
  })

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id)
  })
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`\n🚀 Pulse Backend Server running on port ${PORT}`)
  console.log(`📍 Local: http://localhost:${PORT}`)
  console.log(`🌐 API Health: http://localhost:${PORT}/api/health\n`)
})

module.exports = { app, io }
