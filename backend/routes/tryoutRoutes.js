import express from 'express'
import { readTryout, readTryouts } from '../controller/tryoutController.js'

const router = express.Router()

// Retrieve tryout data
router.get('/tryout', readTryouts)
router.get('/tryout/:tryout_id', readTryout)

export default router