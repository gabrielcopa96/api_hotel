const Reservas = require('../models/reservas');
const Clientes = require('../models/clientes');
const Pagos = require('../models/pagos');
const MetodoPago = require('../models/metodopago');
const Habitaciones = require('../models/habitacion');


// Uno a uno
MetodoPago.hasMany(Pagos, { as: 'metodos', foreignKey: 'metodoId'});
Pagos.belongsTo(MetodoPago, { as: 'metodos', foreignKey: 'metodoId'});


