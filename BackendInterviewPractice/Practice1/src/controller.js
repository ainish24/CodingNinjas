import { Student } from "./dbConfig/schemaDefinition.js"
const postController=async (req,res)=>{
    try {
        const raw = req.body.students
        await Student.deleteMany()
        await Student.insertMany(raw)
        const retrievedData= await Student.aggregate([
            {$sort:{"score":-1, "name":1}},
            {$project:{"name":1,"_id":0}}
        ])
        const processedData=retrievedData.map(data=>(data.name))
        console.log(processedData)
        res.status(200).json({
            success:200,
            data:processedData
        })
    } catch (error) {
        res.status(400).json({
            status:400,
            message:`Error ${error}`
        })
    }
}

export default {postController}