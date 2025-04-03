const express = require('express')
const postController = require('./post.controller.js')
const {verifyToken} = require('../../middlewares/user.js')

const router = express.Router()

router.use(verifyToken)

router.get('/',postController.getPosts)
router.post('/',postController.addPost)
router.patch('/:id',postController.updatePost)
router.delete('/:id',postController.deletePost)

module.exports=router