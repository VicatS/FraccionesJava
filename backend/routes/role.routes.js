'use strict'
const express = require('express');
const router = express.Router();

const role = require('../controllers/role.controller'); //role contiene todas las funciones(CRUD)

router.get('/', role.getRoles);
router.post('/', role.createRole);
router.get('/:id', role.getRole);
router.put('/:id', role.editRole);
router.delete('/:id', role.deleteRole);

module.exports = router;