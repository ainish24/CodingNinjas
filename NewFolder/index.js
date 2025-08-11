const express = require('express')
const {connectDb} = require('./src/dbConfig/dbConfig.js')
const {detailController} = require('./src/controllers/detailController.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('Connected!')
})

app.post('/details',detailController)

app.listen(3000, async ()=>{
    await connectDb()
    console.log("server is up!")
})