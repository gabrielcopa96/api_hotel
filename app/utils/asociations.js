const Reservas = require('../models/reservas');
const Clientes = require('../models/clientes');
const Pagos = require('../models/pagos');
const MetodoPago = require('../models/metodopago');
const Habitaciones = require('../models/habitacion');


// Uno a Muchos
MetodoPago.hasMany(Pagos, {
    foreignKey: 'metodoId',
    sourceKey: 'id_metodo'
});
Pagos.belongsTo(MetodoPago, { 
    foreignKey: 'metodoId',
    targetId: 'id_pago'
});

Pagos.hasMany(Reservas, { 
    foreignKey: 'pagoId',
    sourceKey: 'id_pago'
});
// Pagos.hasMany(Reservas, { as: 'pagos', foreignKey: 'pagoId'});
Reservas.belongsTo(Pagos, { 
    foreignKey: 'pagoId',
    targetId: 'id_reserva'
});
// Reservas.belongsTo(Pagos, { as: 'pagos', foreignKey: 'pagoId'});

// Uno a Uno
Clientes.hasOne(Reservas, { 
    foreignKey: 'clienteId',
    sourceKey: 'id_cliente'
});

// Clientes.hasOne(Reservas, { as: 'clientes', foreignKey: 'clienteId'});
Reservas.belongsTo(Clientes, { 
    foreignKey: 'clienteId',
    targetId: 'id_reserva'
});
// Reservas.belongsTo(Clientes, { as: 'clientes', foreignKey: 'clienteId'});

Habitaciones.hasOne(Reservas, { 
    foreignKey: 'habitacionId',
    sourceKey: 'id_habitacion'
});
// Habitaciones.hasOne(Reservas, { as: 'habitaciones', foreignKey: 'habitacionId'});
Reservas.belongsTo(Habitaciones, { 
    foreignKey: 'habitacionId',
    targetId: 'id_reserva'
})
// Reservas.belongsTo(Habitaciones, { as: 'habitaciones', foreignKey: 'habitacionId'})

