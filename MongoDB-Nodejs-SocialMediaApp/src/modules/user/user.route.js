const express = require('express')
const userController = require('./user.controller.js')
const {verifyToken} = require('../../middlewares/user.js')

const router = express.Router()

router.post('/signup',userController.signupUser)
router.post('/login',userController.loginUser)
router.get('/posts',verifyToken, userController.getPostsByUser)

module.exports=router