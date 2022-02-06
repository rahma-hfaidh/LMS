var dbConn=require('../../Config/db');



 module.exports = class Chapitre {
 
  

//get chapitre by id_matiere
    static getAllChapitres(id_mat){
        return dbConn.promise().execute ('SELECT * FROM chapitre WHERE id_mat=? ',[id_mat]);
     
    }
//delete chapitre
static deleteChapitre(id_chapitre) {
    return dbConn.promise().execute('DELETE FROM chapitre WHERE id_chapitre = ?', [id_chapitre]);
  }
  //ajouter chapitre


 //modifier chapitre
}

