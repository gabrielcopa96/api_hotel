const controller = require('../controllers/pagos');
const router = require('express').Router();

router.get('/', controller.obtenerPagos);

module.exports = router;