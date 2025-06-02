// src/models/transaccion.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Transaccion', {
    descripcion: DataTypes.STRING,
    monto: DataTypes.FLOAT,
    tipo: DataTypes.STRING,
  });
};