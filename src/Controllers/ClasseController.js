const Classe= require("../Models/ClasseModel")

exports.findAll = function(req, res) {
  Classe.findAll(function(err, classe) {
    if (err){
      res.send(err);
    }else{
      console.log('res', classe);
      res.send(classe);
    }  
  });
};





exports.update = function(req, res) {
  Classe.update(req.params.id_classe, new Classe(req.body), function(err, classe) {
 if (err){
  res.send(err);
 }
 else{
  res.json({
    succes:true,
    message: 'Updated successfully',
})
 }

});

};

