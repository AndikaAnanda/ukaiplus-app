import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided'})
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET || 'alhamdulillah')
        req.user = verified
        next()
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' })
    }
}

export default authMiddleware