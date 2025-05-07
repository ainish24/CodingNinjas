// comment api
// email - 
// role - 
// comment - 
// all are strings and required.
// email is unique
// role - "admin" or "client"
// if role is admin. We'll not allow to cmment



const express= require ("express");
const userModel = require('./schema.js')
const userRoutes=require('./src/userRoute.js')
const mongoose=require('mongoose')
const app = express();

app.use(userRoutes)

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.listen(3000,()=>{
    mongoose.connect()
})