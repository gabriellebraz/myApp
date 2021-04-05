const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuariosController');

/* GET users listing. */
router.get('/', usuarioController.index);

module.exports = router;
