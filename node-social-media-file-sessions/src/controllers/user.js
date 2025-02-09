const session = require('express-session')
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
    res.render("profile", req.session.user);
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
    let lastloggedInAt=null
    if(req.cookies.lastloggedInAt){
        lastloggedInAt=req.cookies.lastloggedInAt
    }else{
        lastloggedInAt=new Date().toLocaleString()
    }
    req.session.user={...user,lastloggedInAt}
    let currentTime=new Date().toLocaleString()
    res.cookie('lastloggedInAt',currentTime,{maxAge:3*24*60*60*1000})
    res.redirect('/profile')
}
const loginUser=(req,res)=>{
    const {email, password}=req.body
    const user=userModel.checkUserExists(email,password)
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        res.render('login',{errMsg:errors.array()[0].msg})
    }else if(!user){
        res.render('login',{errMsg:"Wrong Credentials"})
    }
    //we need cookie-parser package to access a cookie from front end
    // to access a cookie, req.cookies
    // to set custom cookie, res.cookie('key','value',{maxAge: ''})
    let lastloggedInAt=null
    if(req.cookies.lastloggedInAt){
        lastloggedInAt=req.cookies.lastloggedInAt
    }else{
        lastloggedInAt=new Date().toLocaleString()
    }
    req.session.user={...user,lastloggedInAt}
    let currentTime=new Date().toLocaleString()
    res.cookie('lastloggedInAt',currentTime,{maxAge:3*24*60*60*1000})

    res.redirect('/profile')
}

const logoutUser=(req,res)=>{
    res.session.destroy((error)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect('/login')
        }
    })
}

module.exports={
    fetchUsers,
    displayProfilePage,
    displaySignupPage,
    displayDashboard,
    displayLoginPage,
    signupUser,
    loginUser,
    logoutUser
}