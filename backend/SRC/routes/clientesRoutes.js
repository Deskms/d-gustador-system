const express = require ('express');
const router = express.Router();
const clienteController = require("../controllers/pedidoController");
const { verificarToken } = require('../middleware/authMiddleware');

router.get('/', verificarToken, clienteController.getAll);
router.post('/', verificarToken, clienteController.create);
router.put('/:id', verificarToken, clienteController.update);
router.delete('/:id', verificarToken, clienteController.remove);
router.get('/:id', verificarToken, clienteController.getById);

module.exports = router;