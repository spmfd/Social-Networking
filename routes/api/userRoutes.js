const router = require('express').Router();
const {
  createUser,
  updateUser,
  addFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(createUser);

// /api/users/:userId
router.route('/:userId').put(updateUser);

router.route('/:userId/friends/:friendId').post(addFriend);

module.exports = router;