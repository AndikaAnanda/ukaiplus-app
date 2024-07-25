import express from 'express'
import { readUsers, updateUser, readCurrentUser } from '../controller/userController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// Retrieve all users data
router.get('/user', authMiddleware, readUsers)

router.get('/user/me', authMiddleware, readCurrentUser)

// Update user data
router.put('/user/update/:user_id', authMiddleware, updateUser)

export default router