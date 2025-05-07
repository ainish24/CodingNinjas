const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
email:{
    type:String,
    required:true,
    unique:true
},
role:{
    type:String,
    required:true,
    enum:["admin", "client"]
},
comment:{
    type:String,
    required:true,
}
})

const userModel=mongoose.Model('User',userSchema);

module.exports={userModel}