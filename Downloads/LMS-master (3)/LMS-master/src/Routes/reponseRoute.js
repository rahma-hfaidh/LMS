const express = require('express');
              


const reponseController = require('../controllers/reponseController');
const router = express.Router();

router.post('/addReponse',reponseController.post);
router.get('/listReponse', reponseController.getAllreponses);
router.get('/:idReponse',reponseController.getReponse);
router.get('/question/:idQuestion',reponseController.getReponseByQestion);
router.delete('/deleteReponse/:idReponse', reponseController.delete);
router.put('/updateReponse/:idReponse',reponseController.put)
module.exports = router;
//router.delete('/deleteReponse/byquestion/:idQuestion', reponseController.deleteByIdQues)

