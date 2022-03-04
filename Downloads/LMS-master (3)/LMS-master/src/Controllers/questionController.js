const express= require('express');
const question = require('../Models/questionModel');
const test= require('../Models/testModel');



//get all question
exports.getAllquestion= async (req,res,next)=>{
    try {
    const ress= await question.fetchAll();
    
    console.log(ress)
    rows = ress[0];
    if(rows.length !== 0)
    {
         res.json({
            succes: true,
            question: rows,
        });

    } else 
     {
        res.json({
            succes: false,
            message: 'aucun question',
        });
     }
    }catch(err) {
        if(!err.statuscode){
            err.statuscode = 500
        }
    }
    }

    exports.getIdQuestion= async (req,res,next)=>{
    
        const ress= await question.getid();
        rows = ress[0];
        if(rows.length !== 0)
        {
             res.json({
                succes: true,
                question: rows,
            });
    
        } else 
         {
            res.json({
                succes: false,
                message: 'hi',
            });
         }
        }



// get an question by test
exports.getQuestionByTest= async (req,res,next)=>{
    const idTest = req.params.idTest;
    const data = await question.findQuesByTestId(idTest);
    const results = data[0];
      if (data[0].length !== 0){
            res.json({
                succes: true,
                question: results
            });
        }
        else if(data[0].length == 0) { 
            res.json({succes: false,
                message: 'question introuvable',
                   });
        }  
}
// get an question
exports.getQuestion= async (req,res,next)=>{
    const idQuestion = req.params.idQuestion;
    const data = await question.findQuesById(idQuestion);
    const results = data[0][0];
      if (data[0].length !== 0){
            res.json({
                succes: true,
                question: results
            });
        }
        else if(data[0].length == 0) { 
            res.json({succes: false,
                message: 'question introuvable',
                   });
        }  
}





// Delete an question
exports.deleteQ = async (req,res,next)=>{
    console.log("gffff")
console.log(req.params.idQuestion)
console.log("gffff")
    const deletequestion = await question.deleteQ(req.params.idQuestion);
    console.log("gffff")
    if(deletequestion[0].affectedRows == 1)
    {
        res.json({succes: true,
            message: 'delete successfully',
               });
    }
    else if(deletequestion[0].affectedRows ==0)
    {
        res.json({succes: false,
            message: 'error in delete',
               });
    } 
    }



// Delete an question by id test
exports.deleteByIdTest = async (req,res,next)=>{

    const deletequestion = await question.deleteByIdTest(req.params.idTest);
   
    if(deletequestion[0]. affectedRows >= 1)
    {
        res.json({succes: true,
            message: 'delete successfully',
               });
    }
    else if(deletequestion[0]. affectedRows ==0)
    {
        res.json({succes: false,
            message: 'error in delete',
               });
    } 
    }


  
// insert an question
exports.post = async (req,res,next)=>{

    let duree= req.body.duree;
    let quest= req.body.question;
    let ponderation= req.body.ponderation;
    let idTest= req.body.idTest;
    let id_type=req.body.id_type;

    
             
                const rest=await question.save(duree,quest,ponderation,id_type,idTest);
                console.log("1  records Inserted, ID:"+ res.insertId);
                res.json({
                    succes:true,
                    message: 'ajouter avec succès',
                         })  
        
         
            
             
    
    }

    
// update an question
exports.put= async (req,res,next)=>{

    
    let duree= req.body.duree;
    let quest= req.body.question;
    let ponderation= req.body.ponderation;
    let idTest= req.body.idTest;
             
    const results= await test.findTestById(idTest);
    const storedType= resulttype[0];
    const storedType2= resulttype[0][0];
    const storedQues =results[0];
    const sortedQues2 =results[0][0];

 
            if(storedQues.length >0 && storedType.length>0 )
            {
                const rest=await question.update(duree,quest,ponderation,idTest,req.params.idQuestion);
                res.json({update:true}); 
            }
            else if(sortedQues2 == null || storedType2 == null)
            {
                res.json({succes: false,
                    message: 'test introuvable',})
                
            
        
            }
    }
    
