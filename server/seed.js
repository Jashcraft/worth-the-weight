/**
 * Creates an initial admin user.
 * Usage: node seed.js
 */
import mongoose from 'mongoose'
import 'dotenv/config'
import User from './models/User.js'

const ADMIN = {
  name: 'Admin',
  email: 'admin@worththeweight.com',
  password: 'ChangeMe123!',
  role: 'admin',
}

await mongoose.connect(process.env.MONGO_URI)

const existing = await User.findOne({ email: ADMIN.email })
if (existing) {
  console.log('Admin user already exists — nothing changed.')
} else {
  await User.create(ADMIN)
  console.log(`Admin created: ${ADMIN.email} / ${ADMIN.password}`)
  console.log('Log in and change the password immediately.')
}

await mongoose.disconnect()
