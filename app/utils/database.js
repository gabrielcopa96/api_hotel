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
// const sequelize = new Sequelize('postgres://wnebqixynzskoa:d3f4b9884ca672866239217b6fd297d706f4c12f61f7efd0d4a0ed29ae73622d@ec2-44-193-178-122.compute-1.amazonaws.com:5432/d2e7jgnjs2503b', {
//     dialect: 'postgres'
// })

module.exports = sequelize;