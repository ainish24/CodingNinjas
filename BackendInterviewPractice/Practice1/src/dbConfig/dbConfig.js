import mongoose from "mongoose";

const connectToDb=async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/newDb')
        console.log("connected to db")
    } catch (error) {
        console.log("Error connecting to Db", error)
    }
}

export default connectToDb