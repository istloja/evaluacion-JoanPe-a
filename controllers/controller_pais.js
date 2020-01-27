var   Pais = require('../models/pais'),
      express = require('express'),
      router = express.Router();

router.get('/all',(req,res)=>{
    Pais.find({},(err,docs)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })
}).post('/create',(req,res)=>{
    var body=req.body;
    Pais.insertMany({
        id:body.id,
        nombre:body.nombre,
        moneda:body.moneda,
        superficie:body.superficie,
        idioma:body.idioma,
        nroHabitantes:body.nroHabitantes    
    },(err,rest)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(rest)
    })

}).post('/delete',(req,res)=>{
    Pais.remove({nombre:req.body.nombre},(err,docs)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })
}).post('/search',(req,res)=>{
    Pais.find({},(err,docs)=>{
        if(err){
            console.error(err)
            throw err;
        }
        res.status(200).json(docs)
    })
})

module.exports=router;