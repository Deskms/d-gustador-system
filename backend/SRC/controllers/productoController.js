const Producto = require('../models/Producto');

const getAll = async (req, res) => {
    try {
        const productos = await Producto.findAll();
        res.json(productos);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const create = async (req, res) => {
    try {
        const producto = await Producto.create(req.body);
        res.status(201).json(producto);
    } catch ( error) {
        res.status(500).json({ message: error.message})
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        await Producto.update(req.body, { where: { id }});
        res.json({message: 'Producto actualizado' });
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await Producto.destroy ({ where: { id }});
        res.json ({ message: 'Producto Eliminado'});
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
};

module.exports = { getAll, create, update, remove} 