const express = require('express')
const router = express.Router()
const ClasseController=require("../Controllers/ClasseController");
router.get('/GetAllClasses', ClasseController.findAll);
router.post('/PostClasse', ClasseController.create);
router.delete('/DeleteClasse/:id_classe', ClasseController.delete);
router.put('/UpdateClasse/:id_classe', ClasseController.update);
module.exports=router;  