const controller = require('../controllers/habitaciones');
const router = require('express').Router();

//CRUD Habitaciones
router
    .get('/', controller.obtenerHabitaciones)
    .get('/:id', controller.obtenerUnaHabitacion)
    .post('/', controller.crearHabitaciones);

module.exports = router;