import express from 'express'
import { MongoClient } from 'mongodb'
const uri = 'mongodb://localhost:27017/'
const client = new MongoClient(uri)

let db, students;

const connectToDb = async () => {
    await client.connect()
    db = client.db('newDb')
    students = db.collection('students')
    console.log('Db Connected')
}

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/', async (req, res) => {
    try {
        await students.deleteMany()
        await students.insertMany(req.body.students)
        res.status(200).json({
            status: 200,
            message: "Success"
        })
    } catch (error) {
        console.log(error)
    }
})
app.get('/', async (req, res) => {
    try {
        const found = await students.find({ age: { "$lt": 18 } }).sort({ age: -1 }).toArray()
        console.log(found)
        res.status(200).json({
            status: 200,
            message: "Success"
        })
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000, async () => {
    await connectToDb()
    console.log("Server is up!!")
})