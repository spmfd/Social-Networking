const { User } = require('../models')

module.exports = {
    // Get all users

    // Get a single user by its ID and populated thought and friend data

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
    }

    // Delete a friend from user list
};