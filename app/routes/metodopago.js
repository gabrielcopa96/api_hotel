const controller = require('../controllers/metodopago');
const router = require('express').Router();

// CRUD METODO PAGO
router
    .get('/', controller.obtenerMetodoPago)
    .post('/', controller.crearMetodoPago);

module.exports = router;