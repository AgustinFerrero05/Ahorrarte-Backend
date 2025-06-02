// src/routes/presupuestos.js
const express = require('express');
const router = express.Router();
const { Presupuesto } = require('../models');

router.get('/', async (req, res) => {
  const presupuestos = await Presupuesto.findAll({ where: { UsuarioId: req.usuarioId } });
  res.json(presupuestos);
});

router.post('/', async (req, res) => {
  const presupuesto = await Presupuesto.create({ ...req.body, UsuarioId: req.usuarioId });
  res.status(201).json(presupuesto);
});

router.put('/:id', async (req, res) => {
  await Presupuesto.update(req.body, { where: { id: req.params.id, UsuarioId: req.usuarioId } });
  res.json({ mensaje: 'Presupuesto actualizado' });
});

router.delete('/:id', async (req, res) => {
  await Presupuesto.destroy({ where: { id: req.params.id, UsuarioId: req.usuarioId } });
  res.json({ mensaje: 'Presupuesto eliminado' });
});

module.exports = router;
