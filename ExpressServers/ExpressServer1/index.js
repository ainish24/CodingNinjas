const express=require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome to our server')
})
app.get('/users',(req,res)=>{
    res.send('This is a route for reading users!')
})
app.post('/users',(req, res)=>{
    res.send('Post request response')
})

app.listen(3000,()=>{
    console.log("Server is running :)")
})