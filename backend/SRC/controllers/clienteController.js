const Clientes =  require('../models/Clientes');

const getAll = async (req, res) => {
    try {
    const clientes = await Clientes.findAll();
    res.json(clientes);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}; 

const create = async (req, res) => {
    try {
        const clientes = await Clientes.create(req.body);
        res.status(201).json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message})    
    }
};

const update = async (req, res) => {
    try {
        const {id} = req.params;
        await Clientes.update ( req.body, { where: { id }});
        res.json({ message: 'Cliente actualizado'});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const remove = async (req, res) => {
    try {
        const {id} = req.params;
        await Clientes.destroy ( { where: {id }});
        res.json({message: 'Cliente Eliminado'});
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const getById = async (req, res) => {
    try {
        const { id } = req.params;
        const clientes = await Clientes.findOne({ where: { id } });
        if (!clientes) return res.status(404).json({ message: 'Cliente no encontrado' });
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAll, create, update, remove, getById }