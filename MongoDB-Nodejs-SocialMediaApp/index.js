const express = require ('express')
const cookieParser=require('cookie-parser')
const {connectToDb, getDatabase} = require('./src/config/db.js')
const userRoutes=require('./src/modules/user/user.route.js')
const postRoutes=require('./src/modules/post/post.route.js')

const app = express()

app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/users',userRoutes)
app.use('/api/posts',postRoutes)

app.get('/',(req,res)=>{
    const db=getDatabase()
    db.collection('users').insertOne({firstName:'Ainish', lastName:'Vadhwani'})
    res.json({
        message:"Server is up!",
        currentTime: new Date().toLocaleString,
    })
})

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000")
    connectToDb()
})