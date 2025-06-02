// src/models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = require('./usuario')(sequelize, DataTypes);
const Categoria = require('./categoria')(sequelize, DataTypes);
const Transaccion = require('./transaccion')(sequelize, DataTypes);
const Presupuesto = require('./presupuesto')(sequelize, DataTypes);

Usuario.hasMany(Categoria);
Categoria.belongsTo(Usuario);

Usuario.hasMany(Transaccion);
Transaccion.belongsTo(Usuario);
Transaccion.belongsTo(Categoria);

Usuario.hasMany(Presupuesto);
Presupuesto.belongsTo(Usuario);
Presupuesto.belongsTo(Categoria);

module.exports = {
  sequelize,
  Usuario,
  Categoria,
  Transaccion,
  Presupuesto,
};
