const express = require('express');
const router = express.Router();
const { getComments, addComment, deleteComment } = require('../controllers/commentController');
const { authorize } = require('../middlewares/auth');

router.get('/', authorize('read'), getComments);
router.post('/', authorize('write'), addComment);
router.delete('/:id', authorize('delete'), deleteComment);

module.exports = router;
