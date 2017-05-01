const express = require('express');
const bodyParser=require('body-parser');
//const mongoose = require('mongoose');


var app=express();


var {mongoose} = require('./dao/mongoose-connect');
var {Todo} = require('./models/todo-model');

var todoRoute=require('./routes/todo-route');
var userRoute=require('./routes/user-route');

app.use(bodyParser.json());

app.use('/api',todoRoute);
app.use('/api',userRoute);


// app.post('/api/test',(req,res)=>{

//     console.log('post request data ', req.body.text);

//      var todoRec = new Todo({text:req.body.text,iscompleted:false});    

//     todoRec.save()
//         .then( (result)=>{
//             console.log(' result ', result);
//             res.status(200).send(result);
//         },(rejected)=>{
//             console.log(' Failed to store data into DB ', rejected);
//             res.status(400).send(rejected);
//         })
//         .catch((err)=>{
//             console.log('Genereic Error occured in mongoose ', err);
//             res.status(404).send(err);
//         })
// })


app.listen('3000',()=>{
    console.log('Server is started and listening on port 3000');
})

//module.exports.app = app;