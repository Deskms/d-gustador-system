const Categoria = require('../models/Categoria');

// Obtener todas las categorías
const getAll = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear Categoria

const create = async (req, res) => {
    try {
        const categoria = await Categoria.create(req.body);
        res.status(201).json(categoria);
    } catch (error) {
         res.status(500).json({ message: error.message });
    }
};

// Actualizar categoría
const update = async (req, res) => {
    try {
        const { id } = req.params;
        await Categoria.update(req.body, { where: { id } });
        res.json({ message: 'Categoría actualizada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar categoría
const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await Categoria.destroy({ where: { id } });
        res.json({ message: 'Categoría eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = { getAll, create, update, remove };
