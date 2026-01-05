const express = require('express');
const router = express.Router();

// infrastructure
const db = require('../db/connection');

// repository
const userRepository = require('../repositories/userRepository')(db);

// service
const userService = require('../services/userService')(userRepository);

// controller
const userController = require('../controllers/userController')(userService);

// routes
router.post('/', userController.addUser);
router.delete('/:id', userController.deleteUser);
router.get('/api/users', userController.getUsers);
router.put('/:id', userController.updateUser);

module.exports = router;
