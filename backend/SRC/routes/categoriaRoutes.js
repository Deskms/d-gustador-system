const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');
const { verificarToken } = require('../middleware/authMiddleware');

router.get('/', verificarToken, categoriaController.getAll);
router.post('/', verificarToken, categoriaController.create);
router.put('/:id', verificarToken, categoriaController.update);
router.delete('/:id', verificarToken, categoriaController.remove);

module.exports = router;