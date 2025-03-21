const jwt = require("jsonwebtoken")
const isLoggedIn=(req,res,next)=>{
    try {
        const token= req.cookies.token
        const user=jwt.verify(token,process.env.JWT_PRIVATE_KEY)
        req.user=user
        next()
    } catch (error) {
        res.status(401).json({
            status:'FAILED',
            message:'Please login to proceed'
        })
    }
}

module.exports={isLoggedIn}