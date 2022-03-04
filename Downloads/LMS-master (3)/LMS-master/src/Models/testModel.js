const db = require('../../Config/dbQuest');

module.exports = class Test{
    constructor(idTest,designation,dureeMax,datePassage,idChapitre){
        this.idTest = idTest ;
        this.designation=designation;
        this.dureeMax = dureeMax;   
        this.datePassage=datePassage
        this.idChapitre=idChapitre;
    }
    static fetchAll(){
        return db.execute (
            'SELECT * FROM test');
     
    }
    static findTestById(idTest){
        return db.execute(
            'SELECT * FROM test WHERE idTest = ?',[idTest]);
        
    }
    
    static findTestByChapitre(id_chapitre){
        
        return db.execute(
            'SELECT * FROM test WHERE idChapitre = ?',[id_chapitre]);
        
    }
    
 
   static save (designation,dureeMax,datePassage,idChapitre){
  

       return db.execute('INSERT  INTO test SET designation = ?,dureeMax = ?, datePassage = ?, idChapitre= ?',
       [designation,dureeMax,datePassage,idChapitre]);
   }
 
    
    static update(designation,dureeMax,datePassage,idTest) {
        return db.execute('UPDATE test SET designation = ?,dureeMax  = ?, datePassage = ? WHERE idTest = ?', 
        [designation,dureeMax,datePassage,idTest]);
      }
      
    
      static delete(idTest) {
        return db.execute('DELETE FROM test WHERE idTest = ?',[idTest]);
      }
  
      static deleteByIdchapitre(idChapitre) {
        return db.execute('DELETE FROM chapitre WHERE idChapitre = ?',[idChapitre]);
      }
      
};