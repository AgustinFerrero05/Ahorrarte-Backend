// src/routes/categorias.js
const express = require('express');
const router = express.Router();
const { Categoria } = require('../models');

router.get('/', async (req, res) => {
  const categorias = await Categoria.findAll({ where: { UsuarioId: req.usuarioId } });
  res.json(categorias);
});

router.post('/', async (req, res) => {
  const categoria = await Categoria.create({ ...req.body, UsuarioId: req.usuarioId });
  res.status(201).json(categoria);
});

router.put('/:id', async (req, res) => {
  await Categoria.update(req.body, { where: { id: req.params.id, UsuarioId: req.usuarioId } });
  res.json({ mensaje: 'Categoría actualizada' });
});

router.delete('/:id', async (req, res) => {
  await Categoria.destroy({ where: { id: req.params.id, UsuarioId: req.usuarioId } });
  res.json({ mensaje: 'Categoría eliminada' });
});

module.exports = router;