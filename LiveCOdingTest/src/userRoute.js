const Router = require('express');
const userController= require('./userController.js')
const router = Router();
const userMiddleware = require('./middlewares/isAdmin.js')

// router.post("/signUp",userController.signup)
router.post("/comment",userMiddleware.isAdmin,userController.comment)

module.exports={router}