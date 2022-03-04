const db = require('../../Config/dbQuest');

module.exports = class Question{
    constructor(idQuestion,duree,question,ponderation,idTest,id_type){
        this.idQuestion=idQuestion;
        this.duree=duree;
        this.question=question;
        this.ponderation=ponderation;
        this.idTest = idTest ;
      this.id_type=id_type;
      
    }
    static fetchAll(){
                 return db.execute ('SELECT * FROM question');
     
    }
    static findQuesById(id_question){
        return db.execute(
            'SELECT * FROM question WHERE idQuestion = ?',[id_question]);     
    }
    static findQuesByTestId(idTest){
        return db.execute(
            'SELECT * FROM question WHERE idTest = ?',[idTest]);     
    }

 
   static save(duree,quest,ponderation,id_type,idTest){
 
       return db.execute('INSERT  INTO question SET   duree = ?,question = ?,ponderation = ?,id_type= ?,idTest = ?',
       [duree,quest,ponderation,id_type,idTest] );
      
      
   }

 static getid(){
        return db.execute (
            'SELECT max(idQuestion)+1 as idQuestion FROM question');
     
    }
 
    
    static update(duree,question,ponderation,id_type,idTest,id_question) {
      
        return db.execute('UPDATE question SET  duree = ?,question = ?,ponderation = ?,id_type =?,idTest =? WHERE idQuestion = ?', 
        [duree,question,ponderation,id_type,idTest,id_question]);
      }
    
      static deleteQ(id_question) {
        return db.execute('DELETE FROM question WHERE idQuestion = ?',[id_question]);
      }
  
       
      static deleteByIdDomaine(idTest) {
        return db.execute('DELETE FROM question WHERE idTest = ?',[idTest]);
      }
};