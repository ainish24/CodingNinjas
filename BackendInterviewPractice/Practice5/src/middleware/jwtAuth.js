const jwt = require('jsonwebtoken')

const authMiddleware = (req,res,next)=>{
    const token = req.cookies.token
    const user = jwt.verify(token, "VERY_SECRET_KEY")
    if(user){
        next()
        console.log('User is authorized!')
    }else{
        res.status(201).json({
            status:201,
            message:"User is not authorized"
        })
    }
}

module.exports={authMiddleware}