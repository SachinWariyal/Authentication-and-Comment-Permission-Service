const User = require('../models/User');

exports.updatePermissions = async (req, res) => {
  const { userId, permissions } = req.body;
  await User.findByIdAndUpdate(userId, { permissions });
  res.json({ message: 'Permissions updated' });
};
