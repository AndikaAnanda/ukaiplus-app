import express from 'express'
import User from '../model/User.js'
import Topic from '../model/Topic.js'
import Question from '../model/Question.js'
import Tryout from '../model/Tryout.js'
import Answer from '../model/Answer.js'
import sequelize from '../config/database.js'

const router = express.Router()

// Retrieve all users data
router.get('/user', async (req, res) => {
    try {
        const user = await User.findAll({
            attributes: [
                'user_id', 'full_name', 'username', 'email'
            ],
        })
        res.status(200).json({ user })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })   
    }
})


// Retrieve 80 mini-tryout questions
router.get('/question/mini/:topic_id', async (req, res) => {
    try {
        const topicId = parseInt(req.params.topic_id)
        if(isNaN(topicId)) {
            return res.status(400).json({ message: 'Invalid topic' })
        }
        const questions = await Question.findAll({
            where: {
                topic_id: topicId
            },
            order: sequelize.literal('RAND()'),
            limit: 80
        })
        res.status(200).json({ questions })   
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })   
    }
})

// Retrieve discussion of a question
router.get('/discussion/:question_id', async (req, res) => {
    try {
        const questionId = parseInt(req.params.question_id)
        if(isNaN(questionId)) {
            return res.status(400).json({ message: 'Invalid question'})
        }
        const discussion = await Question.findOne({
            where: {
                question_id: questionId
            },
            attributes: [
                'discussion'
            ]
        })
        if (!discussion) {
            return res.status(404).json({ message: 'Question not found'})
        }
        res.status(200).json({ discussion: discussion.discussion })
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error'})
    }
})

// Store tryouts
router.post('/tryouts', async (req, res) => {
    try {
        const { tryoutName, userId, tryoutType, duration } = req.body
        if (!tryoutName || !tryoutType || !duration || !userId) {
            return res.status(400).json({ message: 'Please fill all data'})
        }
        const isUserIdExist = await User.findByPk(userId)
        if (!isUserIdExist) {
            return res.status(404).json({ message: 'User not found'})
        }
        await Tryout.create({
            tryout_name: tryoutName,
            tryout_type: tryoutType,
            duration: duration,
            user_id: userId,
        })
        res.status(200).json({ message: "Tryout successfully stored"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error'})
    }
})

// Retrieve tryout result of a user
router.get('/tryout/:user_id', async (req, res) => {
    try {
        const userId = parseInt(req.params.user_id)
        if(isNaN(userId)) {
            return res.status(400).json({ message: 'Invalid user'})
        }
        const tryout = await Tryout.findAll({
            where: {
                user_id: userId
            }
        })
        if (tryout.length === 0) {
            return res.status(404).json({ message: 'User not found'})
        }
        res.status(200).json({ tryout })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error'})
    }
})

// Store mini-tryout answers
router.post('/answers', async (req, res) => {
    try {
        const { tryoutId, answers } = req.body
        if (!tryoutId || !Array.isArray(answers) || answers.length === 0) {
            return res.status(400).json({ message: 'Please provide tryout_id and answers data'})
        }
        for (const answer of answers) {
            if (!answer.questionId || answer.isMarked == null) {
                return res.status(400).json({ message: 'Please complete each answer data'})
            }
        }
        const isTryoutExist = await Tryout.findByPk(tryoutId)
        if (!isTryoutExist) {
            return res.status(404).json({ message: 'Tryout not found'})
        }
        const processedAnswer = await Promise.all(answers.map(async a => {
            const question = await Question.findByPk(a.questionId)
            if(!question) {
                throw new Error(`Question with id ${a.questionId} is not found`)
            }
            const isCorrect = question.correct_answer === a.answer
            return {
                tryout_id: tryoutId,
                question_id: a.questionId,
                answer: a.answer,
                is_correct: isCorrect,
                is_marked: a.isMarked
            } 
        }))
        await Answer.bulkCreate(processedAnswer)
        res.status(200).json({ message: "Answer successfully stored"})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error'})
    }
})


// Retrieve answers of a tryout
router.get('/answers/:tryout_id', async (req, res) => {
    try {
        const tryoutId = parseInt(req.params.tryout_id)
        console.log(tryoutId)
        if (isNaN(tryoutId)) {
            return res.status(400).json({ message: 'Invalid tryout'})
        }
        const answer = await Answer.findAll({
            where: {
                tryout_id: tryoutId
            }
        })
        if (answer.length === 0) {
            return res.status(404).json({ message: 'Tryout not found'})
        }
        res.status(200).json({ answer })
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' })
    }
})



export default router