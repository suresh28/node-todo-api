var mongoose=require('mongoose');
//var mongoose = require('../dao/mongoose-connect');

var todoSchema = mongoose.Schema ( {

        text:{
                type:String,
                required:true,
                minlength:5,
                trim:true
            },
            iscompleted:{
                type:Boolean,
                default:false
            },
            completedat:{
                type:Date,
                default:Date.now
            }
        })


var Todo = mongoose.model('Todo',todoSchema)

module.exports={
    Todo
}






