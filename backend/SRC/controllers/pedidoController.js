const Pedidos = require ('../models/Pedidos');

const getAll = async (req, res) => {
    try {
        const pedidos = await Pedidos.findAll();
        res.json(pedidos)
    } catch (error) {
        res.status(500).json( { message: error.message})
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const pedidos = await Pedidos.findOne({ where: { id } });
        if (!pedidos) return res.status(404).json({ message: 'Pedido no encontrado' });
        res.json(pedidos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const create = async (req, res) => {
    try {
        const pedidos = await Pedidos.create(req.body);
        res.status(201).json (pedidos)
    } catch  (error ){
        res.status(500).json({ message: error.message})
    }
};

const update = async (req, res) => {
    try {
        const {id} =  req.params;
        await Pedidos.update ( req.body, { where : {id}});
        res.json({message: 'Pedido actualizado' });
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await Pedidos.destroy({ where: { id } });
        res.json({ message: 'Pedido eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAll, create, update, remove, getById }