'use strict'
const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller'); //role contiene todas las funciones(CRUD)

router.get('/', user.getUsers);
router.post('/', user.createUser);
router.get('/:id', user.getUser);
router.put('/:id', user.editUser);
router.delete('/:id', user.deleteUser);

module.exports = router;