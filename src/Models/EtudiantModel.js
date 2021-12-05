var dbConn=require('../../Config/db');

//create Etudiant object
 var Etudiant=function(etudiant){
     this.Nom=etudiant.Nom;
     this.Prenom=etudiant.Prenom;
     this.Email=etudiant.Email;
     this.Password=etudiant.Password;
     this.DateCreation=etudiant.DateCreation;
     this.NumTel=etudiant.NumTel;

 };


//Gett all data
Etudiant.findAll=function(result){
    dbConn.query("Select * from etudiant", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
            console.log("Etudiants :", res);
            result( res);
        }
    })

};


module.exports=Etudiant;