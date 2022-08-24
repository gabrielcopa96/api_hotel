const Pagos = require('../models/pagos');
const MetodoPago = require('../models/metodopago');

const obtenerPagos = async (req, res) => {
    
    try {
        const getPay = await Pagos.findAll({
            include: MetodoPago
        });
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
            error
        })
    }

}

const obtenerPago = async (req, res) => {
    const { id } = req.params
    
    try {

        const pago = await Pagos.findByPk( id, {
            include: MetodoPago
        } );
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

const actualizarPago = async (req, res) => {
    const { id } = req.params
    try {
        
        const pago = await Pagos.findByPk( id );

        pago.set(req.body);
        await pago.save();

        res.json({
            ok: true,
            msg: 'Se actualizo correctamente el pago',
            pago
        })

    } catch (error) {
        
        res.json({
            ok: false,
            msg: 'Hubo un error, no se pudo actualizar el pago'
        })
        
    }
}

module.exports = {
    obtenerPagos,
    obtenerPago,
    eliminarPago,
    actualizarPago
}