const express=require('express');
const mongoose=require('mongoose');
var router=express.Router();


var {Employee}=require('../models/employee');
//var ObjectId = require('mongodb').ObjectID;
var ObjectId = require('mongodb').ObjectID;

router.get('/',(req,res)=>{
    Employee.find((err,docs)=>{
        if(!err){
            res.send(docs);
        }else{
            console.log("Error in Retriving Employees :"+ JSON.stringify(err,undefined,2));
        }
    })
});

router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No record with given id : ${req.params.id}');
    }
        Employee.findById(req.params.id,(err,docs)=>{
            if(!err){
                res.send(docs);
            }else{
                console.log("Error in Retriving Employees :"+ JSON.stringify(err,undefined,2));
            }
        
        });
});

router.post('/',(req,res)=>{
    var emp=new Employee({
        name:req.body.name,
        position:req.body.position,
        office:req.body.office,
        salary:req.body.salary
    });
    emp.save((err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log("Error in Employee Save :"+ JSON.stringify(err,undefined,2));
        }
    })
});

module.exports=router;