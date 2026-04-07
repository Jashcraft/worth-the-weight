import { Router } from 'express'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

const COOKIE_OPTS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
}

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password)
    return res.status(400).json({ message: 'Email and password are required' })

  const user = await User.findOne({ email })
  if (!user || !(await user.comparePassword(password)))
    return res.status(401).json({ message: 'Invalid credentials' })

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  )

  res.cookie('token', token, COOKIE_OPTS).json({
    user: { id: user._id, name: user.name, email: user.email, role: user.role },
  })
})

// POST /api/auth/logout
router.post('/logout', (_req, res) => {
  res.clearCookie('token', COOKIE_OPTS).json({ message: 'Logged out' })
})

// GET /api/auth/me
router.get('/me', requireAuth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password')
  res.json({ user })
})

export default router
