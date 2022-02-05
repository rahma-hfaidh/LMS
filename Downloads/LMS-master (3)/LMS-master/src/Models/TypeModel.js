const db = require('../../Config/dbQuest');

module.exports = class Type{
    constructor(id_type,type){
        this.id_type = id_type ;
        this.type = this.type;   
    }
    static fetchAll(){
        return db.execute(
            'SELECT * FROM type');
     
    }
    static findTypeById(id_type){
        return db.execute(
            'SELECT * FROM type WHERE id_type = ?',[id_type]);
        
    }
 
   static save(type){
       return db.execute('INSERT  INTO type SET designation = ?',
       [type]);
   }
 
    
    static update(type,id_type) {
        return db.execute('UPDATE type SET designation  = ? WHERE id_type = ?', 
        [type,id_type]);
      }
    
      static delete(id_type) {
        return db.execute('DELETE FROM type WHERE id_type = ?',[id_type]);
      }
  
};