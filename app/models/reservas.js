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
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Pending"
    },
    id_habitacion: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'habitaciones',
        key: "id_habitacion"
      }
    },
    id_cliente: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'clientes',
        key: "id_cliente"
      },
    },
    id_pago: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'pagos',
        key: "id_pago"
      },
    },
  },
  { timestamps: false }
);

Clientes.hasOne(Reservas);
// Reservas.belongsTo(Clientes);

Pagos.hasMany(Reservas);
// Reservas.belongsTo(Pagos)

Habitacion.hasOne(Reservas);
// Reservas.belongsTo(Habitacion)

module.exports = Reservas;