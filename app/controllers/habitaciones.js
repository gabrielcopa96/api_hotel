const Habitaciones = require('../models/habitacion');

const obtenerHabitaciones = async (req, res) => {
    try {
        const getRoom = await Habitaciones.findAll();
        getRoom.length
        ? res.json(getRoom)
        : res.json({
            msg: "No existen habitaciones en la base de datos"
        })
    } catch (error) {
        res.json({
            ok: false,
            msg: 'No se pudo obtener las habitaciones',
            error: error
        })
    }
}

const rooms = [
    {
        codigo: 'A1',
        piso: 'PB',
        estado: 'Libre'
    },
    {
        codigo: 'A2',
        piso: 'PB',
        estado: 'Libre'
    },
    {
        codigo: 'A3',
        piso: 'PB',
        estado: 'Libre'
    },
    {
        codigo: 'A4',
        piso: 'PB',
        estado: 'Libre'
    },
    {
        codigo: 'A5',
        piso: 'PB',
        estado: 'Libre'
    },
    {
        codigo: 'A6',
        piso: 'PB',
        estado: 'Libre'
    },
    {
        codigo: 'B1',
        piso: '1',
        estado: 'Libre'
    },
    {
        codigo: 'B2',
        piso: '1',
        estado: 'Libre'
    },
    {
        codigo: 'B3',
        piso: '1',
        estado: 'Libre'
    },
    {
        codigo: 'B4',
        piso: '1',
        estado: 'Libre'
    },
    {
        codigo: 'B5',
        piso: '1',
        estado: 'Libre'
    },
    {
        codigo: 'B6',
        piso: '1',
        estado: 'Libre'
    },
    {
        codigo: 'C1',
        piso: '2',
        estado: 'Libre'
    },
    {
        codigo: 'C2',
        piso: '2',
        estado: 'Libre'
    },
    {
        codigo: 'C3',
        piso: '2',
        estado: 'Libre'
    },
    {
        codigo: 'C4',
        piso: '2',
        estado: 'Libre'
    },
    {
        codigo: 'C5',
        piso: '2',
        estado: 'Libre'
    },
    {
        codigo: 'C6',
        piso: '2',
        estado: 'Libre'
    },
    {
        codigo: 'D1',
        piso: '3',
        estado: 'Libre'
    },
    {
        codigo: 'D2',
        piso: '3',
        estado: 'Libre'
    },
    {
        codigo: 'D3',
        piso: '3',
        estado: 'Libre'
    },
    {
        codigo: 'D4',
        piso: '3',
        estado: 'Libre'
    },
    {
        codigo: 'D5',
        piso: '3',
        estado: 'Libre'
    },
    {
        codigo: 'D6',
        piso: '3',
        estado: 'Libre'
    },
]

const crearHabitaciones = async (req, res) => {
    try {
        let newRoom
        if(typeof req.body !== 'Object') {
            console.log('entro a crear varias habitaciones: ');

            newRoom = await Habitaciones.bulkCreate(rooms)
        } else {
            console.log('entro a crear habitacion por habitacion')
            newRoom = await Habitaciones.create(req.body)
        }
        res.json({
            ok: true,
            data: newRoom
        })
    } catch (error) {
        res.json({
            ok: false,
            msg: 'No se pudo crear las habitaciones',
            error: error
        })
    }
}


const obtenerUnaHabitacion = async (req, res) => {
    const { id } = req.params

    try {
        
        const habitacion = await Habitaciones.findByPk( id );

        res.json(habitacion);

    } catch (error) {
        
        res.json({
            ok: false,
            msg: 'Hubo un error, no se pudo encontrar la habitacion'
        })

    }
}

module.exports = {
    obtenerHabitaciones,
    crearHabitaciones,
    obtenerUnaHabitacion
}