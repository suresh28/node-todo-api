const express = require('express');
const router = express.Router();


var {Users} = require('../models/user-model');



router.post('/user', (req,res) => {

    console.log(' i m in user router' , req.body);
    
    var userRec = new Users({firstName:req.body.firstName,lastName:req.body.lastName});
    
    userRec.save()
        .then( (result)=>{
            console.log(' result ', result);
            res.status(200).send(result);
        },(rejected)=>{
            console.log(' Failed to store data into DB ', rejected);
            res.status(400).send(rejected);
        })
        .catch((err)=>{
            console.log('Genereic Error occured in mongoose ', err);
            res.status(404).send(err);
        })
   
})

module.exports=router;