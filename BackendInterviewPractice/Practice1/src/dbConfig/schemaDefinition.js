import mongoose from 'mongoose'

const Students = mongoose.Schema({
    name:String,
    score:Number
})

export const Student = mongoose.model("Students", Students)