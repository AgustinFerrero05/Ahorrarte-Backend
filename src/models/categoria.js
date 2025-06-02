// src/models/categoria.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Categoria', {
    nombre: DataTypes.STRING,
  });
};