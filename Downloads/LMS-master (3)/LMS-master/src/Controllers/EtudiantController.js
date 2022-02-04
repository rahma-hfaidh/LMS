const Etudiant= require("../Models/EtudiantModel")

exports.findAll = function(req, res) {
  Etudiant.findAll(function(err, etudiant) {
    if (err){
      res.send(err);
    }else{
      console.log('res', etudiant);
      res.send(etudiant);
    }  
  });
};