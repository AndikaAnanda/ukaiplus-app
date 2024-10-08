import User from '../model/User.js'

// Retrieve all users data
export const readUsers = async (req, res) => {
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
}

export const readCurrentUser = async (req, res) => {
    try {
        const userId = parseInt(req.user.userId)
        if(isNaN(userId)) {
            return res.status(400).json({ message: 'Invalid user_id'})
        }
        if(!userId) {
            return res.status(404).json({ message: 'User not found'})
        }
        const user = await User.findByPk(userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found'})
        }
        res.status(200).json({ user })
    } catch {
        res.status(500).json({ message: "Internal server error" })  
    }
}

// Update user data
export const updateUser = async (req, res) => {
    try {
        const { fullName, username, email } = req.body
        const userId = parseInt(req.params.user_id)
        if(!fullName || !username || !email || isNaN(userId)) {
            return res.status(400).json({ message: 'Invalid request'})
        }
        await User.update({
            full_name: fullName,
            username: username,
            email: email,
        }, 
        {
            where: {
                user_id: userId
            }
        })
        res.status(200).json({ message: 'User data updated successfully'})
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })   
    }
}