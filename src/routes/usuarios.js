// src/routes/usuarios.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');

router.post('/', async (req, res) => {
  try {
    const { nombre, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = await Usuario.create({ nombre, email, password: hashedPassword });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: 'No se pudo crear el usuario', detalle: error.message });
  }
});

module.exports = router;