const express = require ('express');
const router = express.Router();
const pedidoController = require("../controllers/pedidoController");
const { verificarToken } = require('../middleware/authMiddleware');

router.get('/', verificarToken, pedidoController.getAll);
router.post('/', verificarToken, pedidoController.create);
router.put('/:id', verificarToken, pedidoController.update);
router.delete('/:id', verificarToken, pedidoController.remove);
router.get('/:id', verificarToken, pedidoController.getById);

module.exports = router;    