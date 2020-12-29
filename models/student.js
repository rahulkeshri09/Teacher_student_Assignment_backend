const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const Student=mongoose.model('Student',studentSchema);
module.exports=Student;