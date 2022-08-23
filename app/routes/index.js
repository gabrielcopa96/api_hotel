const controller = require('../controllers');
const router = require('express').Router();

// importo todas las rutas que necesito
const rutasClientes = require('./clients');
const rutasMetodoPago = require('./metodopago');
const rutasReservas = require('./reservas');
const rutasHabitaciones = require('./habitaciones');
const rutasPagos = require('./pagos');

router.get('/version', controller.version);
router.use('/clientes', rutasClientes);
router.use('/metodos', rutasMetodoPago);
router.use('/reservas', rutasReservas);
router.use('/habitaciones', rutasHabitaciones);
router.use('/pagos', rutasPagos);


module.exports = router;