import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'

import authRoutes from './routes/auth.js'

const app = express()
const PORT = process.env.PORT || 5000
const isProd = process.env.NODE_ENV === 'production'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(express.json())
app.use(cookieParser())

// In production the frontend is served from the same origin, so no CORS needed.
// In dev the Vite server runs separately on :5173.
if (!isProd) {
  app.use(
    cors({
      origin: process.env.CLIENT_URL || 'http://localhost:5173',
      credentials: true,
    })
  )
}

app.use('/api/auth', authRoutes)

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// Serve built React app in production
if (isProd) {
  const clientDist = path.join(__dirname, '../client/dist')
  app.use(express.static(clientDist))
  // All non-API routes go to React (handles client-side routing)
  app.get('*', (_req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'))
  })
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message)
    process.exit(1)
  })
