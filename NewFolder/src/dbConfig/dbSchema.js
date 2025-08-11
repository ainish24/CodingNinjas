const { type } = require('express/lib/response')
const mongoose = require('mongoose')

const Users = mongoose.Schema({
    username: String,
    password: String
})

const Posts = mongoose.Schema({
    caption: String,
    imageUrl: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
})

const Likes = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
})

const Comments = mongoose.Schema({
    comment: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posts'
    }
})

const User = mongoose.model('Users', Users)
const Post = mongoose.model('Posts', Posts)
const Like = mongoose.model('Likes', Likes)
const Comment = mongoose.model('Comments', Comments)

module.exports = {
    User,
    Post,
    Like,
    Comment
}