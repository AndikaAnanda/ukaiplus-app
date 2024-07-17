import User from "../model/User.js"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

// Register
export const register = async (req, res) => {
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
}

// Login
export const login = async (req, res) => {
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
        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid password"})
        }
        // Create token
        const token = jwt.sign({ userId: existingUser.user_id }, process.env.JWT_SECRET, { expiresIn: '3h' })
        
        // Send token to cookie
        res.cookie('token', token, {
            httpOnly:true
        })
        res.status(200).json({ message: "Login successful", token })
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })   
    }
}

// Logout
export const logout = (req, res) => {
    res.cookie('token', '', {
        expires: new Date(0),
        httpOnly: true
    })
    res.status(200).json({ message: "Logout successful" })   
}
