const jwt = require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    const token = req.cookies.token
    try {
        const user=jwt.verify(token,process.env.JWT_PRIVATE_KEY)
        req.user=user
        next()
    } catch (error) {
        res.status(401).json({
            status:false,
            message:'Please login to access this resource'
        })
    }

}

module.exports={verifyToken}