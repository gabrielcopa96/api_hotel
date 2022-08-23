const Client = require('../models/clientes');

const obtenerClientes = async (req, res) => {
    try {
        const allClient = await Client.findAll();
        !allClient.length
            ? res.status(404).json( { error: "Actualmente no hay datos" } )
            : res.status(200).json( allClient )
    } catch (error) {
        res.status(500).json(error);
    }
}

const crearCliente = async (req, res) => {
    try {
        const newClient = await Client.create(req.body);
        res.json(newClient);
    } catch (error) {
        res.send(error)
    }
}

const obtenerUnCliente = async (req, res) => {
    try {
        const clientOne = await Client.findByPk( req.params.id );
        res.json(clientOne);
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {
    obtenerClientes,
    crearCliente,
    obtenerUnCliente
}
