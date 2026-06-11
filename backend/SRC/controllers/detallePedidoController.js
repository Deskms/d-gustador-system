const DetallePedido = require ('../models/DetallePedidos');

const getAll  = async (req, res) => {
    try {
        const detallepedido = await DetallePedido.findAll();
        res.json(detallepedido)
    } catch (error) {
        res.status(500).json ( { message: error.message})
    }
};

const getById = async (req, res) => {
    try {
        const {id} = req.params;
        const detallepedido = await DetallePedido.findOne({ where: {id}});
        if (!detallepedido) return res.status(404).json ({ message: 'Pedido no encotradoS'});
        res.json(detallepedido);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};

const create = async (req, res) => {
    try {
        const detallepedido = await DetallePedido.create(req.body);
        res.status(201).json (detallepedido)
    } catch  (error ){
        res.status(500).json({ message: error.message})
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params;
        await DetallePedido.update ( req.body, {where: {id}});
        res.json({message: 'Detalle del pedido actualizado'});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const remove = async (req, res) => {
    try {
        const {id} = req.params;
        await DetallePedido.destroy({where: {id}});
        res.json({message: 'Detalle pedido eliminado'});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = { getAll, create, update, remove, getById }