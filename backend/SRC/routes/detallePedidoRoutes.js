const express = require ('express');
const router = express.Router();
const detallePedidoController = require("../controllers/detallePedidoController");

router.get('/', detallePedidoController.getAll);
router.post('/', detallePedidoController.create);
router.put('/:id', detallePedidoController.update);
router.delete('/:id', detallePedidoController.remove);
router.get('/:id', detallePedidoController.getById);

module.exports = router;