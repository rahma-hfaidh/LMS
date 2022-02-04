const express = require('express');
const { body } = require('express-validator');                    


const testController = require('../controllers/testController');
const router = express.Router();

router.post('/addTest',testController.post);
router.get('/listTest', testController.getAllTest);
router.get('/:idTest',testController.getTest);
router.delete('/deleteTest/:idTest', testController.delete)
//router.delete('/deleteTest/bychapitre/:id_batterie', testController.deleteByIdBatterie)
router.put('/updateTest/:idTest',testController.put)
module.exports = router;
