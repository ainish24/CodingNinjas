
const authMiddleware=(req,res,next)=>{
    const {name}= req.body
    if(name === 'admin'){
        res.status(401).json({
            status:"Error",
            message:"Unauthorized"
        })
    }
    next()
}

module.exports={
    authMiddleware
}