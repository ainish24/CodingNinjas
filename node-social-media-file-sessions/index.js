const express = require ('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const dotenv=require('dotenv')
dotenv.config()
const userControllers=require('./src/controllers/user')
const {validationRules}=require('./src/middlewares/validation')
const upload=require('./src/middlewares/multer')
const session = require('express-session')
const cookieParser=require('cookie-parser')
const {isLoggedIn}=require('./src/middlewares/user')
const interestControllers=require('./src/controllers/interest')


const app=express()
exports.app = app
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/src/views')
app.use(express.static('public'))
app.use(session({
    secret: process.env.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60*60*1000 }
  }))
app.use(cookieParser())


app.get('/',(req,res)=>{
    res.json({
        message: 'Server is up!'
    })
})


app.get('/profile', isLoggedIn, userControllers.displayProfilePage)
app.get('/dashboard', isLoggedIn, userControllers.displayDashboard)
app.get('/signup', userControllers.displaySignupPage)
app.get('/login', userControllers.displayLoginPage)


app.get('/api/users', userControllers.fetchUsers)
app.post('/api/signup', upload.single('profileimagefile'), userControllers.signupUser)
app.post('/api/login', validationRules, userControllers.loginUser)
app.get('/api/logout', validationRules, userControllers.logoutUser)


app.get('/interests', isLoggedIn, interestControllers.displayInterestPage)
app.get('/api/interests', isLoggedIn, interestControllers.fetchInterests)
app.post('/api/interests', isLoggedIn, interestControllers.createInterest)

app.get('/api/users/:id/interests',  interestControllers.fetchUserInterest)
app.post('/api/users/:id/interests',  interestControllers.createUserInterest)

//Single file upload
// app.post('/submit-upload', upload.single('profileImage') ,(req,res)=>{
//     console.log(req.body, req.file)
//     res.send('File uploaded successfully!')
// })

//Multiple file upload
// app.post('/submit-upload', upload.array('profileImages',2) ,(req,res)=>{
//     console.log(req.body, req.files)
//     res.send('File uploaded successfully!')
// })


app.listen(3000,()=>{
    console.log('Server is up!')
})