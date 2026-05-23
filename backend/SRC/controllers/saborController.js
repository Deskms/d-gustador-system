const Sabores = require('../models/Sabores');

const getAll = async (req, res) => {
    try {
        const sabores = await Sabores.findAll();
        res.json(sabores);
    } catch (error){
        res.status(500).json({message: error.message})
    }
};

const create = async (req, res) => {
    try {
        const sabores = await Sabores.create(req.body);
        res.status(201).json(sabores);
    } catch ( error ) {
        res.status(500).json({message: error.message})
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params;
        await Sabores.update (req.body, { where: { id }});
        res.json({message: 'Sabor actualizado'});
    } catch ( error ) {
        res.status(500).json({message: error.message})
    }
};

const remove = async (req, res) => {
    try {
        const {id} = req.params;
        await Sabores.destroy ( { where: { id }});
        res.json({message: 'Sabor eliminado'});
    } catch ( error ) {
        res.status(500).json({message: error.message})
    }
};

module.exports = { getAll, create, update, remove }