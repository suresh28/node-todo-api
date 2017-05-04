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


router.get('/getTodos/:cat/:todoTxt',(req,res)=>{

console.log(' i m in getTodo router' , req.params);
console.log(' i m in getTodo router' , req.params);
console.log(' i m in getTodo router' , req.params.todoTxt);

//res.send(req.params);

if(req.params.cat==='text')
{
        Todo.find({'text':req.params.todoTxt } ).then( (data)=>{
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

}else if(req.params.cat==='status')
{
    if ( ( req.params.todoTxt==='true') || ( req.params.todoTxt==='false') )
    {
                Todo.find({'iscompleted':req.params.todoTxt } ).then( (data)=>{
                         console.log('list of todos ',data);
                        
                        console.log('data length', data.length);

                        if(data.length>0)
                        {
                             res.status(200).send({
                                data
                            });
                        }else{
                            res.status(200).send('Result not found');
                        }

                        
        },(err)=>{
                console.log('error in fetching todo ',err);
                res.status(400).send(err);
            }).catch((err)=>{
                console.log('error in connecting todo db',err);
                res.status(404).send(err);
            })
    } else{
        res.status(400).send('Invalid status. it should be either true or false');
    }

}



})


module.exports=router;