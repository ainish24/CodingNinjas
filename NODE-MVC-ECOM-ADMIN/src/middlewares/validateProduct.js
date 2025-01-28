// const {getP} = require('../models/products')

// const validateProductMiddleware =(req,res,next)=>{
//     const products = getP()
//     const {title,currentPrice,mrp,imgURL}=req.body
//     //Validation Rules
//     const errors=[]

//     if(title=='' || title.length<3){
//         errors.push("Invalid title entered")
//     }

//     if(currentPrice=='' || isNaN(Number(currentPrice))){
//         errors.push("Invalid current price entered")
//     }

//     if(mrp=='' || isNaN(Number(mrp))){
//         errors.push("Invalid MRP entered")
//     }

//     try{
//         const url1 = new URL(imgURL)
//     }catch(error){
//         errors.push("Invalid image URL entered")
//     }

//     if(errors.length!=0){
//        return res.render('dashboard',{products, errorMessage:errors[0]})
//     }

//     next()
// }

// module.exports={
//     validateProductMiddleware
// }





//Validation using express-validator

const { body } = require("express-validator");

const validationRules =[
    body('title').not().isEmpty().withMessage('The product title cannot be empty').isLength({min:3}).withMessage('Product title has to be atleast 3 characters'),
    body('currentPrice').not().isEmpty().withMessage('Current Price cannot be empty').isNumeric().withMessage('Current Price needs to be numeric'),
    body('mrp').not().isEmpty().withMessage('MRP cannot be empty').isNumeric().withMessage('MRP needs to be numeric'),
    body('imgURL').not().isEmpty().withMessage('URL cannot be empty').isURL().withMessage('Invalid URL')
]

module.exports={
    validationRules
}