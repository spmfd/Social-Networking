const router = require('express').Router();
const {
  createUser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(createUser);

// /api/users/:userId
// router.route('/:userId').get(getSingleUser);

module.exports = router;