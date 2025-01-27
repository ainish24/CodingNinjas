const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const {displayLandingPage,
    getUsersData,
    displaySignupPage,
    displayLoginPage,
    displayDashboard,
    signupUser,
    loginUser
}=require('./src/controllers/user')

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',displayLandingPage)
app.get('/signup',displaySignupPage)
app.get('/login',displayLoginPage)
app.get('/users',getUsersData)
app.post('/users/signup',signupUser)
app.post('/users/login',loginUser)
app.get('/dashboard',displayDashboard)

app.listen(3000,()=>{
    console.log('Server is running')
}
)