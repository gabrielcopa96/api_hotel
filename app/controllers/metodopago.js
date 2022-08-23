const MetodoPago = require('../models/metodopago');

const obtenerMetodoPago = async (req, res) => {
    try {
        const getMethodPay = await MetodoPago.findAll();
        res.json(getMethodPay);
    } catch (error) {
        res.json({
            ok: false,
            msg: 'hubo un error',
            error: error
        })
    }
}

const metodos = [
    {
        tipo: 'Tarjeta de credito'
    },
    {
        tipo: 'Tarjeta de debito'
    },
    {
        tipo: 'Efectivo'
    }
]

const crearMetodoPago = async (req, res) => {
    try {
        const newMethodPay = await MetodoPago.bulkCreate(metodos)
        res.json(newMethodPay);
    } catch (error) {
        res.json({
            ok: false,
            msg: 'No se pudo crear los metodos de pagos',
            error: error
        })
    }
}

module.exports = {
    obtenerMetodoPago,
    crearMetodoPago
}