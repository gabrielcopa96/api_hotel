const controller = require('../controllers/reservas');
const router = require('express').Router();

router
    .get('/', controller.obtenerReservas)
    .post('/', controller.crearReserva);

module.exports = router;