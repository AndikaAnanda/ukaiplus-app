import Answer from '../model/Answer.js'
import Tryout from '../model/Tryout.js'
import Question from '../model/Question.js'

// Store mini-tryout answers
export const createAnswers = async (req, res) => {
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
}


// Retrieve answers of a tryout
export const readAnswer = async (req, res) => {
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
}