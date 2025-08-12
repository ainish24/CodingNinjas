const {User,Post,Like,Comment} = require('../dbConfig/dbSchema.js')

const detailController = async(req,res)=>{
    try {
        const {username}= req.body
        const foundUser=await User.findOne({email:username})
        // const userPosts = await Post.aggregate([{$match:{user:foundUser._id}} ,{$project:{_id:0,postId:"$_id", userId:"$user"}}])
        const userPosts = await Post.aggregate([{$match:{user:foundUser._id}}])
        console.log(userPosts)
        let details =[]
        res.status(200).json({
            status:200,
            message:"Operation Successfull"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status:500,
            message:"Error on our end.."
        })
    }
}

module.exports={detailController}