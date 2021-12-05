var dbConn=require('../../Config/db');

//create classe object
 var Classe=function(classe){
     this.designation=classe.designation;
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
//add class
Classe.create= function(newClasse, result){
    dbConn.query("INSERT INTO classe set ?", newClasse, function(err,res){
        if(err){
            console.log("error at inserting :",err)
            result(err,null);
        }else{
            console.log(res.insertId);
            result(null, res);
           
           
        }
    });
}

//delete class 
Classe.delete = function(id, result){
    dbConn.query("DELETE FROM classe WHERE id_classe = ?", [id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
        }
    });
};


//update class
Classe.update = function(id, classe, result){
    dbConn.query("UPDATE classe SET designation=? WHERE id_classe = ?", [classe.designation, id], 
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