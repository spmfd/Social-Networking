const router = require('express').Router();
const {
  createThought,

} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(createThought);

module.exports = router;