const express = require ('express');
const router = express.Router();
const saborController = require("../controllers/saborController");
const { verificarToken } = require('../middleware/authMiddleware');

router.get('/',  verificarToken, saborController.getAll);
router.post('/', verificarToken, saborController.create);
router.put('/:id', verificarToken, saborController.update);
router.delete('/:id', verificarToken, saborController.remove);


module.exports = router;