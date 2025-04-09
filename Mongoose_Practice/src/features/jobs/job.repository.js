// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";
import { jobSchema } from "./schema/newJob.schema.js";
import { applyJobSchema } from "./schema/applyJob.schema.js";
const newJobModel = mongoose.model('Job',jobSchema)
const applyJobModel = mongoose.model('JobApplicants',applyJobSchema)
export const createNewJob = async (job) => {
  // Write your code here
  try {
    const newJob=await newJobModel.create(job)
    return newJob
  } catch (error) {
    console.log(error.message)
  }
};

export const applyJobRepo = async (jobId, userId) => {
  // Write your code here
  try {
    const job=await newJobModel.findById(jobId)
    if(!job.applicants.includes(userId)){
      job.applicants.push(userId)
      await job.save()
    }else{
      throw new Error("User has already applied for this job")
    }
    await applyJobModel.create({jobId,userId})
    return job
  } catch (error) {
    console.log(error.message)
  }
};
export const findJobRepo = async (_id) => {
  // Write your code here
  const job = await newJobModel.findById(_id)
  return job
};
