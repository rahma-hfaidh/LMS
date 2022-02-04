const express = require('express');
const { body } = require('express-validator');                    


const reponseController = require('../controllers/reponseController');
const router = express.Router();

router.post('/addReponse',reponseController.post);
router.get('/listReponse', reponseController.getAllreponses);
router.get('/:idReponse',reponseController.getReponse);
router.get('/question/:idQuestion',reponseController.getReponseByQestion);
router.delete('/deleteReponse/:idReponse', reponseController.delete)
router.delete('/deleteReponse/byquestion/:idQuestion', reponseController.deleteByIdQues)
router.put('/updateReponse/:idReponse',reponseController.put)
module.exports = router;
