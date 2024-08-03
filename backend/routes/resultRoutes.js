import express from 'express'
import { createResults, readResult, readResults, readCurrentResult } from '../controller/resultController.js'
import authMiddleware from '../middleware/authMiddleware.js'
import { checkMeMiddleware } from '../middleware/checkMeMiddleware.js'

const router = express.Router()

// Store tryout result
router.post('/result', authMiddleware, createResults)

// Retrieve all user tryout results
router.get('/result', authMiddleware, readResults)

// Retrieve user tryout result
router.get('/result/:user_id', authMiddleware, checkMeMiddleware, readResult)

// Retrieve current user tryout result
router.get('/result/me', authMiddleware, readCurrentResult)

export default router