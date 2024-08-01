import express from 'express'
import { readTryout, readTryouts } from '../controller/tryoutController.js'
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router()

// Retrieve tryout data
router.get('/tryout', authMiddleware, readTryouts)
router.get('/tryout/:tryout_id', authMiddleware, readTryout)


export default router