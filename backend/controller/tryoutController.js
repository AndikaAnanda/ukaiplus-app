import Tryout from '../model/Tryout.js'

// Retrieve tryout data
export const readTryouts = async (req, res) => {
    try {
        const tryout = await Tryout.findAll()
        if (tryout.length == 0) {
            return res.status(404).json({ message: 'There is no tryout yet'})
        }
        res.status(200).json({ tryout })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error'})
    }
}