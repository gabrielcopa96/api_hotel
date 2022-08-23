const Sequelize = require('sequelize');
const db = require('../utils/database');
const MetodoPago = require('./metodopago');


const Pagos = db.define('pagos', {
    id_pago: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    id_metodopago: {
        type: Sequelize.INTEGER,
        references: {
            model: 'metodopagos',
            key: 'id_metodo'
        }
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
}, { timestamp: false})


MetodoPago.hasMany(Pagos, {
    foreignKey: 'id_metodopago'
});
Pagos.belongsTo(MetodoPago);


module.exports = Pagos;
