const db = require('../../Config/dbQuest');

module.exports = class reponse{
    constructor(id_reponse,contenu,correct,id_question){
        this.id_reponse=id_reponse;
        this.contenu=correct;
        this.correct=correct;
        this.id_question=id_question;
       
    }

    static fetchAll(){
        return db.execute (
            'SELECT * FROM reponse');
     
    }
    static findRepById(idReponse){
        return db.execute(
            'SELECT * FROM reponse WHERE idReponse = ?',[idReponse]);     
    }
    static findRepByQuestId(id_question){
        return db.execute(
            'SELECT * FROM reponse WHERE idQuestion = ?',[id_question]);     
    }
 
 
   static save (contenu,correct,idQuestion){

       return db.execute('INSERT  INTO reponse SET  contenu = ?, correct = ?,idQuestion = ?',
       [contenu,correct,idQuestion]);
   }
 
    
    static update(contenu,correct,id_question,id_reponse) {
        return db.execute('UPDATE reponse SET contenu = ?, correct = ?,idQuestion = ? WHERE id_reponse = ?',
        [contenu,correct,id_question,id_reponse]);
      }
    
      static delete(id_reponse) {
        return db.execute('DELETE FROM reponse WHERE idReponse = ?',[id_reponse]);
      }
      static deleteByIdQues(id_question) {
        return db.execute('DELETE FROM reponse WHERE idQuestion = ?',[id_question]);
      }
  

  
};