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
        res.json({
            ok: false,
            msg: 'Hubieron errores y no se pudo crear correctamente el cliente',
            error
        })
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

const actualizarCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await Client.findByPk( id );
        client.set(req.body);
        await client.save();
        return res.json(client)
    } catch (error) {
        res.json({
            ok: false,
            msg: 'Hubo un error, no se pudo actualizar el cliente',
            error: error
        })
    }
}

module.exports = {
    obtenerClientes,
    crearCliente,
    obtenerUnCliente,
    actualizarCliente
}
