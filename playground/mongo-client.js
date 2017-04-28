const mongoClient = require('mongodb').MongoClient;


mongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

    if(err)
    {
        return 'Something went wrong while connecting to MongoDB'       
    }
        
        console.log('Connection successfull');
    
        db.collection('Todo').insertMany([ {text:'My test1 todo from NoteApp',status:true} ],(err,result)=>{

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
            console.log(`number of records in todo collection is ${count}`);
    })

      db.close();  

    
});

