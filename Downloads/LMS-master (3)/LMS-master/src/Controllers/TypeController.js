const express= require('express');
const type = require('../Models/TypeModel')



//Post type
exports.post = async (req,res,next)=>{
    
    let designation = req.body.designation;
 
                const rest= await type.save(designation);
                    res.json({
                        succes:true,
                        message: 'ajouter avec succès',
                    })
                   console.log("resl  "+rest);
    }


//Get type
exports.getType = async (req,res,next)=>{
    const id_type = req.params.id_type;
    const data = await type.findTypeById(id_type);
    const results = data[0][0];
      if (data[0].length !== 0){
            res.json({
                succes: true,
                type: results
            });
        }
        else if(data[0].length == 0) { 
            res.json({succes: false,
                message: 'type introuvable',
                   });
        }  
}


//Get all types
exports.getAllTypes= async (req,res,next)=>{
    
    const ress= await type.fetchAll();
    rows = ress[0];
    if(rows.length !== 0)
    {
         res.json({
            succes: true,
            type: rows,
        });

    } else 
     {
        res.json({
            succes: false,
            message: 'aucun type',
        });
     }
    }




//Delete  type
exports.delete = async (req,res,next)=>{

    const deleteType = await type.delete(req.params.id_type);
   
    if(deleteType[0]. affectedRows == 1)
    {
        res.json({succes: true,
            message: 'delete successfully',
               });
    }
    else if(deleteType[0]. affectedRows ==0)
    {
        res.json({succes: false,
            message: 'error in delete',
               });
    } 
    }




  

    
//Put type
exports.put= async (req,res,next)=>{

    let designation= req.body.type;
   

                const rest= await type.update(designation,req.params.id_type);
                    res.json({
                        succes:true,
                     
                    });
               
 
    }
    
