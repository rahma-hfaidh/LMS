const express = require('express');
const typeController = require('../controllers/TypeController');
const router = express.Router();

router.post('/addType',typeController.post);
router.get('/listType', typeController.getAllTypes);
router.get('/:id_type',typeController.getType);
router.delete('/deleteType/:id_type', typeController.delete)
router.put('/updateType/:id_type',typeController.put)
module.exports = router;
