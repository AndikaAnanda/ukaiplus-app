import express from 'express'
import { createAnswers, readAnswer } from '../controller/answerController.js'
import authMiddleware from '../middleware/authMiddleware.js'


const router = express.Router()

// Store all answers
router.post('/answer', authMiddleware, createAnswers)

// Read answer by tryout_id
router.get('/answer/:tryout_id', authMiddleware, readAnswer)

export default router