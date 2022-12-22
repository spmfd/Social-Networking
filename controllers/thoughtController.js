const { Thought, User } = require('../models')

module.exports = {
    // Get all thoughts
    getThoughts(req, res) {
        Thought.find()
        .select('-__v')
        .then((thoughtdata) => res.json(thoughtdata))
        .catch((err) => res.status(500).json(err))
    },

    // Get a single thought by its ID
    getThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
          .select('-__v')
          .then((thought) => {
          if (!thought) {
            res.status(404).json({ message: 'Thought not found'})
            return;
          }
          res.json(thought)
        }) .catch((err) => {
            res.status(404).json(err)
        })
    },
    // Create a new thought
    createThought(req, res) {
      Thought.create({
        thoughtText: req.body.thoughtText,
        username: req.body.username,
      })
      .then((thoughtData) => {
        User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thoughtData._id }},
          { new: true },
        )
        .then((userData) => res.json(userData))
        .catch((err) => res.status(400).json(err))
      })
      .catch((err) => res.status(404).json(err))
    },

    // Update a thought by its ID
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            req.body,
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
            { _id: req.params.thoughtId } 
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
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      )
        .then((dbThoughtData) => {
          if (!dbThoughtData) {
            return res.status(404).json({ message: 'No thought with this id!' });
          }
          res.json(dbThoughtData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    }};