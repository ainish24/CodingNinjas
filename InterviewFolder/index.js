const express = require('express')
const {connectDb} = require('./src/db.js')
const {userController} = require('./src/userController.js')
const {authMiddleware} = require('./src/authMiddleware.js')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Server is running!')
})

app.post('/register',authMiddleware ,userController)

app.listen(3000,async ()=>{
    await connectDb()
    console.log("Server is up!")
})