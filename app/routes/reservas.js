const controller = require('../controllers/reservas');
const router = require('express').Router();

// CRUD Reservas
router
    .get('/', controller.obtenerReservas)
    .post('/', controller.crearReserva)
    .get('/:id', controller.obtenerUnaReserva)
    .put('/:id?status=status', controller.actualizarEstadoReserva)
    .delete('/:id', controller.eliminarReserva);

module.exports = router;