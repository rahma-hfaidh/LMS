const express = require('express')
const router = express.Router()
const MatiereController=require("../Controllers/MatiereConroller");
router.get('/GetAllMatieres', MatiereController.findAll);
router.post('/PostMatiere', MatiereController.create);
router.delete('/DeleteMatiere/:id_mat', MatiereController.delete);
router.put('/UpdateMatiere/:id_mat', MatiereController.update);
module.exports=router;  