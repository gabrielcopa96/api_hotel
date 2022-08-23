const controller = require('../controllers/metodopago');
const router = require('express').Router();

// CRUD METODO PAGO -> EL POST SE HACE VEZ 
router
    .get('/', controller.obtenerMetodoPago)
    .get('/:id', controller.obtenerUnMetodoPago)
    .post('/', controller.crearMetodoPago);

module.exports = router;