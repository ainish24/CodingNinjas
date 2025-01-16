const express=require('express')
const app=express()
const bodyParser=require('body-parser')

const{USERS,checkUSerEmailExists,checkUSerExists}=require('./src/models/user')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/src/views/landing-page.html')
})
app.get('/signup',(req,res)=>{
    res.sendFile(__dirname+'/src/views/signup.html')
})
app.get('/login',(req,res)=>{
    res.sendFile(__dirname+'/src/views/login.html')
})
app.get('/users',(req,res)=>{
    res.json(USERS)
})
app.post('/users/signup',(req,res)=>{
    const {name, email, password}=req.body
    const newUser = {name, email, password}
    const user= checkUSerEmailExists(email)
    if(user){
        res.send('A user with this email already exists!')
    }
    USERS.push(newUser)
    res.redirect('/dashboard')
})
app.post('/users/login',(req,res)=>{
    const {email,password}=req.body
    const user= checkUSerExists(email,password)
    if(user){
        res.redirect('/dashboard')
    }else{
        res.send("Invalid email or password. Please try again!")
    }
})

app.get('/dashboard',(req,res)=>{
    res.sendFile(__dirname+'/src/views/dashboard.html')
})
app.listen(3000,()=>{
    console.log('Server is running')
}
)