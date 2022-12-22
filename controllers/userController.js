const { User } = require('../models')

module.exports = {
    // Get all users
    getUsers(req, res) {
        User.find()
        .select("-__v")
        .then((userdata) => res.json(userdata))
        .catch((err) => res.status(500).json(err))
    },
    // Get a single user by its ID and populated thought and friend data
    getUser(req, res) {
        User.findOne({ _id: req.params.id })
          .populate('thoughts')
          .populate('friends')
          .select("-__v")
          .then((userData) => {
          if (!userData) {
            res.status(404).json({ message: "User not found"})
          }
          else res.json(userData)
        }) .catch((err) => {
            res.status(404).json({ message: "This part isn't working"})
        })
    },
    // Post a new User
    createUser(req, res) {
        User.create(req.body).then(newUser => res.json(newUser)).catch( err => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    // Update User by ID
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true}
        ).then(updatedUser => 
            !updatedUser
                ? res.status(404).json({ message: 'No user with this id!'})
                : res/json(updatedUser)
            )
            .catch((err) => res.status(500).json(err));
    },
    // Delete a User by their ID
    deleteUser (req, res) {
        User.findOneAndDelete(
            { _id: req.params.userId } 
        )
        .then((userData) => res.json(userData))
        .catch((err) => res.status(400).json(err))
    },
    // Add a new friend
    addFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        ).then(updatedUser => 
            !updatedUser
                ? res.status(404).json({ message: 'No user with this id!'})
                : res/json(updatedUser)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Delete a friend from user list
    deleteFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }  
        )
        .then((res) => res.json(res))
        .catch((err) => res.status(500).json(err));
    }
};