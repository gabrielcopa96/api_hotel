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
Reservas.belongsTo(Pagos, { 
    foreignKey: 'pagoId',
    targetId: 'id_reserva'
});

// Uno a Uno
Clientes.hasOne(Reservas, { 
    foreignKey: 'clienteId',
    sourceKey: 'id_cliente'
});

Reservas.belongsTo(Clientes, { 
    foreignKey: 'clienteId',
    targetId: 'id_reserva'
});

Habitaciones.hasOne(Reservas, { 
    foreignKey: 'habitacionId',
    sourceKey: 'id_habitacion'
});
Reservas.belongsTo(Habitaciones, { 
    foreignKey: 'habitacionId',
    targetId: 'id_reserva'
})

