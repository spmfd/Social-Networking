const router = require('express').Router();

const {
  getThoughts,
  getThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// General Thoughts Route
router.route('/').get(getThoughts).post(createThought);

// Manipulating individual thoughts by ID Route
router.route('/:thoughtId').get(getThought).put(updateThought).delete(deleteThought);

// Adding Reactions to thoughts Route
router.route('/:thoughtId/reactions').post(addReaction);

// Deleting Reactions Route
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;