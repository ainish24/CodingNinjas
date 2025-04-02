const {MongoClient} = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()

const client = new MongoClient(process.env.MONGODB_URL)
const dbName ='test1' 

const connectToDb= async ()=>{
    try {
        await client.connect()
        console.log('Connected successfully to MongoDb server')
    } catch (error) {
        console.log("Error connecting to MongoDb: ",error)
    }
}

const getDatabase=()=>{
    const db = client.db(dbName)
    return db
}

module.exports={
    connectToDb,
    getDatabase
}