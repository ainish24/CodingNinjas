const commentRepository = require('./comment.repository.js')
const postRepository=require('../post/post.repository.js')

const addComment=async (req,res)=>{
    try {
        const {postId, comment}=req.body

        const newComment={
            userId:req.user._id,postId,comment
        }
        await commentRepository.createComment(newComment)
        res.json({
            status:true,
            message:`Comment created Successfully`
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Something went wrong!'
        })
    }
}

const updateComment=async (req,res)=>{
    try {
        const commentId=req.params.id
        const {comment}=req.body
        const content = await commentRepository.getCommentById(commentId)
        if(!content){
            return res.status(404).json({
                status:false,
                message:"Comment not found"
            })
        }
        const updatedComment={...content}
        updatedComment.comment=comment
        await commentRepository.updateComment(commentId, updatedComment)
        return res.json({
            success:true,
            message:'Comment updated successfully'
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success:false,
            message:'Something went wrong'
        })
    }
}

const deleteComment=async (req,res)=>{
    try{
    const commentId=req.params.id
    const comment=await commentRepository.getCommentById(commentId)
    if (!comment) {
        return res.status(404).json({
            status:false,
            message:"Comment not found"
        })
    }
    await commentRepository.deleteComment(commentId)
    return res.json({
        success:true,
        message:'Comment deleted successfully'
    })
}catch(error) {
    console.log(error)
    return res.json({
        success:false,
        message:'Something went wrong'
    })
}
}

module.exports={
    addComment,
    updateComment,
    deleteComment
}