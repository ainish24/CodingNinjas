import * as recruiterModel from "../models/recruiterModel.js"
import * as jobModel from "../models/jobModel.js"

const onRender=(req,res)=>{
    if(req.session.user){
        res.render('landingPage',{...req.session.user,isExist:true})
    }else{
        const user={name:"Recruiters"}
        res.render('landingPage',{...user, isExist:false})
    }
}

const register=(req,res)=>{
    recruiterModel.addRecruiter(req.body)
    res.redirect("/login")
}

const login=(req,res)=>{
    const isExist=recruiterModel.login(req.body);
    if(isExist){
        req.session.user={...isExist}
        res.redirect("/jobs")
    }else{
        res.send("login failed")
    }
}
const displayLogin=(req,res)=>{
    res.render("login")
}
const logout =(req,res)=>{
    req.session.destroy()
    res.redirect("/login")
}
const getJobs=(req,res)=>{
    const jobs=jobModel.getJobs()
    res.render("jobsPage",{jobs})
}
const viewDetails=(req,res)=>{
    const jobId=req.params.id
    const job=jobModel.findJob(jobId)
    const isLoggedIn = req.session.user ? true : false
    res.render("jobDetails",{isLoggedIn:true,job})
}
const getPostJob=(req,res)=>{
    res.render("postJob")
}
const postJob=(req,res)=>{
    const input=req.body
    const now=new Date()
    const postedOn=now.toLocaleString("en-us",{hour12:true})
    const newJobDetails={...input,applicants:[],postedOn}
    jobModel.addNewJob(newJobDetails)
    res.redirect("/jobs")
}
const applyJob=(req,res)=>{
    const inputDetails={...req.body}
    const resumeLink=`/uploads/${encodeURIComponent(req.file.filename)}`
    jobModel.addApplicant(req.params.id,{...inputDetails,resumeLink})
    res.redirect("/jobs")
}
const viewApplicants=(req,res)=>{
    const applicants=jobModel.getApplicants(req.params.id)
    res.render("applicants",{applicants})
}
const viewEditJob=(req,res)=>{
    const jobId=req.params.id
    const job=jobModel.findJob(jobId)
    res.render("updateJob",{job})
}
const editJob=(req,res)=>{
    const jobId=req.params.id
    const updatedJob=req.body
    jobModel.updateJob(jobId,updatedJob)
    const jobs=jobModel.getJobs()
    res.render("jobsPage",{jobs})
}
const deleteJob=(req,res)=>{
    const jid=req.params.id
    jobModel.deleteJob(jid)
    const jobs=jobModel.getJobs()
    res.render("jobsPage",{jobs})
}



export {    
    onRender,
    register,
    login,
    displayLogin,
    logout,
    getJobs,
    viewDetails,
    getPostJob,
    postJob,
    applyJob,
    viewApplicants,
    viewEditJob,
    editJob,
    deleteJob
}