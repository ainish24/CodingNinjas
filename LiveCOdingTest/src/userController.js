const userModel=require('../schema.js')

// const signup=async (req,res)=>{
//     const data = req.body
//     await userModel.create(data);
// }

const comment=async (req,res)=>{
    const data = req.body;
    const createdData= await userModel.create(data)
    res.status(200).json({
        success:true,
        data:createdData
    })
}


module.exports={signup,comment}