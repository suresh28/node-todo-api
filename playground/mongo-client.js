const mongoClient = require('mongodb').MongoClient;


mongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

    if(err)
    {
        return 'Something went wrong while connecting to MongoDB'       
    }
        
        console.log('Connection successfull');
    
        db.collection('Todo').insertMany([ {text:'My test1 todo for NoteApp',status:true} ],(err,result)=>{

                if(err)
                {
                    return 'Something went wrong while storing data to MongoDB'       
                }
            
            console.log(' data inserted ',result , result.ops[0]._id);
        })


        db.collection('Users').insertMany( [{firstname:'fname1',lastname:'lname1',email:'test@gmail.com',password:'test1'}])
            .then( (result) => {
                console.log(' user data inserted ', result.ops);
            })
            .catch( (err) => {
                console.log(' Error occured while creating users');
            })


    db.collection('Todo').find({status:true}).toArray().then( (data)=>{
        console.log(data);
    })
    
    db.collection('Todo').find({status:true}).toArray().then( (data)=>{
        console.log(data);
    })

  db.collection('Todo').find().count().then( (count)=>{
            console.log(`number of records in todo collection before ${count}`);
    })


    //db.collection('Todo').findOneAndDelete({text:'My test1 todo for NoteApp'}).then( (data) => {
    db.collection('Todo').deleteMany({text:'My test1 todo for NoteApp'}).then( (data) => {
        console.log('inserted record deleted ',data);
    })
   
    db.collection('Todo').find().count().then( (count)=>{
            console.log(`number of records in todo collection after ${count}`);
    })


    db.collection('Todo').findOneAndUpdate(
        {
            text:'My Third todo from NoteApp'
        },
        {
            $set:{iscompleted:true}
        },
        {
            returnOriginal:false,
            upsert:true
        }
    ).then( (result) => {
        console.log(' updated document result ',result);
    })

db.collection('Users').findOneAndUpdate(
        {
            email:'test@gmail.com'
        },
        {
            $inc:{age:+1}
        },
        {
            returnOriginal:false,
            
        }
    ).then( (result) => {
        console.log(' updated user collection result ',result);
    })


      db.close();  

    
});

