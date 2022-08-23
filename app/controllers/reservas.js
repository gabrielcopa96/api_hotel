const Reservas = require('../models/reservas');

const obtenerReservas = async (req, res) => {
    try {
        const getReserve = await Reservas.findAll();
        res.json(getReserve);
    } catch (error) {
        res.json({
            ok: false,
            msg: 'Hubo un error, no se alcanzo a obtener las reservas',
            error: error
        })
    }
}

const crearReserva = async (req, res) => {
    try {
        const newReserve = await Reservas.create(req.body);
        res.json(newReserve);
    } catch (error) {
        res.json({
          ok: false,
          msg: "Hubo un error, no se alcanzo a crear la reserva",
          error: error,
        });
    }
}

module.exports = {
    obtenerReservas,
    crearReserva
}