const mongoose=require('mongoose');
//create connection to mongodb
mongoose.connect('mongodb://localhost:27017/studentApi',{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
    console.log("Connection Success"))
    .catch((e)=>
    console.log(e.message))