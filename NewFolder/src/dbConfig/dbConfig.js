const mongoose = require('mongoose')

const connectDb = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/Postaway")
        console.log("db connected")
    } catch (error) {
        console.log("Error connecting db", error)
    }
}

module.exports={connectDb}