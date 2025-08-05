import { connect } from 'mongoose'

const connectDb= async()=>{
    try {
        await connect("mongodb://localhost:27017/newDb")
        console.log("Connected to db!")
    } catch (error) {
        console.log("Error connceting to db: ", error)
    }
}

export default connectDb