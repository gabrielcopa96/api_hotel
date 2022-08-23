const controller = require('../controllers/clientes');
const router = require('express').Router();

//CRUD clientes
router
    .get('/', controller.obtenerClientes)
    .post('/', controller.crearCliente)
    .get('/:id', controller.obtenerUnCliente);


    // .get('/', controller.getAllClients)
    // .post('/', controller.createOneClient)
    // .put('/:id', controller.updateOneClient)
    // .delete('/:id', controller.deleteOneClient);

module.exports = router;