// src/routes/index.js
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.use('/usuarios', require('./usuarios'));
router.use('/login', require('./login'));
router.use('/transacciones', auth, require('./transacciones'));
router.use('/categorias', auth, require('./categorias'));
router.use('/presupuestos', auth, require('./presupuestos'));

module.exports = router;