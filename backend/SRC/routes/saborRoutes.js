const express = require ('express');
const router = express.Router();
const saborController = require("../controllers/saborController");

router.get('/', saborController.getAll);
router.post('/', saborController.create);
router.put('/:id', saborController.update);
router.delete('/:id', saborController.remove);


module.exports = router;