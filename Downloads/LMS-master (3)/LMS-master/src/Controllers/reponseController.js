const express= require('express');
const reponse = require('../models/reponseModel')
const question = require('../models/questionModel')


//Post reponse
exports.post = async (req,res,next)=>{

    let contenu= req.body.contenu;
    let correct= req.body.correct;
    let idQuestion= req.body.idQuestion;
  
             
    const results= await question.findQuesById(idQuestion);
    const storedRep =results[0];
    const sortedRep2 =results[0][0];

            if(storedRep.length >0)
            {
                const rest=await reponse.save(contenu,correct,idQuestion);
                res.json({
                    succes:true,
                    message: 'ajouter avec succès',
                         })  
            }
            else if(sortedQues2 == null)
            {
                res.json({succes: false,
                    message: 'Question introuvable',})
                }        
    }



    //Get reponse
exports.getReponse= async (req,res,next)=>{
    const idQuestion = req.params.idQuestion;
    const data = await reponse.findRepById(idQuestion);
    const results = data[0][0];
      if (data[0].length !== 0){
            res.json({
                succes: true,
                reponse: results
            });
        }
        else if(data[0].length == 0) { 
            res.json({succes: false,
                message: 'reponse introuvable',
                   });
        }  
}


//Get all responses
exports.getAllreponses= async (req,res,next)=>{
    
    const ress= await reponse.fetchAll();
    rows = ress[0];
    if(rows.length !== 0)
    {
         res.json({
            succes: true,
            reponse: rows,
        });
    } else 
     {
        res.json({
            succes: false,
            message: 'pas de reponse',
        });
     }
    }


//Get reponse by question
exports.getReponseByQestion= async (req,res,next)=>{
    const idQuestion = req.params.idQuestion;
    const data = await reponse.findRepByQuestId(idQuestion);
    const results = data[0];
    console.log(results)
      if (data[0].length !== 0){
            res.json({
                succes: true,
                reponse: results
            });
        }
        else if(data[0].length == 0) { 
            res.json({succes: false,
                message: 'reponse introuvable',
                   });
        }  
}




//Delete reponse
exports.delete = async (req,res,next)=>{

    const deletereponse = await reponse.delete(req.params.idReponse);
   
    if(deletereponse[0]. affectedRows == 1)
    {
        res.json({succes: true,
            message: 'delete successfully',
               });
    }
    else if(deletereponse[0]. affectedRows ==0)
    {
        res.json({succes: false,
            message: 'error in delete',
               });
    } 
    }
    /*
//Delete reponse by id question
exports.deleteByIdQues = async (req,res,next)=>{

    const deletereponse = await reponse.deleteByIdQues(req.params.idQuestion);
   
    if(deletereponse[0]. affectedRows >= 1)
    {
        res.json({succes: true,
            message: 'delete successfully',
               });
    }
    else if(deletereponse[0]. affectedRows ==0)
    {
        res.json({succes: false,
            message: 'error in delete',
               });
    } 
    }
    */

    
//Put reponse
exports.put= async (req,res,next)=>{

    let contenu= req.body.contenu;
    let correct= req.body.correct;
    let idQuestion= req.body.idQuestion;
 
             
  

          
                const rest =await reponse.update(contenu,correct,idQuestion,req.params.idReponse);
                res.json({update:true}); 
          
    }
    
