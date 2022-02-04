const express = require('express');
                 


const testController = require('../controllers/testController');
const router = express.Router();

router.post('/addTest',testController.post);
router.get('/listTest', testController.getAlltest);
router.get('/:idTest',testController.getTest);
router.delete('/deleteTest/:idTest', testController.delete);
router.put('/updateTest/:idTest',testController.put)
module.exports = router;
//router.delete('/deleteTest/bychapitre/:id_batterie', testController.deleteByIdBatterie)

