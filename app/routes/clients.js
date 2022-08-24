const controller = require('../controllers/clientes');
const router = require('express').Router();

//CRUD clientes
router
    .get('/', controller.obtenerClientes)
    .post('/', controller.crearCliente)
    .get('/:id', controller.obtenerUnCliente)
    .put('/:id', controller.actualizarCliente);

module.exports = router;