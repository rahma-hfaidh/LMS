var dbConn=require('../../Config/db');

//create Matiere object
 var Matiere=function(matiere){
     this.designation=matiere.designation;
     this.nbr_heure=matiere.nbr_heure;
     this.type=matiere.type;
     this.coef=matiere.coef;
 };


//Gett all data
Matiere.findAll=function(result){
    dbConn.query("Select * from matiere", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
            console.log("matiere :", res);
            result( res);
        }
    })

};
//add Matiere
Matiere.create= function(newMatiere, result){
    dbConn.query("INSERT INTO matiere set ?", newMatiere, function(err,res){
        if(err){
            console.log("error at inserting :",err)
            result(err,null);
        }else{
            console.log(res.insertId);
            result(null, res);
           
           
        }
    });
}

//delete Matiere 
Matiere.delete = function(id, result){
    dbConn.query("DELETE FROM matiere WHERE id_mat = ?", [id], function (err, res) {
    if(err) {
      console.log("error: ", err);
      result(null, err);
    }
    else{
      result(null, res);
        }
    });
};


//update Matiere
Matiere.update = function(id, matiere, result){
    dbConn.query("UPDATE matiere SET designation=?, nbr_heure=?, type=?, coef=? WHERE id_mat = ?", [matiere.designation,matiere.nbr_heure,matiere.type,matiere.coef ,id], 
        function (err, res) {
            if(err) {
                console.log("error: ", err);
                result(null, err);
            }else{
                result(null, res);
                
            }
        });
};




module.exports=Matiere;