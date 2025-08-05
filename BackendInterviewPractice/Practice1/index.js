import express from 'express'
import Controllers from './src/controller.js'
import connectToDb from './src/dbConfig/dbConfig.js'

const app = express()

app.use(express.json())

app.post('/', Controllers.postController)

app.listen(3000,async ()=>{
    await connectToDb()
    console.log("server is up!")
})