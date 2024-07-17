import express from 'express'
import Result from "../model/Result.js";
import User from '../model/User.js';
import Answer from '../model/Answer.js';

const router = express.Router()

// Store tryout result
router.post('/result', async (req, res) => {
    try {
        const {timeElapsed, userId, tryoutId } = req.body
        if (!timeElapsed || !userId || !tryoutId) {
            return res.status(400).json({ message: 'Please fill all data'})
        }
        const isUserIdExist = await User.findByPk(userId)
        if (!isUserIdExist) {
            return res.status(404).json({ message: 'User not found'})
        }
        const answers = await Answer.findAll({
            where: {
                tryout_id: tryoutId
            }
        })
        if (!answers || answers.length == 0) {
            return res.status(404).json({ message: 'Answers not found for this tryout'})
        }
        const correctAnswer = answers.filter(answer => answer.is_correct).length
        const totalQuestion = 80
        const score = (correctAnswer / totalQuestion) * 100
        
        await Result.create({
            score: score.toFixed(2), // rounding to 2 decimal
            time_elapsed: timeElapsed, // in seconds
            user_id: userId,
            tryout_id: tryoutId
        })
        res.status(200).json({ message: "Tryout result successfully stored"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error'})
    }
})

export default router