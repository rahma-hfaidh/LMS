const db = require('../../Config/db');

module.exports = class Question{
    constructor(idQuestion,duree,question,ponderation,idTest){
        this.idQuestion=idQuestion;
        this.duree=duree;
        this.question=question;
        this.ponderation=ponderation;
        this.idTest = idTest ;
    
      
    }
    static fetchAll(){
        return db.execute (
            'SELECT * FROM question');
     
    }
    static findQuesById(id_question){
        return db.execute(
            'SELECT * FROM question WHERE idQuestion = ?',[id_question]);     
    }
    static findQuesByDomId(idTest){
        return db.execute(
            'SELECT * FROM question WHERE idTest = ?',[idTest]);     
    }

 
   static save(duree,quest,ponderation,idTest){
 
       return db.execute('INSERT  INTO question SET   duree = ?,question = ?,ponderation = ?,idTest = ?',
       [duree,quest,ponderation,id_domaine,id_type] );
      
      
   }

 static getid(){
        return db.execute (
            'SELECT max(id_question)+1 as id_question FROM question');
     
    }
 
    
    static update(duree,question,ponderation,id_domaine,id_type,id_question) {
      
        return db.execute('UPDATE question SET  duree = ?,question = ?,ponderation = ?,id_domaine =?,id_type =? WHERE id_question = ?', 
        [duree,question,ponderation,id_domaine,id_type,id_question]);
      }
    
      static delete(id_question) {
        return db.execute('DELETE FROM question WHERE id_question = ?',[id_question]);
      }
  
       
      static deleteByIdDomaine(id_domaine) {
        return db.execute('DELETE FROM question WHERE id_domaine = ?',[id_domaine]);
      }
};