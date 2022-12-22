const router = require('express').Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// General Users Route
router.route('/').get(getUsers).post(createUser);

// Manipulating individual Users by ID
router.route('/:userId').get(getUser).put(updateUser).delete(deleteUser);

// Adding or Deleting friends from Users
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;