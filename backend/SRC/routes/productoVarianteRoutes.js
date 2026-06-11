const express = require ('express');
const router = express.Router();
const productoVarianteController = require("../controllers/productoVarianteController");
const { verificarToken } = require('../middleware/authMiddleware');


router.get('/', verificarToken, productoVarianteController.getAll);
router.post('/',  verificarToken, productoVarianteController.create);
router.put('/:id',  verificarToken, productoVarianteController.update);
router.delete('/:id',  verificarToken, productoVarianteController.remove);

module.exports = router;