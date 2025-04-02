const {getDatabase}=require('../../config/db.js')
const db=getDatabase()

const getAllPosts=async (newUser)=>{
    try {
        const result = await db.collection('posts').find().toArray()
        return result
    } catch (error) {
     console.log('Error fetching posts ',error)
     throw error
    }
}

const createPost=async (newPost)=>{
    try {
        await db.collection('posts').insertOne(newPost)
    } catch (error) {
     console.log('Error creating post ',error)
     throw error
    }
}


module.exports={
    getAllPosts,
    createPost
}