import express from 'express'
import { readTryouts } from '../controller/tryoutController.js'

const router = express.Router()

// Retrieve tryout data
router.get('/tryout', readTryouts)

export default router