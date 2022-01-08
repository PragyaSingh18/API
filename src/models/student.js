const mongoose=require('mongoose');
const validator=require('validator');

const stuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:4
    },
    
        email:{
            type:String,
            required:true,
            unique:[true,'Email is already there'],
            validator(value){
                if(validator.isEmail(value)){
                    throw new Error("Invalid Email")
                }
            }
        },
        
        phone:{
            type:Number,
            min:10,
            
            required:true,
            unique:true
        },
        address:{
             type:String,
             required:true

        }
    
})

//we will create new model

const Student=new mongoose.model('Student',stuSchema);
module.exports=Student