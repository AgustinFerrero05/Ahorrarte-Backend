// src/routes/transacciones.js
const express = require('express');
const router = express.Router();
const { Transaccion } = require('../models');

router.get('/', async (req, res) => {
  const transacciones = await Transaccion.findAll({ where: { UsuarioId: req.usuarioId } });
  res.json(transacciones);
});

router.post('/', async (req, res) => {
  const transaccion = await Transaccion.create({ ...req.body, UsuarioId: req.usuarioId });
  res.status(201).json(transaccion);
});

router.put('/:id', async (req, res) => {
  await Transaccion.update(req.body, { where: { id: req.params.id, UsuarioId: req.usuarioId } });
  res.json({ mensaje: 'Transacción actualizada' });
});

router.delete('/:id', async (req, res) => {
  await Transaccion.destroy({ where: { id: req.params.id, UsuarioId: req.usuarioId } });
  res.json({ mensaje: 'Transacción eliminada' });
});

module.exports = router;
