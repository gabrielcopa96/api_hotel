const Sequelize = require('sequelize');
const db = require('../utils/database');
const Clientes = require('./clientes');
const Pagos = require('./pagos');
const Habitacion = require('./habitacion')


const Reservas = db.define(
  "Reservas",
  {
    id_reserva: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    descripcion: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    estado: {
      type: Sequelize.ENUM,
      values: ['Pendiente', 'Pagado', 'Eliminado']
    },
    dias: {
      type: Sequelize.INTEGER,
    }
  },
  { timestamps: false }
);

module.exports = Reservas;