const express = require('express');
const router = express.Router();


var {Todo} = require('../models/todo-model');


router.post('/todo', (req,res) => {

    console.log(' i m in todo router' , req.body);
    
    var todoRec = new Todo({text:req.body.text,iscompleted:false});
    
    todoRec.save()
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

router.get('/getTodos',(req,res)=>{

console.log(' i m in getTodo router' , req.body);

Todo.find().then( (data)=>{
    console.log('list of todos ',data);
    res.status(200).send({
        data
    });
},(err)=>{
    console.log('error in fetching todo ',err);
    res.status(400).send(err);
}).catch((err)=>{
    console.log('error in connecting todo db',err);
    res.status(404).send(err);
})

})

module.exports=router;