const express = require ('express');
const router = express.Router();
const detallePedidoController = require("../controllers/detallePedidoController");
const { verificarToken } = require('../middleware/authMiddleware');

router.get('/', verificarToken, detallePedidoController.getAll);
router.post('/', verificarToken, detallePedidoController.create);
router.put('/:id', verificarToken, detallePedidoController.update);
router.delete('/:id', verificarToken, detallePedidoController.remove);
router.get('/:id', verificarToken, detallePedidoController.getById);

module.exports = router;