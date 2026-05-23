const ProductoVariante = require('../models/ProductoVariante');

const getAll = async (req, res) => {
try {
        const productoVariante = await ProductoVariante.findAll();
        res.json(productoVariante);
    } catch (error){
        res.status(500).json({message: error.message})
    }
};

const create = async (req, res) => {
    try {
        const productoVariante = await ProductoVariante.create(req.body);
        res.status(201).json(productoVariante);
    } catch ( error ) { 
        res.status(500).json({message: error.message})
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params;
        await ProductoVariante.update (req.body, {where: {id}});
        res.json({message: 'Producto Variante actualizado'});
    } catch ( error ){
        res.status(500).json({message: error.message})
    }
};

const remove = async (req, res) => {
    try {
        const {id} = req.params;
        await ProductoVariante.destroy ( { where: {id}});
        res.json ( { message: 'Producto Variante eliminado'});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = { getAll, create, update, remove }