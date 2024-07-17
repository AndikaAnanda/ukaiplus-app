import express from 'express'
import { readUsers, updateUser } from '../controller/userController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// Retrieve all users data
router.get('/user', authMiddleware, readUsers)

// Update user data
router.put('/user/update/:user_id', authMiddleware, updateUser)

export default router