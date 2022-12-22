const { Thought, User } = require('../models')

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .select("-__v")
        .then((thoughtdata) => res.json(thoughtdata))
        .catch((err) => res.status(500).json(err))
    },
    // Get a single thought by its ID
    getThought(req, res) {
        Thought.findOne({ _id: req.params.userId })
          .select("-__v")
          .then((user) => {
          if (!user) {
            res.status(404).json({ message: "Thought not found"})
            return;
          }
          res.json(user)
        }) .catch((err) => {
            res.status(404).json(err)
        })
    },
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
},

    // Update a thought by its ID
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            body,
            { new: true}
        ).then(updatedThought => 
            !updatedThought
                ? res.status(404).json({ message: 'No thought found with this id!'})
                : res/json(updatedThought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Remove a thought by its ID
    deleteThought (req, res) {
        Thought.findOneAndDelete(
            { _id: params.thoughtId } 
        )
        .then((thoughtData) => res.json(thoughtData))
        .catch((err) => res.status(400).json(err))
    },
    // Create a reaction store in a single thought's reaction array
    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
          { _id: params.thoughtId },
          { $addToSet: { reactions: body } },
          { new: true, }
        )
          .then((thoughtData) => {
            if (!thoughtData) {
              res.status(404).json({ message: 'No thought found with this id' });
              return;
            }
            res.json(thoughtData);
          })
          .catch((err) => res.status(400).json(err));
      },
    // Remove a reaction by its reactionID
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { friends: req.params.friendId } },
            { new: true }  
        )
        .then((res) => res.json(res))
        .catch((err) => res.status(500).json(err));
    }
};