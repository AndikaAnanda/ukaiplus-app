import express from 'express'
import { createResults, readResult, readResults } from '../controller/resultController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// Store tryout result
router.post('/result', authMiddleware, createResults)

// Retrieve all user tryout results
router.get('/result', authMiddleware, readResult)

// Retrieve user tryout result
router.get('/result/:user_id', authMiddleware, readResults)

export default router