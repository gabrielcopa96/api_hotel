const Reservas = require('../models/reservas');
const Pagos = require('../models/pagos');
const Habitacion = require('../models/habitacion');
const Cliente = require('../models/clientes');

const obtenerReservas = async (req, res) => {
    const status = req.query.status
    try {
        if(!status) {
            const getReserve = await Reservas.findAll({
                include: [
                    {
                        model: Pagos,
                        attributes: ['total', 'monto', 'saldo'],
                        required: false,
                    },
                    {
                        model: Habitacion,
                        attributes: ['codigo', 'piso'],
                        required: false,
                    },
                    {
                        model: Cliente,
                        attributes: ['nombre', 'apellido', 'documento_unico'],
                        required: false,
                    }
                ]
            });
            // Pregunto si existen reservas
            getReserve.length
                ? res.json(getReserve)
                : res.json({
                    msg: 'No existen reservas'
                })
        } else {
            const getReserve = await Reservas.findAll({
                where: {
                    estado: status
                },
                include: [
                    {
                        model: Pagos,
                        attributes: ['total', 'monto', 'saldo'],
                        required: false,
                    },
                    {
                        model: Habitacion,
                        attributes: ['codigo', 'piso'],
                        required: false,
                    },
                    {
                        model: Cliente,
                        attributes: ['nombre', 'apellido', 'documento_unico'],
                        required: false,
                    }
                ]
            });
            // Pregunto si existen reservas
            getReserve.length
                ? res.json(getReserve)
                : res.json({
                    msg: 'No existen reservas'
                })
        }
        
    } catch (error) {
        res.json({
            ok: false,
            msg: 'Hubo un error, no se alcanzo a obtener las reservas',
            error: error
        })
    }
}

const crearReserva = async (req, res) => {
    const { id_habitacion, estado, descripcion, id_cliente, total, id_metodopago, monto, dias } = req.body

    try {
        // Solo se puede crear una reserva si el cliente ya tiene los datos en la base de datos
        // en caso contrario primero se carga los datos del cliente que quiere hacer la reserva
        // y recien poder hacer la reserva.
        if (id_cliente) {

            const pago = {
                total,
                metodoId: id_metodopago,
                monto,
                saldo: total - monto
            }

            const cambioEstado = await Habitacion.findByPk(id_habitacion);

            cambioEstado.set({
                estado: "Ocupada"
            })

            await cambioEstado.save();

            // Creamos el pago, junto a su medio de pago
            const newPago = await Pagos.create(pago);

            const reserve = {
                clienteId: id_cliente,
                pagoId: newPago.id_pago,
                habitacionId: id_habitacion,
                estado,
                descripcion,
                dias
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
        const reserva = await Reservas.findByPk( id, {
            include: [
                {
                    model: Pagos,
                    attributes: ['total', 'monto', 'saldo'],
                    required: false,
                },
                {
                    model: Habitacion,
                    attributes: ['codigo', 'piso'],
                    required: false,
                },
                {
                    model: Cliente,
                    attributes: ['nombre', 'apellido', 'documento_unico'],
                    required: false,
                }
            ]
        } );

        reserva !== null
        ? res.json(reserva)
        : res.json({
            ok: false,
            msg: 'No existe una reserva con ese id'
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
        const reserve = await Reservas.findOne( {
            where: {
                id_reserva: id
            }
        } );
        // Obtengo el pago, para luego actualizarle el monto y el saldo setearlo a 0
        const pago = await Pagos.findByPk(reserve.pagoId);
        if(req.query.status === "Pagado") {
            pago.set({
                monto: pago.total,
                saldo: 0
            })
            await pago.save();
        }
        reserve.set({
            estado: req.query.status
        })
        await reserve.save();
        res.json(reserve);
    } catch (error) {
        res.json({
            ok: false,
            msg: 'El estado solicitado no existe o no esta permitido'
        })
    }
}

const eliminarReserva = async (req, res) => {
    const { id } = req.params
    try {
        await Reservas.destroy({
            where: { id_reserva: id }
        })
        res.json({
            ok: true,
            msg: 'Se elimino correctamente la reserva',
            id_eliminado: id
        })
    } catch (error) {
        res.json({
            ok: false,
            msg: 'No se logro eliminar la reserva'
        })
    }
}

const obtenerReservaEstado = async (req, res) => {
    const status = req.query.status
    try {
        
        const reserva = await Reservas.findAll({
            where: {
                estado: status
            }
        })

        res.json(reserva);

    } catch (error) {
        res.json({
            ok: false,
            msg: 'No existen datos'
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