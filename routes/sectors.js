const express = require('express')
const router = express.Router();
const SectorController = require('../controllers/SectorController');

router.get('/', SectorController.getAll);
router.get('/:id', SectorController.getById);
router.post('/', SectorController.create);
router.put('/:id', SectorController.update);
router.delete('/:id', SectorController.remove);

module.exports = router;
