import express from 'express'
import { readQuestion, readDiscussion } from '../controller/questionController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// Retrieve 80 mini-tryout questions
router.get('/question/mini/:topic_id', authMiddleware, readQuestion)

// Retrieve discussion of a question
router.get('/discussion/:question_id', authMiddleware, readDiscussion)

export default router