// src/models/presupuesto.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Presupuesto', {
    monto: DataTypes.FLOAT,
  });
};