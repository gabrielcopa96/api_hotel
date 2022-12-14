const Sequelize = require('sequelize');
const db = require('../utils/database');

const MetodoPago = db.define('MetodoPagos', {
    id_metodo: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, { timestamps: false })

module.exports = MetodoPago;