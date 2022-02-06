const Chapitre= require("../Models/ChapitreModel");
//get chapitre by id_matiere
exports.getAllChapitres= async (req,res,next)=>{
    try{
    id=req.params.id_mat;
  TAB=[];
    let [r]= await Chapitre.getAllChapitres(id);
    
    
for(var i=0;i<r.length;i++)
{   let desig=r[i].designation;
  let t=r[i].type;
   let idC=r[i].id_chapitre;
   let json = {
    id_chapitre:`${idC}`,
   type:`${t}`,
   designation:`${desig}`
 };


TAB.push(json);
}

res.json(TAB);   
    }
    catch(err) {
        if(!err.statuscode){
            err.statuscode = 500
        }
 next(err);
    
        }
      
  };

  //delete chapitre
  exports.deleteChapitre = async (req, res, next) => {
    try {
      const deleteResponse = await Chapitre.deleteChapitre(req.params.id_chapitre);
      res.status(200).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
    //ajouter chapitre




     //modifier chapitre
