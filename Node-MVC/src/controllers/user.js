const path=require('path')
const {getUsers,checkUSerEmailExists,checkUSerExists,addUser}=require('../models/user')



const displayLandingPage=(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../views/landing-page.html'))
}
const getUsersData=(req,res)=>{
    res.json(getUsers())
}
const displaySignupPage=(req,res)=>{
    res.sendFile(path.resolve(__dirname+'../views/signup.html'))
}
const displayLoginPage=(req,res)=>{
    res.sendFile(path.resolve(__dirname+'../views/login.html'))
}
const displayDashboard=(req,res)=>{
    res.sendFile(__dirname+'/src/views/dashboard.html')
}
const signupUser=(req,res)=>{
    const {name, email, password}=req.body
    const newUser = {name, email, password}
    const user= checkUSerEmailExists(email)
    if(user){
        res.send('A user with this email already exists!')
    }
    addUser(newUser)
    res.redirect('/dashboard')
}
const loginUser=(req,res)=>{
    const {email,password}=req.body
    const user= checkUSerExists(email,password)
    if(user){
        res.redirect('/dashboard')
    }else{
        res.send("Invalid email or password. Please try again!")
    }
}


module.exports={
    displayLandingPage,
    getUsersData,
    displaySignupPage,
    displayLoginPage,
    displayDashboard,
    signupUser,
    loginUser
}