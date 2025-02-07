const userModel=require('../models/user')
const {validationResult}=require('express-validator')

const fetchUsers=(req,res)=>{
    const users=userModel.getUsers()
    res.json(users)
}

const displayProfilePage=(req,res)=>{
    res.render('profile')
}

const displayLoginPage=(req,res)=>{
    res.render('login',{errMsg:""})
}

const displaySignupPage=(req,res)=>{
    res.render('signup')
}

const signupUser=(req,res)=>{
    const {name, email, password, age, imageURL}=req.body
    const newuser={name, email, password, age, imageURL}
    const users = userModel.add(newuser)
    console.log(newuser)
    res.render('profile', newuser)
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
    res.render('profile', user)
}

module.exports={
    fetchUsers,
    displayProfilePage,
    displaySignupPage,
    displayLoginPage,
    signupUser,
    loginUser
}