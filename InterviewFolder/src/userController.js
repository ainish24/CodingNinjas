const bcrypt=require('bcrypt')
const {userModel} = require('./db.js')

const userController = async (req,res)=>{
 try {
    const {name, email, password} = req.body
    const hashedPassword=await bcrypt.hash(password,10)
    const user={
        name,email,password:hashedPassword
    }
    await userModel.create(user)
    res.status(201).json({
        status:"Success",
        data:user
    })
 } catch (error) {
    console.log("Internal error occured: ", error)
    res.json({
        status:"Error",
        message:error.message
    })
 }   
}

module.exports={
    userController
}