const MetodoPago = require('../models/metodopago');

const obtenerMetodoPago = async (req, res) => {
    try {
        const getMethodPay = await MetodoPago.findAll();
        getMethodPay.length
        ? res.json(getMethodPay)
        : res.json({
            msg: 'No existen metodos de pagos actualmente'
        })
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
    },
    {
        tipo: 'transferencia'
    }
]

const crearMetodoPago = async (req, res) => {
    try {
        const existMetodos = await MetodoPago.findAll()
        if(!existMetodos.length) {
            const newMethodPay = await MetodoPago.bulkCreate(metodos)
            return res.json(newMethodPay);
        } else {
            return res.json({
                msg: 'Ya existen los metodos de pago'
            })
        }
    } catch (error) {
        res.json({
            ok: false,
            msg: 'No se pudo crear los metodos de pagos',
            error: error
        })
    }
}

const obtenerUnMetodoPago = async (req, res) => {
    const { id } = req.params
    try {
        
        const metodopago = await MetodoPago.findByPk( id );
        res.json(metodopago);

    } catch (error) {
        
        res.json({
            ok: false,
            msg: 'Hubo un error no se pudo obtener el metodo de pago'
        })
        
    }
}

module.exports = {
    obtenerMetodoPago,
    crearMetodoPago,
    obtenerUnMetodoPago
}