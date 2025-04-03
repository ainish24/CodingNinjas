const {getDatabase}=require('../../config/db.js')
const {ObjectId}=require('mongodb')
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


const updatePost = async (postId, newData) => {
    try {
        if (!ObjectId.isValid(postId)) {
            throw new Error("Invalid postId");
        }
        const objectId = ObjectId.createFromHexString(postId);
        const result = await db.collection('posts').updateOne(
            { _id: objectId },
            { $set: newData }
        );
        if (result.matchedCount === 0) {
            throw new Error("Post not found");
        }
        return result;
    } catch (error) {
        console.error("Error updating post:", error);
        throw error;
    }
};

const deletPost=async (postId)=>{
    try {
        const objectId=ObjectId.createFromHexString(postId)
        const result = await db.collection('posts').deleteOne({_id:objectId})
        return result;
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
}

const getPostsByUser=async (userId)=>{
    try{
    const result = await db.collection('posts').find({userId}).toArray()
    return result
    }catch(error){
        console.error("Error fetching posts by ID:", error);
        throw error;
    }
}

module.exports={
    getAllPosts,
    createPost,
    updatePost,
    deletPost,
    getPostsByUser
}