const Sequelize = require('sequelize');
const db = require('../utils/database');

const Clientes = db.define('clientes', {
    id_cliente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    Apellido: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefono: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    documento_unico: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    edad: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, { timestamp: false })

module.exports = Clientes;