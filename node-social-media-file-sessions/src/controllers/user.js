const userModel=require('../models/user')
const {validationResult}=require('express-validator')

const fetchUsers=(req,res)=>{
    const users=userModel.getUsers()
    res.json(users)
}

const displayProfilePage=(req,res)=>{
    if(!req.session.user){
        return res.redirect('/login')
    }
    res.render('profile',req.session.user)
}

const displayLoginPage=(req,res)=>{
    res.render('login',{errMsg:""})
}

const displaySignupPage=(req,res)=>{
    res.render('signup')
}

const displayDashboard=(req,res)=>{
    if(!req.session.user){
        return res.redirect('/login')
    }
    res.send('Welcome to Feed')
}

const signupUser=(req,res)=>{
    const {name, email, password, age}=req.body
    const {file}=req
    const newuser={name, email, password, age, imageURL:`/uploads/${file.originalname}`}
    const users = userModel.add(newuser)
    req.session.user=newuser
    console.log(newuser)
    res.redirect('/profile')
}
const loginUser=(req,res)=>{
    const {email, password}=req.body
    const user=userModel.checkUserExists(email,password)
    const errors=validationResult(req)
    req.session.user=user
    if(!errors.isEmpty()){
        res.render('login',{errMsg:errors.array()[0].msg})
    }else if(!user){
        res.render('login',{errMsg:"Wrong Credentials"})
    }
    res.redirect('/profile')
}

module.exports={
    fetchUsers,
    displayProfilePage,
    displaySignupPage,
    displayDashboard,
    displayLoginPage,
    signupUser,
    loginUser
}