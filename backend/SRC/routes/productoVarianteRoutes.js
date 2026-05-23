const express = require ('express');
const router = express.Router();
const productoVarianteController = require("../controllers/productoVarianteController");

router.get('/', productoVarianteController.getAll);
router.post('/', productoVarianteController.create);
router.put('/:id', productoVarianteController.update);
router.delete('/:id', productoVarianteController.remove);

module.exports = router;