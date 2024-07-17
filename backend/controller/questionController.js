import Question from '../model/Question.js'
import sequelize from '../config/database.js'

// Retrieve 80 mini-tryout questions
export const readQuestion = async (req, res) => {
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
}

// Retrieve discussion of a question
export const readDiscussion = async (req, res) => {
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
}