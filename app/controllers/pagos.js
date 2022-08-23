const Pagos = require('../models/pagos');
const MetodoPago = require('../models/metodopago');

const obtenerPagos = async (req, res) => {
    
    try {
        const getPay = await Pagos.findAll();
        // Pregunta si existen pagos, devuelve todos
        // caso contrario devuelve un mensaje
        // que no existen datos en la tabla pagos
        getPay.length
        ? res.json(getPay)
        : res.json({
            msg: 'No existen pagos actualmente'
        })
    } catch (error) {
        res.json({
            ok: false,
            msg: 'No se pudo obtener los pagos',
            error: error
        })
    }

}

const obtenerPago = async (req, res) => {
    const { id } = req.params
    
    try {

        const pago = await Pagos.findByPk( id );
        res.json(pago);

    } catch (error) {
        res.json({
            ok: false,
            msg: 'Hubo un error, no se encontro el pago'
        })
    }

}

const eliminarPago = async (req, res) => {
    const { id } = req.params

    try {
        
        const deletePago = await Pagos.destroy({
            where: { id_pago: id },
        })

        res.json({
            ok: true,
            msg: 'Se elimino correctamente el pago',
            data: deletePago
        })

    } catch (error) {
        res.json({
            ok: false,
            msg: 'Hubo un error, no se pudo eliminar el pago'
        })
    }

}

module.exports = {
    obtenerPagos,
    obtenerPago,
    eliminarPago
}