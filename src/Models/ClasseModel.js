var dbConn=require('../../Config/db');

//create classe object
 var Classe=function(classe){
     this.désignation=classe.désignation;
 };


//Gett all data
Classe.findAll=function(result){
    dbConn.query("Select * from classe", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
            console.log("Classe :", res);
            result( res);
        }
    })

};


//update class
Classe.update = function(id, classe, result){
    dbConn.query("UPDATE classe SET désignation=? WHERE id_classe = ?", [classe.désignation, id], 
        function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }else{
                result(null, res);
                
            }
        });
};




module.exports=Classe;