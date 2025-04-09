// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";
export const jobSchema = new mongoose.Schema({
  // Write your code here
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    salary: { type: Number, required: true, min: 0 },
    applicants: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }]
});
