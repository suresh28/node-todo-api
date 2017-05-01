const mongoose=require('mongoose');

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

module.exports={
    Users
}