const Sequelize = require('sequelize');
const db = require('../utils/database');

const Habitacion = db.define('habitaciones', {
    id_habitacion: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    codigo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    piso: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: false })

module.exports = Habitacion;