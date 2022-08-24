const controller = require('../controllers/pagos');
const router = require('express').Router();

// CRUD Pagos
router
    .get('/', controller.obtenerPagos)
    .get('/:id', controller.obtenerPago)
    .put('/:id', controller.actualizarPago)
    .delete('/:id', controller.eliminarPago);

module.exports = router;