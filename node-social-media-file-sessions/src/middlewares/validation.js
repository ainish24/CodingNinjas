const {body} = require ('express-validator')

const validationRules =[
    body('email').notEmpty().withMessage('Email cannot be empty').isEmail().withMessage("Enter a valid email address")
]
module.exports={
    validationRules
}