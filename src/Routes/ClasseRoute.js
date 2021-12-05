const express = require('express')
const router = express.Router()
const ClasseController=require("../Controllers/ClasseController");
router.get('/GetAllClasses', ClasseController.findAll);
router.put('/UpdateClasse/:id_classe', ClasseController.update);
module.exports=router;  