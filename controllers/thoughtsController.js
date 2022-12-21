const { Thought, User } = require('../models')

module.exports = {
    // Get all thoughts

    // Get a single thought by its ID

    // Create a new thought
async createThought(req, res) {
    try {
        const newThought = await Thought.create(req.body);
        const updatedUser = await User.findOneAndUpdate(
         { _id: req.body.userId },
         { $push: { thoughts: newThought }},   
         { new: true },
        )
        if(!updatedUser) {
            return res.status(404).json({ message: 'No user with this id!'})
        }
        res.json(newThought)
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

    // Update a thought by its ID
    
    // Remove a thought by its ID

    // Create a reaction store in a single thought's reaction array

    // Remove a reaction by its reactionID

}