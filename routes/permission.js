const express = require('express');
const router = express.Router();
const { updatePermissions } = require('../controllers/permissionController');

router.post('/', updatePermissions);

module.exports = router;
