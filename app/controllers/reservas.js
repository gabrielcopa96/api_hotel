const Reservas = require('../models/reservas');
const Pagos = require('../models/pagos');

const obtenerReservas = async (req, res) => {
    try {
        const getReserve = await Reservas.findAll();
        // Pregunto si existen reservas
        getReserve.length
        ? res.json(getReserve)
        : res.json({
            msg: 'No existen reservas'
        })
    } catch (error) {
        res.json({
            ok: false,
            msg: 'Hubo un error, no se alcanzo a obtener las reservas',
            error: error
        })
    }
}

const crearReserva = async (req, res) => {
    const { id_habitacion, estado, descripcion, id_cliente, total, id_metodopago, monto } = req.body

    try {
        // Solo se puede crear una reserva si el cliente ya tiene los datos en la base de datos
        // en caso contrario primero se carga los datos del cliente que quiere hacer la reserva
        // y recien poder hacer la reserva.
        if(id_cliente) {

            const pago = {
                total,
                id_metodopago,
                monto,
                saldo: total - monto
            }

            // Creamos el pago, junto a su medio de pago
            const newPago = await Pagos.create(pago);

            const reserve = {
                id_cliente,
                id_pago: newPago.id_pago,
                id_habitacion,
                estado,
                descripcion
            }

            // se hace crea la nueva reserva, con los datos del cliente, su habitacion
            // junto al metodo de pago utiizado.
            const newReserve = await Reservas.create(reserve);
            
            return res.json(newReserve);

        } else {
            // devuelve un mensaje, el cual no se puede crear una reserva, antes tiene
            // que cargar los datos del cliente a la base de datos para poder realizar
            // la reserva
            return res.json({
                msg: 'No se pudo crear la reserva, necesita cargar antes los datos del cliente'
            })
        }
    } catch (error) {
        // Devuelve un mensaje de error, de que hubo un error y no se pudo crear la reserva
        res.json({
            ok: false,
            msg: "Hubo un error, no se alcanzo a crear la reserva",
            error: error,
        });
    }
}

const obtenerUnaReserva = async (req, res) => {
    const { id } = req.params
    try {
        const reserve = await Reservas.findByPk(id);
        reserve.length
        ? res.json(reserve)
        : res.json({
            ok: false,
            msg: 'No se encontro la reserva con ese id'
        })
    } catch (error) {
        res.json({
            ok: false,
            msg: 'No se pudo obtener la reserva no existe el id'
        })
    }
}

const actualizarEstadoReserva = async (req, res) => {
    const { id } = req.params
    try {
        const reserve = await Reservas.findByPk( id );
        reserve.set({
            estado: req.query.status
        })
        await reserve.save();
        res.json(reserve);
    } catch (error) {
        res.json({
            ok: false,
            msg: 'No se pudo actualizar el estado'
        })
    }
}

const eliminarReserva = async (req, res) => {
    const { id } = req.params
    try {
        const deleteReserve = await Reservas.destroy({
            where: { id_reserva: id }
        })
        res.json({
            ok: true,
            msg: 'Se elimino correctamente la reserva',
            data: deleteReserve
        })
    } catch (error) {
        res.json({
            ok: false,
            msg: 'No se logro eliminar la reserva'
        })
    }
}

module.exports = {
    obtenerReservas,
    crearReserva,
    obtenerUnaReserva,
    actualizarEstadoReserva,
    eliminarReserva
}