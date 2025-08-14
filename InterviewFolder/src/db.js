const mongoose = require('mongoose')

const connectDb= async ()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/practiceDB")
        console.log("Db connected")
    } catch (error) {
        console.log("error connecting db", error)
    }
}

const userSchema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:true
    },
    password:String
})

const userModel = mongoose.model('User', userSchema)

module.exports={
    connectDb,
    userModel
}