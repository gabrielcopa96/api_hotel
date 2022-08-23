const Pagos = require('../models/pagos');

const obtenerPagos = async (req, res) => {
    try {
        const getPay = await Pagos.findAll();
        res.json(getPay);
    } catch (error) {
        res.json({
            ok: false,
            msg: 'No se pudo obtener los pagos',
            error: errorssssssss
        })
    }
}

module.exports = {
    obtenerPagos
}