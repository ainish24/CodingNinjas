const {connect} = require('mongoose')

const connectDb = async ()=>{
    try {
        await connect('mongodb://localhost:27017/testDb')
        console.log('Connected to db!')
    } catch (error) {
        console.log("Error connecting to the database", error)
    }
}

module.exports = {connectDb}