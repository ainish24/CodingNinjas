const {getP} = require('../models/products')

const validateProductMiddleware =(req,res,next)=>{
    const products = getP()
    const {title,currentPrice,mrp,imgURL}=req.body
    //Validation Rules
    const errors=[]

    if(title=='' || title.length<3){
        errors.push("Invalid title entered")
    }

    if(currentPrice=='' || isNaN(Number(currentPrice))){
        errors.push("Invalid current price entered")
    }

    if(mrp=='' || isNaN(Number(mrp))){
        errors.push("Invalid MRP entered")
    }

    try{
        const url1 = new URL(imgURL)
    }catch(error){
        errors.push("Invalid image URL entered")
    }

    if(errors.length!=0){
       return res.render('dashboard',{products, errorMessage:errors[0]})
    }

    next()
}

module.exports={
    validateProductMiddleware
}