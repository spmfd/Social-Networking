const router = require('express').Router();
const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// api/thoughts/:thoughtid

router.route('/:id').get(getThought).put(updateThought).delete(deleteThought);

// /:thoughtId/reactions

router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;