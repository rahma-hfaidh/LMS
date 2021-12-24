const Matiere= require("../Models/MatiereModel")

exports.findAll = function(req, res) {
    Matiere.findAll(function(err, matiere) {
    if (err){
      res.send(err);
    }else{
      console.log('res', matiere);
      res.send(matiere);
    }  
  });
};





exports.update = function(req, res) {
    Matiere.update(req.params.id_mat, new Matiere(req.body), function(err, matiere) {
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
  const new_matiere = new Matiere(req.body);
  Matiere.create(new_matiere, function(err, matiere) {
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
    Matiere.delete( req.params.id_mat, function(err, matiere) {
  if (err){
    res.send(err);
  }else{
    res.json({ error:false, message: 'Matiere successfully deleted' });
  }    
});
};