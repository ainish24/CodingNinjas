const userRepository = require('./user.repository.js')
const jwt = require('jsonwebtoken')
const bcrypt=require('bcrypt')

const signupUser=async (req,res)=>{
    try {
        const {name,email,password}=req.body
        
        const hashedPassword=await bcrypt.hash(password,10)

        const newUser={
            name,email,password:hashedPassword
        }
        const userId=await userRepository.createUser(newUser)
        res.json({
            status:true,
            message:`User with id ${userId} Signed Up Successfully`
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Something went wrong!'
        })
    }
}

const loginUser=async (req,res)=>{
    try {
        const {email, password}=req.body
        const user=await userRepository.findUserByEmail(email)
        if(!user){
            return res.status(401).json({
                status:false,
                message:'User with given email does not exist'
            })
        }
        const doesPasswordMatch=await bcrypt.compare(password,user.password)

        if(!doesPasswordMatch){
            return res.status(401).json({
                status:false,
                message:'Invalid credentials'
            })
        }

        const token=jwt.sign(user,process.env.JWT_PRIVATE_KEY,{expiresIn:'15m'})
        res.cookie('token',token,{maxAge:15*60*1000})
        res.json({
            status:true,
            message:`User ${user.name} Logged In Successfully`
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Something went wrong!'
        })
    }
}

module.exports={signupUser,loginUser}