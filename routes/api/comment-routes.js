const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// /api/comments/:<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/:<pizzaId/:<commentId> *** WE NEED TWO PARAMS BECAUSE WE NEED TO KNOW WHICH PIZZA THAT COMMENT CAME FORM
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;