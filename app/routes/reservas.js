const controller = require('../controllers/reservas');
const router = require('express').Router();

// CRUD Reservas
router
    .get('/', controller.obtenerReservas)
    .get('/:id', controller.obtenerUnaReserva)
    .post('/', controller.crearReserva)
    .put('/:id', controller.actualizarEstadoReserva)
    .delete('/:id', controller.eliminarReserva);

module.exports = router;