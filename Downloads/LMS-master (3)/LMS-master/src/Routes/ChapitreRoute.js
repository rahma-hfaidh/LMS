const express = require('express')
const router = express.Router()
const CchapitreController=require("../Controllers/ChapitreController");
router.get('/getchapyidM/:id_mat',CchapitreController.getAllChapitres);
router.delete('/DeleteChapitre/:id_chapitre',CchapitreController.deleteChapitre);

module.exports=router;  