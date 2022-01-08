const express=require("express");
require('./db/conn')
const Student=require("./models/student")
const app=express();
const port=process.env.PORT || 3300
app.use(express.json());
//create a new student
app.get("/",(req,res)=>{
    res.send("Hello Pragya... Heyyyy");
})

app.post("/student",(req,res)=>{
    const user=new Student(req.body);
    console.log(user)
    user.save().then(()=>{
        res.send(user)
    }).catch((e)=>{
        res.send(e)
    })
    
})

app.listen(port)