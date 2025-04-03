const express = require('express')
const commentController = require('./comment.controller.js')
const {verifyToken} = require('../../middlewares/user.js')

const router = express.Router()
router.use(verifyToken)

router.post('/',commentController.addComment)
router.patch('/:id',commentController.updateComment)
router.delete('/:id',commentController.deleteComment)

module.exports=router