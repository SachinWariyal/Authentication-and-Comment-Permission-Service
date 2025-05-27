const express = require('express');
const router = express.Router();
const { signup, login, refresh, logout, forgotPassword } = require('../controllers/authController');
const { authenticate } = require('../middlewares/auth');

router.post('/signup', signup);
router.post('/login', login);
router.post('/refresh', refresh);
router.post('/logout', authenticate, logout);
router.post('/forgot-password', forgotPassword);

module.exports = router;
