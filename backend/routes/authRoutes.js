const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
// The 'protect' middleware runs first. If it passes, 'getMe' executes.
router.get('/me', auth, getMe);

module.exports = router;