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

// const updatePost=async (req,res)=>{
//     try {
//         const {email, password}=req.body
//         const user=await userRepository.findUserByEmail(email)
//         if(!user){
//             return res.status(401).json({
//                 status:false,
//                 message:'User with given email does not exist'
//             })
//         }
//         const doesPasswordMatch=await bcrypt.compare(password,user.password)

//         if(!doesPasswordMatch){
//             return res.status(401).json({
//                 status:false,
//                 message:'Invalid credentials'
//             })
//         }

//         const token=jwt.sign(user,process.env.JWT_PRIVATE_KEY,{expiresIn:'15m'})
//         res.cookie('token',token,{maxAge:15*60*1000})
//         res.json({
//             status:true,
//             message:`User ${user.name} Logged In Successfully`
//         })
//     } catch (error) {
//         res.status(500).json({
//             success:false,
//             message:'Something went wrong!'
//         })
//     }
// }

module.exports={getPosts, addPost}