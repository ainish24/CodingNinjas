import express from 'express'
import connectDb from './src/dbConfiguration/dbConfig.js'
import {dataController} from './src/data/dataController.js'
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).send('Hi')
})
app.post('/', dataController)

app.listen(3000,async ()=>{
    await connectDb()
    console.log('Server is up!')
})