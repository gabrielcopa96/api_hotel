const Sequelize = require('sequelize');

// Conexion a la base de datos postgres
const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        dialect: 'postgres'
    }
)

module.exports = sequelize;