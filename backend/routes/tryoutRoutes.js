import express from 'express'
import Tryout from '../model/Tryout.js'

const router = express.Router()

// Retrieve tryout data
router.get('/tryout', async (req, res) => {
    try {
        const tryout = await Tryout.findAll()
        if (tryout.length == 0) {
            return res.status(404).json({ message: 'There is no tryout yet'})
        }
        res.status(200).json({ tryout })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error'})
    }
})

export default router