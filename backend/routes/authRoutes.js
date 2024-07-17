import express from 'express'
import User from '../model/User.js'
import bcrypt from 'bcrypt'

const router = express.Router()

// Register
router.post('/register', async (req, res) => {
    try {
        const { fullName, username, email, password } = req.body
        if (!fullName || !username || !email || !password) {
            return res.status(400).json({ message: "Please fill all data"})
        }
        if (password.length <= 8) {
            return res.status(400).json({ message: "Password must be more than 8 characters"})
        }
        const isEmailExist = await User.findOne({
            where: {
                email: email,
            }
        })
        if (isEmailExist) {
            return res.status(400).json({ message: "Email is already taken"})
        }
        console.log(isEmailExist)
        const hashedPassword = await bcrypt.hash(password, 10)
        await User.create({
            full_name: fullName,
            username: username,
            email: email,
            password: hashedPassword,
        })
        res.status(201).json({ message: "Successfully registered" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error"})
    }
})

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all data"})
        }
        const existingUser = await User.findOne({
            where: {
                email: email,
            }
        }) 
        if (!existingUser) {
            return res.status(404).json({ message: "User not found"})
        }
        const hashedPassword = existingUser.password
        const isPasswordMatch = await bcrypt.compare(password, hashedPassword)
        console.log(isPasswordMatch)
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid password"})
        }
        res.status(200).json({ message: "Login successful" })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })   
    }
})

export default router