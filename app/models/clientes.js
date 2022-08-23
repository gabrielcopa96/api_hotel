const Sequelize = require('sequelize');
const db = require('../utils/database');

const Clientes = db.define('clientes', {
    id_cliente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    apellido: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    telefono: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    documento_unico: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
    edad: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, { timestamps: false, freezeTableName: true })

module.exports = Clientes;