const controller = require('../controllers/habitaciones');
const router = require('express').Router();

router.get('/', controller.obtenerHabitaciones);

module.exports = router;