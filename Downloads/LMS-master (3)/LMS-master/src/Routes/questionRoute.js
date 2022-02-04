const express = require('express');
//const { body } = require('express-validator');                    


const questionController = require('../controllers/questionController');
const router = express.Router();

router.post('/PostQuestion',questionController.post);
router.get('/listQuestion', questionController.getAllquestion);
router.get('/idQuestion', questionController.getIdQuestion);
router.get('/:idQuestion',questionController.getQuestion);
router.get('/test/:idTest',questionController.getQuestionByTest);
router.delete('/deleteQuestion/:idQuestion', questionController.delete);
router.delete('/deleteQuestion/byTest/:idTest', questionController.deleteByIdTest)
router.put('/updateQuestion/:idQuestion',questionController.put)
module.exports = router;
