const userModel=require('../models/user')


const fetchUsers=(req,res)=>{
    const users=userModel.getUsers()
    res.json(users)
}

const displayProfilePage=(req,res)=>{
    res.render('profile')
}

const displayLoginPage=(req,res)=>{
    res.render('login')
}

const displaySignupPage=(req,res)=>{
    res.render('signup')
}

const signupUser=(req,res)=>{
    const {name, email, password, age, imageURL}=req.body
    const newuser={name, email, password, age, imageURL}
    const users = userModel.add(newuser)
    res.redirect('/profile')
}
const loginUser=(req,res)=>{
    const {email, password}=req.body
    const user=userModel.checkUserExists(email,password)
    res.redirect('/profile')
}

module.exports={
    fetchUsers,
    displayProfilePage,
    displaySignupPage,
    displayLoginPage,
    signupUser,
    loginUser
}