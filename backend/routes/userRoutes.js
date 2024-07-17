import express from 'express'
import User from '../model/User.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// Retrieve all users data
router.get('/user', authMiddleware, async (req, res) => {
    try {
        const user = await User.findAll({
            attributes: [
                'user_id', 'full_name', 'username', 'email'
            ],
        })
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })   
    }
})

export default router