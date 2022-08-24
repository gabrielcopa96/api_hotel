const Sequelize = require('sequelize');
const db = require('../utils/database');
const MetodoPago = require('./metodopago');


const Pagos = db.define('Pagos', {
    id_pago: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    monto: {
        type: Sequelize.FLOAT,
    },
    saldo: {
        type: Sequelize.FLOAT,
    },
    total: {
        type: Sequelize.FLOAT,
    }
}, { timestamps: false})


module.exports = Pagos;
