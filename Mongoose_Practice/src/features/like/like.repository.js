// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";
import { likeSchema } from "./like.schema.js";
const likeModel=mongoose.model('like',likeSchema)
export const likeRepo = async (user_id, job_id, model) => {
  // Write your code here
  const newLike=await likeModel.create({user:user_id,likeable:job_id,on_model:model})
  return newLike
};
export const getLikesRepo = async (id, on_model) => {
  const like = await likeModel.findOne({ likeable: id, on_model })
      .populate({
          path: "user",
          select: "-password -__v"
      })
      .populate({
          path: "likeable",
          model: on_model,
          populate: { path: "applicants", select: "-password -__v" }
      });

  if (!like) return null;

  return like;
};
