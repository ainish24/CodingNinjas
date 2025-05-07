const isAdmin=(req,res,next)=>{
    const {role}=req.body;
    if(role==="admin"){
        res.status(501).json({
            success:false,
            message:"You are not authorized to comment. Please login as client to comment."
        })
    }
    next()
}

module.exports={isAdmin}