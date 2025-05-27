const Comment = require('../models/Comment');

exports.getComments = async (req, res) => {
  const comments = await Comment.find().populate('user', 'name');
  res.json(comments);
};

exports.addComment = async (req, res) => {
  const comment = await Comment.create({ text: req.body.text, user: req.user._id });
  res.status(201).json(comment);
};

exports.deleteComment = async (req, res) => {
  await Comment.findByIdAndDelete(req.params.id);
  res.json({ message: 'Comment deleted' });
};
