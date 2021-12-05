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

exports.create = function(req, res) {
  const new_classe = new Classe(req.body);
  Classe.create(new_classe, function(err, classe) {
    if (err){
      res.send(err);
    }else{
      res.json({
        succes:true,
        message: 'Added successfully',
    })
    } 
  });


};

exports.delete = function(req, res) {
  Classe.delete( req.params.id_classe, function(err, classe) {
  if (err){
    res.send(err);
  }else{
    res.json({ error:false, message: 'class successfully deleted' });
  }    
});
};