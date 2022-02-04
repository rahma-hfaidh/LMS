const db = require('../../Config/db');

module.exports = class Test{
    constructor(idTest,dureeMax,datePassage,idChapitre){
        this.idTest = idTest ;
        this.dureeMax = dureeMax;   
        this.datePassage=datePassage
        this.idChapitre=idChapitre;
    }
    static fetchAll(){
        return db.execute (
            'SELECT * FROM test');
     
    }
    static findDomById(idTest){
        return db.execute(
            'SELECT * FROM test WHERE idTest = ?',[idTest]);
        
    }
    /*
    static findDomByIdChapitre(id_chapitre){
        
        return db.execute(
            'SELECT * FROM test WHERE idChapitre = ?',[id_chapitre]);
        
    }
    */
 
   static save (dureeMax,datePassage,idChapitre){
  

       return db.execute('INSERT  INTO test SET dureeMax = ?, datePassage = ?, idChapitre= ?',
       [dureeMax,datePassage,idChapitre]);
   }
 
    
    static update(dureeMax,dureeMax,idChapitre,idTest) {
        return db.execute('UPDATE test SET dureeMax  = ?, datePassage = ?, idChapitre =? WHERE idTest = ?', 
        [dureeMax,dureeMax,idChapitre,idTest]);
      }
      
    
      static delete(idTest) {
        return db.execute('DELETE FROM test WHERE idTest = ?',[idTest]);
      }
  
      static deleteByIdchapitre(idChapitre) {
        return db.execute('DELETE FROM chapitre WHERE idChapitre = ?',[idChapitre]);
      }
      
};