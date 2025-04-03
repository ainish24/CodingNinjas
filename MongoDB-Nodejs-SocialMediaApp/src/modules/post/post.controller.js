const postRepository = require('./post.repository.js')
const jwt = require('jsonwebtoken')
const bcrypt=require('bcrypt')

const getPosts=async (req,res)=>{
    try {
        const posts=await postRepository.getAllPosts()
        res.json({
            status:true,
            data:posts
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Something went wrong!'
        })
    }
}


const addPost=async (req,res)=>{
    try {
        const {imageURL,caption}=req.body

        const newPost={
            userId:req.user._id,imageURL,caption
        }
        await postRepository.createPost(newPost)
        res.json({
            status:true,
            message:`Post created Successfully`
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Something went wrong!'
        })
    }
}

const updatePost=async (req,res)=>{
    try {
        const newData=req.body
        const postId=req.params.id
        await postRepository.updatePost(postId, newData)
        return res.json({
            success:true,
            message:'Post updated successfully'
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success:false,
            message:'Something went wrong'
        })
    }
}

const deletePost=async (req,res)=>{
    try{
    const postId=req.params.id
    const result=await postRepository.deletPost(postId)
    if (result.deletedCount === 0) {
        throw new Error("Post not found");
    }
    return res.json({
        success:true,
        message:'Post deleted successfully'
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
    getPosts, 
    addPost,
    updatePost,
    deletePost
}