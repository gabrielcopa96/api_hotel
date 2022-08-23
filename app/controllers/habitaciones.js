const Habitaciones = require('../models/habitacion');

const obtenerHabitaciones = async (req, res) => {
    try {
        const getRoom = await Habitaciones.findAll();
        res.json(getRoom);
    } catch (error) {
        res.json({
            ok: false,
            msg: 'No se pudo obtener las habitaciones',
            error: error
        })
    }
}

module.exports = {
    obtenerHabitaciones
}