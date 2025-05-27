const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  permissions: [String], // ['read', 'write', 'delete']
  refreshToken: String
});

module.exports = mongoose.model('User', userSchema);
