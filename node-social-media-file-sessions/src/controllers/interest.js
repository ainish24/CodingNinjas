const interestModel=require('../models/interest')
const {validationResult}=require('express-validator')

const displayInterestPage=(req,res)=>{
    const interests=interestModel.getAll()
    res.render('interest',interests)
}
const fetchInterests=(req,res)=>{
    const interests=interestModel.getAll()
    res.json(interests)
}

const createInterest=(req,res)=>{
    const {name,imageURL}=req.body
    const newInterest={name, imageURL}
    interestModel.add(newInterest)
    res.redirect('/')
}


module.exports={
    displayInterestPage,
    fetchInterests,
    createInterest
}