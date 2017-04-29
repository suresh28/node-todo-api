const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.Promise=global.Promise;


var Todo = mongoose.model('Todo',{
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

var TodoRec = new Todo({text:'New Data to Mongoose',iscompleted:false});

// TodoRec.save( (err,result)=>{
//     if(err)
//         console.log('Error occured in mongoose ', err);
//     else
//         console.log(' result ', result);
// });

TodoRec.save()
    .then( (result)=>{
        console.log(' result ', result);
    },(rejected)=>{
        console.log(' Failed to store data into DB ', rejected);
    })
    .catch((err)=>{
         console.log('Genereic Error occured in mongoose ', err);
    })

var userSch=mongoose.Schema( {
    firstName:{
        type:String,
        minlength:2,
        required:true,
        unique:true
    },
    lastName:{
        type:String,
        minlength:2,
        required:true,
        trim:true
    },
    email:{
        type:String,
        minlength:2,
        default:'test@test.com',
        trim:true
    },
    ins_dt:{
        type:Date,
        default:new Date()
    }
    
});

var Users = mongoose.model('Users',userSch);

var userRec1 = new Users({firstName:'test1',lastName:'test2'});

userRec1.save().then( (data)=>{
    console.log('user record is inserted',data)
},(err)=>{
    console.log('user record inserted failed',data)
})
.catch((err)=>{
    console.log(` DB Connection error occured ${err}`)
})