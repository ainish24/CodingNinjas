const {ObjectId}=require('mongodb')
const {getDatabase}=require('../../config/db.js')
const db=getDatabase()

const createComment=async (newComment)=>{
    try {
        await db.collection('comments').insertOne(newComment)
    } catch (error) {
     console.log('Error creating comment ',error)
     throw error
    }
}

const updateComment=async (commentId, updatedComment)=>{
    try {
        const _id= ObjectId.createFromHexString(commentId)
        await db.collection('comments').updateOne({_id},{$set:updatedComment})
    } catch (error) {
     console.log('Something went wrong while updating comment. ',error)
     throw error
    }
}

const deleteComment=async (commentId)=>{
    try {
        const _id= ObjectId.createFromHexString(commentId)
        await db.collection('comments').deleteOne({_id})
    } catch (error) {
     console.log('Something went wrong while deleting comment. ',error)
     throw error
    }
}

const getCommentById=async(commentId)=>{
    try {
        const _id= ObjectId.createFromHexString(commentId)
        const result=await db.collection('comments').findOne({_id})
        return result
    } catch (error) {
     console.log('Error creating comment ',error)
     throw error
    }
}

const getPostComments=async (postId)=>{
    try {
        const result = await db.collection('comments').find({postId}).toArray()
        return result
    } catch (error) {
     console.log('Error getting comments ',error)
     throw error
    }
}


module.exports={
    createComment,
    updateComment,
    deleteComment,
    getCommentById,
    getPostComments
}