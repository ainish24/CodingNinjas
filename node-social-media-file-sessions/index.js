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
    cookie: { maxAge: 60*1000 }
  }))


app.get('/',(req,res)=>{
    res.json({
        message: 'Server is up!'
    })
})

app.get('/api/users',userControllers.fetchUsers)

app.get('/profile',userControllers.displayProfilePage)

app.get('/login',userControllers.displayLoginPage)

app.get('/signup',userControllers.displaySignupPage)

app.get('/dashboard', userControllers.displayDashboard)

app.post('/api/login',validationRules,userControllers.loginUser)

app.post('/api/signup',upload.single('profileimagefile'),userControllers.signupUser)

app.get('/api/logout',validationRules,userControllers.logoutUser)



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