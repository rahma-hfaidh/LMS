const express = require('express')
const router = express.Router()
const EtudiantController=require("../Controllers/EtudiantController");
router.get('/GetAllEtudiants', EtudiantController.findAll);
module.exports=router;  