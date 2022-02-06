const express= require('express');
const test = require('../Models/testModel');



//get all tests
exports.getAlltest= async (req,res,next)=>{
    
    const ress= await test.fetchAll();
    rows = ress[0];
    if(rows.length !== 0)
    {
         res.json({
            succes: true,
            test: rows,
        });

    } else 
     {
        res.json({
            succes: false,
            message: 'aucun test',
        });
     }
    }


// get an test by chapitre
exports.getTestByChapitre= async (req,res,next)=>{
    const idChapitre = req.params.idChapitre;
    
    const data = await test.findTestByChapitre(idChapitre);
    const results = data[0];
        if (data[0].length !== 0){
            res.json({
                succes: true,
                test: results
            });
        }
        else if(data[0].length == 0) { 
            res.json({succes: false,
                message: 'test introuvable',
                   });
        }  
}

// get an test
exports.getTest= async (req,res,next)=>{
    const idTest = req.params.idTest;
    const data = await test.findTestById(idTest);
    const results = data[0][0];
      if (data[0].length !== 0){
            res.json({
                succes: true,
                test: results
            });
        }
        else if(data[0].length == 0) { 
            res.json({succes: false,
                message: 'test introuvable',
                   });
        }  
}



// Delete an test
exports.delete = async (req,res,next)=>{

    const deletTeste = await test.delete(req.params.idTest);
   
    if(deletTeste[0]. affectedRows == 1)
    {
        res.json({succes: true,
            message: 'delete successfully',
               });
    }
    else if(deletTeste[0]. affectedRows ==0)
    {
        res.json({succes: false,
            message: 'error in delete',
               });
    } 
    }
/*
// Delete an test by id chapitre
exports.deleteByIdChapitre = async (req,res,next)=>{

    const deleteTest = await domaine.deleteByIdChapitre(req.params.chapitre);
    console.log( deleteTest)
   
    if(deleteTest[0]. affectedRows >=1)
    {
        res.json({succes: true,
            message: 'delete successfully',
               });
    }
    else if(deleteTest[0]. affectedRows ==0)
    {
        res.json({succes: false,
            message: 'error in delete',
               });
    } 
    }
*/


  
// insert an test***********************************************************************************************
//******************************************************************************
exports.post = async (req,res,next)=>{
    let designation=req.body.designation;
      let datePassage= req.body.datePassage;
    let dureeMax= req.body.dureeMax;
    let idChapitre=req.body.idChapitre;
 
    
         
   // const results= await chapitre.findBattById(idChapitre);
 //results[0];
//results[0][0];
    const storedTest = 1;
    const sortedTest2 =1;
 
   // console.log("test",storedTest.length);
/*
            if(storedTest.length >0)
            {  
                */ 
                const rest= await test.save(designation,datePassage,dureeMax,idChapitre);
                res.json({
                    succes:true,
                    message: 'ajouter avec succès',
                })
           // }
           /*
            else if(sortedTest2 == null) {
                res.json({succes: false,
                    message: 'chapitre introuvable',})
                
            
        
            }
      */
    
    }

  //  *********************************************************
// update an test
exports.put= async (req,res,next)=>{
    let designation= req.body.designation;
    let datePassage= req.body.datePassage;
    let dureeMax= req.body.dureeMax;
    //let idChapitre=req.body.idChapitre;
 

         
   // const results= await chapitre.findChapById(idChapitre);
    const storedTest =results[0];
    const sortedTest2 =results[0][0];

            if(storedTest.length >0)
            {
                const rest= await test.update(designation,datePassage,dureeMax,req.params.idTest);
                res.json({update:true}); 
            }
            else if(sortedTest2 == null)
            {
                res.json({succes: false,
                    message: 'chapitre introuvable',})
                
            
        
            }
    }
    
